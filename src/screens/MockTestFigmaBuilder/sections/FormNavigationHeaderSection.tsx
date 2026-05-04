import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import type { MockTestBuilderTab } from "../MockTestFigmaBuilder";

interface FormNavigationHeaderSectionProps {
  activeTab: MockTestBuilderTab;
  onTabChange: (tab: MockTestBuilderTab) => void;
}

const tabs: MockTestBuilderTab[] = ["Questions", "Responses", "Settings"];

export const FormNavigationHeaderSection = ({
  activeTab,
  onTabChange,
}: FormNavigationHeaderSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const [published, setPublished] = useState(false);

  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_4px_4px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-8 pt-[6px]">
        <div className="flex min-h-[86px] items-start justify-between gap-6">
          <div className="flex shrink-0 items-start pt-0">
            <button
              type="button"
              onClick={() => navigate("/mock-test")}
              className="rounded-md transition-transform duration-200 hover:scale-105 active:scale-95"
              aria-label="Go to mock test dashboard"
            >
              <img
                className="h-[75px] w-20 object-contain"
                alt="Ics png"
                src="https://c.animaapp.com/moqxsq4fICsZLG/img/ics-png--1--1.png"
              />
            </button>
          </div>
          <div className="flex flex-1 justify-end pt-[16px]">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => navigate("/mock-test-details")}
                className="transition-opacity duration-200 hover:opacity-75 active:scale-[0.98]"
                aria-label="Open header actions"
              >
                <img
                  className="h-6 w-auto"
                  alt="Header actions"
                  src="https://c.animaapp.com/moqxsq4fICsZLG/img/frame-1321317648.svg"
                />
              </button>
              <button
                type="button"
                className="transition-transform duration-200 hover:scale-110 active:scale-95"
                aria-label="Notifications"
              >
                <img
                  className="h-6 w-6"
                  alt="Notifications"
                  src="https://c.animaapp.com/moqxsq4fICsZLG/img/frame.svg"
                />
              </button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setPublished(true)}
                aria-pressed={published}
                className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dafc] hover:text-[#0957a1] hover:shadow-md active:scale-[0.98] [font-family:'Roboto',Helvetica]"
              >
                Publish
              </Button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-95"
                aria-label="User profile"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                  J
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[38px] pb-[10px] pl-[7px] pr-2.5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="shrink-0 rounded transition-opacity duration-200 hover:opacity-75"
            aria-label="Go back"
          >
            <img
              className="w-[53px]"
              alt="Form tools"
              src="https://c.animaapp.com/moqxsq4fICsZLG/img/frame-1321317649.svg"
            />
          </button>
          <nav className="flex flex-1 justify-center" aria-label="Form sections">
            <Tabs
              value={activeTab}
              onValueChange={(value) => value && onTabChange(value as MockTestBuilderTab)}
              className="w-full"
            >
              <TabsList className="h-auto w-full justify-center gap-2.5 rounded-none border-0 bg-transparent p-0 shadow-none">
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
