import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import type { SurveyBuilderTab } from "../MockTestSurveyBuilder";

interface FormTopToolbarSectionProps {
  activeTab: SurveyBuilderTab;
  onTabChange: (tab: SurveyBuilderTab) => void;
  published: boolean;
  onPublish: () => void;
}

const topActionIcons = [
  {
    alt: "Open form actions",
    src: "https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317648.svg",
    className: "h-auto shrink-0 transition-opacity duration-200 hover:opacity-75",
  },
  {
    alt: "Notifications",
    src: "https://c.animaapp.com/moqyxd39KZXbmY/img/frame.svg",
    className: "h-6 w-6 shrink-0 transition-transform duration-200 hover:scale-110",
  },
];

const tabs: SurveyBuilderTab[] = ["Questions", "Responses", "Settings"];

export const FormTopToolbarSection = ({
  activeTab,
  onTabChange,
  published,
  onPublish,
}: FormTopToolbarSectionProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[86px] items-start justify-between gap-4 px-4 pt-2 sm:px-6 lg:px-8">
          <div className="flex shrink-0 items-start">
            <button
              type="button"
              onClick={() => navigate("/mock-test")}
              className="rounded-md transition-transform duration-200 hover:scale-105 active:scale-95"
              aria-label="Go to mock test dashboard"
            >
              <img
                className="h-[75px] w-20 object-contain"
                alt="ICS Global"
                src="https://c.animaapp.com/moqyxd39KZXbmY/img/ics-png--1--1.png"
              />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-end gap-3 pt-[14px]">
            {topActionIcons.map((icon) => (
              <button
                key={icon.src}
                type="button"
                onClick={() => navigate(icon.alt === "Open form actions" ? "/mock-test-details" : "/mock-test-survey-builder")}
                className="rounded-md transition-transform duration-200 active:scale-95"
                aria-label={icon.alt}
              >
                <img
                  className={icon.className}
                  alt={icon.alt}
                  src={icon.src}
                />
              </button>
            ))}

            <Button
              type="button"
              variant="outline"
              onClick={onPublish}
              aria-pressed={published}
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dafc] hover:text-[#0957a1] hover:shadow-md active:scale-[0.98]"
            >
              {published ? "Published" : "Publish"}
            </Button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-95"
              aria-label="Open user profile"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                J
              </span>
            </button>
          </div>
        </div>
        <div className="flex w-full items-center gap-6 px-4 pb-2 sm:px-6 lg:px-[60px]">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="shrink-0 rounded transition-opacity duration-200 hover:opacity-75"
            aria-label="Go back"
          >
            <img
              className="w-[53px]"
              alt="Form tools"
              src="https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317649.svg"
            />
          </button>
          <nav
            className="flex flex-1 justify-center"
            aria-label="Form sections"
          >
            <Tabs
              value={activeTab}
              onValueChange={(value) => value && onTabChange(value as SurveyBuilderTab)}
              className="w-full"
            >
              <TabsList className="h-auto w-full justify-center gap-0 rounded-none border-0 bg-transparent p-0 shadow-none">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="[font-family:'Roboto',Helvetica] h-[27px] rounded-none border-b-2 border-transparent px-2.5 py-2.5 text-base font-medium leading-6 text-black shadow-none transition-all duration-200 hover:text-[#0957a1] data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-app-primary data-[state=active]:shadow-none"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </nav>
        </div>
      </div>
    </header>
  );
};
