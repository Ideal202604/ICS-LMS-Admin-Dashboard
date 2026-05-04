import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const actions = [
  {
    label: "Upgrade",
    variant: "primary" as const,
  },
  {
    label: "View As Learner",
    variant: "secondary" as const,
  },
];

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 flex min-h-[84px] w-full items-center bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex w-full items-center">
        <div className="flex h-[84px] w-[154px] shrink-0 items-center justify-center bg-[#0957a1]">
          <img
            className="h-[39px] w-[52px]"
            alt="ICS"
            src="https://c.animaapp.com/monzhd8m4FbejF/img/avatar.svg"
          />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 sm:px-5 lg:px-6">
          <button
            type="button"
            aria-label="Expand navigation"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#6b7280] transition-colors duration-200 hover:bg-gray-100"
          >
            <img
              className="h-5 w-5"
              alt="Expand"
              src="https://c.animaapp.com/monzhd8m4FbejF/img/vector.svg"
            />
          </button>
          <form className="min-w-0 flex-1">
            <div className="relative max-w-[255px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[520px]">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/monzhd8m4FbejF/img/search.svg"
              />
              <Input
                type="search"
                defaultValue=""
                placeholder="Search"
                aria-label="Search"
                className="h-8 rounded-md border-gray-300 bg-white pl-9 pr-3 text-xs text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#0957a1]"
              />
            </div>
          </form>
          <nav
            className="ml-auto flex items-center gap-2 sm:gap-3"
            aria-label="Header actions"
          >
            {actions.map((action) => (
              <Button
                key={action.label}
                type="button"
                variant="outline"
                className={
                  action.variant === "primary"
                    ? "h-auto rounded-md border-gray-300 bg-[#0957a1] px-3 py-1.5 text-[11px] font-medium leading-4 text-white hover:bg-[#084a88] hover:text-white transition-colors duration-200"
                    : "h-auto rounded-md border-gray-300 bg-[#d1e9ff] px-3 py-1.5 text-[11px] font-medium leading-4 text-[#0957a1] hover:bg-[#c0dfff] transition-colors duration-200"
                }
              >
                {action.label}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-md border-gray-300 bg-white px-3 py-1.5 text-[11px] font-medium leading-4 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              <img
                className="mr-1.5 h-4 w-4"
                alt="Help circle"
                src="https://c.animaapp.com/monzhd8m4FbejF/img/help-circle.svg"
              />
              <span>Help</span>
            </Button>
            <button
              type="button"
              aria-label="Notifications"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-gray-100"
            >
              <img
                className="h-5 w-5"
                alt="Notifications"
                src="https://c.animaapp.com/monzhd8m4FbejF/img/frame.svg"
              />
            </button>
            <Avatar className="h-8 w-8 rounded-md bg-[#0957a1] transition-transform duration-200 hover:scale-105">
              <AvatarFallback className="rounded-md bg-[#0957a1] text-xs font-medium text-white">
                J
              </AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </div>
    </header>
  );
};
