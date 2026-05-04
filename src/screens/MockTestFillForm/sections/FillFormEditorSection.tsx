import {
  AlignLeftIcon,
  BoldIcon,
  CopyIcon,
  ImageIcon,
  ItalicIcon,
  LinkIcon,
  MoreHorizontalIcon,
  MoreVerticalIcon,
  Settings2Icon,
  UnderlineIcon,
  XCircleIcon,
} from "lucide-react";
import { useState, useCallback } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Switch } from "../../../components/ui/switch";

/** Short-answer field model */
interface ShortAnswerField {
  id: string;
  label: string;
  required: boolean;
}

/** Multiple-choice option model */
interface ChoiceOption {
  id: string;
  label: string;
}

const defaultShortFields: ShortAnswerField[] = [
  { id: "name", label: "Name", required: true },
  { id: "email", label: "Email", required: true },
  { id: "phone", label: "Phone Number", required: true },
];

const defaultChoiceOptions: ChoiceOption[] = [
  { id: "opt-1", label: "New Delhi." },
  { id: "opt-2", label: "Kolhapur" },
  { id: "opt-3", label: "Mumbai." },
  { id: "opt-4", label: "Pune ." },
];

const toolbarActions = [
  { icon: BoldIcon, label: "Bold" },
  { icon: ItalicIcon, label: "Italic" },
  { icon: UnderlineIcon, label: "Underline" },
  { icon: LinkIcon, label: "Link" },
  { icon: AlignLeftIcon, label: "Align" },
];

interface FillFormEditorSectionProps {
  onOpenTestConfig?: () => void;
}

