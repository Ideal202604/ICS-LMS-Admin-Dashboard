import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { useSidebar, NAVBAR_HEIGHT } from "./AppLayout";

/* ─── Icon CDN ──────────────────────────────────────────────────────────── */
const CDN = "https://c.animaapp.com/mol95gzyy8OtNf/img";

/* ─── Nav data ──────────────────────────────────────────────────────────── */
const primaryItems = [
  {
    label:   "Get Started",
    iconSrc: `${CDN}/tabler-icon-trending-up.svg`,
    iconAlt: "Trending up",
    route:   "/",
  },
  {
    label:   "Dashboard",
    iconSrc: `${CDN}/tabler-icon-table.svg`,
    iconAlt: "Dashboard",
    route:   "/",
  },
];

const productChildren = [
  { label: "Courses",         route: "/courses" },
  { label: "Live Classes",    route: "/live-classes" },
  { label: "Mock Test",       route: "/mock-test" },
  { label: "Mock Test Form",  route: "/mock-test-questions" },
  { label: "Mock Test Builder", route: "/mock-test-form-builder-figma" },
  { label: "Survey Builder", route: "/mock-test-survey-builder" },
  { label: "Question Editor", route: "/mock-test-question-editor" },
  { label: "Test Series",     route: "/test-series" },
  { label: "Bundles",         route: "/bundles" },
  { label: "Batch",           route: "/" },
  { label: "Poll",            route: "/poll" },
  { label: "Tracks",          route: "/tracks" },
  { label: "Code",            route: "/code" },
  { label: "More Products",   route: "/more-products" },
  { label: "Question Pool",   route: "/question-pool" },
  { label: "All Questions",   route: "/" },
  { label: "Classification",  route: "/classification" },
  { label: "Utilities",       route: "/utilities" },
  { label: "Learner Support", route: "/export" },
  { label: "Lesson Viewer",   route: "/lesson-viewer" },
];

const secondaryItems = [
  { label: "Website & Apps", iconSrc: `${CDN}/tabler-icon-app-window.svg`,          iconAlt: "App window",   route: "/" },
  { label: "Community",      iconSrc: `${CDN}/tabler-icon-users.svg`,                iconAlt: "Users",        route: "/" },
  { label: "Marketing",      iconSrc: `${CDN}/tabler-icon-speakerphone.svg`,         iconAlt: "Speakerphone", route: "/" },
  { label: "Sales",          iconSrc: `${CDN}/tabler-icon-chart-dots-2.svg`,         iconAlt: "Chart dots",   route: "/" },
  { label: "Users",          iconSrc: `${CDN}/tabler-icon-user.svg`,                 iconAlt: "User",         route: "/" },
  { label: "Reports",        iconSrc: `${CDN}/tabler-icon-chart-bar.svg`,            iconAlt: "Chart bar",    route: "/" },
  { label: "Manage",         iconSrc: `${CDN}/tabler-icon-briefcase.svg`,            iconAlt: "Briefcase",    route: "/" },
  { label: "Add - Ons",      iconSrc: `${CDN}/tabler-icon-square-rounded-plus.svg`,  iconAlt: "Square plus",  route: "/" },
  { label: "Security",       iconSrc: `${CDN}/tabler-icon-shield-lock.svg`,          iconAlt: "Shield lock",  route: "/" },
  { label: "Sub Schools",    iconSrc: `${CDN}/tabler-icon-school.svg`,               iconAlt: "School",       route: "/" },
  { label: "Settings",       iconSrc: `${CDN}/setting.svg`,                          iconAlt: "Settings",     route: "/", noChevron: true },
];

