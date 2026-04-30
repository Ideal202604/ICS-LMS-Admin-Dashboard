import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const topLevelItems = [
  {
    label: "Get Started",
    icon: {
      alt: "Tabler icon trending",
      src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-trending-up.svg",
    },
    route: "/",
  },
  {
    label: "Dashboard",
    icon: {
      alt: "Tabler icon table",
      src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-table.svg",
    },
    route: "/",
  },
];

const productSubItems = [
  { label: "Courses", route: "/courses" },
  { label: "Live Classes", route: "/live-classes" },
  { label: "Mock Test", route: "/mock-test", active: true },
  { label: "Test Series", route: "/test-series" },
  { label: "Bundles", route: "/bundles" },
  { label: "Batch", route: "/", fontClass: "[font-family:'Roboto',Helvetica]" },
  { label: "Poll", route: "/" },
  { label: "Tracks", route: "/" },
  { label: "Code", route: "/" },
  { label: "More Products", route: "/" },
  { label: "Question Pool", route: "/" },
  { label: "All Questions", route: "/" },
  { label: "Classification", route: "/" },
  { label: "Utilities", route: "/" },
];

const lowerMenuItems = [
  {
    label: "Website & Apps",
    icon: { alt: "Tabler icon app", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-app-window.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Community",
    icon: { alt: "Tabler icon users", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-users.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Marketing",
    icon: { alt: "Tabler icon", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-speakerphone.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Sales",
    icon: { alt: "Tabler icon chart", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-chart-dots-2.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Users",
    icon: { alt: "Tabler icon user", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-user.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Reports",
    icon: { alt: "Tabler icon chart", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-chart-bar.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Manage",
    icon: { alt: "Tabler icon", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-briefcase.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Add - Ons",
    icon: { alt: "Tabler icon square", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-square-rounded-plus.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Security",
    icon: { alt: "Tabler icon shield", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-shield-lock.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Sub Schools",
    icon: { alt: "Tabler icon school", src: "https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-school.svg" },
    chevron: "https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down.svg",
  },
  {
    label: "Settings",
    icon: { alt: "Setting", src: "https://c.animaapp.com/moju1bkbWY8iET/img/setting.svg" },
  },
];

export const MockTestSidebarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      <div className="flex min-h-0 flex-1 flex-col px-1 pt-3">
        <header className="flex flex-col gap-[26px] px-1">
          <img
            className="h-auto w-full"
            alt="Ics global white"
            src="https://c.animaapp.com/moju1bkbWY8iET/img/ics-global-white-1.svg"
          />
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/moju1bkbWY8iET/img/search.svg"
            />
            <Input
              defaultValue=""
              aria-label="Search"
              placeholder="Search"
              className="h-7 rounded-[6px] border border-gray-300 bg-[#ffffff45] pl-9 text-[11px] font-normal leading-6 text-white placeholder:text-white shadow-shadow-xs [font-family:'Inter',Helvetica]"
            />
          </div>
        </header>
        <nav className="mt-4 flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden px-2">
            {topLevelItems.map((item) => (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                onClick={() => navigate(item.route)}
                className="h-auto justify-start rounded-[10px] bg-transparent px-2.5 py-2 text-left hover:bg-[#003261b2] hover:text-white"
              >
                <span className="flex items-center gap-2">
                  <img className="h-4 w-4" alt={item.icon.alt} src={item.icon.src} />
                  <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5 tracking-[0] text-white">
                    {item.label}
                  </span>
                </span>
              </Button>
            ))}

            <div className="pt-1">
              <Button
                type="button"
                variant="ghost"
                className="h-auto w-full justify-between rounded-[10px] bg-white px-2.5 py-2 hover:bg-white"
              >
                <span className="flex items-center gap-2">
                  <img
                    className="h-4 w-4"
                    alt="Tabler icon box"
                    src="https://c.animaapp.com/moju1bkbWY8iET/img/tabler-icon-box.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5 tracking-[0] text-[#0957a1]">
                    Products
                  </span>
                </span>
                <img
                  className="h-4 w-4"
                  alt="Chevron down"
                  src="https://c.animaapp.com/moju1bkbWY8iET/img/chevron-down-2.svg"
                />
              </Button>
            </div>
            <div className="flex flex-col gap-1 pl-2 pr-1">
              {productSubItems.map((item) => {
                const isActive =
                  location.pathname === item.route && item.route !== "/";
                return (
                  <Button
                    key={item.label}
                    type="button"
                    variant="ghost"
                    onClick={() => navigate(item.route)}
                    className={`h-auto justify-start rounded-[6px] px-4 py-[7px] text-left hover:bg-[#003261b2] hover:text-white ${
                      isActive || item.active ? "bg-[#003261b2]" : "bg-transparent"
                    }`}
                  >
                    <span
                      className={`${item.fontClass ?? "[font-family:'Inter',Helvetica]"} text-[10px] font-medium leading-5 tracking-[0] text-white`}
                    >
                      {item.label}
                    </span>
                  </Button>
                );
              })}
            </div>
            <div className="mt-1 flex flex-col gap-1">
              {lowerMenuItems.map((item) => (
                <Button
                  key={item.label}
                  type="button"
                  variant="ghost"
                  className="h-auto w-full justify-between rounded-[10px] bg-transparent px-2.5 py-2 text-left hover:bg-[#003261b2] hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <img className="h-4 w-4" alt={item.icon.alt} src={item.icon.src} />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5 tracking-[0] text-white">
                      {item.label}
                    </span>
                  </span>
                  {item.chevron ? (
                    <img className="h-4 w-4" alt="Chevron down" src={item.chevron} />
                  ) : null}
                </Button>
              ))}
            </div>
          </div>
        </nav>
      </div>
      <footer className="px-2 pb-3 pt-2">
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-start rounded-[10px] bg-transparent px-2.5 py-2 hover:bg-[#003261b2] hover:text-white"
        >
          <span className="flex items-center gap-2">
            <img className="h-4 w-4" alt="Log in" src="https://c.animaapp.com/moju1bkbWY8iET/img/log-in-2.svg" />
            <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5 tracking-[0] text-white">
              Log out
            </span>
          </span>
        </Button>
      </footer>
      <div className="pointer-events-none absolute right-0.5 top-[145px] flex h-[430px] w-1.5 flex-col justify-between rounded-[100px] bg-[#003261]">
        <div className="mt-1 flex h-[86px] w-1.5 flex-col items-start gap-[3px]">
          <img className="h-[5.5px] w-full" alt="Polygon" src="https://c.animaapp.com/moju1bkbWY8iET/img/polygon-1.svg" />
          <div className="w-full flex-1 rounded-[100px] bg-[#cdcdcd]" />
        </div>
        <img className="mb-0.5 ml-[0.1px] h-[5.5px] w-[5px]" alt="Polygon" src="https://c.animaapp.com/moju1bkbWY8iET/img/polygon-2.svg" />
      </div>
    </aside>
  );
};
