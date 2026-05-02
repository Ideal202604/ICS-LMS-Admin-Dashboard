import {
  AppWindowIcon,
  BarChart3Icon,
  BoxesIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  LogOutIcon,
  MegaphoneIcon,
  PackageIcon,
  PlusSquareIcon,
  SchoolIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  Table2Icon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";

const topItems = [
  { label: "Get Started", icon: TrendingUpIcon, expandable: false },
  { label: "Dashboard", icon: Table2Icon, expandable: false },
];

const productChildren = [
  "Courses",
  "Live Classes",
  "Mock Test",
  "Test Series",
  "Bundles",
  "Batch",
  "Poll",
  "Tracks",
  "Code",
  "More Products",
  "Question Pool",
  "All Questions",
  "Classification",
  "Utilities",
];

const bottomSections = [
  { label: "Website & Apps", icon: AppWindowIcon, expandable: true },
  { label: "Community", icon: UsersIcon, expandable: true },
  { label: "Marketing", icon: MegaphoneIcon, expandable: true },
  { label: "Sales", icon: BarChart3Icon, expandable: true },
  { label: "Users", icon: UserIcon, expandable: true },
  { label: "Reports", icon: BarChart3Icon, expandable: true },
  { label: "Manage", icon: BriefcaseIcon, expandable: true },
  { label: "Add - Ons", icon: PlusSquareIcon, expandable: true },
  { label: "Security", icon: ShieldIcon, expandable: true },
  { label: "Sub Schools", icon: SchoolIcon, expandable: true },
  { label: "Settings", icon: SettingsIcon, expandable: false },
];

export const SideNavigationSection = (): JSX.Element => {
  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <header className="px-[10px] pt-3 pb-3">
        <div className="flex flex-col gap-[18px]">
          <img
            className="h-auto w-[64px]"
            alt="Ics global white"
            src="https://c.animaapp.com/mol3ctq1Lfia5W/img/ics-global-white-1.svg"
          />
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/80" />
            <Input
              defaultValue=""
              aria-label="Search"
              placeholder="Search"
              className="h-7 rounded-md border border-gray-300 bg-[#ffffff45] pl-8 pr-3 text-[10px] text-white placeholder:text-white/80 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </header>
      <div className="flex min-h-0 flex-1">
        <ScrollArea className="min-h-0 flex-1 px-[10px] pb-4">
          <nav className="flex flex-col gap-1 pt-1">
            {topItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="h-auto justify-start rounded-[10px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
                      {item.label}
                    </span>
                  </span>
                </Button>
              );
            })}
            <div className="mt-1 flex flex-col gap-1">
              <Button
                variant="ghost"
                className="h-auto justify-start rounded-[10px] bg-white px-2 py-[7px] text-[#0957a1] hover:bg-white hover:text-[#0957a1]"
              >
                <span className="flex min-w-0 flex-1 items-center gap-2">
                  <PackageIcon className="h-3.5 w-3.5" />
                  <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
                    Products
                  </span>
                </span>
                <ChevronDownIcon className="h-3.5 w-3.5" />
              </Button>
              <div className="flex flex-col gap-1">
                {productChildren.map((item, index) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className={`h-auto justify-start rounded-[10px] px-2 py-[7px] text-white hover:bg-[#003261b2] hover:text-white ${
                      index === 0 ? "bg-[#003261b2]" : "bg-transparent"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <BoxesIcon className="h-3.5 w-3.5 opacity-0" />
                      <span
                        className={`text-[10px] font-medium leading-5 ${
                          item === "Batch"
                            ? "[font-family:'Roboto',Helvetica] text-gray-50"
                            : "[font-family:'Inter',Helvetica]"
                        }`}
                      >
                        {item}
                      </span>
                    </span>
                  </Button>
                ))}
              </div>
            </div>
            <Separator className="my-1 bg-transparent" />
            {bottomSections.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="h-auto justify-start rounded-[10px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-2">
                    <Icon className="h-3.5 w-3.5" />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
                      {item.label}
                    </span>
                  </span>
                  {item.expandable ? (
                    <ChevronDownIcon className="h-3.5 w-3.5" />
                  ) : null}
                </Button>
              );
            })}
          </nav>
        </ScrollArea>
        <div className="flex w-[8px] justify-center pr-[2px] pt-[74px]">
          <div className="flex h-[360px] w-[8px] flex-col justify-between rounded-[100px] bg-[#003261]">
            <div className="flex flex-col items-center gap-[3px] pt-1">
              <img
                className="h-[5.5px] w-[8px]"
                alt="Polygon"
                src="https://c.animaapp.com/mol3ctq1Lfia5W/img/polygon-1.svg"
              />
              <div className="h-28 w-2 rounded-[100px] bg-[#cdcdcd]" />
            </div>
            <img
              className="mb-0.5 ml-[0.9px] h-[5.5px] w-[6.2px]"
              alt="Polygon"
              src="https://c.animaapp.com/mol3ctq1Lfia5W/img/polygon-2.svg"
            />
          </div>
        </div>
      </div>
      <footer className="mt-auto px-[6px] pb-4 pt-2">
        <Button
          variant="ghost"
          className="h-auto w-full justify-start rounded-[10px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <LogOutIcon className="h-3.5 w-3.5" />
            <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
              Log out
            </span>
          </span>
        </Button>
      </footer>
    </aside>
  );
};
