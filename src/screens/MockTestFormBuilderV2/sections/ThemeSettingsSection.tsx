import { CheckIcon, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Separator } from "../../../components/ui/separator";

const textStyleFields = [
  { label: "Header", font: "Roboto", size: "24" },
  { label: "Question", font: "Roboto", size: "12" },
  { label: "Text", font: "Roboto", size: "10" },
];

const colorRows = [
  [
    "bg-[#E04646]",
    "bg-[#7E3AF2]",
    "bg-[#3F51B5]",
    "bg-[#4A7AE8]",
    "bg-[#22A7F0]",
    "bg-[#17B8C8]",
  ],
  [
    "bg-[#FF6B1A]",
    "bg-[#FFB000]",
    "bg-[#14B8A6]",
    "bg-[#60B95D]",
    "bg-[#6D8FA6]",
    "bg-[#A3A3A3]",
  ],
];

const backgroundColors = [
  { className: "bg-[#E7F0E1]", label: "Background option 1" },
  { className: "bg-[#C9DDBB]", label: "Background option 2" },
  { className: "bg-[#C2DCBB]", label: "Background option 3" },
  { className: "bg-[#F1F1F1]", label: "Background option 4" },
];

export const ThemeSettingsSection = (): JSX.Element => {
  const [selectedBackground, setSelectedBackground] = useState(0);
  const [selectedColor, setSelectedColor] = useState("custom");

  return (
    <aside className="w-full max-w-[414px] animate-fade-up">
      <Card className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-none transition-shadow duration-300 hover:shadow-[0px_4px_16px_#00000012]">
        <CardContent className="p-0">
          <header className="flex items-center justify-between border-b border-[#595959] px-[14px] py-3">
            <div className="flex items-center gap-2.5">
              <img
                className="h-4 w-4"
                alt="Material symbols"
                src="https://c.animaapp.com/moqp98as9j0Smr/img/material-symbols-palette-outline.svg"
              />
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-black">
                Theme
              </h2>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-auto rounded-md p-1 text-[#595959] transition-colors duration-200 hover:bg-transparent hover:text-black"
              aria-label="Close theme settings"
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </header>
          <section className="px-4 pb-8 pt-3">
            <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
              Text Style
            </h3>
            <div className="mt-3 space-y-[10px]">
              {textStyleFields.map((field) => (
                <div
                  key={field.label}
                  className="grid grid-cols-[1fr_68px] gap-[13px]"
                >
                  <div className="space-y-[5px]">
                    <label className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-heading">
                      {field.label}
                    </label>
                    <Select defaultValue={field.font}>
                      <SelectTrigger className="h-[52px] rounded-[10px] border border-[#d9d9d9] bg-white px-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                        <SelectValue placeholder={field.font} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Open Sans">Open Sans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-[5px]">
                    <span className="block h-6" aria-hidden="true" />
                    <Select defaultValue={field.size}>
                      <SelectTrigger className="h-[52px] rounded-[10px] border border-[#d9d9d9] bg-white px-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                        <SelectValue placeholder={field.size} />
                      </SelectTrigger>
                      <SelectContent>
                        {["10", "12", "14", "16", "18", "20", "24", "28", "32"].map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4 bg-[#d9d9d9]" />
            <section>
              <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                Header
              </h3>
              <div className="mt-3 max-w-[280px]">
                <Select defaultValue="Image Uploaded">
                  <SelectTrigger className="h-[52px] rounded-[10px] border border-[#d9d9d9] bg-white px-2.5 shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <img
                        className="h-6 w-6 shrink-0"
                        alt="Material symbols"
                        src="https://c.animaapp.com/moqp98as9j0Smr/img/material-symbols-image-outline.svg"
                      />
                      <SelectValue
                        placeholder="Image Uploaded"
                        className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title"
                      />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Image Uploaded">Image Uploaded</SelectItem>
                    <SelectItem value="Solid Color">Solid Color</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </section>
            <Separator className="my-5 bg-[#d9d9d9]" />
            <section>
              <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                Color
              </h3>
              <div className="mt-6 space-y-3">
                {colorRows.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="flex items-center gap-[9px]"
                  >
                    {row.map((colorClass, colorIndex) => {
                      const key = `${rowIndex}-${colorIndex}`;

                      return (
                        <button
                          key={key}
                          type="button"
                          aria-label={`Color option ${rowIndex + 1}-${colorIndex + 1}`}
                          className={`h-5 w-5 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95 ${colorClass} ${
                            selectedColor === key ? "ring-2 ring-[#0957a1] ring-offset-2" : ""
                          }`}
                          onClick={() => setSelectedColor(key)}
                        />
                      );
                    })}
                  </div>
                ))}

                <div className="flex items-center gap-[9px]">
                  <button
                    type="button"
                    aria-label="Selected custom color"
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-[#44AF35] text-white transition-transform duration-200 hover:scale-110 ${
                      selectedColor === "custom" ? "ring-2 ring-[#0957a1] ring-offset-2" : ""
                    }`}
                    onClick={() => setSelectedColor("custom")}
                  >
                    <CheckIcon className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Add color"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E5E5E5] text-[#7A7A7A] transition-all duration-200 hover:scale-110 hover:bg-[#d9d9d9]"
                  >
                    <PlusIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </section>
            <section className="mt-5">
              <div className="flex items-center gap-4">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-heading">
                  Background
                </h3>
                <div className="flex items-center gap-3">
                  {backgroundColors.map((item, index) => (
                    <button
                      key={item.label}
                      type="button"
                      aria-label={item.label}
                      className={`flex h-6 w-6 items-center justify-center rounded-full border transition-transform duration-200 hover:scale-110 ${
                        selectedBackground === index
                          ? "border-[#d6dfd0]"
                          : "border-transparent"
                      } ${item.className}`}
                      onClick={() => setSelectedBackground(index)}
                    >
                      {selectedBackground === index ? (
                        <CheckIcon className="h-4 w-4 text-[#52624C]" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </CardContent>
      </Card>
    </aside>
  );
};
