import {
  CheckSquareIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  MessageSquareMoreIcon,
  PlusIcon,
  RefreshCwIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const topActions = [
  { icon: ChevronsUpDownIcon, label: "Reorder" },
  { icon: RefreshCwIcon,      label: "Refresh" },
  { icon: SettingsIcon,       label: "Settings" },
];

const summaryItems = [
  { icon: MessageSquareMoreIcon, label: "0 Questions" },
  { icon: CheckSquareIcon,       label: "0 Marks" },
];

const sectionStats = ["0 Questions", "0 Marks", "0 Groups"];

const actionRows = [
  { label: "Add Question", bgClass: "bg-[#ebfaf0] hover:bg-[#d4f4de]",  icon: PlusIcon },
  { label: "Add Section",  bgClass: "bg-[#d2e3fc] hover:bg-[#b8d3fb]",  icon: PlusIcon },
];

export const MockTestEditorSection = (): JSX.Element => {
  const [expanded, setExpanded] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <section
      aria-label="Mock test editor"
      className="relative w-full animate-fade-in"
    >
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_10px_#00000025]">
        <CardContent className="p-4 sm:p-5 lg:p-6">

          {/* ── Header ── */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 flex-col gap-1">
                <Badge className="h-auto w-fit rounded-[5px] bg-[#ffb8b8] px-2.5 py-1 text-xs font-normal leading-5 text-[#e02323] hover:bg-[#ffb8b8] [font-family:'Inter',Helvetica] transition-colors duration-200">
                  Unpublished
                </Badge>
                <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                  Research Writing &amp; Use of AI
                </h2>
              </div>
              <nav
                aria-label="Editor actions"
                className="flex items-center justify-end gap-2 self-end lg:self-start"
              >
                {topActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.label}
                      type="button"
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 rounded-[4px] border-[#9ec2df] bg-[#eaf4fb] text-[#3e6f97] hover:bg-[#dbeaf6] transition-all duration-200 active:scale-95"
                      aria-label={action.label}
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  );
                })}
              </nav>
            </div>

            {/* ── Search + Stats ── */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-80">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  aria-label="Search questions"
                  className="h-10 rounded-[10px] border-gray-300 bg-white pl-9 pr-3 text-base text-gray-500 shadow-shadow-xs [font-family:'Inter',Helvetica] placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1] focus-visible:ring-0"
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 lg:justify-end">
                {summaryItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="flex items-center gap-1 text-[#424242] transition-all duration-200 hover:opacity-75 active:scale-95"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </header>

          {/* ── Section Row + Actions ── */}
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setExpanded((p) => !p)}
              className="flex w-full items-center gap-[7px] rounded-[10px] border border-gray-200 bg-[#f8fafd] px-2.5 py-2.5 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
              aria-expanded={expanded}
            >
              <ChevronDownIcon
                className={[
                  "h-5 w-5 shrink-0 text-[#424242] transition-transform duration-300",
                  expanded ? "rotate-0" : "-rotate-90",
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

            <div
              className={[
                "flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out",
                expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              {actionRows.map((row) => {
                const Icon = row.icon;
                return (
                  <Button
                    key={row.label}
                    type="button"
                    variant="ghost"
                    className={`h-11 w-full rounded-[10px] ${row.bgClass} [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#1f2937] transition-all duration-200 active:scale-[0.99]`}
                  >
                    <Icon className="mr-1.5 h-4 w-4" />
                    {row.label}
                  </Button>
                );
              })}
            </div>
          </div>

        </CardContent>
      </Card>
    </section>
  );
};
