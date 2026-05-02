import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const headerActions = [
  {
    alt: "Frame",
    src: "https://c.animaapp.com/moo5oiajL5hoRM/img/frame-1321317618.svg",
  },
];

const summaryItems = [
  {
    alt: "Lineicons message",
    src: "https://c.animaapp.com/moo5oiajL5hoRM/img/lineicons-message-2-question.svg",
    label: "0 Questions",
  },
  {
    alt: "Tabler checkbox",
    src: "https://c.animaapp.com/moo5oiajL5hoRM/img/tabler-checkbox.svg",
    label: "0 Marks",
  },
];

const sectionStats = ["0 Questions", "0 Marks", "0 Groups"];

export const MockTestBuilderSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_8px_#00000030]">
        <CardContent className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-6">
          {/* Header */}
          <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex min-w-0 flex-col gap-1">
              <Badge className="h-auto w-fit rounded-[5px] bg-[#ffb8b8] px-2 py-1 [font-family:'Inter',Helvetica] text-xs font-normal leading-5 text-[#e02323] hover:bg-[#ffb8b8] transition-colors duration-200">
                Unpublished
              </Badge>
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-semibold leading-8 text-black sm:text-2xl">
                Research Writing &amp; Use of&nbsp;&nbsp;AI
              </h2>
            </div>
            <div className="flex items-center justify-start gap-2 sm:justify-end">
              {headerActions.map((action, index) => (
                <img
                  key={`header-action-${index}`}
                  className="h-[35px] w-auto max-w-[180px] cursor-pointer transition-opacity duration-200 hover:opacity-80 active:scale-95 transform"
                  alt={action.alt}
                  src={action.src}
                />
              ))}
            </div>
          </header>

          {/* Search + Summary */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full max-w-80">
              <div className="relative">
                <img
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
                  alt="Search"
                  src="https://c.animaapp.com/moo5oiajL5hoRM/img/search.svg"
                />
                <Input
                  defaultValue=""
                  aria-label="Search questions"
                  placeholder="Search"
                  className="h-auto rounded-[10px] border border-gray-300 py-2.5 pl-10 pr-3 [font-family:'Inter',Helvetica] text-base font-normal leading-4 text-gray-500 shadow-shadow-xs placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1]"
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              {summaryItems.map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <img className="h-6 w-6" alt={item.alt} src={item.src} />
                  <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242] whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 1 Row */}
          <div className="flex flex-col gap-3">
            <article className="flex flex-col gap-2 rounded-[10px] border border-gray-200 bg-[#f8fafd] p-2.5 transition-all duration-200 hover:border-gray-300 hover:shadow-sm sm:flex-row sm:items-center">
              <div className="flex min-w-0 flex-1 items-center gap-[7px]">
                <img
                  className="h-5 w-5 transition-transform duration-200 hover:scale-110 cursor-pointer"
                  alt="Chevron down"
                  src="https://c.animaapp.com/moo5oiajL5hoRM/img/chevron-down-7.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242] whitespace-nowrap">
                  1.
                </span>
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242]">
                  Section 1
                </h3>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                {sectionStats.map((stat) => (
                  <span
                    key={stat}
                    className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242] whitespace-nowrap"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </article>

            {/* Add Section Button */}
            <Button
              type="button"
              variant="secondary"
              className="h-11 w-full rounded-[10px] bg-[#d2e3fc] [font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-[#0957a1] hover:bg-[#b8d3fb] transition-colors duration-200 active:scale-[0.99] transform"
            >
              <img
                className="h-[12px] w-auto"
                alt="Add Section"
                src="https://c.animaapp.com/moo5oiajL5hoRM/img/text.png"
              />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
