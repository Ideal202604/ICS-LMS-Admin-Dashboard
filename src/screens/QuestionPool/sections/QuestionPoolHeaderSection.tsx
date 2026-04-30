import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

const actionButtons = [
  {
    label: "Upgrade",
    variant: "primary" as const,
  },
  {
    label: "View As Learner",
    variant: "secondary" as const,
  },
];

export const QuestionPoolHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full items-center">
        <div className="flex h-full w-[152px] shrink-0 items-center justify-center bg-[#0957a1] px-4">
          <img
            className="h-10 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/mokxjjoomDPsSW/img/frame.svg"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-4 px-4 sm:px-6">
          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-white transition-opacity duration-200 hover:opacity-70"
          >
            <img
              className="h-[10px] w-[5px]"
              alt="Vector"
              src="https://c.animaapp.com/mokxjjoomDPsSW/img/vector.svg"
            />
          </button>

          <div className="min-w-0 flex-1 max-w-[286px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[471px]">
            <div className="flex h-11 items-center gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 shadow-shadow-xs">
              <img
                className="h-5 w-5 shrink-0"
                alt="Search"
                src="https://c.animaapp.com/mokxjjoomDPsSW/img/search.svg"
              />
              <Input
                type="search"
                defaultValue=""
                placeholder="Search"
                className="h-auto border-0 p-0 shadow-none focus-visible:ring-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-500 placeholder:text-gray-500"
              />
            </div>
          </div>

          <nav
            aria-label="Header actions"
            className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3"
          >
            {actionButtons.map((button) => (
              <Button
                key={button.label}
                type="button"
                className={
                  button.variant === "primary"
                    ? "h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white hover:bg-[#0957a1]/90 transition-all duration-200"
                    : "h-auto rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#0957a1] hover:bg-[#d1e9ff]/80 transition-all duration-200"
                }
              >
                {button.label}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
              <img
                className="h-5 w-5 shrink-0"
                alt="Help circle"
                src="https://c.animaapp.com/mokxjjoomDPsSW/img/help-circle.svg"
              />
              <span>Help</span>
            </Button>

            <button
              type="button"
              aria-label="Notifications"
              className="flex h-6 w-6 items-center justify-center transition-opacity duration-200 hover:opacity-70"
            >
              <img
                className="h-6 w-6"
                alt="Frame"
                src="https://c.animaapp.com/mokxjjoomDPsSW/img/frame.svg"
              />
            </button>

            <Separator
              orientation="vertical"
              className="hidden h-6 bg-gray-200 md:block"
            />

            <Avatar className="h-10 w-10 rounded-lg bg-[#0957a1]">
              <AvatarImage src="" alt="J" />
              <AvatarFallback className="[font-family:'Roboto',Helvetica] rounded-lg bg-[#0957a1] text-base font-medium text-white">
                J
              </AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
};
