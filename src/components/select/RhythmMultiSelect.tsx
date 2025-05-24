import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Portal,
} from "@headlessui/react";
import { Guitar } from "lucide-react";
import { Fragment, useRef, useState, useEffect } from "react";
import { useCallback } from "react";

const RHYTHM_OPTIONS = [
  { label: "Croche", value: "8" },
  { label: "Noire", value: "4" },
  { label: "Blanche", value: "2" },
];

interface RhythmMultiSelectProps {
  value: string[];
  onChange: (selected: string[]) => void;
}

export default function RhythmMultiSelect({
  value,
  onChange,
}: RhythmMultiSelectProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState<{
    top: number;
    left: number;
    width: number;
  } | null>(null);

  // Met à jour la position du dropdown à l'ouverture ou au resize/scroll
  const updateDropdownPosition = useCallback(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom, left: rect.left, width: rect.width });
    }
  }, []);

  // Met à jour la position à l'ouverture de la dropdown
  useEffect(() => {
    updateDropdownPosition();
    window.addEventListener("scroll", updateDropdownPosition, true);
    window.addEventListener("resize", updateDropdownPosition);
    return () => {
      window.removeEventListener("scroll", updateDropdownPosition, true);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [updateDropdownPosition]);

  // Met à jour la position chaque fois qu'on ouvre la dropdown
  const handleButtonClick = () => {
    updateDropdownPosition();
  };

  const toggleValue = (val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((v) => v !== val));
    } else {
      onChange([...value, val]);
    }
  };

  return (
    <div className="flex flex-col gap-2 font-bold">
      <div className="flex items-center justify-center gap-5 text-center text-[#FEFEFE]">
        <Guitar />
        <label htmlFor="rhythm-durations" className="text-[#FEFEFE]">
          Durées rythmiques :
        </label>
      </div>
      <Listbox
        value={value}
        onChange={(selected) => {
          if (Array.isArray(selected)) {
            onChange(selected);
          }
        }}
        multiple
      >
        {({ open }) => (
          <div className="relative z-auto">
            <ListboxButton
              id="rhythm-durations"
              ref={buttonRef}
              className="h-14 w-60 cursor-pointer rounded-md bg-[#030504]/90 text-center font-medium text-[#FEFEFE] transition duration-300 ease-in hover:bg-zinc-800"
              onClick={handleButtonClick}
            >
              {value.length > 0
                ? value
                    .map(
                      (v) =>
                        RHYTHM_OPTIONS.find((opt) => opt.value === v)?.label ||
                        v,
                    )
                    .join(", ")
                : "Choisir des durées..."}
            </ListboxButton>

            {open && dropdownPos && (
              <Portal>
                <ListboxOptions
                  className="fixed z-[1000] mt-1 max-h-80 w-60 overflow-y-scroll rounded-md border border-zinc-600 bg-[#030504] shadow-xl"
                  style={{
                    top: `${dropdownPos.top}px`,
                    left: `${dropdownPos.left}px`,
                    width: `${dropdownPos.width}px`,
                  }}
                >
                  {RHYTHM_OPTIONS.map((option) => (
                    <ListboxOption
                      key={option.value}
                      value={option.value}
                      as={Fragment}
                    >
                      {({ active }) => (
                        <li
                          onClick={() => toggleValue(option.value)}
                          onKeyDown={() => toggleValue(option.value)}
                          className={`flex cursor-pointer list-none gap-2 rounded-md px-4 py-2 text-center text-xl select-none hover:bg-[#E2768A] ${
                            active
                              ? "bg-[#030504]/50 text-[#FEFEFE] backdrop-blur-3xl"
                              : "text-[#FEFEFE]"
                          }`}
                        >
                          {option.label}
                          {value.includes(option.value) && <span>✓</span>}
                        </li>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Portal>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
}
