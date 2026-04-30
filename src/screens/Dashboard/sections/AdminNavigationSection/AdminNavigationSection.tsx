import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

const topNavItems = [
  {
    label: "Get Started",
    iconAlt: "Tabler icon trending",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-trending-up.svg",
    hasChevron: false,
    active: false,
  },
  {
    label: "Dashboard",
    iconAlt: "Tabler icon table",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-table.svg",
    hasChevron: false,
    active: false,
  },
  {
    label: "Products",
    iconAlt: "Tabler icon box",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-box.svg",
    hasChevron: true,
    active: true,
  },
];

const sectionItems = [
  {
    label: "Website & Apps",
    iconAlt: "Tabler icon app",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-app-window.svg",
    hasChevron: true,
  },
  {
    label: "Community",
    iconAlt: "Tabler icon users",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-users.svg",
    hasChevron: true,
  },
  {
    label: "Marketing",
    iconAlt: "Tabler icon",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-speakerphone.svg",
    hasChevron: true,
  },
  {
    label: "Sales",
    iconAlt: "Tabler icon chart",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-chart-dots-2.svg",
    hasChevron: true,
  },
  {
    label: "Users",
    iconAlt: "Tabler icon user",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-user.svg",
    hasChevron: true,
  },
  {
    label: "Reports",
    iconAlt: "Tabler icon chart",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-chart-bar.svg",
    hasChevron: true,
  },
  {
    label: "Manage",
    iconAlt: "Tabler icon",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-briefcase.svg",
    hasChevron: true,
  },
  {
    label: "Add - Ons",
    iconAlt: "Tabler icon square",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-square-rounded-plus.svg",
    hasChevron: true,
  },
  {
    label: "Security",
    iconAlt: "Tabler icon shield",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-shield-lock.svg",
    hasChevron: true,
  },
  {
    label: "Sub Schools",
    iconAlt: "Tabler icon school",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/tabler-icon-school.svg",
    hasChevron: true,
  },
  {
    label: "Settings",
    iconAlt: "Setting",
    iconSrc: "https://c.animaapp.com/mojtcm4gSomwJM/img/setting.svg",
    hasChevron: false,
  },
];

export const AdminNavigationSection = (): JSX.Element => {
  return (
    <aside className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#0957a1] text-white">
      <div className="flex min-h-screen flex-col justify-between px-2 pt-[7px] pb-3">
        {/* Top: logo + search + nav */}
        <div className="flex flex-col">
          <header className="flex flex-col items-start gap-2 px-1">
            <img
              className="h-auto w-[80px]"
              alt="Ics global white"
              src="https://c.animaapp.com/mojtcm4gSomwJM/img/ics-global-white-1.svg"
            />
            <div className="relative w-full">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/mojtcm4gSomwJM/img/search.svg"
              />
              <Input
                aria-label="Search"
                defaultValue=""
                placeholder="Search"
                className="h-[38px] rounded-[10px] border border-gray-300 bg-white pl-9 text-sm text-gray-500 shadow-shadow-xs placeholder:text-gray-500 focus-visible:ring-0"
              />
            </div>
          </header>

          <nav className="mt-4 flex flex-col gap-0.5" aria-label="Sidebar navigation">
            {topNavItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                className={`h-11 w-full justify-between rounded-[10px] px-3 py-2 ${
                  item.active
                    ? "bg-white text-[#0957a1] hover:bg-white hover:text-[#0957a1]"
                    : "bg-[#0957a1] text-white hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-2">
                  <img className="h-5 w-5 shrink-0" alt={item.iconAlt} src={item.iconSrc} />
                  <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                    {item.label}
                  </span>
                </span>
                {item.hasChevron && (
                  <img
                    className="h-4 w-4 shrink-0"
                    alt="Chevron down"
                    src="https://c.animaapp.com/mojtcm4gSomwJM/img/chevron-down.svg"
                  />
                )}
              </Button>
            ))}

            {sectionItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                className="h-11 w-full justify-between rounded-[10px] bg-[#0957a1] px-3 py-2 text-white hover:bg-white/10 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <img className="h-5 w-5 shrink-0" alt={item.iconAlt} src={item.iconSrc} />
                  <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                    {item.label}
                  </span>
                </span>
                {item.hasChevron && (
                  <img
                    className="h-4 w-4 shrink-0"
                    alt="Chevron down"
                    src="https://c.animaapp.com/mojtcm4gSomwJM/img/chevron-down.svg"
                  />
                )}
              </Button>
            ))}
          </nav>
        </div>

        {/* Bottom: upgrade card + logout */}
        <div className="flex flex-col gap-4 mt-4">
          <Card className="rounded-[10px] border-0 bg-[#003261] shadow-none">
            <CardContent className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-start justify-between">
                  <span className="[font-family:'Roboto',Helvetica] text-sm font-medium leading-5 tracking-[0] text-gray-50">
                    Free plan
                  </span>
                  <img
                    className="h-5 w-5 cursor-pointer"
                    alt="Close"
                    src="https://c.animaapp.com/mojtcm4gSomwJM/img/close.svg"
                  />
                </div>
                <span className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-200">
                  Until 30/06/2024
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-[360px] bg-gray-700">
                <div className="h-full w-1/2 rounded-[360px] bg-[#3da1ff]" />
              </div>
              <Button
                type="button"
                className="h-auto w-full gap-2 rounded-lg bg-[#0957a1] px-3.5 py-2 text-sm font-medium text-white hover:bg-[#0957a1]/80 border border-white/20"
              >
                <img
                  className="h-5 w-5"
                  alt="Zap"
                  src="https://c.animaapp.com/mojtcm4gSomwJM/img/zap.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] text-sm font-medium leading-5 tracking-[0]">
                  Upgrade
                </span>
              </Button>
            </CardContent>
          </Card>

          <Button
            type="button"
            variant="ghost"
            className="h-11 w-full justify-start gap-2 rounded-[10px] bg-[#0957a1] px-3 py-2 text-white hover:bg-white/10 hover:text-white"
          >
            <img
              className="h-5 w-5 shrink-0"
              alt="Log out"
              src="https://c.animaapp.com/mojtcm4gSomwJM/img/log-in-2.svg"
            />
            <span className="[font-family:'Inter',Helvetica] text-sm font-medium leading-5 tracking-[0]">
              Log out
            </span>
          </Button>
        </div>
      </div>
    </aside>
  );
};
