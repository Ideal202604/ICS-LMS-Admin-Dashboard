import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const actionButtons = [
  {
    label: "Upgrade",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-white hover:bg-[#0957a1]/90",
    textClassName:
      "[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] whitespace-nowrap",
  },
  {
    label: "View As Learner",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 text-[#0957a1] hover:bg-[#d1e9ff]/90",
    textClassName:
      "[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] whitespace-nowrap",
  },
];

export const TopNavigationBarSection = (): JSX.Element => {
  return (
    <header className="relative z-10 flex min-h-[84px] w-full items-center justify-between gap-4 bg-white pl-0 pr-4 shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full min-w-0 items-center">
        <div className="flex h-full w-[154px] shrink-0 items-center justify-center bg-[#0957a1] px-4">
          <img
            className="h-10 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/mojtuh5wFX1nkx/img/avatar.svg"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-transparent bg-transparent"
          >
            <img
              className="h-5 w-5"
              alt="Vector"
              src="https://c.animaapp.com/mojtuh5wFX1nkx/img/vector.svg"
            />
          </button>
          <div className="flex max-w-[255px] min-w-0 flex-1 items-center">
            <div className="relative w-full">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/mojtuh5wFX1nkx/img/search.svg"
              />
              <Input
                defaultValue=""
                aria-label="Search"
                placeholder="Search"
                className="[font-family:'Roboto',Helvetica] h-8 w-full rounded-md border-gray-300 bg-white pl-10 pr-3 text-base font-normal leading-6 tracking-[0] text-gray-500 shadow-none placeholder:text-gray-500 focus-visible:ring-0"
              />
            </div>
          </div>
        </div>
        <nav
          aria-label="Top navigation actions"
          className="flex shrink-0 items-center gap-2"
        >
          {actionButtons.map((button) => (
            <Button
              key={button.label}
              type="button"
              className={button.className}
            >
              <span className={button.textClassName}>{button.label}</span>
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            <img
              className="h-5 w-5"
              alt="Help circle"
              src="https://c.animaapp.com/mojtuh5wFX1nkx/img/help-circle.svg"
            />
            <span className="[font-family:'Roboto',Helvetica] whitespace-nowrap text-base font-medium leading-6 tracking-[0]">
              Help
            </span>
          </Button>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-white"
          >
            <img
              className="h-6 w-6"
              alt="Frame"
              src="https://c.animaapp.com/mojtuh5wFX1nkx/img/frame-1.svg"
            />
          </button>
          <button
            type="button"
            aria-label="User profile"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1"
          >
            <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white whitespace-nowrap">
              J
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
