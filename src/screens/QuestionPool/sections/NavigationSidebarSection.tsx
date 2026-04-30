import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const topLevelItems = [
  {
    label: "Get Started",
    icon: {
      alt: "Tabler icon trending",
      src: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-trending-up.svg",
    },
    route: "/",
  },
  {
    label: "Dashboard",
    icon: {
      alt: "Tabler icon table",
      src: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-table.svg",
    },
    route: "/",
  },
];

const productItems = [
  { label: "Courses", route: "/courses" },
  { label: "Live Classes", route: "/live-classes" },
  { label: "Mock Test", route: "/mock-test" },
  { label: "Test Series", route: "/test-series" },
  { label: "Bundles", route: "/bundles" },
  { label: "Batch", route: "/", fontClass: "[font-family:'Roboto',Helvetica]" },
  { label: "Poll", route: "/poll" },
  { label: "Tracks", route: "/tracks" },
  { label: "Code", route: "/code" },
  { label: "More Products", route: "/more-products" },
  { label: "Question Pool", route: "/question-pool" },
  { label: "All Questions", route: "/" },
  { label: "Classification", route: "/classification" },
  { label: "Utilities", route: "/" },
];

const secondaryAccordionItems = [
  {
    label: "Website & Apps",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-app-window.svg",
    alt: "Tabler icon app",
  },
  {
    label: "Community",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-users.svg",
    alt: "Tabler icon users",
  },
  {
    label: "Marketing",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-speakerphone.svg",
    alt: "Tabler icon",
  },
  {
    label: "Sales",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-chart-dots-2.svg",
    alt: "Tabler icon chart",
  },
  {
    label: "Users",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-user.svg",
    alt: "Tabler icon user",
  },
  {
    label: "Reports",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-chart-bar.svg",
    alt: "Tabler icon chart",
  },
  {
    label: "Manage",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-briefcase.svg",
    alt: "Tabler icon",
  },
  {
    label: "Add - Ons",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-square-rounded-plus.svg",
    alt: "Tabler icon square",
  },
  {
    label: "Security",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-shield-lock.svg",
    alt: "Tabler icon shield",
  },
  {
    label: "Sub Schools",
    icon: "https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-school.svg",
    alt: "Tabler icon school",
  },
];

export const NavigationSidebarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex min-h-0 flex-1 flex-col px-[6px] pt-[6px]">
        <header className="flex flex-col gap-[10px] px-2 pb-3">
          <img
            className="h-auto w-[58px]"
            alt="Ics global white"
            src="https://c.animaapp.com/mokxjjoomDPsSW/img/ics-global-white-1.svg"
          />
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/mokxjjoomDPsSW/img/search.svg"
            />
            <Input
              defaultValue=""
              aria-label="Search"
              placeholder="Search"
              className="h-7 rounded-md border border-[#9cb3cc] bg-[#ffffff45] pl-8 pr-3 text-[10px] text-white placeholder:text-white/80 shadow-shadow-xs focus-visible:ring-0"
            />
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-2 pb-4 pr-3">
          <nav aria-label="Sidebar navigation" className="flex flex-col gap-1">
            {topLevelItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                onClick={() => navigate(item.route)}
                className="h-auto justify-start rounded-[8px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <img className="h-3.5 w-3.5" alt={item.icon.alt} src={item.icon.src} />
                  <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                    {item.label}
                  </span>
                </span>
              </Button>
            ))}

            <Accordion
              type="single"
              collapsible
              defaultValue="products"
              className="w-full"
            >
              <AccordionItem value="products" className="border-b-0">
                <AccordionTrigger className="rounded-[8px] bg-white px-2 py-[7px] text-[#0957a1] hover:no-underline [&[data-state=open]>svg]:rotate-180 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-[#0957a1]">
                  <span className="flex items-center gap-2">
                    <img
                      className="h-3.5 w-3.5"
                      alt="Tabler icon box"
                      src="https://c.animaapp.com/mokxjjoomDPsSW/img/tabler-icon-box.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                      Products
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1">
                  <div className="flex flex-col gap-1 pl-2">
                    {productItems.map((item) => {
                      const isActive =
                        location.pathname === item.route && item.route !== "/";
                      return (
                        <Button
                          key={item.label}
                          type="button"
                          variant="ghost"
                          onClick={() => navigate(item.route)}
                          className={`h-auto justify-start rounded-[6px] px-4 py-[7px] hover:text-white transition-colors duration-150 ${
                            isActive
                              ? "bg-[#003261b2] text-white hover:bg-[#003261b2]"
                              : "bg-transparent text-white hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={`${item.fontClass ?? "[font-family:'Inter',Helvetica]"} text-[10px] font-medium leading-4`}
                          >
                            {item.label}
                          </span>
                        </Button>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="multiple" className="w-full">
              {secondaryAccordionItems.map((item) => (
                <AccordionItem
                  key={item.label}
                  value={item.label}
                  className="border-b-0"
                >
                  <AccordionTrigger className="rounded-[8px] px-2 py-[7px] text-white hover:bg-white/10 hover:no-underline [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:text-white">
                    <span className="flex items-center gap-2">
                      <img
                        className="h-3.5 w-3.5"
                        alt={item.alt}
                        src={item.icon}
                      />
                      <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                        {item.label}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent />
                </AccordionItem>
              ))}
            </Accordion>

            <Button
              type="button"
              variant="ghost"
              className="h-auto justify-start rounded-[8px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
            >
              <span className="flex items-center gap-2">
                <img
                  className="h-3.5 w-3.5"
                  alt="Setting"
                  src="https://c.animaapp.com/mokxjjoomDPsSW/img/setting.svg"
                />
                <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                  Settings
                </span>
              </span>
            </Button>
          </nav>
        </div>

        <footer className="px-2 pb-3 pt-1">
          <Button
            type="button"
            variant="ghost"
            className="h-auto w-full justify-start rounded-[8px] px-2 py-[7px] text-white hover:bg-white/10 hover:text-white"
          >
            <span className="flex items-center gap-2">
              <img
                className="h-3.5 w-3.5"
                alt="Log in"
                src="https://c.animaapp.com/mokxjjoomDPsSW/img/log-in-2.svg"
              />
              <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-4">
                Log out
              </span>
            </span>
          </Button>
        </footer>
      </div>

      <div className="pointer-events-none absolute right-[3px] top-[138px] flex h-[380px] w-[6px] flex-col justify-between rounded-[100px] bg-[#003261]">
        <div className="mt-1 flex h-[74px] w-[6px] flex-col items-start gap-[3px]">
          <img
            className="h-[5.5px] w-full"
            alt="Polygon"
            src="https://c.animaapp.com/mokxjjoomDPsSW/img/polygon-1.svg"
          />
          <div className="h-[64px] w-full rounded-[100px] bg-[#cdcdcd]" />
        </div>
        <img
          className="mb-0.5 ml-[0.7px] h-[5.5px] w-[4.8px]"
          alt="Polygon"
          src="https://c.animaapp.com/mokxjjoomDPsSW/img/polygon-2.svg"
        />
      </div>
    </aside>
  );
};
