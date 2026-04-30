import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
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

export const MockTestHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full items-center justify-between gap-4 px-4 sm:px-5 lg:px-8">
        <div className="flex min-w-0 items-center">
          <div className="flex h-[84px] w-[120px] items-center justify-center bg-[#0957a1] sm:w-[154px]">
            <img
              className="h-10 w-auto object-contain"
              alt="ICS"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/frame.svg"
            />
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-500"
          >
            <img
              className="h-4 w-4 object-contain"
              alt="Toggle navigation"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/vector.svg"
            />
          </button>
        </div>
        <div className="flex min-w-0 flex-1 items-center justify-center px-2">
          <div className="relative w-full max-w-[281px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[471px]">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/search.svg"
            />
            <Input
              defaultValue=""
              aria-label="Search"
              placeholder="Search"
              className="h-[44px] rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base text-gray-500 shadow-shadow-xs placeholder:text-gray-500"
            />
          </div>
        </div>
        <nav
          className="flex shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Header actions"
        >
          {actionButtons.map((item) => (
            <Button
              key={item.label}
              type="button"
              variant="outline"
              className={`${item.className} hidden text-base font-medium leading-6 md:inline-flex`}
            >
              <span className="[font-family:'Roboto',Helvetica]">{item.label}</span>
            </Button>
          ))}
          <Button
            type="button"
            variant="outline"
            className="h-auto rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 hover:bg-gray-50 sm:px-4"
          >
            <img
              className="h-5 w-5"
              alt="Help circle"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/help-circle.svg"
            />
            <span className="hidden [font-family:'Roboto',Helvetica] text-base font-medium leading-6 sm:inline">
              Help
            </span>
          </Button>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
          >
            <img
              className="h-6 w-6"
              alt="Notifications"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/frame.svg"
            />
          </button>
          <Avatar className="h-10 w-10 rounded-lg bg-[#0957a1]">
            <AvatarImage src="" alt="J" />
            <AvatarFallback className="[font-family:'Roboto',Helvetica] rounded-lg bg-[#0957a1] text-base font-medium text-white">
              J
            </AvatarFallback>
          </Avatar>
        </nav>
      </div>
    </header>
  );
};
