import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const questionTypes = [
  {
    title: "Multiple Choice",
    iconAlt: "Multiple Choice",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/material-symbols-light-list-alt-outline.svg",
  },
  {
    title: "Numerical",
    iconAlt: "Numerical",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/ic-baseline-plus-minus.svg",
    defaultSelected: true,
  },
  {
    title: "Essay",
    iconAlt: "Essay",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/fluent-textbox-28-regular.svg",
  },
  {
    title: "Fill In The Blanks",
    iconAlt: "Fill In The Blanks",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/iconoir-input-field.svg",
  },
  {
    title: "Group Question",
    iconAlt: "Group Question",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/simple-line-icons-layers.svg",
  },
  {
    title: "Multi Input Reasoning",
    iconAlt: "Multi Input Reasoning",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/glyphs-columns-2-bold.svg",
  },
  {
    title: "Two Part Analysis",
    iconAlt: "Two Part Analysis",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/tabler-layout-grid-filled.svg",
  },
  {
    title: "Graphical Interpretation",
    iconAlt: "Graphical Interpretation",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/material-symbols-light-pie-chart-outline.svg",
  },
  {
    title: "Multiple Choice V2",
    iconAlt: "Multiple Choice V2",
    iconSrc: "https://c.animaapp.com/moo6lqncuMBxJZ/img/material-symbols-light-list-alt-outline.svg",
  },
];

interface AddQuestionsModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddQuestionsModal = ({ open, onClose }: AddQuestionsModalProps): JSX.Element => {
  const [selected, setSelected] = useState<string>("Numerical");

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-[532px] gap-0 rounded-[10px] border border-gray-300 bg-[#f1f3f4] p-0 shadow-lg data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200 [&>button]:hidden"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Add Questions</DialogTitle>

        {/* Header */}
        <header className="border-b border-black/70 px-[10px] pb-[12px] pt-[10px]">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 text-[#202124]">
                Add Questions
              </h1>
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 text-[#202124]">
                Select to add questions, test attachment or group the questions
              </p>
            </div>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-auto shrink-0 p-1 hover:bg-transparent"
              aria-label="Close"
            >
              <img
                className="h-[29px] w-[29px]"
                alt="Close"
                src="https://c.animaapp.com/moo6lqncuMBxJZ/img/hugeicons-cancel-01.svg"
              />
            </Button>
          </div>
        </header>

        {/* Body */}
        <div className="p-[14px] pt-[10px]">
          <Card className="rounded-lg border-0 bg-white shadow-none">
            <CardContent className="p-[10px] pt-[18px]">
              <section aria-labelledby="question-type-heading">
                <h2
                  id="question-type-heading"
                  className="mb-[14px] pl-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]"
                >
                  Questions Type
                </h2>
                <div className="grid grid-cols-3 gap-x-[13px] gap-y-[17px]">
                  {questionTypes.map((item) => {
                    const isSelected = selected === item.title;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setSelected(item.title)}
                        className={`flex min-h-[89px] flex-col items-center justify-center gap-[6px] rounded-[10px] border px-2 py-[10px] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c950]/50 ${
                          isSelected
                            ? "border-[#00c950] bg-[#dbfce7] shadow-sm"
                            : "border-[#e4e9f2] bg-transparent hover:border-gray-300 hover:bg-gray-50"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <img
                          className="h-[50px] w-[50px] transition-transform duration-200"
                          alt={item.iconAlt}
                          src={item.iconSrc}
                        />
                        <span
                          className={`text-center [font-family:'Roboto',Helvetica] font-normal leading-6 text-[#4a4a4a] transition-colors duration-150 ${
                            item.title === "Graphical Interpretation" ? "text-xs" : "text-sm"
                          } ${isSelected ? "font-medium" : ""}`}
                        >
                          {item.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* Footer action */}
              <div className="mt-5 flex justify-end gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={onClose}
                  className="h-auto rounded-lg border border-gray-300 px-4 py-2 [font-family:'Roboto',Helvetica] text-sm font-medium text-[#595959] hover:bg-gray-100 transition-all duration-200"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  className="h-auto rounded-lg bg-[#0957a1] px-5 py-2 [font-family:'Roboto',Helvetica] text-sm font-medium text-white hover:bg-[#074985] transition-all duration-200 active:scale-[0.98]"
                >
                  Add Question
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
