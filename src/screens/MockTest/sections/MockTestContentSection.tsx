import { useState } from "react";
import {
  BookOpenIcon,
  ChevronDownIcon,
  Clock3Icon,
  EyeOffIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { Input } from "../../../components/ui/input";

/* ─── Static data ────────────────────────────────────────────────────────── */
const statusBadges = [
  { label: "Published",  className: "bg-[#ebfaf0] text-[#00c950]" },
  { label: "Encrypted",  className: "bg-[#effaeb] text-[#218049]" },
];

const summaryItems = [
  {
    label: "0 Hidden Lessons",
    icon: <EyeOffIcon className="h-4 w-4 text-black" strokeWidth={1.75} />,
  },
  {
    label: "40 Lessons",
    icon: <BookOpenIcon className="h-4 w-4 text-black" strokeWidth={1.75} />,
  },
  {
    label: "31 Quizzes",
    icon: (
      <div
        className="h-4 w-4 bg-[url(https://c.animaapp.com/moldupsedovPq5/img/image-163.png)] bg-cover bg-center"
        aria-hidden="true"
      />
    ),
  },
  {
    label: "19 hrs 20 mins 24 secs",
    icon: <Clock3Icon className="h-4 w-4 text-black" strokeWidth={1.75} />,
  },
];

const initialLessonRows = [
  { id: 1, index: "1.", title: "Index",         lessons: "9 Lessons",  questions: "7 Questions"  },
  { id: 2, index: "2.", title: "Introduction",  lessons: "5 Lessons",  questions: "3 Questions"  },
  { id: 3, index: "3.", title: "Fundamentals",  lessons: "8 Lessons",  questions: "10 Questions" },
  { id: 4, index: "4.", title: "Advanced",      lessons: "6 Lessons",  questions: "5 Questions"  },
  { id: 5, index: "5.", title: "Practice",      lessons: "4 Lessons",  questions: "8 Questions"  },
  { id: 6, index: "6.", title: "Assessment",    lessons: "3 Lessons",  questions: "4 Questions"  },
  { id: 7, index: "7.", title: "Final Review",  lessons: "5 Lessons",  questions: "6 Questions"  },
];

const menuItems = [
  { label: "Edit Section",    action: "edit"    },
  { label: "Add Section",     action: "add"     },
  { label: "Add Lesson",      action: "lesson"  },
  { label: "Reorder Section", action: "reorder" },
  { label: "Move to Top",     action: "top"     },
  { label: "Move to Down",    action: "down"    },
  { label: "Delete",          action: "delete", danger: true },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export const MockTestContentSection = (): JSX.Element => {
  const [searchQuery,    setSearchQuery]    = useState("");
  const [expandedIds,    setExpandedIds]    = useState<Set<number>>(new Set());
  const [openMenuId,     setOpenMenuId]     = useState<number | null>(null);
  const [lessonRows,     setLessonRows]     = useState(initialLessonRows);

  const filtered = lessonRows.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id: number) =>
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const handleMenuAction = (action: string, rowId: number) => {
    setOpenMenuId(null);
    if (action === "delete") {
      setLessonRows((prev) => prev.filter((r) => r.id !== rowId));
    } else if (action === "top") {
      setLessonRows((prev) => {
        const idx = prev.findIndex((r) => r.id === rowId);
        if (idx <= 0) return prev;
        const next = [...prev];
        const [item] = next.splice(idx, 1);
        next.unshift(item);
        return next;
      });
    } else if (action === "down") {
      setLessonRows((prev) => {
        const idx = prev.findIndex((r) => r.id === rowId);
        if (idx === -1 || idx === prev.length - 1) return prev;
        const next = [...prev];
        const [item] = next.splice(idx, 1);
        next.splice(idx + 1, 0, item);
        return next;
      });
    }
  };

  const addSection = () => {
    const newId = Date.now();
    const newIdx = lessonRows.length + 1;
    setLessonRows((prev) => [
      ...prev,
      {
        id:        newId,
        index:     `${newIdx}.`,
        title:     "New Section",
        lessons:   "0 Lessons",
        questions: "0 Questions",
      },
    ]);
  };

  return (
    <section className="w-full px-2 pt-3 pb-8 md:px-4 lg:px-6">
      <Card className="w-full rounded-[10px] border border-gray-200 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-200 hover:shadow-[-2px_2px_8px_#00000030]">
        <CardContent className="flex flex-col gap-6 p-5 pt-8 sm:gap-8 sm:p-[21px] sm:pt-10">

          {/* ── Header row ── */}
          <header className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-col gap-1.5">
              <div className="flex flex-wrap items-center gap-2">
                {statusBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`inline-flex h-[26px] items-center justify-center rounded-[5px] px-2.5 [font-family:'Inter',Helvetica] text-xs font-normal leading-5 transition-opacity duration-200 hover:opacity-80 ${badge.className}`}
                  >
                    {badge.label}
                  </div>
                ))}
              </div>
              <h2 className="[font-family:'Inter',Helvetica] text-xl font-semibold leading-8 text-black sm:text-2xl">
                Research Writing &amp; Use of AI
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-2 pt-1">
              <button
                type="button"
                className="group h-auto transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                aria-label="View lesson settings"
              >
                <img
                  className="h-[35px] w-[115px]"
                  alt="Frame"
                  src="https://c.animaapp.com/moldupsedovPq5/img/frame-1321317618.svg"
                />
              </button>
            </div>
          </header>

          {/* ── Search + stats row ── */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full max-w-xs">
              <div className="relative">
                <SearchIcon
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                  strokeWidth={1.75}
                />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Lesson"
                  className="h-[41px] rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base text-gray-600 shadow-[var(--shadow-xs)] [font-family:'Inter',Helvetica] placeholder:text-gray-400 transition-all duration-200 focus-visible:border-[#0957a1]/40 focus-visible:ring-2 focus-visible:ring-[#0957a1]/10"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:gap-x-[17px]">
              {summaryItems.map((item) => (
                <div key={item.label} className="inline-flex items-center gap-[7px]">
                  {item.icon}
                  <span className="[font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-[#6b7280] whitespace-nowrap sm:text-base">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Lesson rows ── */}
          <div className="flex flex-col gap-[10px] sm:gap-[13px]">
            {filtered.length === 0 ? (
              <div className="flex items-center justify-center py-10 text-sm text-gray-400 [font-family:'Inter',Helvetica]">
                No lessons found for &ldquo;{searchQuery}&rdquo;
              </div>
            ) : (
              filtered.map((row) => {
                const isExpanded = expandedIds.has(row.id);
                const isMenuOpen = openMenuId === row.id;

                return (
                  <article
                    key={row.id}
                    className="group relative transition-all duration-200"
                  >
                    <div
                      className={[
                        "flex min-h-[37px] items-center gap-[7px] rounded-[10px] border bg-[#e4e9f299] px-2.5 py-2",
                        "transition-all duration-200",
                        "hover:bg-[#d8e2f5] hover:border-[#c5d3ea] hover:shadow-sm",
                        isExpanded ? "bg-[#d8e2f5] border-[#c5d3ea]" : "",
                      ].join(" ")}
                    >
                      <button
                        type="button"
                        onClick={() => toggleExpand(row.id)}
                        className="h-auto shrink-0 text-[#6b7280] transition-transform duration-200 hover:text-[#0957a1]"
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} section ${row.index}`}
                        aria-expanded={isExpanded}
                      >
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "rotate-0"}`}
                          strokeWidth={2}
                        />
                      </button>

                      <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#6b7280] whitespace-nowrap">
                        {row.index}
                      </span>

                      <h3 className="min-w-0 flex-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#6b7280] transition-colors duration-200 group-hover:text-[#374151]">
                        {row.title}
                      </h3>

                      <div className="ml-auto hidden items-center justify-end gap-1.5 sm:flex">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#6b7280] whitespace-nowrap">
                          {row.lessons}
                        </span>
                        <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#6b7280]">•</span>
                        <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#6b7280] whitespace-nowrap">
                          {row.questions}
                        </span>
                      </div>

                      {/* ── Context menu ── */}
                      <DropdownMenu
                        open={isMenuOpen}
                        onOpenChange={(open) => setOpenMenuId(open ? row.id : null)}
                      >
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            className="h-auto shrink-0 rounded p-0.5 transition-all duration-200 hover:bg-white/60 active:scale-95"
                            aria-label="Open section actions"
                          >
                            <img
                              className="h-5 w-5"
                              alt="Section actions"
                              src="https://c.animaapp.com/moldupsedovPq5/img/pepicons-pop-dots-y.svg"
                            />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          sideOffset={8}
                          className="w-[140px] rounded-md border border-gray-200 bg-white p-2 shadow-[0px_4px_12px_#00000025]"
                        >
                          {menuItems.map((item) => (
                            <DropdownMenuItem
                              key={item.label}
                              onSelect={() => handleMenuAction(item.action, row.id)}
                              className={[
                                "cursor-pointer rounded px-2 py-1.5 text-sm transition-colors duration-150",
                                item.danger
                                  ? "text-red-500 focus:bg-red-50 focus:text-red-600"
                                  : item.action === "edit"
                                  ? "text-[#0957a1] focus:bg-[#e8f3ff] focus:text-[#0957a1]"
                                  : "text-gray-700 focus:bg-gray-50",
                              ].join(" ")}
                            >
                              <span className="[font-family:'Inter',Helvetica] text-sm font-normal">
                                {item.label}
                              </span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* ── Expanded sub-content ── */}
                    <div
                      className={[
                        "overflow-hidden transition-all duration-300 ease-in-out",
                        isExpanded ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0",
                      ].join(" ")}
                    >
                      <div className="ml-8 rounded-[8px] border border-gray-100 bg-white px-4 py-3 shadow-[0px_1px_4px_#0000001a]">
                        <p className="[font-family:'Inter',Helvetica] text-sm text-gray-500">
                          {row.lessons} · {row.questions}
                        </p>
                        <div className="mt-2 flex gap-2">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-md bg-[#e8f3ff] px-3 py-1.5 text-xs font-medium text-[#0957a1] transition-all duration-200 hover:bg-[#d1e9ff] active:scale-95 [font-family:'Inter',Helvetica]"
                          >
                            <PlusIcon className="h-3 w-3" strokeWidth={2.5} />
                            Add Lesson
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1 rounded-md bg-[#ebfaf0] px-3 py-1.5 text-xs font-medium text-[#00c950] transition-all duration-200 hover:bg-[#d6f5e3] active:scale-95 [font-family:'Inter',Helvetica]"
                          >
                            <PlusIcon className="h-3 w-3" strokeWidth={2.5} />
                            Add Quiz
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>

          {/* ── Add Section button ── */}
          <button
            type="button"
            onClick={addSection}
            className="flex h-11 w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#ebfaf0] [font-family:'Inter',Helvetica] text-sm font-semibold text-[#1f2937] transition-all duration-200 hover:bg-[#d6f5e3] hover:shadow-sm active:scale-[0.99]"
          >
            <PlusIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
            <span>Add Section</span>
          </button>
        </CardContent>
      </Card>
    </section>
  );
};
