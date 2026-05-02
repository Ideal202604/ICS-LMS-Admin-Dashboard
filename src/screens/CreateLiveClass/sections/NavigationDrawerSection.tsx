import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";

const CDN = "https://c.animaapp.com/monvhv9hfy2dO2/img";

const topLevelItems = [
  {
    label: "Get Started",
    icon: `${CDN}/tabler-icon-trending-up.svg`,
    alt: "Trending up",
    route: "/",
  },
  {
    label: "Dashboard",
    icon: `${CDN}/tabler-icon-table.svg`,
    alt: "Dashboard",
    route: "/",
  },
];

const productChildren = [
  { label: "Courses",        route: "/courses" },
  { label: "Live Classes",   route: "/live-classes" },
  { label: "Mock Test",      route: "/mock-test" },
  { label: "Test Series",    route: "/test-series" },
  { label: "Bundles",        route: "/bundles" },
  { label: "Batch",          route: "/" },
  { label: "Poll",           route: "/poll" },
  { label: "Tracks",         route: "/tracks" },
  { label: "Code",           route: "/code" },
  { label: "More Products",  route: "/more-products" },
  { label: "Question Pool",  route: "/question-pool" },
  { label: "All Questions",  route: "/" },
  { label: "Classification", route: "/classification" },
  { label: "Utilities",      route: "/utilities" },
];

const collapsibleSections = [
  { label: "Website & Apps", icon: `${CDN}/tabler-icon-app-window.svg`,         alt: "App window",   noChevron: false },
  { label: "Community",      icon: `${CDN}/tabler-icon-users.svg`,               alt: "Users",        noChevron: false },
  { label: "Marketing",      icon: `${CDN}/tabler-icon-speakerphone.svg`,        alt: "Speakerphone", noChevron: false },
  { label: "Sales",          icon: `${CDN}/tabler-icon-chart-dots-2.svg`,        alt: "Chart dots",   noChevron: false },
  { label: "Users",          icon: `${CDN}/tabler-icon-user.svg`,                alt: "User",         noChevron: false },
  { label: "Reports",        icon: `${CDN}/tabler-icon-chart-bar.svg`,           alt: "Chart bar",    noChevron: false },
  { label: "Manage",         icon: `${CDN}/tabler-icon-briefcase.svg`,           alt: "Briefcase",    noChevron: false },
  { label: "Add - Ons",      icon: `${CDN}/tabler-icon-square-rounded-plus.svg`, alt: "Square plus",  noChevron: false },
  { label: "Security",       icon: `${CDN}/tabler-icon-shield-lock.svg`,         alt: "Shield lock",  noChevron: false },
  { label: "Sub Schools",    icon: `${CDN}/tabler-icon-school.svg`,              alt: "School",       noChevron: false },
  { label: "Settings",       icon: `${CDN}/setting.svg`,                         alt: "Settings",     noChevron: true  },
];

