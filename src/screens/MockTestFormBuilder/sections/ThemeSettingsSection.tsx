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
  { label: "Header",   font: "Roboto", size: "24" },
  { label: "Question", font: "Roboto", size: "12" },
  { label: "Text",     font: "Roboto", size: "10" },
];

const headerOptions = [
  {
    label: "Image Uploaded",
    icon:  "https://c.animaapp.com/mooa01hs93Tlx5/img/material-symbols-image-outline.svg",
  },
];

const colorRows = [
  [
    { color: "#e53935" },
    { color: "#7b1fa2" },
    { color: "#3949ab" },
    { color: "#4285f4" },
    { color: "#1e88e5" },
    { color: "#17b8d6" },
  ],
  [
    { color: "#ff5722" },
    { color: "#ff9800" },
    { color: "#26a69a" },
    { color: "#4caf50" },
    { color: "#607d8b" },
    { color: "#9e9e9e" },
  ],
];

const backgroundColors = [
  { color: "#dfe9d8", selected: true },
  { color: "#c8dfbd" },
  { color: "#c7e0c4" },
  { color: "#f5f5f5" },
];

export const ThemeSettingsSection = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-[414px]">
      <p className="sr-only">
        Theme settings panel with text style, header, color, and background controls.
      </p>
      <Card className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-none">
        <header className="flex items-center justify-between border-b border-[#595959] px-[14px] py-[11px]">
          <div className="flex items-center gap-2.5">
            <img
              className="h-5 w-5 shrink-0"
              alt="Theme palette"
              src="https://c.animaapp.com/mooa01hs93Tlx5/img/material-symbols-palette-outline.svg"
            />
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-black">
              Theme
            </h2>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="h-auto min-w-0 p-0 hover:bg-transparent"
            aria-label="Close theme settings"
          >
            <img
              className="h-8 w-8"
              alt="Close"
              src="https://c.animaapp.com/mooa01hs93Tlx5/img/hugeicons-cancel-01.svg"
            />
          </Button>
        </header>
        <CardContent className="px-4 pb-8 pt-3">
          <div className="space-y-5">
            {/* Text Style */}
            <section aria-labelledby="theme-text-style">
              <h3
                id="theme-text-style"
                className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#424242]"
              >
                Text Style
              </h3>
              <div className="mt-3 space-y-4">
                {textStyleFields.map((field) => (
                  <div key={field.label} className="grid grid-cols-[1fr_68px] gap-[13px]">
                    <div className="space-y-[5px]">
                      <label className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#202124]">
                        {field.label}
                      </label>
                      <Select defaultValue={field.font}>
                        <SelectTrigger className="h-[40px] rounded-[6px] border border-[#e5e7eb] bg-white px-3 shadow-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#333] focus:ring-0">
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
                      <div className="h-6" aria-hidden="true" />
                      <Select defaultValue={field.size}>
                        <SelectTrigger className="h-[40px] rounded-[6px] border border-[#e5e7eb] bg-white px-3 shadow-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#333] focus:ring-0">
                          <SelectValue placeholder={field.size} />
                        </SelectTrigger>
                        <SelectContent>
                          {["8","10","12","14","16","18","20","24","28","32"].map((s) => (
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

            {/* Header */}
            <section aria-labelledby="theme-header">
              <h3
                id="theme-header"
                className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#424242]"
              >
                Header
              </h3>
              <div className="mt-3 max-w-[280px]">
                <Select defaultValue={headerOptions[0].label}>
                  <SelectTrigger className="h-[40px] rounded-[6px] border border-[#e5e7eb] bg-white px-3 shadow-none focus:ring-0">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <img className="h-4 w-4 shrink-0" alt="Image" src={headerOptions[0].icon} />
                      <SelectValue
                        placeholder={headerOptions[0].label}
                        className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#333]"
                      />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {headerOptions.map((option) => (
                      <SelectItem key={option.label} value={option.label}>{option.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </section>

            <Separator className="bg-[#d9d9d9]" />

            {/* Color */}
            <section aria-labelledby="theme-color">
              <h3
                id="theme-color"
                className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#424242]"
              >
                Color
              </h3>
              <div className="mt-5 space-y-3">
                {colorRows.map((row, rowIndex) => (
                  <div key={`color-row-${rowIndex}`} className="flex items-center gap-2">
                    {row.map((item, itemIndex) => (
                      <button
                        key={`color-${rowIndex}-${itemIndex}`}
                        type="button"
                        aria-label={`Color option ${rowIndex + 1}-${itemIndex + 1}`}
                        className="h-5 w-5 rounded-full transition-transform duration-150 hover:scale-110 active:scale-95"
                        style={{ backgroundColor: item.color }}
                      />
                    ))}
                  </div>
                ))}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Selected color"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-[#43b02a] transition-transform duration-150 hover:scale-110"
                  >
                    <span className="[font-family:'Roboto',Helvetica] text-sm leading-none text-white">✓</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Add color"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-[#eeeeee] text-[#7a7a7a] transition-all duration-150 hover:bg-[#e0e0e0] hover:scale-110"
                  >
                    <span className="[font-family:'Roboto',Helvetica] text-sm leading-none">+</span>
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <h4 className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#202124]">
                  Background
                </h4>
                <div className="flex items-center gap-2">
                  {backgroundColors.map((item, index) => (
                    <button
                      key={`background-${index}`}
                      type="button"
                      aria-label={`Background option ${index + 1}`}
                      className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-150 hover:scale-110 ${
                        item.selected ? "" : "border border-[#d9d9d9]"
                      }`}
                      style={{ backgroundColor: item.color }}
                    >
                      {item.selected ? (
                        <span className="[font-family:'Roboto',Helvetica] text-xs leading-none text-[#4f684d]">✓</span>
                      ) : null}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
