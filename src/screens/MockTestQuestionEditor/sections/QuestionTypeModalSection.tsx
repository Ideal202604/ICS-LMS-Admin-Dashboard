import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const questionTypes = [
  {
    label: "Multiple Choice",
    alt: "Multiple choice",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/material-symbols-light-list-alt-outline.svg",
    iconClassName: "h-[50px] w-[50px]",
  },
  {
    label: "Numerical",
    alt: "Numerical",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/ic-baseline-plus-minus.svg",
    iconClassName: "h-[50px] w-[50px]",
  },
  {
    label: "Essay",
    alt: "Essay",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/fluent-textbox-28-regular.svg",
    iconClassName: "h-[50px] w-[50px]",
  },
  {
    label: "Fill In The Blanks",
    alt: "Fill in the blanks",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/iconoir-input-field.svg",
    iconClassName: "h-[50px] w-[50px]",
  },
  {
    label: "Group Question",
    alt: "Group question",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/simple-line-icons-layers.svg",
    iconClassName: "h-[50px] w-[50px]",
  },
  {
    label: "Multi Input Reasoning",
    alt: "Multi input reasoning",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/glyphs-columns-2-bold.svg",
    iconClassName: "-mt-[3px] h-[50px] w-[50px]",
  },
  {
    label: "Two Part Analysis",
    alt: "Two part analysis",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/tabler-layout-grid-filled.svg",
    iconClassName: "-mt-[3px] h-[50px] w-[50px]",
  },
  {
    label: "Graphical Interpretation",
    alt: "Graphical interpretation",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/material-symbols-light-pie-chart-outline.svg",
    iconClassName: "-mt-[3px] h-[50px] w-[50px]",
  },
  {
    label: "Multiple Choice V2",
    alt: "Multiple choice V2",
    src: "https://c.animaapp.com/moqo91i5jG62g8/img/material-symbols-light-list-alt-outline.svg",
    iconClassName: "-mt-[3px] h-[50px] w-[50px]",
  },
];

interface QuestionTypeModalSectionProps {
  selectedType: string;
  onSelectType: (type: string) => void;
  onClose: () => void;
}

export const QuestionTypeModalSection = ({
  selectedType,
  onSelectType,
  onClose,
}: QuestionTypeModalSectionProps): JSX.Element => {
  return (
    <section className="relative flex w-full justify-center px-4 py-6">
      <div className="w-full max-w-[532px]">
        <Card className="overflow-hidden rounded-[10px] border-[0.5px] border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">
          <CardContent className="p-0">
            <header className="flex items-start justify-between border-b-[0.5px] border-black px-[23px] pb-[12px] pt-[26px]">
              <div className="min-w-0">
                <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
                  Add Questions
                </h2>
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#202124]">
                  Select to add questions, test attachment or group the questions
                </p>
              </div>
              <Button
                type="button"
                variant="ghost"
                className="h-auto shrink-0 p-0 transition-transform duration-200 hover:scale-105 hover:bg-transparent active:scale-95"
                aria-label="Close"
                onClick={onClose}
              >
                <img
                  className="h-[29px] w-[29px]"
                  alt="Close"
                  src="https://c.animaapp.com/moqo91i5jG62g8/img/hugeicons-cancel-01.svg"
                />
              </Button>
            </header>

            <section className="px-[21px] pb-[21px] pt-[23px]">
              <div className="rounded-lg bg-white px-3.5 pb-[21px] pt-[19px]">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Questions Type
                </h3>
                <div className="mt-[12px] grid grid-cols-2 gap-x-[13px] gap-y-4 sm:grid-cols-3">
                  {questionTypes.map((type) => {
                    const selected = selectedType === type.label;
                    return (
                      <Button
                        key={type.label}
                        type="button"
                        variant="ghost"
                        aria-pressed={selected}
                        onClick={() => onSelectType(type.label)}
                        className={`h-auto min-h-[91px] flex-col justify-center gap-[3px] rounded-[10px] border p-2.5 shadow-none transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                          selected
                            ? "border-[#00c950] bg-[#dbfce7] hover:bg-[#dbfce7]"
                            : "border-[#e4e9f2] bg-white hover:bg-[#f8fafc]"
                        }`}
                      >
                        <img className={type.iconClassName} alt={type.alt} src={type.src} />
                        <span className="[font-family:'Roboto',Helvetica] text-center text-sm font-normal leading-6 tracking-[0] text-[#4a4a4a] whitespace-nowrap">
                          {type.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
