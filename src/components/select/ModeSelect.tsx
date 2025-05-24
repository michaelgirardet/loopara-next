import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Portal,
} from "@headlessui/react";
import { Music3, Piano } from "lucide-react";
import { useRef } from "react";

const MODES = [
  { label: "Arpèges", value: "arpeggios" },
  { label: "Accords", value: "chords" },
  { label: "Mélodie", value: "melody" },
  { label: "Batterie", value: "drums" },
];

interface ModeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ModeSelect({ value, onChange }: ModeSelectProps) {
  const selected = MODES.find((m) => m.value === value)?.label ?? value;
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex flex-col gap-2 font-bold">
      <div className="flex items-center justify-center gap-5 text-center text-[#FEFEFE]">
        {selected === "Accords" ? <Piano /> : <Music3 />}
        <label htmlFor="mode-select" className="text-[#FEFEFE]">
          Mode :
        </label>
      </div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative block text-center">
            <ListboxButton
              id="mode-select"
              ref={buttonRef}
              className="h-14 w-60 cursor-pointer rounded-md bg-[#030504]/90 text-center font-medium text-[#FEFEFE] transition duration-300 ease-in hover:bg-zinc-800"
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
                  {MODES.map((mode) => (
                    <ListboxOption
                      key={mode.value}
                      value={mode.value}
                      className={({ active }) =>
                        `flex cursor-pointer rounded-md px-4 py-2 text-center text-xl select-none hover:bg-[#E2768A] ${
                          active
                            ? "bg-[#030504]/50 text-[#FEFEFE] backdrop-blur-3xl"
                            : "text-[#FEFEFE]"
                        }`
                      }
                    >
                      {mode.label}
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
