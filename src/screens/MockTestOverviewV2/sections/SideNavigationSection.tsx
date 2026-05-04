import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { Separator } from "../../../components/ui/separator";

const topNavigationItems = [
  {
    label: "Get Started",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-trending-up.svg",
  },
  {
    label: "Dashboard",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-table.svg",
  },
];

const productSubItems = [
  { label: "Courses" },
  { label: "Live Classes" },
  { label: "Mock Test", active: true },
  { label: "Test Series" },
  { label: "Bundles" },
  {
    label: "Batch",
    fontClass: "[font-family:'Roboto',Helvetica] text-gray-50",
  },
  { label: "Poll" },
  { label: "Tracks" },
  { label: "Code" },
  { label: "More Products" },
  { label: "Question Pool" },
  { label: "All Questions" },
  { label: "Classification" },
  { label: "Utilities" },
];

const bottomNavigationItems = [
  {
    label: "Website & Apps",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-app-window.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Community",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-users.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Marketing",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-speakerphone.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Sales",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-chart-dots-2.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Users",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-user.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Reports",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-chart-bar.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Manage",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-briefcase.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Add - Ons",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-square-rounded-plus.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Security",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-shield-lock.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Sub Schools",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-school.svg",
    chevron: "https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down.svg",
  },
  {
    label: "Settings",
    icon: "https://c.animaapp.com/moo0hot3G8QUUI/img/setting.svg",
  },
];

export const SideNavigationSection = (): JSX.Element => {
  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex min-h-0 flex-1 flex-col px-2 pt-[10px]">
        <header className="flex flex-col gap-[14px] px-[4px]">
          <img
            className="h-auto w-[59px]"
            alt="Ics global white"
            src="https://c.animaapp.com/moo0hot3G8QUUI/img/ics-global-white-1.svg"
          />
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/search.svg"
            />
            <Input
              defaultValue=""
              placeholder="Search"
              className="h-[27px] rounded-md border border-gray-300 bg-[#ffffff45] pl-8 text-[10px] text-white placeholder:text-white/90 shadow-shadow-xs [font-family:'Inter',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </header>
        <Separator className="my-3 bg-transparent" />
        <div className="relative min-h-0 flex-1">
          <ScrollArea className="h-full pr-2">
            <nav aria-label="Sidebar navigation" className="flex flex-col">
              <div className="flex flex-col gap-1 px-1">
                {topNavigationItems.map((item) => (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    className="h-auto min-h-[28px] w-full justify-start rounded-[8px] px-2 py-1.5 text-left text-white hover:bg-[#003261b2] hover:text-white"
                  >
                    <span className="flex min-w-0 flex-1 items-center gap-2">
                      <img
                        className="h-3.5 w-3.5"
                        alt={item.label}
                        src={item.icon}
                      />
                      <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                        {item.label}
                      </span>
                    </span>
                  </Button>
                ))}

                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto min-h-[28px] w-full justify-between rounded-[8px] bg-white px-2 py-1.5 text-left text-[#0957a1] hover:bg-white hover:text-[#0957a1]"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <img
                      className="h-3.5 w-3.5"
                      alt="Products"
                      src="https://c.animaapp.com/moo0hot3G8QUUI/img/tabler-icon-box.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                      Products
                    </span>
                  </span>
                  <img
                    className="h-3.5 w-3.5"
                    alt="Chevron down"
                    src="https://c.animaapp.com/moo0hot3G8QUUI/img/chevron-down-5.svg"
                  />
                </Button>
                <div className="flex flex-col gap-1 pl-4 pt-1">
                  {productSubItems.map((item) => (
                    <Button
                      key={item.label}
                      type="button"
                      variant="ghost"
                      className={`h-auto min-h-[26px] w-full justify-start rounded-[6px] px-2 py-1 text-left hover:text-white ${
                        item.active
                          ? "bg-[#003261b2] text-white hover:bg-[#003261b2]"
                          : "bg-transparent text-white hover:bg-[#003261b2]"
                      }`}
                    >
                      <span
                        className={`${item.fontClass ?? "[font-family:'Inter',Helvetica]"} text-[10px] font-medium leading-4 whitespace-nowrap`}
                      >
                        {item.label}
                      </span>
                    </Button>
                  ))}
                </div>
                <div className="pt-1">
                  {bottomNavigationItems.map((item) => (
                    <Button
                      key={item.label}
                      type="button"
                      variant="ghost"
                      className="h-auto min-h-[28px] w-full justify-between rounded-[8px] px-2 py-1.5 text-left text-white hover:bg-[#003261b2] hover:text-white"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <img
                          className="h-3.5 w-3.5"
                          alt={item.label}
                          src={item.icon}
                        />
                        <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                          {item.label}
                        </span>
                      </span>
                      {item.chevron ? (
                        <img
                          className="h-3.5 w-3.5"
                          alt="Chevron down"
                          src={item.chevron}
                        />
                      ) : null}
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </ScrollArea>
          <div className="pointer-events-none absolute right-0 top-[72px] hidden h-[360px] w-2 rounded-[100px] bg-[#003261] md:flex md:flex-col md:justify-between">
            <div className="mt-1 flex h-[67px] w-2 flex-col items-start gap-[3px]">
              <img
                className="h-[5.5px] w-full"
                alt="Polygon"
                src="https://c.animaapp.com/moo0hot3G8QUUI/img/polygon-1.svg"
              />
              <div className="h-[56px] w-full rounded-[100px] bg-[#cdcdcd]" />
            </div>
            <img
              className="mb-0.5 ml-[0.9px] h-[5.5px] w-[6.2px]"
              alt="Polygon"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/polygon-2.svg"
            />
          </div>
        </div>
      </div>
      <footer className="px-2 pb-4 pt-2">
        <Button
          type="button"
          variant="ghost"
          className="h-auto min-h-[28px] w-full justify-start rounded-[8px] px-2 py-1.5 text-white hover:bg-[#003261b2] hover:text-white"
        >
          <span className="flex items-center gap-2">
            <img
              className="h-3.5 w-3.5"
              alt="Log in"
              src="https://c.animaapp.com/moo0hot3G8QUUI/img/log-in-2.svg"
            />
            <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
              Log out
            </span>
          </span>
        </Button>
      </footer>
    </aside>
  );
};
