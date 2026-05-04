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
import { useMemo, useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const summaryItems = [
  { icon: MessageSquareMoreIcon, label: "0 Questions" },
  { icon: CheckSquareIcon, label: "0 Marks" },
];

const sectionStats = ["0 Questions", "0 Marks", "0 Groups"];

const actionIcons = [
  { icon: ChevronsUpDownIcon, label: "Reorder" },
  { icon: RefreshCwIcon, label: "Refresh" },
  { icon: SettingsIcon, label: "Settings" },
];

interface QuestionEditorSectionProps {
  onAddQuestion: () => void;
  onViewSelected?: () => void;
}

export const QuestionEditorSection = ({ onAddQuestion, onViewSelected }: QuestionEditorSectionProps): JSX.Element => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(true);

  const sectionVisible = useMemo(
    () => "section 1".includes(search.trim().toLowerCase()) || search.trim().length === 0,
    [search],
  );

  return (
    <section className="w-full animate-fade-in">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_8px_#00000030]">
        <CardContent className="p-0">
          <div className="flex w-full flex-col gap-5 px-[22px] pb-[22px] pt-[27px]">
            <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 flex-col gap-1">
                <Badge className="h-[26px] w-fit rounded-[5px] bg-[#ffb8b8] px-2.5 py-0 text-xs font-normal leading-5 text-[#e02323] hover:bg-[#ffb8b8] [font-family:'Inter',Helvetica]">
                  Unpublished
                </Badge>
                <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                  Research Writing &amp; Use of AI
                </h2>
              </div>

              <nav className="flex shrink-0 items-center gap-1 pt-[18px]" aria-label="Question editor actions">
                {actionIcons.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.label}
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label={action.label}
                      className="h-[35px] w-[35px] rounded border-[#9ec2df] bg-[#eaf4fb] text-[#3e6f97] transition-all duration-200 hover:bg-[#dbeaf6] active:scale-95"
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  );
                })}
              </nav>
            </header>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="w-full max-w-80">
                <div className="relative">
                  <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                  <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    aria-label="Search questions"
                    placeholder="Search"
                    className="h-[44px] rounded-[10px] border-gray-300 pl-10 pr-3 text-base text-gray-500 shadow-shadow-xs [font-family:'Inter',Helvetica] placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1] focus-visible:ring-[#0957a1]/20"
                  />
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-4">
                {summaryItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="flex items-center gap-1 text-[#424242] transition-all duration-200 hover:opacity-75 active:scale-95"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
                {onViewSelected && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onViewSelected}
                    className="h-[35px] rounded-[10px] border-[#0957a1] bg-[#eaf4fb] px-3 [font-family:'Roboto',Helvetica] text-sm font-medium text-[#0957a1] transition-all duration-200 hover:bg-[#d2e3fc] active:scale-[0.97]"
                  >
                    View Selected
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[13px]">
              {sectionVisible ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded((previous) => !previous)}
                    aria-expanded={expanded}
                    className="flex w-full items-center gap-[7px] rounded-[10px] border border-gray-200 bg-[#f8fafd] p-2.5 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
                  >
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-[#424242] transition-transform duration-300 ${expanded ? "rotate-0" : "-rotate-90"}`}
                    />
                    <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242]">
                      1.
                    </span>
                    <span className="min-w-0 flex-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#424242]">
                      Section 1
                    </span>
                    <span className="flex shrink-0 flex-wrap items-center justify-end gap-1.5 sm:gap-4">
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

                  <div className={`flex flex-col gap-[13px] overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={onAddQuestion}
                      className="h-11 w-full rounded-[10px] bg-[#ebfaf0] px-4 text-center [font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-[#424242] transition-all duration-200 hover:bg-[#d4f4de] active:scale-[0.99]"
                    >
                      <PlusIcon className="mr-1 h-4 w-4" />
                      Add Question
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-11 w-full rounded-[10px] bg-[#d2e3fc] px-4 text-center [font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8d3fb] active:scale-[0.99]"
                    >
                      <PlusIcon className="mr-1 h-4 w-4" />
                      Add Section
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex h-28 items-center justify-center rounded-[10px] border border-dashed border-gray-300 text-center [font-family:'Roboto',Helvetica] text-sm text-gray-500">
                  No sections match your search.
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
