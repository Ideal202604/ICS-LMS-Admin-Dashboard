import { useState, useCallback } from "react";
import {
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

interface TestConfigurationModalProps {
  open: boolean;
  onClose: () => void;
}

const metricFields = [
  {
    id: "marks",
    label: "Marks",
    defaultValue: "1.0",
    unit: "Marks",
    icon: "plus" as const,
  },
  {
    id: "negative-marks",
    label: "Negative Marks",
    defaultValue: "1.0",
    unit: "Marks",
    icon: "minus" as const,
  },
];

const testLevels = ["Easy", "Medium", "Hard"];

export const TestConfigurationModal = ({
  open,
  onClose,
}: TestConfigurationModalProps): JSX.Element => {
  const [marks, setMarks] = useState("1.0");
  const [negativeMarks, setNegativeMarks] = useState("1.0");
  const [testLevel, setTestLevel] = useState("Easy");
  const [guidelineTime, setGuidelineTime] = useState("0");
  const [multipleAnswer, setMultipleAnswer] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);

  const incrementValue = useCallback((setter: React.Dispatch<React.SetStateAction<string>>, current: string) => {
    const num = parseFloat(current);
    if (!isNaN(num)) setter((num + 0.5).toFixed(1));
  }, []);

  const decrementValue = useCallback((setter: React.Dispatch<React.SetStateAction<string>>, current: string) => {
    const num = parseFloat(current);
    if (!isNaN(num) && num > 0) setter(Math.max(0, num - 0.5).toFixed(1));
  }, []);

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-[629px] gap-0 rounded-[10px] border-0 bg-[#f1f3f4] p-0 shadow-[0px_8px_32px_rgba(0,0,0,0.18)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-300 [&>button]:hidden"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Test Configuration</DialogTitle>

        <div className="p-8 pr-[37px]">
          {/* Header */}
          <header className="mb-9 flex items-start justify-between">
            <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124] animate-in fade-in slide-in-from-left-2 duration-300">
              Test Configuration
            </h1>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="flex items-center justify-center rounded-sm text-[#202124] transition-all duration-200 hover:opacity-70 hover:scale-110 active:scale-95"
            >
              <XIcon className="h-[29px] w-[29px]" strokeWidth={1.5} />
            </button>
          </header>

          {/* 2×2 Field Grid */}
          <div className="grid grid-cols-1 gap-x-[34px] gap-y-6 sm:grid-cols-2">
            {/* Marks */}
            <div className="flex flex-col gap-[11px] animate-in fade-in slide-in-from-bottom-2 duration-300 delay-75">
              <label className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                Marks
              </label>
              <div className="flex min-h-11 items-center gap-1.5 rounded-[5px] border border-solid border-[#d9d9d9] bg-white px-3 py-2.5 transition-all duration-200 focus-within:border-[#0957a1] focus-within:shadow-[0_0_0_2px_rgba(9,87,161,0.1)]">
                <button
                  type="button"
                  onClick={() => incrementValue(setMarks, marks)}
                  className="flex items-center justify-center text-[#595959] transition-all duration-200 hover:text-[#0957a1] hover:scale-110 active:scale-95"
                  aria-label="Increase marks"
                >
                  <PlusIcon className="h-5 w-5" strokeWidth={2} />
                </button>
                <input
                  type="text"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="min-w-0 flex-1 border-0 bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none"
                  aria-label="Marks value"
                />
                <span className="[font-family:'Roboto',Helvetica] whitespace-nowrap text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Marks
                </span>
              </div>
            </div>

            {/* Negative Marks */}
            <div className="flex flex-col gap-[11px] animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
              <label className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                Negative Marks
              </label>
              <div className="flex min-h-11 items-center gap-1.5 rounded-[5px] border border-solid border-[#d9d9d9] bg-white px-3 py-2.5 transition-all duration-200 focus-within:border-[#0957a1] focus-within:shadow-[0_0_0_2px_rgba(9,87,161,0.1)]">
                <button
                  type="button"
                  onClick={() => decrementValue(setNegativeMarks, negativeMarks)}
                  className="flex items-center justify-center text-[#595959] transition-all duration-200 hover:text-[#e02323] hover:scale-110 active:scale-95"
                  aria-label="Decrease negative marks"
                >
                  <MinusIcon className="h-5 w-5" strokeWidth={2} />
                </button>
                <input
                  type="text"
                  value={negativeMarks}
                  onChange={(e) => setNegativeMarks(e.target.value)}
                  className="min-w-0 flex-1 border-0 bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none"
                  aria-label="Negative marks value"
                />
                <span className="[font-family:'Roboto',Helvetica] whitespace-nowrap text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Marks
                </span>
              </div>
            </div>

            {/* Test Level */}
            <div className="flex flex-col gap-[11px] animate-in fade-in slide-in-from-bottom-2 duration-300 delay-150">
              <label className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                Test Level
              </label>
              <Select value={testLevel} onValueChange={setTestLevel}>
                <SelectTrigger className="h-11 rounded-[5px] border-[#d9d9d9] bg-white px-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] shadow-none transition-all duration-200 focus:ring-0 data-[state=open]:border-[#0957a1]">
                  <SelectValue placeholder="Easy" />
                </SelectTrigger>
                <SelectContent>
                  {testLevels.map((level) => (
                    <SelectItem key={level} value={level}>{level}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Guideline Level (Time) */}
            <div className="flex flex-col gap-[11px] animate-in fade-in slide-in-from-bottom-2 duration-300 delay-200">
              <label className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                Guideline Level
              </label>
              <div className="flex min-h-11 items-center rounded-[5px] border border-solid border-[#d9d9d9] bg-white px-2.5 py-2.5 transition-all duration-200 focus-within:border-[#0957a1] focus-within:shadow-[0_0_0_2px_rgba(9,87,161,0.1)]">
                <input
                  type="text"
                  value={guidelineTime}
                  onChange={(e) => setGuidelineTime(e.target.value)}
                  className="min-w-0 flex-1 border-0 bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none"
                  aria-label="Guideline time in seconds"
                />
                <span className="[font-family:'Roboto',Helvetica] whitespace-nowrap text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-6 flex flex-col gap-[11px] animate-in fade-in slide-in-from-bottom-2 duration-300 delay-[250ms]">
            <div className="flex items-center justify-between gap-4">
              <label className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                Tags
              </label>
              <button
                type="button"
                className="h-auto [font-family:'Roboto',Helvetica] text-sm font-normal leading-6 tracking-[0] text-[#0957a1] transition-all duration-200 hover:underline hover:text-[#074a88] active:scale-95"
              >
                +Create Tag
              </button>
            </div>
            <button
              type="button"
              onClick={() => setTagsOpen(!tagsOpen)}
              className="flex min-h-11 items-center justify-between rounded-[5px] border border-solid border-[#d9d9d9] bg-white px-2.5 py-2.5 text-left transition-all duration-200 hover:border-[#b9b9b9]"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#b9b9b9]">
                Select tags...
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-[#595959] transition-transform duration-200 ${tagsOpen ? "rotate-180" : ""}`}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Multiple Answer Card */}
          <Card className="mt-[11px] rounded-[10px] border border-solid border-[#d9d9d9] bg-[#f7f9fd] shadow-none transition-all duration-200 hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-bottom-3 duration-300 delay-300">
            <CardContent className="p-0">
              <div className="flex flex-col gap-4 px-3 py-3">
                <div className="flex items-start gap-[10px]">
                  <Checkbox
                    id="multiple-answer"
                    checked={multipleAnswer}
                    onCheckedChange={(checked) => setMultipleAnswer(checked === true)}
                    className="mt-[3px] h-5 w-5 rounded-[2px] border-[#595959] transition-all duration-200 data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1]"
                  />
                  <label
                    htmlFor="multiple-answer"
                    className="cursor-pointer [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] transition-colors duration-200 hover:text-[#202124]"
                  >
                    Multiple Answer
                  </label>
                </div>
                <p className="pl-[3px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Enable to allow learners to select multiple answers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
