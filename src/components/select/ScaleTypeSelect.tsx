import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Portal } from "@headlessui/react";
import { Meh, Smile } from "lucide-react";
import { useRef } from "react";

const SCALE_TYPES = [
  { label: "Majeure", value: "major" },
  { label: "Mineure", value: "minor" },
];

interface ScaleTypeSelectProps {
  value: string;
  onChange: (value: "major" | "minor") => void;
}

export default function ScaleTypeSelect({ value, onChange }: ScaleTypeSelectProps) {
  const selected = SCALE_TYPES.find((s) => s.value === value)?.label ?? value;
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex flex-col gap-2 font-bold">
      <div className="flex items-center justify-center gap-5 text-center text-[#FEFEFE]">
        {" "}
        {selected === "Majeure" ? <Smile /> : <Meh />}
        <label htmlFor="scale-type" className="text-[#FEFEFE]">
          Type de gamme :
        </label>
      </div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative block text-center">
            <ListboxButton
              id="scale-type"
              ref={buttonRef}
              className="h-14 w-60 cursor-pointer rounded-md bg-[#030504] text-center font-medium text-[#FEFEFE] transition duration-300 ease-in hover:bg-zinc-800"
            >
              {selected}
            </ListboxButton>
            {open && (
              <Portal>
                <ListboxOptions
                  className="fixed z-[1000] mt-1 max-h-80 w-60 overflow-y-scroll rounded-md border border-zinc-600 bg-[#030504] shadow-xl"
                  style={{
                    top: buttonRef.current
                      ? `${buttonRef.current.getBoundingClientRect().bottom}px`
                      : "0px",
                    left: buttonRef.current
                      ? `${buttonRef.current.getBoundingClientRect().left}px`
                      : "0px",
                  }}
                >
                  {SCALE_TYPES.map((type) => (
                    <ListboxOption
                      key={type.value}
                      value={type.value}
                      className={({ active }) =>
                        `flex cursor-pointer select-none rounded-md px-4 py-2 text-center text-xl hover:bg-[#E2768A] ${
                          active
                            ? "bg-[#030504]/50 text-[#FEFEFE] backdrop-blur-3xl"
                            : "text-[#FEFEFE]"
                        }`
                      }
                    >
                      {type.label}
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
