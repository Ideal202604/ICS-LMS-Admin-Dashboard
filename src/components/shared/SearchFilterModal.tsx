import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

/* ─── Searchable pages catalogue ─────────────────────────────────── */
const FILTER_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "content", label: "Content" },
  { id: "assessment", label: "Assessment" },
  { id: "management", label: "Management" },
  { id: "tools", label: "Tools" },
] as const;

type CategoryId = (typeof FILTER_CATEGORIES)[number]["id"];

interface SearchItem {
  label: string;
  path: string;
  keywords: string;
  category: CategoryId;
}

const SEARCH_ITEMS: SearchItem[] = [
  { label: "Dashboard", path: "/", keywords: "home overview stats analytics", category: "management" },
  { label: "Courses", path: "/courses", keywords: "lessons curriculum content video", category: "content" },
  { label: "Live Classes", path: "/live-classes", keywords: "live session webinar stream", category: "content" },
  { label: "Mock Test", path: "/mock-test", keywords: "practice exam quiz assessment", category: "assessment" },
  { label: "Question Editor", path: "/mock-test-question-editor", keywords: "mock test question editor add questions", category: "assessment" },
  { label: "Test Series", path: "/test-series", keywords: "series set exam tests batch", category: "assessment" },
  { label: "Bundles", path: "/bundles", keywords: "bundle pack collection group combo", category: "content" },
  { label: "Poll", path: "/poll", keywords: "poll vote survey opinion", category: "tools" },
  { label: "Tracks", path: "/tracks", keywords: "track learning path roadmap journey", category: "content" },
  { label: "Code", path: "/code", keywords: "code coupon discount promo voucher", category: "tools" },
  { label: "More Products", path: "/more-products", keywords: "products extra additional tools", category: "content" },
  { label: "Question Pool", path: "/question-pool", keywords: "questions bank pool items mcq", category: "assessment" },
  { label: "Classification", path: "/classification", keywords: "category classification tag label", category: "management" },
  { label: "Utilities", path: "/utilities", keywords: "utility tools settings configure", category: "tools" },
  { label: "Learner Support", path: "/export", keywords: "learner support export requests help", category: "management" },
  { label: "Create Course", path: "/create-course", keywords: "create new course content", category: "content" },
  { label: "Create Live Class", path: "/create-live-class", keywords: "create live class schedule new event", category: "content" },
  { label: "Mock Test Listing", path: "/mock-test-listing", keywords: "mock test listing table sessions", category: "assessment" },
  { label: "Mock Test Overview", path: "/mock-test-overview", keywords: "mock test overview details", category: "assessment" },
  { label: "Mock Test Builder", path: "/mock-test-builder", keywords: "mock test builder create", category: "assessment" },
  { label: "Survey Builder", path: "/mock-test-survey-builder", keywords: "survey form builder questions responses settings publish", category: "assessment" },
  { label: "Mock Test Editor", path: "/mock-test-editor", keywords: "mock test editor edit", category: "assessment" },
  { label: "Mock Test Form", path: "/mock-test-form", keywords: "mock test fill form builder", category: "assessment" },
];

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-[#d1e9ff] px-[2px] text-[#0957a1] not-italic">{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
}

/* ─── Category badge colors ──────────────────────────────────────── */
const CATEGORY_COLORS: Record<CategoryId, { bg: string; text: string }> = {
  all: { bg: "bg-gray-100", text: "text-gray-600" },
  content: { bg: "bg-blue-50", text: "text-blue-700" },
  assessment: { bg: "bg-emerald-50", text: "text-emerald-700" },
  management: { bg: "bg-amber-50", text: "text-amber-700" },
  tools: { bg: "bg-purple-50", text: "text-purple-700" },
};

/* ─── Component ──────────────────────────────────────────────────── */
interface SearchFilterModalProps {
  open: boolean;
  onClose: () => void;
}

