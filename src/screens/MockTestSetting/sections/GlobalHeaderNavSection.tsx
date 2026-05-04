import { Button } from "../../../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const navTabs = [
  { value: "questions", label: "Questions" },
  { value: "responses", label: "Responses" },
  { value: "settings", label: "Settings" },
];

export const GlobalHeaderNavSection = (): JSX.Element => {
  return (
    <header className="relative w-full bg-white shadow-[0px_4px_4px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[84px] items-start justify-between gap-4 px-8 pt-3 pb-2 sm:px-10 lg:px-[31px]">
          <div className="flex shrink-0 items-start">
            <img
              className="h-[75px] w-20 object-contain"
              alt="Ics png"
              src="https://c.animaapp.com/moqt0jbqy3eJFd/img/ics-png--1--1.png"
            />
          </div>
          <div className="flex flex-1 items-center justify-end gap-3 pt-[10px]">
            <img
              className="shrink-0"
              alt="Frame"
              src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317648.svg"
            />
            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium text-[#0957a1] hover:bg-[#d1e9ff] hover:text-[#0957a1] [font-family:'Roboto',Helvetica]"
            >
              Publish
            </Button>
            <button
              type="button"
              className="inline-flex h-6 w-6 items-center justify-center"
              aria-label="Notifications"
            >
              <img
                className="h-6 w-6"
                alt="Frame"
                src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame.svg"
              />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1"
              aria-label="User profile"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                J
              </span>
            </button>
          </div>
        </div>
        <div className="flex min-h-[50px] items-center gap-5 px-8 py-2 sm:px-10 lg:px-[38px]">
          <button
            type="button"
            className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 text-[#202124] whitespace-nowrap"
          >
            Back
          </button>
          <img
            className="h-auto w-[53px] shrink-0"
            alt="Frame"
            src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317649.svg"
          />
          <nav
            className="flex flex-1 justify-center"
            aria-label="Section navigation"
          >
            <Tabs defaultValue="questions" className="w-full">
              <TabsList className="h-auto w-full justify-center gap-0 rounded-none bg-transparent p-0">
                {navTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="h-[27px] rounded-none border-b-[3px] border-transparent px-5 py-2 text-base font-medium leading-6 text-black shadow-none [font-family:'Roboto',Helvetica] data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                  >
                    {tab.label}
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
