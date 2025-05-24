import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { Portal } from "@headlessui/react";
import { Music2 } from "lucide-react";

const NOTES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

interface RootNoteSelectProps {
  value: string;
  onChange: (note: string) => void;
}

export default function RootNoteSelect({
  value,
  onChange,
}: RootNoteSelectProps) {
  return (
    <div className="flex flex-col gap-2 font-bold">
      <div className="flex items-center justify-center gap-5 text-center text-[#FEFEFE]">
        <Music2 />
        <label htmlFor="note-select" className="text-[#FEFEFE]">
          Note racine
        </label>
      </div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative block text-center">
            <ListboxButton
              id="note-select"
              className="h-14 w-60 cursor-pointer rounded-md bg-[#030504]/90 text-center font-medium text-[#FEFEFE] transition duration-300 ease-in hover:bg-zinc-800"
            >
              {value}
            </ListboxButton>

            {open && (
              <Portal>
                <ListboxOptions
                  className="fixed z-[1000] mt-1 max-h-80 w-60 overflow-y-scroll rounded-md border border-zinc-600 bg-[#030504] shadow-xl"
                  style={{
                    top: `${document.getElementById("note-select")?.getBoundingClientRect().bottom}px`,
                    left: `${document.getElementById("note-select")?.getBoundingClientRect().left}px`,
                  }}
                >
                  {NOTES.map((note) => (
                    <ListboxOption
                      key={note}
                      value={note}
                      className={({ active }) =>
                        `flex cursor-pointer rounded-md px-4 py-2 text-center text-xl uppercase select-none hover:bg-[#E2768A] ${
                          active
                            ? "bg-[#030504]/50 text-[#FEFEFE] backdrop-blur-3xl"
                            : "text-[#FEFEFE]"
                        }`
                      }
                    >
                      {note}
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
