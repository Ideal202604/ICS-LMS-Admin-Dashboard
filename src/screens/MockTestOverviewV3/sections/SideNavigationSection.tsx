import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { ScrollArea } from "../../../components/ui/scroll-area";

const primaryItems = [
  {
    label: "Get Started",
    icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-trending-up.svg",
    route: "/",
  },
  {
    label: "Dashboard",
    icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-table.svg",
    route: "/",
  },
];

const productChildren = [
  { label: "Courses",       route: "/courses"        },
  { label: "Live Classes",  route: "/live-classes"   },
  { label: "Mock Test",     route: "/mock-test-overview", active: true },
  { label: "Test Series",   route: "/test-series"    },
  { label: "Bundles",       route: "/bundles"        },
  { label: "Batch",         route: "/",              fontClass: "[font-family:'Roboto',Helvetica]" },
  { label: "Poll",          route: "/poll"           },
  { label: "Tracks",        route: "/tracks"         },
  { label: "Code",          route: "/code"           },
  { label: "More Products", route: "/more-products"  },
  { label: "Question Pool", route: "/question-pool"  },
  { label: "All Questions", route: "/"               },
  { label: "Classification",route: "/classification" },
  { label: "Utilities",     route: "/utilities"      },
];

const secondaryItems = [
  { label: "Website & Apps", icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-app-window.svg",          chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Community",      icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-users.svg",               chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Marketing",      icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-speakerphone.svg",        chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Sales",          icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-chart-dots-2.svg",        chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Users",          icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-user.svg",                chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Reports",        icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-chart-bar.svg",           chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Manage",         icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-briefcase.svg",           chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Add - Ons",      icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-square-rounded-plus.svg", chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Security",       icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-shield-lock.svg",         chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Sub Schools",    icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-school.svg",              chevron: "https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down.svg" },
  { label: "Settings",       icon: "https://c.animaapp.com/moo3kvsppKe6iN/img/setting.svg" },
];

export const SideNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (route: string) => navigate(route);

  return (
    <aside className="relative flex h-full min-h-screen w-full max-w-[156px] flex-col overflow-hidden bg-[#0957a1] text-white shadow-[0px_0px_4px_#00000040]">
      {/* Header */}
      <header className="px-3 pt-3 pb-2">
        <div className="flex flex-col gap-[14px]">
          <img
            className="h-auto w-[61px] cursor-pointer transition-opacity duration-200 hover:opacity-90"
            alt="Ics global white"
            src="https://c.animaapp.com/moo3kvsppKe6iN/img/ics-global-white-1.svg"
            onClick={() => handleNav("/")}
          />
          <div className="relative">
            <img
              className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/moo3kvsppKe6iN/img/search.svg"
            />
            <Input
              defaultValue=""
              placeholder="Search"
              aria-label="Search"
              className="h-7 rounded-md border border-gray-300 bg-[#ffffff45] pl-8 text-[10px] text-white placeholder:text-white/80 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </header>

      {/* Scrollable nav */}
      <ScrollArea className="min-h-0 flex-1 px-2">
        <nav aria-label="Sidebar navigation" className="pb-4">
          <ul className="flex flex-col gap-1 px-1 pt-2">
            {/* Primary items */}
            {primaryItems.map((item) => (
              <li key={item.label}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleNav(item.route)}
                  className="h-auto w-full justify-start rounded-[10px] bg-transparent px-2 py-2 text-left text-white transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <img className="h-3.5 w-3.5" alt={item.label} src={item.icon} />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
                      {item.label}
                    </span>
                  </span>
                </Button>
              </li>
            ))}

            {/* Products section */}
            <li className="mt-1">
              <Button
                type="button"
                variant="ghost"
                className="h-auto w-full justify-between rounded-[10px] bg-white px-2 py-2 text-[#0957a1] hover:bg-white hover:text-[#0957a1]"
              >
                <span className="flex items-center gap-2">
                  <img
                    className="h-3.5 w-3.5"
                    alt="Products"
                    src="https://c.animaapp.com/moo3kvsppKe6iN/img/tabler-icon-box.svg"
                  />
                  <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
                    Products
                  </span>
                </span>
                <img
                  className="h-3.5 w-3.5"
                  alt="Chevron down"
                  src="https://c.animaapp.com/moo3kvsppKe6iN/img/chevron-down-3.svg"
                />
              </Button>

              <ul className="mt-1 flex flex-col gap-1 pl-3">
                {productChildren.map((item) => {
                  const isActive =
                    item.active ||
                    (item.route !== "/" && location.pathname === item.route);
                  return (
                    <li key={item.label}>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => handleNav(item.route)}
                        className={`h-auto w-full justify-start rounded-[6px] px-2 py-2 text-left transition-all duration-200 hover:text-white ${
                          isActive
                            ? "bg-[#003261b2] text-white hover:bg-[#003261b2]"
                            : "bg-transparent text-white hover:bg-white/10"
                        }`}
                      >
                        <span
                          className={`${item.fontClass ?? "[font-family:'Inter',Helvetica]"} text-[10px] font-medium leading-5 whitespace-nowrap`}
                        >
                          {item.label}
                        </span>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </li>

            {/* Secondary items */}
            {secondaryItems.map((item) => (
              <li key={item.label} className="mt-0.5">
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto w-full justify-between rounded-[10px] bg-transparent px-2 py-2 text-white transition-colors duration-200 hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <img className="h-3.5 w-3.5" alt={item.label} src={item.icon} />
                    <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5 whitespace-nowrap">
                      {item.label}
                    </span>
                  </span>
                  {item.chevron ? (
                    <img className="h-3.5 w-3.5" alt="Chevron down" src={item.chevron} />
                  ) : null}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      {/* Footer */}
      <footer className="px-2 pb-3 pt-2">
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-full justify-start rounded-[10px] bg-transparent px-2 py-2 text-white transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <img
              className="h-3.5 w-3.5"
              alt="Log out"
              src="https://c.animaapp.com/moo3kvsppKe6iN/img/log-in-2.svg"
            />
            <span className="[font-family:'Inter',Helvetica] text-[10px] font-medium leading-5">
              Log out
            </span>
          </span>
        </Button>
      </footer>
    </aside>
  );
};
