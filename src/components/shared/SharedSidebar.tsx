import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { useSidebar } from "./AppLayout";

const primaryItems = [
  {
    label: "Get Started",
    iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-trending-up.svg",
    iconAlt: "Trending up",
    route: "/",
  },
  {
    label: "Dashboard",
    iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-table.svg",
    iconAlt: "Dashboard table",
    route: "/",
  },
];

const productChildren = [
  { label: "Courses", route: "/courses" },
  { label: "Live Classes", route: "/live-classes" },
  { label: "Mock Test", route: "/mock-test" },
  { label: "Test Series", route: "/test-series" },
  { label: "Bundles", route: "/bundles" },
  { label: "Batch", route: "/" },
  { label: "Poll", route: "/poll" },
  { label: "Tracks", route: "/tracks" },
  { label: "Code", route: "/code" },
  { label: "More Products", route: "/more-products" },
  { label: "Question Pool", route: "/question-pool" },
  { label: "All Questions", route: "/" },
  { label: "Classification", route: "/classification" },
  { label: "Utilities", route: "/utilities" },
];

const secondaryItems = [
  { label: "Website & Apps", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-app-window.svg", iconAlt: "App window", route: "/" },
  { label: "Community", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-users.svg", iconAlt: "Users", route: "/" },
  { label: "Marketing", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-speakerphone.svg", iconAlt: "Speakerphone", route: "/" },
  { label: "Sales", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-chart-dots-2.svg", iconAlt: "Chart dots", route: "/" },
  { label: "Users", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-user.svg", iconAlt: "User", route: "/" },
  { label: "Reports", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-chart-bar.svg", iconAlt: "Chart bar", route: "/" },
  { label: "Manage", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-briefcase.svg", iconAlt: "Briefcase", route: "/" },
  { label: "Add - Ons", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-square-rounded-plus.svg", iconAlt: "Square plus", route: "/" },
  { label: "Security", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-shield-lock.svg", iconAlt: "Shield lock", route: "/" },
  { label: "Sub Schools", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-school.svg", iconAlt: "School", route: "/" },
  { label: "Settings", iconSrc: "https://c.animaapp.com/mojway8gcahMoK/img/setting.svg", iconAlt: "Settings", noChevron: true, route: "/" },
];

export const SharedSidebar = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
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
      style={{ width: collapsed ? 72 : 292 }}
      className={`
        fixed left-0 top-[84px] z-40 flex h-[calc(100vh-84px)] shrink-0 flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]
        transition-all duration-300 ease-in-out
        ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      aria-label="Main sidebar"
    >
      {/* ── Top: collapse toggle (desktop) or close (mobile) ── */}
      <div className={`flex items-center pt-3 pb-1 px-3 ${collapsed ? "justify-center" : "justify-between"}`}>
        {/* Logo on mobile inside sidebar */}
        {!collapsed && (
          <img
            className="h-6 w-auto lg:hidden"
            alt="ICS"
            src="https://c.animaapp.com/mojway8gcahMoK/img/ics-global-white-1.svg"
          />
        )}
        <div className={`flex items-center ${collapsed ? "" : "ml-auto"}`}>
          {/* Desktop collapse arrow */}
          <button
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={toggleCollapsed}
            className="hidden lg:flex h-7 w-7 items-center justify-center rounded-md text-white/70 transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95"
          >
            {collapsed ? (
              <ChevronRightIcon className="h-4 w-4" />
            ) : (
              <ChevronLeftIcon className="h-4 w-4" />
            )}
          </button>
          {/* Mobile close button */}
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={closeMobile}
            className="lg:hidden flex h-7 w-7 items-center justify-center rounded-md text-white/70 hover:bg-white/15 hover:text-white"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Search (hidden when collapsed) ── */}
      {!collapsed && (
        <div className="px-3 pt-1 pb-2">
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 opacity-80"
              alt="Search"
              src="https://c.animaapp.com/mojway8gcahMoK/img/search.svg"
            />
            <Input
              defaultValue=""
              placeholder="Search"
              className="h-[42px] rounded-[10px] border border-white/30 bg-white/20 pl-10 pr-3 [font-family:'Roboto',Helvetica] text-sm font-normal text-white placeholder:text-white/70 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-0 focus-visible:bg-white/25 focus-visible:border-white/50"
            />
          </div>
        </div>
      )}

      {/* ── Scrollable nav ── */}
      <ScrollArea className="min-h-0 flex-1">
        <nav
          className={`flex flex-col gap-0.5 pb-4 ${collapsed ? "px-1.5" : "px-3"}`}
          aria-label="Sidebar Navigation"
        >
          {/* Primary items */}
          {primaryItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNav(item.route)}
              title={collapsed ? item.label : undefined}
              className={`flex h-11 w-full items-center rounded-[10px] text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] group ${
                collapsed ? "justify-center px-0" : "gap-3 px-3"
              }`}
            >
              <img className="h-5 w-5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-200" alt={item.iconAlt} src={item.iconSrc} />
              {!collapsed && (
                <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0] truncate">
                  {item.label}
                </span>
              )}
            </button>
          ))}

          {/* Products accordion */}
          <div className="mt-0.5">
            {collapsed ? (
              <button
                type="button"
                title="Products"
                onClick={() => handleNav(isProductActive ? currentPath : "/courses")}
                className={`flex h-11 w-full items-center justify-center rounded-[10px] transition-all duration-200 active:scale-[0.98] ${
                  isProductActive ? "bg-white" : "hover:bg-white/10"
                }`}
              >
                <img
                  className="h-5 w-5 shrink-0"
                  alt="Products"
                  src="https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-box.svg"
                  style={isProductActive ? {} : { filter: "brightness(10)" }}
                />
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setProductsOpen((p) => !p)}
                  className={`flex h-11 w-full items-center justify-between rounded-[10px] px-3 transition-all duration-200 active:scale-[0.98] ${
                    isProductActive || productsOpen ? "bg-white hover:bg-white/95" : "bg-white/10 hover:bg-white/20"
                  }`}
                  aria-expanded={productsOpen}
                >
                  <span className="flex items-center gap-3">
                    <img
                      className="h-5 w-5 shrink-0"
                      alt="Products box"
                      src="https://c.animaapp.com/mojway8gcahMoK/img/tabler-icon-box.svg"
                    />
                    <span className={`[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0] ${
                      isProductActive || productsOpen ? "text-[#0957a1]" : "text-white"
                    }`}>
                      Products
                    </span>
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out ${
                      isProductActive || productsOpen ? "text-[#0957a1]" : "text-white"
                    } ${productsOpen ? "rotate-180" : "rotate-0"}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    productsOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-0.5 pl-3 pt-1">
                    {productChildren.map((item) => {
                      const isActive = currentPath === item.route && item.route !== "/";
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => handleNav(item.route)}
                          className={`flex h-9 w-full items-center rounded-[8px] px-4 text-left text-sm text-white transition-all duration-150 active:scale-[0.98] ${
                            isActive
                              ? "bg-[rgba(0,50,97,0.70)] font-semibold"
                              : "hover:bg-white/15 font-normal"
                          }`}
                        >
                          {isActive && (
                            <span className="mr-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white inline-block" />
                          )}
                          <span className="[font-family:'Inter',Helvetica] text-sm leading-5 tracking-[0] truncate">
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

          {/* Secondary nav items */}
          <div className="mt-1 flex flex-col gap-0.5">
            {secondaryItems.map((item) => (
              <button
                key={item.label}
                type="button"
                title={collapsed ? item.label : undefined}
                onClick={() => handleNav(item.route)}
                className={`flex h-11 w-full items-center rounded-[10px] px-3 text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] group ${
                  collapsed ? "justify-center px-0" : "justify-between"
                }`}
              >
                <span className={`flex items-center ${collapsed ? "" : "gap-3"}`}>
                  <img className="h-5 w-5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-200" alt={item.iconAlt} src={item.iconSrc} />
                  {!collapsed && (
                    <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0] truncate">
                      {item.label}
                    </span>
                  )}
                </span>
                {!collapsed && !item.noChevron && (
                  <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                )}
              </button>
            ))}
          </div>
        </nav>
      </ScrollArea>

      {/* ── Log out footer ── */}
      <div className="border-t border-white/10 px-3 py-3">
        <button
          type="button"
          title={collapsed ? "Log out" : undefined}
          className={`flex h-11 w-full items-center gap-3 rounded-[10px] px-3 text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] group ${
            collapsed ? "justify-center px-0" : ""
          }`}
        >
          <img
            className="h-5 w-5 shrink-0 opacity-90 group-hover:opacity-100 transition-opacity duration-200"
            alt="Log out"
            src="https://c.animaapp.com/mojway8gcahMoK/img/log-in-2.svg"
          />
          {!collapsed && (
            <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
              Log out
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};
