import {
  AlignLeftIcon,
  BoldIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MoreVerticalIcon,
  Trash2Icon,
  UnderlineIcon,
} from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Switch } from "../../../components/ui/switch";

const textFields = [
  { label: "Name", required: true },
  { label: "Email", required: true },
  { label: "Phone Number", required: true },
];

const toolbarIcons = [
  { icon: BoldIcon, label: "Bold" },
  { icon: ItalicIcon, label: "Italic" },
  { icon: UnderlineIcon, label: "Underline" },
  { icon: LinkIcon, label: "Link" },
  { icon: AlignLeftIcon, label: "Text formatting" },
];

const choiceOptions = [
  { label: "Option 1", active: true },
  { label: 'Add option or add "Other"', active: false },
];

export const FormBuilderCanvasSection = (): JSX.Element => {
  const [title, setTitle] = useState("Untitled Title");
  const [question, setQuestion] = useState("Question");
  const [required, setRequired] = useState(false);

  return (
    <section className="relative w-full max-w-[902px] animate-fade-up">
      <div className="flex w-full flex-col items-start gap-2.5">
        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#00000026]">
          <CardContent className="p-0">
            <header className="flex items-start justify-between gap-4 px-4 pb-0 pt-[18px]">
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                <label className="sr-only" htmlFor="form-title">
                  Form title
                </label>
                <input
                  id="form-title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="h-[51px] w-full max-w-[490px] border-0 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none transition-colors duration-200 focus:border-[#0957a1]"
                />
                <nav
                  aria-label="Text formatting toolbar"
                  className="flex items-center gap-3 pt-1"
                >
                  {toolbarIcons.map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="flex h-auto items-center justify-center text-[#303030] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                    >
                      <Icon className="h-4 w-4" strokeWidth={2} />
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-3 pt-1 text-[#4b5563]">
                <button
                  type="button"
                  aria-label="Duplicate"
                  className="flex h-auto items-center justify-center transition-opacity duration-200 hover:opacity-70"
                >
                  <img
                    className="block flex-none"
                    alt="Duplicate"
                    src="https://c.animaapp.com/moqp98as9j0Smr/img/frame-1321317663.svg"
                  />
                </button>
                <button
                  type="button"
                  aria-label="More options"
                  className="flex h-auto items-center justify-center transition-colors duration-200 hover:text-[#0957a1]"
                >
                  <MoreVerticalIcon className="h-4 w-4" />
                </button>
              </div>
            </header>
            <div className="px-4 pt-[26px]">
              <img
                className="h-5 w-[134px]"
                alt="Section banner"
                src="https://c.animaapp.com/moqp98as9j0Smr/img/frame-1321317581.svg"
              />
            </div>
            <div className="px-4 pb-[14px] pt-[38px]">
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                Description (optional)
              </p>
            </div>
            <div className="mx-4 h-px bg-[#d9d9d9]" />
          </CardContent>
        </Card>

        {textFields.map((field) => (
          <Card
            key={field.label}
            className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#00000022]"
          >
            <CardContent className="flex min-h-[146px] flex-col justify-start px-[26px] pb-6 pt-7">
              <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                {field.label}
                {field.required && <span className="text-[#e02323]">*</span>}
              </h2>
              <div className="mt-[14px] w-full max-w-[650px] border-b border-[#595959] pb-2.5">
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Short answer text
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#00000026]">
          <CardContent className="p-0">
            <div className="px-4 pb-0 pt-[18px]">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <label className="sr-only" htmlFor="question-title">
                      Question title
                    </label>
                    <input
                      id="question-title"
                      value={question}
                      onChange={(event) => setQuestion(event.target.value)}
                      className="h-[51px] w-full max-w-[490px] border-0 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none transition-colors duration-200 focus:border-[#0957a1]"
                    />
                  </div>
                  <button
                    type="button"
                    aria-label="Add image"
                    className="mt-3 flex h-auto items-center justify-center text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                  >
                    <ImageIcon className="h-6 w-6" strokeWidth={1.75} />
                  </button>
                </div>
                <div className="w-full max-w-[263px]">
                  <Select defaultValue="multiple-choice">
                    <SelectTrigger className="h-auto min-h-[44px] w-full rounded-[5px] border border-[#d9d9d9] px-2.5 py-2 shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                      <div className="flex items-center gap-1.5">
                        <span className="relative h-5 w-5 rounded-full border border-[#595959]">
                          <span className="absolute left-1.5 top-1.5 h-2 w-2 rounded-full bg-[#595959]" />
                        </span>
                        <SelectValue
                          placeholder="Multiple choice"
                          className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]"
                        />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="multiple-choice">Multiple choice</SelectItem>
                      <SelectItem value="short-answer">Short answer</SelectItem>
                      <SelectItem value="paragraph">Paragraph</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="px-[26px] pt-3">
              <ul className="flex flex-col">
                {choiceOptions.map((option) => (
                  <li
                    key={option.label}
                    className={
                      option.active
                        ? "w-full max-w-[662px] border-b border-[#0957a1] pb-2.5 pt-2.5"
                        : "w-full max-w-[650px] pt-2.5"
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="block h-5 w-5 rounded-full bg-[#d9d9d9]" />
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        {option.label}
                      </span>
                      {option.active && (
                        <button
                          type="button"
                          aria-label="Add option image"
                          className="ml-auto flex h-auto items-center justify-center text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                        >
                          <ImageIcon className="h-4 w-4" strokeWidth={1.75} />
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-4 mt-[14px] h-px bg-[#d9d9d9]" />
            <footer className="flex flex-wrap items-center justify-end gap-3 px-4 pb-4 pt-5">
              <button
                type="button"
                aria-label="Duplicate question"
                className="flex h-auto items-center justify-center transition-opacity duration-200 hover:opacity-70"
              >
                <img
                  className="block flex-none"
                  alt="Duplicate question"
                  src="https://c.animaapp.com/moqp98as9j0Smr/img/frame-1321317661.svg"
                />
              </button>
              <button
                type="button"
                aria-label="Delete question"
                className="flex h-auto items-center justify-center text-[#595959] transition-colors duration-200 hover:text-[#e02323]"
              >
                <Trash2Icon className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <div className="h-6 w-px bg-[#d9d9d9]" />
              <div className="flex items-center gap-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Required
                </span>
                <Switch
                  checked={required}
                  onCheckedChange={setRequired}
                  aria-label="Required"
                />
              </div>
              <button
                type="button"
                aria-label="More actions"
                className="flex h-auto items-center justify-center text-[#595959] transition-opacity duration-200 hover:opacity-70"
              >
                <img
                  className="h-6 w-6"
                  alt="More actions"
                  src="https://c.animaapp.com/moqp98as9j0Smr/img/svg-spinners-3-dots-fade.svg"
                />
              </button>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
