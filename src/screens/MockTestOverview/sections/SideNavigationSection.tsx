import { useNavigate, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const topItems = [
  {
    label: "Get Started",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-trending-up.svg",
    route: "/",
  },
  {
    label: "Dashboard",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-table.svg",
    route: "/",
  },
];

const productItems = [
  { label: "Courses", route: "/courses" },
  { label: "Live Classes", route: "/live-classes" },
  { label: "Mock Test", route: "/mock-test-overview", active: true },
  { label: "Test Series", route: "/test-series" },
  { label: "Bundles", route: "/bundles" },
  { label: "Batch", fontClass: "[font-family:'Roboto',Helvetica]", route: "/" },
  { label: "Poll", route: "/poll" },
  { label: "Tracks", route: "/tracks" },
  { label: "Code", route: "/code" },
  { label: "More Products", route: "/more-products" },
  { label: "Question Pool", route: "/question-pool" },
  { label: "All Questions", route: "/" },
  { label: "Classification", route: "/classification" },
  { label: "Utilities", route: "/utilities" },
];

const accordionItems = [
  {
    label: "Website & Apps",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-app-window.svg",
  },
  {
    label: "Community",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-users.svg",
  },
  {
    label: "Marketing",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-speakerphone.svg",
  },
  {
    label: "Sales",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-chart-dots-2.svg",
  },
  {
    label: "Users",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-user.svg",
  },
  {
    label: "Reports",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-chart-bar.svg",
  },
  {
    label: "Manage",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-briefcase.svg",
  },
  {
    label: "Add - Ons",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-square-rounded-plus.svg",
  },
  {
    label: "Security",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-shield-lock.svg",
  },
  {
    label: "Sub Schools",
    icon: "https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-school.svg",
  },
];

export const SideNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleNav = (route: string) => {
    navigate(route);
  };

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex min-h-0 flex-1 flex-col">
        <header className="px-[10px] pb-4 pt-3">
          <div className="flex flex-col gap-4">
            <img
              className="h-auto w-[74px] cursor-pointer transition-opacity duration-200 hover:opacity-90"
              alt="Ics global white"
              src="https://c.animaapp.com/monzhd8m4FbejF/img/ics-global-white-1.svg"
              onClick={() => handleNav("/")}
            />
            <div className="relative">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/monzhd8m4FbejF/img/search.svg"
              />
              <Input
                defaultValue=""
                aria-label="Search"
                placeholder="Search"
                className="h-7 rounded-md border border-gray-300 bg-[#ffffff45] pl-8 text-[10px] leading-4 text-white placeholder:text-white/80 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>
        </header>
        <div className="flex min-h-0 flex-1">
          <nav className="flex min-h-0 flex-1 flex-col px-[10px] pb-3">
            <div className="flex min-h-0 flex-1 gap-2">
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overflow-x-hidden scrollbar-thin">
                <div className="flex flex-col gap-1">
                  {topItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      onClick={() => handleNav(item.route)}
                      className="h-auto justify-start rounded-[10px] px-2 py-2 text-white hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      <span className="flex items-center gap-2">
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
                </div>
                <div className="mt-1">
                  <div className="rounded-[10px] bg-white">
                    <Button
                      variant="ghost"
                      className="h-auto w-full justify-between rounded-[10px] px-2 py-2 text-[#0957a1] hover:bg-white hover:text-[#0957a1]"
                    >
                      <span className="flex items-center gap-2">
                        <img
                          className="h-3.5 w-3.5"
                          alt="Products"
                          src="https://c.animaapp.com/monzhd8m4FbejF/img/tabler-icon-box.svg"
                        />
                        <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                          Products
                        </span>
                      </span>
                      <img
                        className="h-3.5 w-3.5"
                        alt="Chevron down"
                        src="https://c.animaapp.com/monzhd8m4FbejF/img/chevron-down.svg"
                      />
                    </Button>
                  </div>
                  <div className="mt-1 flex flex-col gap-1 pl-[18px]">
                    {productItems.map((item) => {
                      const isActive = item.active || (item.route !== "/" && currentPath === item.route);
                      const isBatch = item.label === "Batch";

                      return (
                        <Button
                          key={item.label}
                          variant="ghost"
                          onClick={() => handleNav(item.route)}
                          className={`h-auto justify-start rounded-[6px] px-4 py-[7px] text-left hover:text-white transition-all duration-200 ${
                            isActive
                              ? "bg-[#003261b2] text-white hover:bg-[#003261b2]"
                              : "bg-transparent text-white hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={`${isBatch ? "[font-family:'Roboto',Helvetica]" : "[font-family:'Inter',Helvetica]"} text-[10px] font-medium leading-4`}
                          >
                            {item.label}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-2 flex min-h-0 flex-1 flex-col">
                  <Accordion type="multiple" className="flex flex-col gap-1">
                    {accordionItems.map((item) => (
                      <AccordionItem
                        key={item.label}
                        value={item.label}
                        className="border-none"
                      >
                        <AccordionTrigger className="rounded-[10px] px-2 py-2 text-white hover:bg-white/10 hover:no-underline transition-colors duration-200 [&[data-state=open]]:bg-white/10">
                          <span className="flex items-center gap-2">
                            <img
                              className="h-3.5 w-3.5"
                              alt={item.label}
                              src={item.icon}
                            />
                            <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                              {item.label}
                            </span>
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-0" />
                      </AccordionItem>
                    ))}

                    <Button
                      variant="ghost"
                      className="h-auto justify-start rounded-[10px] px-2 py-2 text-white hover:bg-white/10 hover:text-white transition-colors duration-200"
                    >
                      <span className="flex items-center gap-2">
                        <img
                          className="h-3.5 w-3.5"
                          alt="Setting"
                          src="https://c.animaapp.com/monzhd8m4FbejF/img/setting.svg"
                        />
                        <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                          Settings
                        </span>
                      </span>
                    </Button>
                  </Accordion>
                </div>
              </div>
              <div className="flex w-2 flex-col items-center py-[140px]">
                <div className="flex h-full w-2 flex-col justify-between rounded-[100px] bg-[#003261]">
                  <div className="mt-1 flex w-2 flex-col items-start gap-[3px]">
                    <img
                      className="h-[5.5px] w-full"
                      alt="Polygon"
                      src="https://c.animaapp.com/monzhd8m4FbejF/img/polygon-1.svg"
                    />
                    <div className="h-28 w-full rounded-[100px] bg-[#cdcdcd]" />
                  </div>
                  <img
                    className="mb-0.5 ml-[0.9px] h-[5.5px] w-[6.2px]"
                    alt="Polygon"
                    src="https://c.animaapp.com/monzhd8m4FbejF/img/polygon-2.svg"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <footer className="px-[10px] pb-4 pt-2">
          <Button
            variant="ghost"
            className="h-auto w-full justify-start rounded-[10px] px-2 py-2 text-white hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            <span className="flex items-center gap-2">
              <img
                className="h-3.5 w-3.5"
                alt="Log in"
                src="https://c.animaapp.com/monzhd8m4FbejF/img/log-in-2.svg"
              />
              <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                Log out
              </span>
            </span>
          </Button>
        </footer>
      </div>
    </aside>
  );
};
