import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  MoreVerticalIcon,
  PilcrowIcon,
  Trash2Icon,
  UnderlineIcon,
} from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";

const shortAnswerFields = [
  { label: "Name",         required: true },
  { label: "Email",        required: true },
  { label: "Phone Number", required: true },
];

const multipleChoiceOptions = [
  { text: "Option 1",                     active: true  },
  { text: 'Add option or  add "Other"',   active: false },
];

export const FormBuilderCanvasSection = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-[902px]">
      <div className="flex w-full flex-col items-start gap-2.5">
        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-0">
            <div className="flex min-h-[234px] flex-col">
              <div className="flex items-start justify-between gap-4 px-4 pt-[18px]">
                <div className="flex min-w-0 flex-1 flex-col gap-[10px]">
                  <div className="flex h-[51px] w-full max-w-[490px] items-center border-b border-gray-600 bg-[#4b55631a] px-2.5">
                    <Input
                      defaultValue="Untitled Title"
                      aria-label="Form title"
                      className="h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 text-gray-600 placeholder:text-gray-600"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[#202124]">
                    {[
                      { Icon: BoldIcon,       label: "Bold"          },
                      { Icon: ItalicIcon,     label: "Italic"        },
                      { Icon: UnderlineIcon,  label: "Underline"     },
                      { Icon: LinkIcon,       label: "Insert link"   },
                      { Icon: PilcrowIcon,    label: "Paragraph"     },
                    ].map(({ Icon, label }) => (
                      <button
                        key={label}
                        type="button"
                        aria-label={label}
                        className="inline-flex h-auto items-center justify-center transition-opacity duration-150 hover:opacity-60"
                      >
                        <Icon className="h-4 w-4 stroke-[2.2]" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1 text-[#5f6368]">
                  <img
                    className="h-6 w-6 cursor-pointer transition-opacity duration-150 hover:opacity-60"
                    alt="Duplicate section"
                    src="https://c.animaapp.com/mooa01hs93Tlx5/img/frame-1321317663.svg"
                  />
                  <button
                    type="button"
                    aria-label="More options"
                    className="inline-flex h-auto items-center justify-center transition-opacity duration-150 hover:opacity-60"
                  >
                    <MoreVerticalIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="px-4 pt-12">
                <div className="max-w-[650px]">
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                    Description (optional)
                  </p>
                </div>
              </div>
              <div className="mt-7 px-4 pb-0">
                <Separator className="h-px bg-[#d9d9d9]" />
              </div>
            </div>
          </CardContent>
        </Card>

        {shortAnswerFields.map((field) => (
          <Card
            key={field.label}
            className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-200 hover:shadow-[0px_0px_8px_#00000030]"
          >
            <CardContent className="px-[26px] pb-5 pt-7">
              <div className="flex min-h-[146px] flex-col">
                <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                  {field.label}
                  {field.required && <span className="text-[#e02323]">*</span>}
                </h2>
                <div className="mt-[26px] w-full max-w-[650px] border-b border-[#595959] pb-2.5">
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                    Short answer text
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-0">
            <div className="flex min-h-[294px] flex-col">
              <div className="flex flex-col gap-4 px-4 pt-[18px] md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="flex min-w-0 flex-1 flex-col gap-4">
                    <div className="flex h-[51px] w-full max-w-[490px] items-center border-b border-gray-600 bg-[#4b55631a] px-2.5">
                      <Input
                        defaultValue="Question"
                        aria-label="Question"
                        className="h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 text-gray-600 placeholder:text-gray-600"
                      />
                    </div>
                    <div className="flex w-full max-w-[662px] items-center gap-2.5 border-b border-[#0957a1] px-2.5 pb-2.5">
                      <span className="block h-5 w-5 rounded-[10px] bg-[#d9d9d9]" aria-hidden="true" />
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                        {multipleChoiceOptions[0].text}
                      </p>
                    </div>
                    <div className="flex w-full max-w-[650px] items-center gap-2.5 px-2.5">
                      <span className="block h-5 w-5 rounded-[10px] bg-[#d9d9d9]" aria-hidden="true" />
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                        {multipleChoiceOptions[1].text}
                      </p>
                    </div>
                  </div>
                  <img
                    className="mt-3 hidden h-6 w-6 shrink-0 cursor-pointer transition-opacity duration-150 hover:opacity-60 md:block"
                    alt="Add image"
                    src="https://c.animaapp.com/mooa01hs93Tlx5/img/material-symbols-image-outline.svg"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <img
                    className="h-6 w-6 shrink-0 cursor-pointer transition-opacity duration-150 hover:opacity-60 md:hidden"
                    alt="Add image"
                    src="https://c.animaapp.com/mooa01hs93Tlx5/img/material-symbols-image-outline.svg"
                  />
                  <Select defaultValue="multiple-choice">
                    <SelectTrigger className="h-auto w-full min-w-0 rounded-[5px] border border-[#d9d9d9] px-2.5 py-2 shadow-none md:w-[263px]">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span className="relative block h-5 w-5 rounded-[10px] border border-[#595959]">
                          <span className="absolute left-[5px] top-[5px] h-2.5 w-2.5 rounded-[5px] bg-[#595959]" />
                        </span>
                        <SelectValue
                          className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]"
                          placeholder="Multiple choice"
                        />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple choice</SelectItem>
                      <SelectItem value="short-answer">Short answer</SelectItem>
                      <SelectItem value="paragraph">Paragraph</SelectItem>
                      <SelectItem value="checkboxes">Checkboxes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-8 px-4">
                <Separator className="h-px bg-[#d9d9d9]" />
              </div>
              <footer className="flex items-center justify-end gap-[11px] px-4 pb-4 pt-6">
                <button
                  type="button"
                  aria-label="Delete question"
                  className="inline-flex h-auto items-center justify-center text-[#5f6368] transition-colors duration-150 hover:text-red-500"
                >
                  <Trash2Icon className="h-4 w-4" />
                </button>
                <Separator orientation="vertical" className="h-6 bg-[#d9d9d9]" />
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-[86px] text-right [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                    Required
                  </span>
                  <Switch checked={false} aria-label="Required" />
                </div>
                <button
                  type="button"
                  aria-label="More options"
                  className="inline-flex h-auto items-center justify-center text-[#5f6368] transition-opacity duration-150 hover:opacity-60"
                >
                  <MoreVerticalIcon className="h-4 w-4" />
                </button>
              </footer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