export const FillFormEditorSection = ({ onOpenTestConfig }: FillFormEditorSectionProps): JSX.Element => {
  const [title, setTitle] = useState("Untitled Title");
  const [questionTitle, setQuestionTitle] = useState("Capital of India");
  const [questionType, setQuestionType] = useState("multiple-choice");
  const [options, setOptions] = useState<ChoiceOption[]>(defaultChoiceOptions);
  const [shortFields] = useState<ShortAnswerField[]>(defaultShortFields);
  const [required, setRequired] = useState(false);

  const removeOption = useCallback((id: string) => {
    setOptions((prev) => prev.filter((o) => o.id !== id));
  }, []);

  return (
    <section className="relative flex w-full max-w-[902px] flex-col items-start gap-2.5 animate-fade-up">
      {/* ── Title card (active, gold border) ── */}
      <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#00000026]">
        <CardContent className="p-0">
          <div className="flex min-h-[234px] flex-col px-4 pt-[18px]">
            <header className="flex items-start justify-between gap-4">
              <div className="w-full max-w-[490px]">
                <label className="sr-only" htmlFor="form-title-input">Form title</label>
                <input
                  id="form-title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-[51px] w-full border-0 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none transition-colors duration-200 focus:border-[#0957a1]"
                />
              </div>
              <div className="flex shrink-0 items-center gap-2 pt-1 text-[#4b5563]">
                <button
                  type="button"
                  aria-label="Duplicate"
                  className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                >
                  <CopyIcon className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  aria-label="More options"
                  className="flex items-center justify-center transition-colors duration-200 hover:text-[#0957a1]"
                >
                  <MoreVerticalIcon className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
            </header>

            {/* Formatting toolbar */}
            <nav
              aria-label="Text formatting toolbar"
              className="mt-2.5 flex items-center gap-3"
            >
              {toolbarActions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="flex h-5 w-5 items-center justify-center text-[#303030] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </button>
              ))}
            </nav>

            {/* Description placeholder */}
            <div className="mt-[48px] flex w-full max-w-[650px] items-center gap-2.5 px-2.5 py-2.5">
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                Description (optional)
              </p>
            </div>

            <div className="mt-[11px] h-px w-full bg-[#d9d9d9]" />
          </div>
        </CardContent>
      </Card>

      {/* ── Short-answer registration fields ── */}
      {shortFields.map((field) => (
        <Card
          key={field.id}
          className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#00000022]"
        >
          <CardContent className="flex min-h-[146px] flex-col px-[26px] pb-6 pt-7">
            <h3 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
              {field.label}
              {field.required && <span className="text-[#e02323]">*</span>}
            </h3>
            <div className="mt-[10px] flex w-full max-w-[650px] items-center gap-2.5 border-b border-[#595959] px-2.5 py-2.5">
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                Short answer text
              </p>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* ── Multiple-choice question card (active, gold border) ── */}
      <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#00000026]">
        <CardContent className="p-0">
          <div className="flex min-h-[394px] flex-col px-4 pb-[19px] pt-[18px]">
            {/* Question header row */}
            <header className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex min-w-0 flex-1 items-center gap-4">
                <div className="w-full max-w-[490px]">
                  <label className="sr-only" htmlFor="question-title-input">Question title</label>
                  <input
                    id="question-title-input"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                    className="h-[51px] w-full border-0 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none transition-colors duration-200 focus:border-[#0957a1]"
                  />
                </div>
                <button
                  type="button"
                  aria-label="Add image"
                  className="shrink-0 text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                >
                  <ImageIcon className="h-6 w-6" strokeWidth={1.75} />
                </button>
              </div>
              <div className="w-full max-w-[263px]">
                <Select value={questionType} onValueChange={setQuestionType}>
                  <SelectTrigger className="h-auto min-h-[44px] w-full rounded-[5px] border border-[#d9d9d9] px-2.5 py-2.5 shadow-none transition-colors duration-200 focus:ring-0 data-[state=open]:border-[#0957a1] [&>svg]:h-[9.5px] [&>svg]:w-[16.5px] [&>svg]:text-[#595959]">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-5 w-5 items-center justify-center rounded-full border border-[#595959]">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#595959]" />
                      </span>
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        <SelectValue />
                      </span>
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple-choice">Multiple choice</SelectItem>
                    <SelectItem value="short-answer">Short answer</SelectItem>
                    <SelectItem value="paragraph">Paragraph</SelectItem>
                    <SelectItem value="checkboxes">Checkboxes</SelectItem>
                    <SelectItem value="dropdown">Dropdown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </header>

            {/* Options list */}
            <div className="mt-[13px] flex w-full max-w-[650px] flex-col items-start gap-0 pl-[10px]">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="group flex w-full items-center gap-2.5 py-2.5 transition-colors duration-150"
                >
                  <span className="h-5 w-5 shrink-0 rounded-full bg-[#d9d9d9] transition-colors duration-200 group-hover:bg-[#b9b9b9]" />
                  <p className="flex-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                    {option.label}
                  </p>
                  <button
                    type="button"
                    aria-label={`Remove ${option.label}`}
                    className="shrink-0 text-[#999] opacity-0 transition-all duration-200 hover:scale-110 hover:text-[#e02323] group-hover:opacity-100"
                    onClick={() => removeOption(option.id)}
                  >
                    <XCircleIcon className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-auto pt-[10px]">
              <div className="h-px w-full bg-[#d9d9d9]" />
            </div>

            {/* Footer actions */}
            <footer className="mt-[10.5px] flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                aria-label="Duplicate question"
                className="flex items-center justify-center text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
              >
                <CopyIcon className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <div className="h-6 w-px bg-[#d9d9d9]" />
              <div className="inline-flex items-center gap-2.5">
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
                aria-label="Test configuration"
                title="Test Configuration"
                className="flex items-center justify-center text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
                onClick={onOpenTestConfig}
              >
                <Settings2Icon className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                aria-label="More options"
                className="flex items-center justify-center text-[#595959] transition-all duration-200 hover:scale-110 hover:text-[#0957a1]"
              >
                <MoreHorizontalIcon className="h-6 w-6" strokeWidth={1.75} />
              </button>
            </footer>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