/* ─── SharedSidebar ─────────────────────────────────────────────────────── */
export const SharedSidebar = (): JSX.Element => {
  const navigate    = useNavigate();
  const location    = useLocation();
  const currentPath = location.pathname;
  const [productsOpen, setProductsOpen] = useState(true);
  const { collapsed, mobileOpen, closeMobile, toggleCollapsed } = useSidebar();

  const isProductActive = productChildren.some(
    (c) => c.route === currentPath && c.route !== "/"
  );

  const handleNav = (route: string) => {
    navigate(route);
    closeMobile();
  };

  return (
    <aside
      style={{
        width:  collapsed ? 64 : 240,
        top:    NAVBAR_HEIGHT,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
      className={[
        "fixed left-0 z-40 flex shrink-0 flex-col",
        "bg-[#0957a1] text-white",
        "shadow-[2px_0px_8px_rgba(0,0,0,0.15)]",
        "transition-[width,transform] duration-300 ease-in-out",
        mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
      ].join(" ")}
      aria-label="Main sidebar"
    >
      {/* ── HEADER ────────────────────────────────────────────────────── */}
      {!collapsed ? (
        <div className="flex flex-col gap-3 px-3 pb-3 pt-4 border-b border-white/10">
          {/* Top row: search + collapse button */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative flex-1">
              <img
                className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 z-10 opacity-60"
                alt="Search"
                src="https://c.animaapp.com/mol95gzyy8OtNf/img/search.svg"
              />
              <Input
                placeholder="Search"
                aria-label="Search"
                className="h-9 w-full rounded-lg border border-white/15 bg-white/10
                           pl-8 pr-3 [font-family:'Roboto',Helvetica] text-sm font-normal
                           text-white placeholder:text-white/50
                           transition-all duration-200
                           focus-visible:ring-1 focus-visible:ring-white/30 focus-visible:ring-offset-0
                           focus-visible:bg-white/15 focus-visible:border-white/25"
              />
            </div>
            {/* Collapse (desktop) */}
            <button
              type="button"
              aria-label="Collapse sidebar"
              onClick={toggleCollapsed}
              className="hidden lg:flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95"
            >
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            {/* Close (mobile) */}
            <button
              type="button"
              aria-label="Close sidebar"
              onClick={closeMobile}
              className="lg:hidden flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
            >
              <XIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 border-b border-white/10 py-3">
          <button
            type="button"
            aria-label="Expand sidebar"
            onClick={toggleCollapsed}
            className="hidden lg:flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeMobile}
            className="lg:hidden flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:bg-white/10 hover:text-white"
          >
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* ── SCROLLABLE NAV ──────────────────────────────────────────── */}
      <ScrollArea className="min-h-0 flex-1">
        <nav
          className={`flex flex-col pb-2 pt-2 ${collapsed ? "gap-1 px-1.5" : "gap-0.5 px-2"}`}
          aria-label="Sidebar Navigation"
        >
          {/* Primary: Get Started, Dashboard */}
          {primaryItems.map((item) => {
            const isActive = currentPath === item.route && item.route !== "/";
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNav(item.route)}
                title={collapsed ? item.label : undefined}
                className={[
                  "group flex h-10 w-full items-center rounded-lg text-white",
                  "transition-all duration-200 active:scale-[0.98]",
                  collapsed ? "justify-center px-0" : "gap-2.5 px-2.5",
                  isActive ? "bg-white/20 font-medium" : "hover:bg-white/10",
                ].join(" ")}
              >
                <img
                  className="h-[18px] w-[18px] shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  alt={item.iconAlt}
                  src={item.iconSrc}
                />
                {!collapsed && (
                  <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 truncate">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}

          {/* ── Products accordion ── */}
          <div className="mt-0.5">
            {collapsed ? (
              <button
                type="button"
                title="Products"
                onClick={() => handleNav(isProductActive ? currentPath : "/courses")}
                className={[
                  "flex h-10 w-full items-center justify-center rounded-lg",
                  "transition-all duration-200 active:scale-[0.98]",
                  isProductActive ? "bg-white shadow-sm" : "hover:bg-white/10",
                ].join(" ")}
              >
                <img
                  className="h-[18px] w-[18px] shrink-0"
                  alt="Products"
                  src={`${CDN}/tabler-icon-box.svg`}
                  style={isProductActive ? { filter: "invert(28%) sepia(98%) saturate(1500%) hue-rotate(196deg)" } : undefined}
                />
              </button>
            ) : (
              <>
                {/* Products toggle row */}
                <button
                  type="button"
                  onClick={() => setProductsOpen((p) => !p)}
                  aria-expanded={productsOpen}
                  className={[
                    "flex h-10 w-full items-center justify-between rounded-lg px-2.5",
                    "transition-all duration-200 active:scale-[0.98]",
                    isProductActive || productsOpen
                      ? "bg-white shadow-sm"
                      : "hover:bg-white/10",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-2.5">
                    <img
                      className="h-[18px] w-[18px] shrink-0"
                      alt="Products"
                      src={`${CDN}/tabler-icon-box.svg`}
                      style={
                        isProductActive || productsOpen
                          ? { filter: "invert(28%) sepia(98%) saturate(1500%) hue-rotate(196deg)" }
                          : undefined
                      }
                    />
                    <span
                      className={[
                        "[font-family:'Inter',Helvetica] text-sm font-semibold leading-5",
                        isProductActive || productsOpen ? "text-[#0957a1]" : "text-white",
                      ].join(" ")}
                    >
                      Products
                    </span>
                  </span>
                  <ChevronDownIcon
                    className={[
                      "h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out",
                      isProductActive || productsOpen ? "text-[#0957a1]" : "text-white/70",
                      productsOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  />
                </button>

                {/* Products children */}
                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    productsOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="flex flex-col gap-[1px] pl-3.5 pr-1 pt-0.5 pb-1">
                    {productChildren.map((item) => {
                      const isActive = currentPath === item.route && item.route !== "/";
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleNav(item.route)}
                          className={[
                            "group flex h-8 w-full items-center rounded-md px-2.5 text-left",
                            "transition-all duration-150 active:scale-[0.98]",
                            isActive
                              ? "bg-white/25 text-white font-semibold"
                              : "text-white/80 hover:bg-white/12 hover:text-white font-normal",
                          ].join(" ")}
                        >
                          {isActive && (
                            <span className="mr-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white inline-block flex-shrink-0" />
                          )}
                          <span className="[font-family:'Inter',Helvetica] text-[13px] leading-5 truncate">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ── Secondary nav ── */}
          <div className="mt-0.5 flex flex-col gap-0.5">
            {secondaryItems.map((item) => (
              <button
                key={item.label}
                type="button"
                title={collapsed ? item.label : undefined}
                onClick={() => handleNav(item.route)}
                className={[
                  "group flex h-10 w-full items-center rounded-lg text-white",
                  "transition-all duration-200 hover:bg-white/10 active:scale-[0.98]",
                  collapsed ? "justify-center px-0" : "justify-between px-2.5",
                ].join(" ")}
              >
                <span className={`flex items-center ${collapsed ? "" : "gap-2.5"}`}>
                  <img
                    className="h-[18px] w-[18px] shrink-0 opacity-75 group-hover:opacity-100 transition-opacity duration-200"
                    alt={item.iconAlt}
                    src={item.iconSrc}
                  />
                  {!collapsed && (
                    <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 truncate">
                      {item.label}
                    </span>
                  )}
                </span>
                {!collapsed && !item.noChevron && (
                  <ChevronDownIcon className="h-4 w-4 shrink-0 text-white/40 group-hover:text-white/70 transition-colors duration-200" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </ScrollArea>

      {/* ── LOG OUT ────────────────────────────────────────────────────── */}
      <div className={`border-t border-white/10 ${collapsed ? "px-1.5 py-2" : "px-2 py-2"}`}>
        <button
          type="button"
          title={collapsed ? "Log out" : undefined}
          className={[
            "group flex h-10 w-full items-center gap-2.5 rounded-lg text-white",
            "transition-all duration-200 hover:bg-white/10 active:scale-[0.98]",
            collapsed ? "justify-center px-0" : "px-2.5",
          ].join(" ")}
        >
          <img
            className="h-[18px] w-[18px] shrink-0 opacity-75 group-hover:opacity-100 transition-opacity duration-200"
            alt="Log out"
            src="https://c.animaapp.com/mol4q7i3vDM2gr/img/log-in-2.svg"
          />
          {!collapsed && (
            <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5">
              Log out
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
