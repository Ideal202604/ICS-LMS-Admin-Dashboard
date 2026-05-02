import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuIcon, X, SearchIcon, BellIcon, ChevronDownIcon, ZapIcon } from "lucide-react";
import { useSidebar, SIDEBAR_EXPANDED, SIDEBAR_COLLAPSED, NAVBAR_HEIGHT } from "./AppLayout";

/* ─── Search catalogue ───────────────────────────────────────────────────── */
const SEARCH_ITEMS = [
  { label: "Dashboard",         path: "/",                  keywords: "home overview stats analytics" },
  { label: "Courses",           path: "/courses",           keywords: "lessons curriculum content video" },
  { label: "Live Classes",      path: "/live-classes",      keywords: "live session webinar stream" },
  { label: "Mock Test",         path: "/mock-test",         keywords: "practice exam quiz assessment" },
  { label: "Test Series",       path: "/test-series",       keywords: "series set exam tests batch" },
  { label: "Bundles",           path: "/bundles",           keywords: "bundle pack collection group combo" },
  { label: "Poll",              path: "/poll",              keywords: "poll vote survey opinion" },
  { label: "Tracks",            path: "/tracks",            keywords: "track learning path roadmap journey" },
  { label: "Code",              path: "/code",              keywords: "code coupon discount promo voucher" },
  { label: "More Products",     path: "/more-products",     keywords: "products extra additional tools" },
  { label: "Question Pool",     path: "/question-pool",     keywords: "questions bank pool items mcq" },
  { label: "Classification",    path: "/classification",    keywords: "category classification tag label" },
  { label: "Utilities",         path: "/utilities",         keywords: "utility tools settings configure" },
  { label: "Learner Support",   path: "/export",            keywords: "learner support export requests help" },
  { label: "Fill Info",         path: "/fill-info",         keywords: "fill info course content sections" },
  { label: "Create Live Class", path: "/create-live-class", keywords: "create live class schedule new event" },
  { label: "Mock Test Listing", path: "/mock-test-listing", keywords: "mock test listing table sessions courses" },
];

