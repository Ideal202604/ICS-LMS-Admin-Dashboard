import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const actionButtons = [
  {
    label: "Upgrade",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-white hover:bg-[#0957a1]/90",
  },
  {
    label: "View As Learner",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 text-[#0957a1] hover:bg-[#d1e9ff]/90",
  },
];

export const GlobalHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex min-h-[84px] w-full items-center">
        <div className="flex h-[84px] w-[154px] shrink-0 items-center justify-center bg-[#0957a1]">
          <img
            className="h-10 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/mol3ctq1Lfia5W/img/frame.svg"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 border-b border-gray-200 px-4 py-4 sm:px-5 lg:px-6">
          <button
            type="button"
            aria-label="Open navigation"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] bg-white text-gray-500"
          >
            <img
              className="h-4 w-4"
              alt="Menu"
              src="https://c.animaapp.com/mol3ctq1Lfia5W/img/vector.svg"
            />
          </button>
          <form className="min-w-0 flex-1">
            <label htmlFor="global-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full max-w-[420px]">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/mol3ctq1Lfia5W/img/search.svg"
              />
              <Input
                id="global-search"
                defaultValue=""
                placeholder="Search"
                className="h-10 rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base text-gray-500 shadow-shadow-xs placeholder:text-gray-500"
              />
            </div>
          </form>
          <nav
            aria-label="Global actions"
            className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3"
          >
            {actionButtons.map((button) => (
              <Button
                key={button.label}
                type="button"
                className={`${button.className} [font-family:'Roboto',Helvetica] text-base font-medium leading-6`}
              >
                {button.label}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 [font-family:'Roboto',Helvetica] text-base font-medium leading-6"
            >
              <img
                className="h-5 w-5"
                alt="Help circle"
                src="https://c.animaapp.com/mol3ctq1Lfia5W/img/help-circle.svg"
              />
              <span>Help</span>
            </Button>
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-9 w-9 items-center justify-center rounded-md"
            >
              <img
                className="h-6 w-6"
                alt="Notifications"
                src="https://c.animaapp.com/mol3ctq1Lfia5W/img/frame.svg"
              />
            </button>
            <button
              type="button"
              aria-label="Profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                J
              </span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
