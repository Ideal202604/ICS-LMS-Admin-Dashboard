import {
  CalendarDaysIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

export const MockTestListingHeaderSection = (): JSX.Element => {
  const [activeView, setActiveView] = useState<"list" | "grid" | "calendar">("calendar");

  const viewActions = [
    {
      key: "list" as const,
      label: "List view",
      icon: ListIcon,
    },
    {
      key: "grid" as const,
      label: "Grid view",
      icon: LayoutGridIcon,
    },
    {
      key: "calendar" as const,
      label: "Calendar view",
      icon: CalendarDaysIcon,
    },
  ];

  const getViewClassName = (key: string) => {
    if (key === activeView) {
      return "h-8 w-8 rounded border border-[#0a66c2] bg-[#0a66c2] p-0 text-white hover:bg-[#0958a8] shadow-sm transition-all duration-200";
    }
    if (key === "grid" && activeView !== "grid") {
      return "h-8 w-8 rounded border border-[#b8d3ea] bg-[#dbeeff] p-0 text-[#4d6a85] hover:bg-[#cde3fc] transition-all duration-200";
    }
    return "h-8 w-8 rounded border border-[#b8d3ea] bg-white p-0 text-[#5c6b7a] hover:bg-[#f4f9ff] transition-all duration-200";
  };

  return (
    <section className="relative w-full animate-[fadeIn_0.3s_ease-out]">
      <div className="flex w-full flex-col gap-3">
        <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-none transition-shadow duration-200 hover:shadow-sm">
          <CardContent className="p-0">
            <header className="flex flex-col gap-4 p-4 pb-3 sm:p-5 sm:pb-3">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h1 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                    Mock Test
                  </h1>
                  <p className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-700">
                    View and manage your Mock Test
                  </p>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto self-start rounded-md border border-[#cbd5e1] bg-[#dbeeff] px-3 py-2 text-xs font-medium text-[#4b5c6d] hover:bg-[#d3e8fb] transition-all duration-200 hover:shadow-sm active:scale-[0.98]"
                >
                  <PlusIcon className="mr-1.5 h-3.5 w-3.5" />
                  Create Live Class
                </Button>
              </div>
            </header>
            <div className="border-t border-gray-300 px-4 py-3 sm:px-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-xs">
                  <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="search"
                    defaultValue=""
                    placeholder="Search"
                    className="[font-family:'Inter',Helvetica] h-9 rounded-md border-gray-300 bg-white pl-8 text-sm font-normal leading-5 text-gray-500 placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30 focus-visible:border-[#0957a1]/40 transition-all duration-200"
                  />
                </div>
                <nav
                  aria-label="View options"
                  className="flex items-center gap-2 self-end sm:self-auto"
                >
                  {viewActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={action.key}
                        type="button"
                        variant="outline"
                        size="icon"
                        aria-label={action.label}
                        onClick={() => setActiveView(action.key)}
                        className={getViewClassName(action.key)}
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
