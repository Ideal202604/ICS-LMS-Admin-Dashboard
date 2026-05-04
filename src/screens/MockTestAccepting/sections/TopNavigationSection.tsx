import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

type TabName = "Questions" | "Responses" | "Settings";

interface TopNavigationSectionProps {
  activeTab: TabName;
  onTabChange: (tab: TabName) => void;
  onPublish: () => void;
}

const topActions = [
  {
    type: "image" as const,
    alt: "Header action",
    src: "https://c.animaapp.com/moqzlycwD1XIkf/img/frame-1321317648.svg",
    className: "h-6 w-auto",
  },
  {
    type: "publish" as const,
    label: "Publish",
  },
  {
    type: "image" as const,
    alt: "Header action",
    src: "https://c.animaapp.com/moqzlycwD1XIkf/img/frame.svg",
    className: "h-6 w-6",
  },
  {
    type: "avatar" as const,
    label: "J",
  },
];

const tabs: TabName[] = ["Questions", "Responses", "Settings"];

export const TopNavigationSection = ({
  activeTab,
  onTabChange,
  onPublish,
}: TopNavigationSectionProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="relative z-30 w-full bg-white shadow-[0px_4px_4px_#00000040] animate-fade-in">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 sm:px-6 lg:px-[47px]">
        <div className="flex min-h-[86px] items-center justify-between gap-4 py-3">
          <button
            type="button"
            onClick={() => navigate("/mock-test-form")}
            className="flex shrink-0 items-center rounded-md transition-all duration-200 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-[#0957a1] focus:ring-offset-2 active:scale-[0.98]"
            aria-label="Go to mock test form"
          >
            <img
              className="h-[75px] w-20 object-contain"
              alt="Ics png"
              src="https://c.animaapp.com/moqzlycwD1XIkf/img/ics-png--1--1.png"
            />
          </button>

          <div className="flex items-center justify-end gap-3 sm:gap-4">
            {topActions.map((action, index) => {
              if (action.type === "image") {
                return (
                  <button
                    key={`${action.src}-${index}`}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md transition-all duration-200 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#0957a1] focus:ring-offset-2 active:scale-95"
                    aria-label={action.alt}
                  >
                    <img
                      className={action.className}
                      alt={action.alt}
                      src={action.src}
                    />
                  </button>
                );
              }

              if (action.type === "publish") {
                return (
                  <Button
                    key={`${action.label}-${index}`}
                    type="button"
                    variant="outline"
                    onClick={onPublish}
                    className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dcff] hover:text-[#0957a1] hover:shadow-sm active:scale-[0.97]"
                  >
                    {action.label}
                  </Button>
                );
              }

              return (
                <button
                  key={`${action.label}-${index}`}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#084a88] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#0957a1] focus:ring-offset-2 active:scale-90"
                  aria-label="User profile"
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <nav
          aria-label="Section navigation"
          className="flex min-h-[48px] items-center gap-6 rounded-[10px] px-[7px] py-2.5"
        >
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex shrink-0 items-center justify-center rounded-md transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#0957a1] focus:ring-offset-2 active:scale-95"
            aria-label="Back"
          >
            <img
              className="h-auto w-[53px]"
              alt="Frame"
              src="https://c.animaapp.com/moqzlycwD1XIkf/img/frame-1321317649.svg"
            />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => onTabChange(tab)}
                  className={`inline-flex h-[27px] items-center justify-center gap-2.5 border-b-2 p-2.5 transition-all duration-200 hover:text-[#0957a1] ${
                    isActive
                      ? "border-[#0957a1]"
                      : "border-transparent hover:border-[#0957a1]/35"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={`mt-[-9.50px] mb-[-7.50px] whitespace-nowrap [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] ${
                      isActive ? "text-app-primary" : "text-black"
                    }`}
                  >
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
