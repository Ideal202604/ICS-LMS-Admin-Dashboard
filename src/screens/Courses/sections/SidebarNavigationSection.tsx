import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const primaryItems = [
  {
    label: "Get Started",
    iconAlt: "Tabler icon trending",
    iconSrc:
      "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-trending-up.svg",
    route: "/",
  },
  {
    label: "Dashboard",
    iconAlt: "Tabler icon table",
    iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-table.svg",
    route: "/",
  },
];

const productItems = [
  { label: "Courses", active: true, fontClass: "[font-family:'Inter',Helvetica]", route: "/courses" },
  { label: "Live Classes", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/live-classes" },
  { label: "Mock Test", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/mock-test" },
  { label: "Test Series", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/test-series" },
  { label: "Bundles", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/bundles" },
  { label: "Batch", active: false, fontClass: "[font-family:'Roboto',Helvetica]", route: "/" },
  { label: "Poll", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "Tracks", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "Code", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "More Products", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "Question Pool", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "All Questions", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "Classification", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
  { label: "Utilities", active: false, fontClass: "[font-family:'Inter',Helvetica]", route: "/" },
];

const secondaryItems = [
  { label: "Website & Apps", iconAlt: "Tabler icon app", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-app-window.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Community", iconAlt: "Tabler icon users", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-users.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Marketing", iconAlt: "Tabler icon", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-speakerphone.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Sales", iconAlt: "Tabler icon chart", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-chart-dots-2.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Users", iconAlt: "Tabler icon user", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-user.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Reports", iconAlt: "Tabler icon chart", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-chart-bar.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Manage", iconAlt: "Tabler icon", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-briefcase.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Add - Ons", iconAlt: "Tabler icon square", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-square-rounded-plus.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Security", iconAlt: "Tabler icon shield", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-shield-lock.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Sub Schools", iconAlt: "Tabler icon school", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-school.svg", chevronAlt: "Chevron down", chevronSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down.svg" },
  { label: "Settings", iconAlt: "Setting", iconSrc: "https://c.animaapp.com/mojtuh5wFX1nkx/img/setting.svg" },
];

export const SidebarNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex min-h-0 flex-1 flex-col px-3 pt-[13px]">
        <header className="flex flex-col gap-[14px] px-1">
          <img
            className="h-auto w-[71px]"
            alt="Ics global white"
            src="https://c.animaapp.com/mojtuh5wFX1nkx/img/ics-global-white-1.svg"
          />
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/mojtuh5wFX1nkx/img/search.svg"
            />
            <Input
              defaultValue=""
              aria-label="Search"
              placeholder="Search"
              className="h-[28px] rounded-[6px] border border-gray-300 bg-[#ffffff45] pl-8 text-[10px] font-normal leading-4 text-white placeholder:text-white/90 shadow-shadow-xs [font-family:'Inter',Helvetica] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </header>
        <div className="mt-3 flex min-h-0 flex-1 gap-1">
          <nav
            className="flex min-h-0 flex-1 flex-col px-1"
            aria-label="Sidebar navigation"
          >
            <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden">
              {primaryItems.map((item) => (
                <Button
                  key={item.label}
                  type="button"
                  variant="ghost"
                  onClick={() => navigate(item.route)}
                  className="h-auto justify-start rounded-[8px] bg-transparent px-2 py-[7px] text-left hover:bg-transparent"
                >
                  <span className="flex items-center gap-2">
                    <img className="h-3.5 w-3.5" alt={item.iconAlt} src={item.iconSrc} />
                    <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Inter',Helvetica] text-[10px] font-medium leading-4 tracking-[0] text-white">
                      {item.label}
                    </span>
                  </span>
                </Button>
              ))}

              <button
                type="button"
                className="flex h-[28px] w-full items-center gap-2 rounded-[8px] bg-white px-2 py-[7px] text-left"
              >
                <span className="flex min-w-0 flex-1 items-center gap-2">
                  <img className="h-3.5 w-3.5" alt="Tabler icon box" src="https://c.animaapp.com/mojtuh5wFX1nkx/img/tabler-icon-box.svg" />
                  <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Inter',Helvetica] text-[10px] font-medium leading-4 tracking-[0] text-[#0957a1]">
                    Products
                  </span>
                </span>
                <img className="h-3.5 w-3.5" alt="Chevron down" src="https://c.animaapp.com/mojtuh5wFX1nkx/img/chevron-down-5.svg" />
              </button>

              <div className="flex flex-col gap-1">
                {productItems.map((item) => (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    onClick={() => navigate(item.route)}
                    className={`h-auto justify-start rounded-[8px] px-2 py-[7px] text-left hover:bg-[#003261b2] ${item.active ? "bg-[#003261b2]" : "bg-transparent"}`}
                  >
                    <span className={`mt-[-1.00px] whitespace-nowrap ${item.fontClass} text-[10px] font-medium leading-4 tracking-[0] ${item.label === "Batch" ? "text-gray-50" : "text-white"}`}>
                      {item.label}
                    </span>
                  </Button>
                ))}
              </div>

              {secondaryItems.map((item) => {
                const isSettings = item.label === "Settings";
                return (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    className="h-auto justify-start rounded-[8px] bg-transparent px-2 py-[7px] text-left hover:bg-[#00326180]"
                  >
                    <span className="flex w-full items-center gap-2">
                      <span className="flex min-w-0 flex-1 items-center gap-2">
                        <img className="h-3.5 w-3.5" alt={item.iconAlt} src={item.iconSrc} />
                        <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Inter',Helvetica] text-[10px] font-medium leading-4 tracking-[0] text-white">
                          {item.label}
                        </span>
                      </span>
                      {!isSettings && item.chevronSrc ? (
                        <img className="h-3.5 w-3.5" alt={item.chevronAlt} src={item.chevronSrc} />
                      ) : null}
                    </span>
                  </Button>
                );
              })}
            </div>
            <div className="mt-auto pb-4 pt-6">
              <Button
                type="button"
                variant="ghost"
                className="h-auto w-full justify-start rounded-[8px] bg-transparent px-2 py-[7px] text-left hover:bg-[#00326180]"
              >
                <span className="flex items-center gap-2">
                  <img className="h-3.5 w-3.5" alt="Log in" src="https://c.animaapp.com/mojtuh5wFX1nkx/img/log-in-2.svg" />
                  <span className="mt-[-1.00px] whitespace-nowrap [font-family:'Inter',Helvetica] text-[10px] font-medium leading-4 tracking-[0] text-white">
                    Log out
                  </span>
                </span>
              </Button>
            </div>
          </nav>
          <div className="flex w-2 shrink-0 justify-center pt-[74px]">
            <div className="flex h-[668px] w-2 flex-col justify-between rounded-[100px] bg-[#003261]">
              <div className="mt-1 flex h-[123px] w-2 flex-col items-start gap-[3px]">
                <img className="h-[5.5px] w-full" alt="Polygon" src="https://c.animaapp.com/mojtuh5wFX1nkx/img/polygon-1.svg" />
                <div className="h-28 w-full rounded-[100px] bg-[#cdcdcd]" />
              </div>
              <img className="mb-0.5 ml-[0.9px] h-[5.5px] w-[6.2px]" alt="Polygon" src="https://c.animaapp.com/mojtuh5wFX1nkx/img/polygon-2.svg" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
