import { CheckIcon, PlusIcon, XIcon } from "lucide-react";
import { useState, useCallback } from "react";
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

/** Text style field configuration */
interface TextStyleField {
  label: string;
  font: string;
  size: string;
}

const textStyleFields: TextStyleField[] = [
  { label: "Header", font: "Roboto", size: "24" },
  { label: "Question", font: "Roboto", size: "12" },
  { label: "Text", font: "Roboto", size: "10" },
];

const accentColorRows: string[][] = [
  ["#E74C3C", "#7E57C2", "#3F51B5", "#4A90E2", "#1DA1F2", "#1CB5C9"],
  ["#FF6A00", "#F5A623", "#26A69A", "#4CAF50", "#607D8B", "#9E9E9E"],
];

const backgroundColors = [
  { hex: "#E6F0E3", label: "Light green" },
  { hex: "#CFE2C8", label: "Medium green" },
  { hex: "#D5E8CF", label: "Soft green" },
  { hex: "#F2F2F2", label: "Light grey" },
];

const fontOptions = ["Roboto", "Inter", "Open Sans", "Lato", "Montserrat"];
const sizeOptions = ["8", "10", "12", "14", "16", "18", "20", "24", "28", "32", "36"];

export const FillFormThemeSection = (): JSX.Element => {
  const [selectedAccent, setSelectedAccent] = useState("#4CAF50");
  const [selectedBackground, setSelectedBackground] = useState("#E6F0E3");
  const [isOpen, setIsOpen] = useState(true);

  const handleAccentChange = useCallback((color: string) => {
    setSelectedAccent(color);
  }, []);

  const handleBackgroundChange = useCallback((color: string) => {
    setSelectedBackground(color);
  }, []);

  if (!isOpen) return <></>;

  return (
    <aside className="w-full max-w-[414px] animate-fade-up">
      <Card className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-none transition-shadow duration-300 hover:shadow-[0px_4px_16px_#00000012]">
        <CardContent className="p-0">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-[#595959] px-[14px] py-[10px]">
            <div className="flex items-center gap-2.5">
              <img
                className="h-6 w-6"
                alt="Theme palette"
                src="https://c.animaapp.com/moqqfoy3vJwvbZ/img/material-symbols-palette-outline.svg"
              />
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-black">
                Theme
              </h2>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full p-0 text-[#595959] transition-colors duration-200 hover:bg-transparent hover:text-black"
              aria-label="Close theme panel"
              onClick={() => setIsOpen(false)}
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </header>

          <section className="px-4 pb-6 pt-3">
            <div className="space-y-6">
              {/* ── Text Style ── */}
              <section>
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#4b5563]">
                  Text Style
                </h3>
                <div className="mt-3 space-y-4">
                  {textStyleFields.map((field) => (
                    <div
                      key={field.label}
                      className="grid grid-cols-[1fr_68px] gap-[13px]"
                    >
                      <div className="space-y-[5px]">
                        <label className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#111827]">
                          {field.label}
                        </label>
                        <Select defaultValue={field.font}>
                          <SelectTrigger className="h-[42px] rounded-[6px] border-[#e5e7eb] bg-white px-3 [font-family:'Roboto',Helvetica] text-base font-normal text-[#111827] shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                            <SelectValue placeholder={field.font} />
                          </SelectTrigger>
                          <SelectContent>
                            {fontOptions.map((f) => (
                              <SelectItem key={f} value={f}>{f}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-[5px]">
                        <div className="h-6" aria-hidden="true" />
                        <Select defaultValue={field.size}>
                          <SelectTrigger className="h-[42px] rounded-[6px] border-[#e5e7eb] bg-white px-3 [font-family:'Roboto',Helvetica] text-base font-normal text-[#111827] shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                            <SelectValue placeholder={field.size} />
                          </SelectTrigger>
                          <SelectContent>
                            {sizeOptions.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator className="bg-[#d9d9d9]" />

              {/* ── Header image ── */}
              <section>
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#4b5563]">
                  Header
                </h3>
                <div className="mt-3">
                  <Select defaultValue="Image Uploaded">
                    <SelectTrigger className="h-[42px] w-full rounded-[6px] border-[#e5e7eb] bg-white px-3 [font-family:'Roboto',Helvetica] text-base font-normal text-[#111827] shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <img
                          className="h-5 w-5 shrink-0"
                          alt="Image icon"
                          src="https://c.animaapp.com/moqqfoy3vJwvbZ/img/material-symbols-image-outline.svg"
                        />
                        <SelectValue placeholder="Image Uploaded" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Image Uploaded">Image Uploaded</SelectItem>
                      <SelectItem value="Solid Color">Solid Color</SelectItem>
                      <SelectItem value="None">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </section>

              <Separator className="bg-[#d9d9d9]" />

              {/* ── Color ── */}
              <section>
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#4b5563]">
                  Color
                </h3>
                <div className="mt-5 space-y-6">
                  {/* Accent color grid */}
                  <div className="space-y-2">
                    {accentColorRows.map((row, rowIndex) => (
                      <div
                        key={`accent-row-${rowIndex}`}
                        className="flex items-center gap-2"
                      >
                        {row.map((color) => {
                          const isSelected = selectedAccent === color;
                          return (
                            <button
                              key={color}
                              type="button"
                              onClick={() => handleAccentChange(color)}
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-black/5 transition-transform duration-200 hover:scale-110 active:scale-95"
                              style={{ backgroundColor: color }}
                              aria-label={`Select accent color ${color}`}
                              aria-pressed={isSelected}
                            >
                              {isSelected && (
                                <CheckIcon className="h-4 w-4 text-white" strokeWidth={3} />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ))}

                    {/* Selected + add custom */}
                    <div className="flex items-center gap-2 pt-0.5">
                      <button
                        type="button"
                        onClick={() => handleAccentChange(selectedAccent)}
                        className="flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: selectedAccent }}
                        aria-label="Selected accent color"
                        aria-pressed="true"
                      >
                        <CheckIcon className="h-4 w-4 text-white" strokeWidth={3} />
                      </button>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-6 w-6 rounded-full border-[#d9d9d9] p-0 text-[#6b7280] transition-all duration-200 hover:scale-110 hover:bg-transparent"
                        aria-label="Add custom color"
                      >
                        <PlusIcon className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Background colors */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#111827]">
                      Background
                    </span>
                    <div className="flex items-center gap-[10px]">
                      {backgroundColors.map((bg) => {
                        const isSelected = selectedBackground === bg.hex;
                        return (
                          <button
                            key={bg.hex}
                            type="button"
                            onClick={() => handleBackgroundChange(bg.hex)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#d9d9d9] transition-transform duration-200 hover:scale-110 active:scale-95"
                            style={{ backgroundColor: bg.hex }}
                            aria-label={bg.label}
                            aria-pressed={isSelected}
                          >
                            {isSelected && (
                              <CheckIcon className="h-4 w-4 text-[#3f4a3f]" strokeWidth={3} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </CardContent>
      </Card>
    </aside>
  );
};
