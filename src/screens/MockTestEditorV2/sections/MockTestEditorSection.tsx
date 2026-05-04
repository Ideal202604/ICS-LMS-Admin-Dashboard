import {
  CheckIcon,
  ChevronDownIcon,
  MessageSquareTextIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
  SquareCheckBigIcon,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const topStats = [
  { icon: MessageSquareTextIcon, label: "0 Questions" },
  { icon: SquareCheckBigIcon, label: "0 Marks" },
];

const sectionStats = ["0 Questions", "0 Marks", "0 Groups"];

const actionButtons = [
  { label: "Expand",   icon: ChevronDownIcon },
  { label: "Refresh",  icon: RefreshCwIcon },
  { label: "Settings", icon: SettingsIcon },
];

const actionRows = [
  { label: "Add Question", icon: CheckIcon, className: "bg-[#ebfaf0] hover:bg-[#d4f4de] text-[#202124]" },
  { label: "Add Section",  icon: PlusIcon,  className: "bg-[#d2e3fc] hover:bg-[#b8d3fb] text-[#202124]" },
];

export const MockTestEditorSection = (): JSX.Element => {
  const [sectionExpanded, setSectionExpanded] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  return (
    <section aria-label="Mock test editor" className="w-full animate-fade-in">
      <div className="mx-auto w-full max-w-[1077px]">
        <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_10px_#00000025]">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col gap-4">

              {/* ── Header ── */}
              <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 flex-col gap-1">
                  <Badge className="h-auto w-fit rounded-[5px] bg-[#ffb8b8] px-2.5 py-1 text-xs font-normal text-[#e02323] hover:bg-[#ffb8b8] transition-colors duration-200">
                    Unpublished
                  </Badge>
                  <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                    Research Writing &amp; Use of&nbsp;&nbsp;AI
                  </h2>
                </div>
                <nav
                  aria-label="Editor actions"
                  className="flex items-center gap-2 self-end md:self-start"
                >
                  {actionButtons.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Button
                        key={action.label}
                        type="button"
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-[4px] border-[#9fc3dd] bg-[#e7f2fb] text-[#4e6e88] hover:bg-[#dbeaf6] transition-all duration-200 active:scale-95"
                        aria-label={action.label}
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    );
                  })}
                </nav>
              </header>

              {/* ── Search + Stats ── */}
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="w-full max-w-80">
                  <div className="relative">
                    <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="search"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search"
                      aria-label="Search questions"
                      className="h-10 rounded-[10px] border-gray-300 bg-white pl-9 [font-family:'Inter',Helvetica] text-base text-gray-500 shadow-shadow-xs placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1]"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 md:justify-end">
                  {topStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <button
                        key={stat.label}
                        type="button"
                        className="flex items-center gap-1.5 text-[#424242] transition-all duration-200 hover:opacity-80 active:scale-95"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap">
                          {stat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ── Section Row ── */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setSectionExpanded((p) => !p)}
                  className="flex w-full items-center gap-[7px] rounded-[10px] border border-gray-200 bg-[#f8fafd] p-2.5 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
                >
                  <ChevronDownIcon
                    className={[
                      "h-5 w-5 text-[#424242] shrink-0 transition-transform duration-300",
                      sectionExpanded ? "rotate-0" : "-rotate-90",
                    ].join(" ")}
                  />
                  <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242] whitespace-nowrap">
                    1.
                  </span>
                  <span className="min-w-0 flex-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242]">
                    Section 1
                  </span>
                  <span className="ml-auto flex flex-wrap items-center justify-end gap-2 sm:gap-4">
                    {sectionStats.map((stat) => (
                      <span
                        key={stat}
                        className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242] whitespace-nowrap"
                      >
                        {stat}
                      </span>
                    ))}
                  </span>
                </button>

                {/* ── Add Question / Add Section ── */}
                <div
                  className={[
                    "flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out",
                    sectionExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  {actionRows.map((row) => (
                    <Button
                      key={row.label}
                      type="button"
                      variant="ghost"
                      className={`h-11 w-full rounded-[10px] ${row.className} transition-all duration-200 active:scale-[0.99]`}
                    >
                      <span className="flex items-center gap-1.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6">
                        <row.icon className="h-4 w-4" />
                        {row.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