function matchItems(query: string) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return SEARCH_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
  ).slice(0, 7);
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-[#d1e9ff] text-[#0957a1] rounded px-[2px] not-italic">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export const SharedTopNav = (): JSX.Element => {
  const [searchFocused,    setSearchFocused]    = useState(false);
  const [searchValue,      setSearchValue]      = useState("");
  const [activeIndex,      setActiveIndex]      = useState(-1);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const navigate = useNavigate();
  const { openMobile, toggleCollapsed, collapsed } = useSidebar();
  const inputRef       = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const wrapperRef     = useRef<HTMLDivElement>(null);

  const results      = matchItems(searchValue);
  const showDropdown = (searchFocused || mobileSearchOpen) && searchValue.trim().length > 0;

  useEffect(() => { setActiveIndex(-1); }, [searchValue]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (mobileSearchOpen) {
      setTimeout(() => mobileInputRef.current?.focus(), 50);
    }
  }, [mobileSearchOpen]);

  const handleSelect = useCallback((path: string) => {
    setSearchValue("");
    setSearchFocused(false);
    setMobileSearchOpen(false);
    navigate(path);
  }, [navigate]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((p) => Math.min(p + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((p) => Math.max(p - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && results[activeIndex]) {
        handleSelect(results[activeIndex].path);
      } else if (results.length === 1) {
        handleSelect(results[0].path);
      }
    } else if (e.key === "Escape") {
      setSearchFocused(false);
      setMobileSearchOpen(false);
      setSearchValue("");
    }
  };

  return (
    <>
      {/* ── Fixed top navbar ── */}
      <header
        className="fixed left-0 right-0 top-0 z-50 w-full bg-white"
        style={{
          height: NAVBAR_HEIGHT,
          boxShadow: "0px 1px 0px rgba(0,0,0,0.08), 0px 2px 8px rgba(0,0,0,0.06)",
        }}
      >
        <div className="flex h-full w-full items-stretch">

          {/* ── Logo panel — matches sidebar width, blue background ── */}
          <div
            className={[
              "hidden lg:flex shrink-0 items-center justify-center bg-[#0957a1]",
              "transition-[width] duration-300 ease-in-out",
            ].join(" ")}
            style={{ width: collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED }}
          >
            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Go to dashboard"
              className="flex items-center justify-center focus:outline-none group"
            >
              {collapsed ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 transition-all duration-200 group-hover:bg-white/30">
                  <span className="[font-family:'Roboto',Helvetica] text-sm font-bold text-white">I</span>
                </div>
              ) : (
                <img
                  className="w-[130px] h-auto object-contain transition-all duration-300"
                  alt="ICS Global"
                  src="https://c.animaapp.com/mol95gzyy8OtNf/img/ics-global-white-1.svg"
                />
              )}
            </button>
          </div>

          {/* ── Main nav bar ── */}
          <div className="flex flex-1 items-center justify-between gap-3 px-3 sm:px-4 lg:px-5">

            {/* LEFT: hamburger + mobile brand */}
            <div className="flex shrink-0 items-center gap-2">
              {/* Desktop sidebar toggle */}
              <button
                type="button"
                aria-label="Toggle sidebar"
                onClick={toggleCollapsed}
                className="hidden lg:inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-700 active:scale-95"
              >
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" aria-hidden="true">
                  <rect y="0"  width="16" height="2" rx="1" fill="currentColor"/>
                  <rect y="5.5"  width="10" height="2" rx="1" fill="currentColor"/>
                  <rect y="11" width="16" height="2" rx="1" fill="currentColor"/>
                </svg>
              </button>

              {/* Mobile hamburger */}
              <button
                type="button"
                aria-label="Open navigation"
                onClick={openMobile}
                className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-gray-100 active:scale-95"
              >
                <MenuIcon className="h-5 w-5" />
              </button>

              {/* Mobile brand logo */}
              <button
                type="button"
                onClick={() => navigate("/")}
                aria-label="Home"
                className="lg:hidden flex items-center gap-2"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#0957a1]">
                  <span className="[font-family:'Roboto',Helvetica] text-xs font-bold text-white">I</span>
                </div>
                <span className="[font-family:'Roboto',Helvetica] text-sm font-semibold text-[#0957a1]">
                  ICS Global
                </span>
              </button>
            </div>

            {/* CENTER: Desktop search bar */}
            <form
              className="hidden lg:flex min-w-0 flex-1 max-w-[440px]"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                if (results.length > 0)
                  handleSelect(results[activeIndex >= 0 ? activeIndex : 0].path);
              }}
            >
              <div ref={wrapperRef} className="relative w-full">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
                <input
                  ref={inputRef}
                  type="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-label="Search pages"
                  aria-autocomplete="list"
                  aria-expanded={showDropdown}
                  placeholder="Search..."
                  onFocus={() => setSearchFocused(true)}
                  className="h-9 w-full rounded-lg border border-gray-200 bg-gray-50 pl-9 pr-8
                             [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-600
                             placeholder:text-gray-400 outline-none
                             transition-all duration-200
                             focus:border-[#0957a1]/40 focus:bg-white focus:ring-2 focus:ring-[#0957a1]/10"
                />
                {searchValue && (
                  <button
                    type="button"
                    aria-label="Clear search"
                    onClick={() => { setSearchValue(""); inputRef.current?.focus(); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}

                {/* Desktop dropdown */}
                {showDropdown && searchFocused && (
                  <div
                    role="listbox"
                    className="absolute left-0 right-0 top-[44px] z-50 rounded-xl border border-gray-200 bg-white shadow-xl overflow-hidden"
                  >
                    <SearchDropdown
                      results={results}
                      query={searchValue}
                      activeIndex={activeIndex}
                      onSelect={handleSelect}
                      onHover={setActiveIndex}
                    />
                  </div>
                )}
              </div>
            </form>

            {/* RIGHT: action buttons */}
            <nav aria-label="Header actions" className="flex shrink-0 items-center gap-1.5">

              {/* Mobile search trigger */}
              <button
                type="button"
                aria-label="Search"
                onClick={() => setMobileSearchOpen(true)}
                className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-gray-100 active:scale-95"
              >
                <SearchIcon className="h-4 w-4" />
              </button>

              {/* Upgrade button */}
              <button
                type="button"
                className="hidden sm:inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#0957a1] px-3.5
                           [font-family:'Roboto',Helvetica] text-sm font-semibold text-white
                           transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.97] whitespace-nowrap"
              >
                <ZapIcon className="h-3.5 w-3.5" />
                <span>Upgrade</span>
              </button>

              {/* View As Learner */}
              <button
                type="button"
                className="hidden md:inline-flex h-8 items-center rounded-lg border border-[#0957a1]/20 bg-[#ecf5fe] px-3.5
                           [font-family:'Roboto',Helvetica] text-sm font-medium text-[#0957a1]
                           transition-all duration-200 hover:bg-[#d1e9ff] active:scale-[0.97] whitespace-nowrap"
              >
                View As Learner
              </button>

              {/* Help */}
              <button
                type="button"
                className="hidden xl:inline-flex h-8 items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5
                           [font-family:'Roboto',Helvetica] text-sm font-medium text-gray-600
                           transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.97]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>
                </svg>
                <span>Help</span>
              </button>

              {/* Notifications */}
              <button
                type="button"
                aria-label="Notifications"
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-gray-100 active:scale-95"
              >
                <BellIcon className="h-5 w-5" />
                <span
                  className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#f7b902] ring-2 ring-white"
                  aria-label="New notifications"
                />
              </button>

              {/* Profile avatar */}
              <button
                type="button"
                aria-label="Profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0957a1] font-semibold text-white text-sm
                           shadow-sm transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-95
                           [font-family:'Roboto',Helvetica]"
              >
                J
              </button>

              {/* Dropdown chevron */}
              <button
                type="button"
                aria-label="User menu"
                className="hidden sm:inline-flex h-8 w-6 items-center justify-center rounded text-gray-400 transition-colors hover:text-gray-600"
              >
                <ChevronDownIcon className="h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen search overlay ── */}
      <div
        className={[
          "fixed inset-0 z-[60] bg-white lg:hidden",
          "flex flex-col transition-all duration-300 ease-in-out",
          mobileSearchOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none",
        ].join(" ")}
        style={{ height: "100dvh" }}
      >
        <div className="flex h-14 items-center gap-3 border-b border-gray-100 px-4 shrink-0">
          <SearchIcon className="h-4 w-4 shrink-0 text-gray-400" />
          <input
            ref={mobileInputRef}
            type="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search pages…"
            className="flex-1 [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-700 placeholder:text-gray-400 outline-none bg-transparent"
          />
          <button
            type="button"
            onClick={() => { setMobileSearchOpen(false); setSearchValue(""); }}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {searchValue.trim() ? (
            <SearchDropdown
              results={results}
              query={searchValue}
              activeIndex={activeIndex}
              onSelect={handleSelect}
              onHover={setActiveIndex}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 py-16 text-center px-6">
              <SearchIcon className="h-8 w-8 text-gray-200" />
              <p className="[font-family:'Roboto',Helvetica] text-sm font-medium text-gray-400 mt-1">
                Start typing to search pages
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

/* ─── Search dropdown ────────────────────────────────────────────────────── */
interface SearchDropdownProps {
  results:     typeof SEARCH_ITEMS;
  query:       string;
  activeIndex: number;
  onSelect:    (path: string) => void;
  onHover:     (i: number) => void;
}

function SearchDropdown({ results, query, activeIndex, onSelect, onHover }: SearchDropdownProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center gap-1 py-8 text-center px-4">
        <SearchIcon className="h-5 w-5 text-gray-300 mb-1" />
        <p className="[font-family:'Roboto',Helvetica] text-sm font-medium text-gray-500">
          No results for &ldquo;{query}&rdquo;
        </p>
        <p className="text-xs text-gray-400">Try &ldquo;courses&rdquo; or &ldquo;mock test&rdquo;</p>
      </div>
    );
  }
  return (
    <>
      <p className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 border-b border-gray-100">
        Pages
      </p>
      <ul>
        {results.map((item, i) => (
          <li key={item.path} role="option" aria-selected={i === activeIndex}>
            <button
              type="button"
              onMouseDown={(e) => { e.preventDefault(); onSelect(item.path); }}
              onMouseEnter={() => onHover(i)}
              className={[
                "flex w-full items-center gap-3 px-4 py-2.5 text-left",
                "[font-family:'Roboto',Helvetica] text-sm font-medium",
                "transition-colors duration-100",
                i === activeIndex
                  ? "bg-[#e8f3ff] text-[#0957a1]"
                  : "text-gray-700 hover:bg-gray-50",
              ].join(" ")}
            >
              <SearchIcon className="h-3.5 w-3.5 shrink-0 opacity-30" />
              <Highlight text={item.label} query={query} />
              <span className="ml-auto text-xs text-gray-400 font-normal truncate max-w-[100px]">
                {item.path === "/" ? "home" : item.path.replace("/", "")}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
