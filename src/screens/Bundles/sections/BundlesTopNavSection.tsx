import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

const actionButtons = [
  {
    label: "Upgrade",
    className:
      "h-auto rounded-md border border-gray-300 bg-[#0957a1] px-3 py-2 text-white hover:bg-[#0957a1]/90 [font-family:'Roboto',Helvetica] text-xs font-medium leading-4 sm:text-sm",
  },
  {
    label: "View As Learner",
    className:
      "h-auto rounded-md border border-gray-300 bg-[#d1e9ff] px-3 py-2 text-[#0957a1] hover:bg-[#d1e9ff]/90 [font-family:'Roboto',Helvetica] text-xs font-medium leading-4 sm:text-sm",
  },
];

export const BundlesTopNavSection = (): JSX.Element => {
  return (
    <header className="relative z-10 flex w-full items-stretch bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full min-w-0 items-center">
        <div className="flex h-full w-[154px] shrink-0 items-center justify-center bg-[#0957a1] px-4">
          <img
            className="h-[34px] w-auto"
            alt="ICS"
            src="https://c.animaapp.com/mojw47fz1YxegC/img/avatar.svg"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 sm:px-5">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-sm"
          >
            <img
              className="h-5 w-5"
              alt="Vector"
              src="https://c.animaapp.com/mojw47fz1YxegC/img/vector.svg"
            />
          </button>
          <div className="min-w-0 flex-1 max-w-[520px]">
            <div className="relative">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/mojw47fz1YxegC/img/search.svg"
              />
              <Input
                defaultValue=""
                aria-label="Search"
                placeholder="Search"
                className="h-8 border-gray-300 bg-white pl-9 pr-3 shadow-shadow-xs [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-500 placeholder:text-gray-500 focus-visible:ring-0"
              />
            </div>
          </div>
          <nav
            className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3"
            aria-label="Top actions"
          >
            {actionButtons.map((button) => (
              <Button
                key={button.label}
                type="button"
                className={button.className}
              >
                {button.label}
              </Button>
            ))}
            <Button
              type="button"
              variant="outline"
              className="h-auto gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-700 hover:bg-gray-50 [font-family:'Roboto',Helvetica] text-xs font-medium leading-4 sm:text-sm"
            >
              <img
                className="h-4 w-4 sm:h-5 sm:w-5"
                alt="Help circle"
                src="https://c.animaapp.com/mojw47fz1YxegC/img/help-circle.svg"
              />
              <span>Help</span>
            </Button>
            <button
              type="button"
              aria-label="Notifications"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md"
            >
              <img
                className="h-5 w-5 sm:h-6 sm:w-6"
                alt="Frame"
                src="https://c.animaapp.com/mojw47fz1YxegC/img/frame.svg"
              />
            </button>
            <Separator
              orientation="vertical"
              className="mx-1 hidden h-8 bg-gray-200 sm:block"
            />
            <button
              type="button"
              aria-label="Profile"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-[#0957a1] text-white [font-family:'Roboto',Helvetica] text-sm font-medium leading-5 sm:h-10 sm:w-10 sm:text-base"
            >
              J
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
