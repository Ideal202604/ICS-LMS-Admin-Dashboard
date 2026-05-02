import { BellIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

const actions = [
  { label: "Upgrade",        variant: "primary"    as const },
  { label: "View As Learner", variant: "secondary" as const },
];

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative z-10 flex w-full items-stretch overflow-hidden bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full">
        {/* Logo block */}
        <div className="flex h-full min-w-[152px] items-center bg-[#0957a1] px-5">
          <img
            className="h-10 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/moo3kvsppKe6iN/img/frame.svg"
          />
        </div>

        {/* Main toolbar */}
        <div className="flex min-w-0 flex-1 items-center gap-4 px-4 md:px-6">
          {/* Expand nav toggle */}
          <button
            type="button"
            aria-label="Expand navigation"
            className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-[#6b7280] transition-colors duration-200 hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          {/* Search */}
          <div className="max-w-[520px] min-w-[180px] flex-1">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                defaultValue=""
                aria-label="Search"
                placeholder="Search"
                className="h-[38px] rounded-[6px] border-gray-300 bg-white pl-9 pr-3 text-sm text-gray-700 shadow-none placeholder:text-gray-400 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]"
              />
            </div>
          </div>

          {/* Actions */}
          <nav aria-label="Header actions" className="ml-auto flex items-center gap-2 sm:gap-3">
            {actions.map((action) => (
              <Button
                key={action.label}
                type="button"
                variant="outline"
                className={`h-auto rounded-md border border-gray-300 px-3 py-2 [font-family:'Roboto',Helvetica] text-xs font-medium leading-4 transition-all duration-200 sm:text-sm ${
                  action.variant === "primary"
                    ? "bg-[#0957a1] text-white hover:bg-[#084a88] hover:text-white"
                    : "bg-[#d1e9ff] text-[#0957a1] hover:bg-[#c0dfff]"
                }`}
              >
                {action.label}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-md border border-gray-300 bg-white px-3 py-2 [font-family:'Roboto',Helvetica] text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50"
            >
              <img
                className="mr-2 h-5 w-5"
                alt="Help circle"
                src="https://c.animaapp.com/moo3kvsppKe6iN/img/help-circle.svg"
              />
              Help
            </Button>

            <Separator orientation="vertical" className="mx-1 hidden h-6 sm:block" />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="h-9 w-9 rounded-md text-gray-600 transition-colors duration-200 hover:bg-gray-100"
            >
              <BellIcon className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              aria-label="User profile"
              className="h-10 w-10 rounded-lg bg-[#0957a1] p-0 [font-family:'Roboto',Helvetica] text-base font-medium text-white transition-all duration-200 hover:bg-[#084a88] hover:scale-105"
            >
              J
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
