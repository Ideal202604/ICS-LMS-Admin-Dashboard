import {
  AppWindowIcon,
  BarChart3Icon,
  BriefcaseIcon,
  ChevronDownIcon,
  GraduationCapIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MegaphoneIcon,
  PackageIcon,
  PlusSquareIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SquareStackIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";

const primaryItems = [
  { label: "Get Started", icon: TrendingUpIcon, route: "/" },
  { label: "Dashboard", icon: LayoutDashboardIcon, route: "/" },
];

const productItems = [
  { label: "Courses", route: "/courses" },
  { label: "Live Classes", route: "/live-classes" },
  { label: "Mock Test", route: "/mock-test" },
  { label: "Question Editor", route: "/mock-test-question-editor" },
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
  { label: "Website & Apps", icon: AppWindowIcon, route: "/" },
  { label: "Community", icon: UsersIcon, route: "/" },
  { label: "Marketing", icon: MegaphoneIcon, route: "/" },
  { label: "Sales", icon: BarChart3Icon, route: "/" },
  { label: "Users", icon: UserIcon, route: "/" },
  { label: "Reports", icon: BarChart3Icon, route: "/" },
  { label: "Manage", icon: BriefcaseIcon, route: "/" },
  { label: "Add - Ons", icon: PlusSquareIcon, route: "/" },
  { label: "Security", icon: ShieldIcon, route: "/" },
  { label: "Sub Schools", icon: GraduationCapIcon, route: "/" },
  { label: "Settings", icon: SettingsIcon, route: "/", noChevron: true },
];

export const AppNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const navigateTo = (route: string) => navigate(route);

  const filteredProductItems = productItems.filter((item) =>
    item.label.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <aside className="relative flex h-full min-h-screen w-[292px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex flex-1 flex-col px-2 pt-[17px]">
        <header className="flex flex-col gap-[26px] px-2 pb-5">
          <button type="button" onClick={() => navigateTo("/")} className="w-full max-w-[248px] transition-opacity duration-200 hover:opacity-90">
            <img
              className="w-full"
              alt="ICS global white"
              src="https://c.animaapp.com/moqo91i5jG62g8/img/ics-global-white-1.svg"
            />
          </button>
          <div className="relative w-full max-w-[248px]">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
              className="h-[44px] rounded-[10px] border-gray-300 bg-[#ffffff45] pl-10 text-base leading-6 text-white placeholder:text-white [font-family:'Inter',Helvetica] shadow-shadow-xs transition-all duration-200 focus:bg-white/25 focus-visible:ring-white/40"
            />
          </div>
        </header>

        <div className="relative flex-1">
          <ScrollArea className="h-[calc(100vh-140px)] pr-3">
            <nav className="flex flex-col gap-1 px-2 pb-6" aria-label="Application navigation">
              {primaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    onClick={() => navigateTo(item.route)}
                    className="h-11 justify-start rounded-[10px] bg-transparent px-3 py-2 text-left text-white transition-all duration-200 hover:bg-[#ffffff12] hover:text-white active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                        {item.label}
                      </span>
                    </span>
                  </Button>
                );
              })}

              <Accordion type="single" defaultValue="products" collapsible className="w-full">
                <AccordionItem value="products" className="border-none">
                  <AccordionTrigger className="h-11 rounded-[10px] bg-white px-3 py-2 text-[#0957a1] transition-all duration-200 hover:no-underline [&[data-state=open]>svg]:text-[#0957a1]">
                    <span className="flex items-center gap-2">
                      <PackageIcon className="h-5 w-5" />
                      <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                        Products
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-1">
                    <div className="flex flex-col gap-1">
                      {filteredProductItems.map((item) => {
                        const isActive = location.pathname === item.route && item.route !== "/";
                        return (
                          <Button
                            key={item.label}
                            type="button"
                            variant="ghost"
                            onClick={() => navigateTo(item.route)}
                            className={`h-11 w-full justify-start rounded-[10px] px-3 py-2 text-left transition-all duration-200 hover:text-white active:scale-[0.98] ${
                              isActive
                                ? "bg-[#003261b2] text-white hover:bg-[#003261b2]"
                                : "bg-transparent text-white hover:bg-[#ffffff12]"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <SquareStackIcon className="h-5 w-5 opacity-90" />
                              <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                                {item.label}
                              </span>
                            </span>
                          </Button>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {secondaryItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    onClick={() => navigateTo(item.route)}
                    className="h-11 justify-between rounded-[10px] bg-transparent px-3 py-2 text-left text-white transition-all duration-200 hover:bg-[#ffffff12] hover:text-white active:scale-[0.98]"
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-5 w-5" />
                      <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                        {item.label}
                      </span>
                    </span>
                    {!item.noChevron && <ChevronDownIcon className="h-5 w-5" />}
                  </Button>
                );
              })}
            </nav>
          </ScrollArea>

          <div className="pointer-events-none absolute right-[4px] top-[86px] hidden h-[668px] w-2 flex-col justify-between rounded-[100px] bg-[#003261] md:flex">
            <div className="mt-1 flex h-[123px] w-2 flex-col items-start gap-[3px]">
              <img className="h-[5.5px] w-full" alt="Polygon" src="https://c.animaapp.com/moqo91i5jG62g8/img/polygon-1.svg" />
              <div className="h-28 w-full rounded-[100px] bg-[#cdcdcd]" />
            </div>
            <img className="mb-0.5 ml-[0.9px] h-[5.5px] w-[6.2px]" alt="Polygon" src="https://c.animaapp.com/moqo91i5jG62g8/img/polygon-2.svg" />
          </div>
        </div>
      </div>

      <footer className="mt-auto px-3 pb-2 pt-6">
        <Button
          type="button"
          variant="ghost"
          className="h-11 w-full justify-start rounded-[10px] bg-transparent px-3 py-2 text-white transition-all duration-200 hover:bg-[#ffffff12] hover:text-white active:scale-[0.98]"
        >
          <span className="flex items-center gap-2">
            <LogOutIcon className="h-5 w-5" />
            <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
              Log out
            </span>
          </span>
        </Button>
      </footer>
    </aside>
  );
};
