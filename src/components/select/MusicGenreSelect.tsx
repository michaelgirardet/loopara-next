import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Portal,
} from "@headlessui/react";
import { Music3 } from "lucide-react";

const GENRES = [
  { label: "Pop", value: "pop" },
  { label: "Lo-fi", value: "lofi" },
  { label: "House", value: "house" },
  { label: "Trap", value: "trap" },
  { label: "Hip-hop", value: "hiphop" },
  { label: "Techno", value: "techno" },
  { label: "Funk", value: "funk" },
  { label: "Dub", value: "dub" },
  { label: "Reggaeton", value: "reggaeton" },
];

interface MusicGenreSelectProps {
  value: string;
  onChange: (genre: string) => void;
}

export default function MusicGenreSelect({
  value,
  onChange,
}: MusicGenreSelectProps) {
  const selected = GENRES.find((g) => g.value === value)?.label ?? value;

  return (
    <div className="flex flex-col gap-2 items-center justify-center font-bold">
      <div className="flex items-center justify-center gap-5 text-center text-[#FEFEFE]">
        <Music3 />
        <label htmlFor="music-genre" className="text-[#FEFEFE]">
          Genre musical
        </label>
      </div>
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative z-auto">
            <ListboxButton
              id="music-genre"
              className="h-14 w-60 cursor-pointer rounded-md bg-[#030504]/90 text-center font-medium text-[#FEFEFE] transition duration-300 ease-in hover:bg-zinc-800"
            >
              {selected}
            </ListboxButton>

            {open && (
              <Portal>
                <ListboxOptions
                  className="fixed z-[1000] mt-1 max-h-80 w-60 overflow-y-scroll rounded-md border border-zinc-600 bg-[#030504] shadow-xl"
                  style={{
                    top: `${document.getElementById("music-genre")?.getBoundingClientRect().bottom}px`,
                    left: `${document.getElementById("music-genre")?.getBoundingClientRect().left}px`,
                  }}
                >
                  {GENRES.map((genre) => (
                    <ListboxOption
                      key={genre.value}
                      value={genre.value}
                      className={({ active }) =>
                        `flex cursor-pointer rounded-md px-4 py-2 text-center text-xl select-none hover:bg-[#E2768A] ${
                          active
                            ? "bg-[#030504]/50 text-[#FEFEFE] backdrop-blur-3xl"
                            : "text-[#FEFEFE]"
                        }`
                      }
                    >
                      {genre.label}
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
