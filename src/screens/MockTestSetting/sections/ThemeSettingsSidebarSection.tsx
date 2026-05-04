import { CheckIcon, ChevronDownIcon, PlusIcon, XIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const textStyleFields = [
  { label: "Header", font: "Roboto", size: "24" },
  { label: "Question", font: "Roboto", size: "12" },
  { label: "Text", font: "Roboto", size: "10" },
];

const colorOptions = [
  "#b73b2b",
  "#6f3ad5",
  "#3d5ad6",
  "#3b73cc",
  "#157bb9",
  "#0f8c99",
  "#d76316",
  "#ba8407",
  "#1d8d72",
  "#2f8b52",
  "#415b74",
  "#7a7a7a",
];

const backgroundOptions = [
  { color: "#b8c6ae", selected: true },
  { color: "#b8c6ae" },
  { color: "#b8c6ae" },
  { color: "transparent", outlined: true },
];

export const ThemeSettingsSidebarSection = (): JSX.Element => {
  return (
    <>
      <p className="sr-only">
        I see a right-aligned theme settings sidebar with a compact header,
        grouped text style controls, a header image selector, color swatches,
        and background swatches. The panel is white, vertically structured, and
        uses thin dividers between sections.
      </p>
      <aside className="w-full max-w-[414px] self-end">
        <Card className="overflow-hidden rounded-[10px] border-0 bg-white shadow-none">
          <CardContent className="p-0">
            <header className="flex items-center justify-between border-b border-[#595959] px-[20px] py-[14px]">
              <div className="flex items-center gap-2.5">
                <img
                  className="h-6 w-6"
                  alt="Material symbols"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/material-symbols-palette-outline.svg"
                />
                <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-6 tracking-[0] text-black">
                  Theme
                </h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-auto rounded-full p-1 text-black hover:bg-transparent hover:text-black"
                aria-label="Close theme settings"
              >
                <XIcon className="h-5 w-5" />
              </Button>
            </header>
            <div className="flex flex-col px-8 pb-8 pt-7">
              <section className="flex flex-col">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                  Text Style
                </h3>
                <div className="mt-[19px] flex flex-col gap-2.5">
                  {textStyleFields.map((field) => (
                    <div
                      key={field.label}
                      className="grid grid-cols-[1fr_68px] gap-[13px]"
                    >
                      <div className="col-span-2">
                        <label className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-heading">
                          {field.label}
                        </label>
                      </div>
                      <Select defaultValue={field.font}>
                        <SelectTrigger
                          className="h-[52px] rounded-[10px] border border-input bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title shadow-none"
                          icon={ChevronDownIcon}
                        >
                          <SelectValue placeholder={field.font} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Roboto">Roboto</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select defaultValue={field.size}>
                        <SelectTrigger
                          className="h-[52px] rounded-[10px] border border-input bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title shadow-none"
                          icon={ChevronDownIcon}
                        >
                          <SelectValue placeholder={field.size} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={field.size}>
                            {field.size}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </section>
              <hr className="mt-5 h-px w-full border-0 bg-[#d9d9d9]" />
              <section className="mt-4 flex flex-col">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                  Header
                </h3>
                <div className="mt-[20px]">
                  <Select defaultValue="image-uploaded">
                    <SelectTrigger
                      className="flex h-[52px] w-full max-w-[280px] items-center gap-2.5 rounded-[10px] border border-input bg-white px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-title shadow-none"
                      icon={ChevronDownIcon}
                    >
                      <span className="flex items-center gap-2.5">
                        <img
                          className="h-6 w-6"
                          alt="Material symbols"
                          src="https://c.animaapp.com/moqt0jbqy3eJFd/img/material-symbols-image-outline.svg"
                        />
                        <SelectValue placeholder="Image Uploaded" />
                      </span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="image-uploaded">
                        Image Uploaded
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </section>
              <hr className="mt-[19px] h-px w-full border-0 bg-[#d9d9d9]" />
              <section className="mt-5 flex flex-col">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                  Color
                </h3>
                <div className="mt-4">
                  <div className="grid w-fit grid-cols-6 gap-x-[10px] gap-y-[10px]">
                    {colorOptions.map((color, index) => (
                      <button
                        key={color + index}
                        type="button"
                        className="h-6 w-6 rounded-full"
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2e7d32] text-white"
                      aria-label="Selected color"
                    >
                      <CheckIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ece8df] text-[#5f5f5f]"
                      aria-label="Add color"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>
              <section className="mt-6 flex flex-col">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-sub-heading">
                  Background
                </h3>
                <div className="mt-4 flex items-center gap-[10px]">
                  {backgroundOptions.map((option, index) => (
                    <button
                      key={`${option.color}-${index}`}
                      type="button"
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        option.outlined
                          ? "border border-[#d6d6d6] bg-transparent"
                          : ""
                      }`}
                      style={
                        !option.outlined
                          ? { backgroundColor: option.color }
                          : undefined
                      }
                      aria-label={`Background option ${index + 1}`}
                    >
                      {option.selected ? (
                        <CheckIcon className="h-4 w-4 text-[#2f5f2f]" />
                      ) : null}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </aside>
    </>
  );
};
