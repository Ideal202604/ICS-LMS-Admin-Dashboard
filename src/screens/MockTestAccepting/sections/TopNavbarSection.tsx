import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";

interface TopNavbarSectionProps {
  activeTab: string;
  onTabChange: (tab: "Questions" | "Responses" | "Settings") => void;
  onPublish: () => void;
}

export const TopNavbarSection = ({
  activeTab,
  onTabChange,
  onPublish,
}: TopNavbarSectionProps): JSX.Element => {
  const tabs: Array<"Questions" | "Responses" | "Settings"> = ["Questions", "Responses", "Settings"];

  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_4px_4px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[86px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="shrink-0">
            <img
              className="h-[56px] w-auto transition-transform duration-300 hover:scale-[1.02] sm:h-[75px]"
              alt="ICS logo"
              src="https://c.animaapp.com/mor18xk944oqGG/img/ics-png--1--1.png"
            />
          </div>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            <button
              type="button"
              className="shrink-0 rounded-md transition-all duration-300 hover:scale-105 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0957a1]/30"
              aria-label="Open options"
            >
              <img
                className="block"
                alt="Options"
                src="https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317648.svg"
              />
            </button>

            <Button
              type="button"
              variant="outline"
              onClick={onPublish}
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium text-[#0957a1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c5e2fb] hover:text-[#0957a1] hover:shadow-md active:translate-y-0"
            >
              Publish
            </Button>

            <button
              type="button"
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-all duration-300 hover:scale-110 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0957a1]/30"
              aria-label="Notifications"
            >
              <img
                className="h-6 w-6"
                alt="Notifications"
                src="https://c.animaapp.com/mor18xk944oqGG/img/frame.svg"
              />
            </button>

            <Avatar className="h-10 w-10 rounded-lg bg-[#0957a1] transition-transform duration-300 hover:scale-105">
              <AvatarFallback className="rounded-lg bg-[#0957a1] [font-family:'Roboto',Helvetica] text-base font-medium text-white">
                J
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <nav
          className="flex items-center gap-4 px-4 pb-3 sm:gap-6 sm:px-6 lg:gap-[38px] lg:px-8"
          aria-label="Section navigation"
        >
          <button
            type="button"
            className="shrink-0 rounded-md transition-all duration-300 hover:scale-105 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0957a1]/30"
            aria-label="Open section menu"
          >
            <img
              className="w-[53px]"
              alt="Section menu"
              src="https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317649.svg"
            />
          </button>

          <div className="flex flex-1 items-center justify-center gap-1 sm:gap-3">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange(tab)}
                  className={`inline-flex h-[27px] items-center justify-center gap-2.5 border-b-2 px-2.5 py-2.5 transition-all duration-300 hover:text-[#0957a1] ${
                    isActive ? "border-[#0957a1] text-[#0957a1]" : "border-transparent text-black"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap">
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