export const SearchFilterModal = ({ open, onClose }: SearchFilterModalProps): JSX.Element => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeIndex, setActiveIndex] = useState(-1);

  // Focus input on open
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveCategory("all");
      setActiveIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const filteredResults = useMemo(() => {
    let items = SEARCH_ITEMS;
    if (activeCategory !== "all") {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (i) => i.label.toLowerCase().includes(q) || i.keywords.toLowerCase().includes(q)
      );
    }
    return items;
  }, [query, activeCategory]);

  // Reset active index on filter change
  useEffect(() => { setActiveIndex(-1); }, [query, activeCategory]);

  const handleSelect = useCallback(
    (path: string) => {
      onClose();
      navigate(path);
    },
    [navigate, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((p) => Math.min(p + 1, filteredResults.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((p) => Math.max(p - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && filteredResults[activeIndex]) {
        handleSelect(filteredResults[activeIndex].path);
      } else if (filteredResults.length === 1) {
        handleSelect(filteredResults[0].path);
      }
    }
  };

  const countByCategory = useMemo(() => {
    const counts: Record<CategoryId, number> = { all: SEARCH_ITEMS.length, content: 0, assessment: 0, management: 0, tools: 0 };
    SEARCH_ITEMS.forEach((item) => {
      counts[item.category]++;
    });
    return counts;
  }, []);

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-[577px] gap-0 rounded-[14px] border-0 bg-white p-0 shadow-[0px_24px_64px_rgba(0,0,0,0.20)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200 [&>button]:hidden overflow-hidden"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Search &amp; Filter</DialogTitle>

        {/* ── Search input — inspired by Figma reference ── */}
        <div className="relative border-b border-gray-200 bg-[#f3f3f3]">
          <img
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 opacity-60"
            alt="Search"
            src="https://c.animaapp.com/moqria3eJOcoRY/img/search.svg"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            aria-label="Search pages"
            aria-autocomplete="list"
            className="h-[52px] w-full border-0 bg-transparent pl-12 pr-14 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-700 placeholder:text-gray-500 outline-none transition-colors duration-200"
          />
          {query ? (
            <button
              type="button"
              onClick={() => { setQuery(""); inputRef.current?.focus(); }}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-all duration-200 hover:bg-gray-200 hover:text-gray-600 active:scale-90"
            >
              <X className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Filter"
              className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90"
            >
              <img
                className="h-6 w-6"
                alt="Filter"
                src="https://c.animaapp.com/moqria3eJOcoRY/img/mage-filter.svg"
              />
            </button>
          )}
        </div>

        {/* ── Category filter tabs ── */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-100 px-4 py-3 scrollbar-none">
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = cat.id === "all"
              ? (query.trim() ? filteredResults.length : countByCategory.all)
              : countByCategory[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={[
                  "flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5",
                  "[font-family:'Roboto',Helvetica] text-sm font-medium",
                  "transition-all duration-200 active:scale-[0.96]",
                  isActive
                    ? "bg-[#0957a1] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200",
                ].join(" ")}
              >
                <span>{cat.label}</span>
                <span
                  className={[
                    "inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-semibold",
                    isActive ? "bg-white/20 text-white" : "bg-white text-gray-500",
                  ].join(" ")}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Results list ── */}
        <div
          className="max-h-[360px] overflow-y-auto overscroll-contain"
          role="listbox"
        >
          {filteredResults.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-14 text-center">
              <SearchIcon className="h-8 w-8 text-gray-200" />
              <p className="[font-family:'Roboto',Helvetica] text-sm font-medium text-gray-400">
                No results found
              </p>
              <p className="[font-family:'Roboto',Helvetica] text-xs text-gray-300">
                Try a different keyword or category
              </p>
            </div>
          ) : (
            <ul className="py-1">
              {filteredResults.map((item, i) => {
                const isActive = i === activeIndex;
                const catColor = CATEGORY_COLORS[item.category];
                return (
                  <li key={item.path} role="option" aria-selected={isActive}>
                    <button
                      type="button"
                      onMouseDown={(e) => { e.preventDefault(); handleSelect(item.path); }}
                      onMouseEnter={() => setActiveIndex(i)}
                      className={[
                        "flex w-full items-center gap-3 px-4 py-3 text-left",
                        "transition-colors duration-100",
                        isActive ? "bg-[#f0f7ff]" : "hover:bg-gray-50",
                      ].join(" ")}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 transition-colors duration-150 group-hover:bg-gray-200">
                        <SearchIcon className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={["[font-family:'Roboto',Helvetica] text-sm font-medium", isActive ? "text-[#0957a1]" : "text-gray-700"].join(" ")}>
                          <Highlight text={item.label} query={query} />
                        </span>
                        <span className="ml-2 [font-family:'Roboto',Helvetica] text-xs text-gray-400">
                          {item.path === "/" ? "/" : item.path}
                        </span>
                      </div>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${catColor.bg} ${catColor.text}`}>
                        {item.category}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* ── Footer hint ── */}
        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/60 px-4 py-2.5">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[11px] text-gray-400 [font-family:'Roboto',Helvetica]">
              <kbd className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-gray-200 bg-white px-1 text-[10px] font-semibold text-gray-500 shadow-sm">↑</kbd>
              <kbd className="inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-gray-200 bg-white px-1 text-[10px] font-semibold text-gray-500 shadow-sm">↓</kbd>
              <span className="ml-0.5">navigate</span>
            </span>
            <span className="flex items-center gap-1 text-[11px] text-gray-400 [font-family:'Roboto',Helvetica]">
              <kbd className="inline-flex h-5 items-center justify-center rounded border border-gray-200 bg-white px-1.5 text-[10px] font-semibold text-gray-500 shadow-sm">↵</kbd>
              <span className="ml-0.5">select</span>
            </span>
            <span className="flex items-center gap-1 text-[11px] text-gray-400 [font-family:'Roboto',Helvetica]">
              <kbd className="inline-flex h-5 items-center justify-center rounded border border-gray-200 bg-white px-1.5 text-[10px] font-semibold text-gray-500 shadow-sm">esc</kbd>
              <span className="ml-0.5">close</span>
            </span>
          </div>
          <span className="text-[11px] text-gray-400 [font-family:'Roboto',Helvetica]">
            {filteredResults.length} result{filteredResults.length !== 1 ? "s" : ""}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};