export const NavigationDrawerSection = (): JSX.Element => {
  const navigate  = useNavigate();
  const location  = useLocation();
  const path      = location.pathname;
  const [productsOpen, setProductsOpen] = useState(true);

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[292px] shrink-0 flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="px-4 pb-3 pt-[17px]">
        <div className="flex flex-col gap-[26px]">
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Home"
            className="focus:outline-none w-fit"
          >
            <img
              className="w-[72px] max-w-full"
              alt="ICS Global"
              src={`${CDN}/ics-global-white-1.svg`}
            />
          </button>
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src={`${CDN}/search.svg`}
            />
            <Input
              placeholder="Search"
              aria-label="Search"
              className="h-[44px] rounded-[10px] border border-gray-300 bg-[#ffffff45] pl-10
                         [font-family:'Inter',Helvetica] text-base font-bold text-white
                         placeholder:text-white shadow-shadow-xs
                         focus-visible:ring-1 focus-visible:ring-white/50 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </header>

      {/* ── NAV SCROLL AREA ────────────────────────────────────────────── */}
      <div className="flex min-h-0 flex-1 gap-2 pr-1">
        <ScrollArea className="min-h-0 flex-1 px-4">
          <nav className="flex flex-col gap-1 pb-6 pt-5" aria-label="Sidebar Navigation">

            {/* Top-level items */}
            {topLevelItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                onClick={() => navigate(item.route)}
                className="h-auto justify-start rounded-[10px] px-3 py-3 text-left
                           transition-all duration-150 hover:bg-white/10 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <img className="h-5 w-5 shrink-0" alt={item.alt} src={item.icon} />
                  <span className="[font-family:'Inter',Helvetica] text-sm font-bold leading-5 text-white">
                    {item.label}
                  </span>
                </span>
              </Button>
            ))}

            {/* ── Products accordion ── */}
            <Button
              type="button"
              variant="ghost"
              onClick={() => setProductsOpen((p) => !p)}
              aria-expanded={productsOpen}
              className="h-auto justify-between rounded-[10px] bg-white px-3 py-3 text-left
                         transition-all duration-200 hover:bg-white/95 active:scale-[0.98]"
            >
              <span className="flex items-center gap-2">
                <img
                  className="h-5 w-5 shrink-0"
                  alt="Products"
                  src={`${CDN}/tabler-icon-box.svg`}
                  style={{ filter: "invert(28%) sepia(98%) saturate(1500%) hue-rotate(196deg)" }}
                />
                <span className="[font-family:'Inter',Helvetica] text-sm font-bold leading-5 text-[#0957a1]">
                  Products
                </span>
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-[#0957a1] transition-transform duration-300 ${productsOpen ? "rotate-180" : "rotate-0"}`}
              />
            </Button>

            {/* Products children */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${productsOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-[2px] pl-4 pt-1">
                {productChildren.map((item) => {
                  const isActive = path === item.route && item.route !== "/";
                  return (
                    <Button
                      key={item.label}
                      type="button"
                      variant="ghost"
                      onClick={() => navigate(item.route)}
                      className={`h-auto w-full justify-start rounded-[10px] px-3 py-3 text-left
                                  transition-all duration-150 hover:bg-white/10 active:scale-[0.98]
                                  ${isActive ? "bg-[#003261b2]" : "bg-transparent"}`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white shrink-0" />
                        )}
                        {!isActive && <span className="block h-5 w-5 shrink-0" aria-hidden="true" />}
                        <span className="[font-family:'Inter',Helvetica] text-sm font-bold leading-5 text-white truncate">
                          {item.label}
                        </span>
                      </span>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* ── Collapsible sections ── */}
            {collapsibleSections.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                className="h-auto justify-between rounded-[10px] px-3 py-3 text-left
                           transition-all duration-150 hover:bg-white/10 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  <img className="h-5 w-5 shrink-0" alt={item.alt} src={item.icon} />
                  <span className="[font-family:'Inter',Helvetica] text-sm font-bold leading-5 text-white">
                    {item.label}
                  </span>
                </span>
                {!item.noChevron && (
                  <ChevronDownIcon className="h-5 w-5 text-white/70 transition-transform duration-200 hover:text-white" />
                )}
              </Button>
            ))}
          </nav>
        </ScrollArea>

        {/* ── Custom scrollbar track ── */}
        <div className="flex w-2 shrink-0 flex-col items-center rounded-[100px] bg-[#003261] py-1">
          <img
            className="h-[5.5px] w-full"
            alt=""
            src={`${CDN}/polygon-1.svg`}
            aria-hidden="true"
          />
          <div className="mt-[3px] h-28 w-full rounded-[100px] bg-[#cdcdcd]" />
          <div className="flex-1" />
          <img
            className="mb-0.5 h-[5.5px] w-[6.2px]"
            alt=""
            src={`${CDN}/polygon-2.svg`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ── LOG OUT FOOTER ─────────────────────────────────────────────── */}
      <footer className="px-3 pb-6 pt-4">
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-start rounded-[10px] px-3 py-3 text-left
                     transition-all duration-150 hover:bg-white/10 active:scale-[0.98]"
        >
          <span className="flex items-center gap-2">
            <img
              className="h-5 w-5 shrink-0"
              alt="Log out"
              src={`${CDN}/log-in-2.svg`}
            />
            <span className="[font-family:'Inter',Helvetica] text-sm font-bold leading-5 text-white">
              Log out
            </span>
          </span>
        </Button>
      </footer>
    </aside>
  );
};
