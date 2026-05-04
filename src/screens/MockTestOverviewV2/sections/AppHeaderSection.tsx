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

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="grid min-h-[84px] w-full grid-cols-[154px_minmax(220px,471px)_1fr] items-center gap-4 pl-0 pr-4">
        <div className="flex h-full items-center justify-center bg-[#0957a1] px-6">
          <img
            className="h-9 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/moo0hot3G8QUUI/img/avatar.svg"
          />
        </div>
        <div className="flex items-center">
          <div className="relative w-full max-w-[471px]">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/search.svg"
            />
            <Input
              defaultValue=""
              placeholder="Search"
              className="h-11 rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base text-gray-500 shadow-shadow-xs placeholder:text-gray-500"
            />
          </div>
        </div>
        <nav className="flex items-center justify-end gap-3">
          {actionButtons.map((button) => (
            <Button
              key={button.label}
              type="button"
              variant="outline"
              className={`${button.className} [font-family:'Roboto',Helvetica] text-base font-medium leading-6`}
            >
              {button.label}
            </Button>
          ))}

          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 [font-family:'Roboto',Helvetica] text-base font-medium leading-6"
          >
            <img
              className="h-5 w-5"
              alt="Help circle"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/help-circle.svg"
            />
            <span>Help</span>
          </Button>
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-lg"
          >
            <img
              className="h-6 w-6"
              alt="Frame"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/frame.svg"
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
    </header>
  );
};
