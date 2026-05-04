import {
  BellIcon,
  ChevronRightIcon,
  EyeIcon,
  FolderOpenIcon,
  GlobeIcon,
  LinkIcon,
  Settings2Icon,
  Share2Icon,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";

const topActions = [
  { type: "icon", icon: GlobeIcon, label: "Language" },
  { type: "icon", icon: EyeIcon, label: "Preview" },
  { type: "chevron", label: "Next" },
  { type: "icon", icon: LinkIcon, label: "Copy link" },
  { type: "icon", icon: Share2Icon, label: "Share" },
] as const;

const tabs = ["Questions", "Responses", "Settings"] as const;

export const ApplicationNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Questions");
  const [copied, setCopied] = useState(false);

  const handleTopAction = (label: string) => {
    if (label === "Copy link") {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  };

  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_4px_4px_#00000040] animate-fade-in">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[86px] items-start justify-between gap-4 px-8 pb-2 pt-1 max-sm:px-4">
          <div className="flex shrink-0 items-start">
            <img
              className="h-[75px] w-20 cursor-pointer object-contain transition-opacity duration-200 hover:opacity-80"
              alt="ICS Global"
              src="https://c.animaapp.com/moqp98as9j0Smr/img/ics-png--1--1.png"
              onClick={() => navigate("/mock-test")}
            />
          </div>
          <div className="flex flex-1 items-center justify-end gap-3 pt-[10px] max-sm:gap-2">
            {topActions.map((action, index) => {
              if (action.type === "icon") {
                const Icon = action.icon;

                return (
                  <Button
                    key={`${action.label}-${index}`}
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-auto w-6 min-w-0 p-0 text-[#3c4043] transition-all duration-200 hover:scale-110 hover:bg-transparent hover:text-[#0957a1]"
                    aria-label={action.label}
                    onClick={() => handleTopAction(action.label)}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </Button>
                );
              }

              return (
                <Button
                  key={`${action.label}-${index}`}
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-auto w-4 min-w-0 p-0 text-[#3c4043] transition-all duration-200 hover:translate-x-0.5 hover:bg-transparent hover:text-[#0957a1]"
                  aria-label={action.label}
                  onClick={() => setActiveTab("Responses")}
                >
                  <ChevronRightIcon className="h-4 w-4" strokeWidth={1.8} />
                </Button>
              );
            })}

            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 [font-family:'Roboto',Helvetica] hover:-translate-y-0.5 hover:bg-[#bfdefa] hover:text-[#0957a1] hover:shadow-sm max-sm:px-3"
            >
              Publish
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-auto w-6 min-w-0 p-0 text-[#3c4043] transition-all duration-200 hover:scale-110 hover:bg-transparent hover:text-[#0957a1]"
              aria-label="Notifications"
            >
              <BellIcon className="h-4 w-4" strokeWidth={1.8} />
            </Button>
            <Button
              type="button"
              className="h-auto min-h-10 rounded-lg bg-[#0957a1] px-[13px] py-2 text-base font-medium leading-6 text-white transition-all duration-200 [font-family:'Roboto',Helvetica] hover:bg-[#074a88] hover:shadow-md"
              aria-label="User profile"
            >
              J
            </Button>
          </div>
        </div>
        <div className="flex min-h-12 items-center gap-8 px-8 pb-[6px] max-sm:gap-4 max-sm:px-4">
          <Button
            type="button"
            variant="ghost"
            className="h-auto p-0 text-xs font-normal leading-8 text-[#202124] transition-colors duration-200 [font-family:'Roboto',Helvetica] hover:bg-transparent hover:text-[#0957a1] hover:underline"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <div className="flex items-center gap-3 text-[#3c4043]">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-auto w-5 min-w-0 p-0 transition-colors duration-200 hover:bg-transparent hover:text-[#0957a1]"
              aria-label="Folder"
            >
              <FolderOpenIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </Button>
            <ChevronRightIcon className="h-4 w-4" strokeWidth={1.8} />
          </div>
          <div className="flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1 bg-transparent p-0">
                {tabs.map((tab) => (
                  <NavigationMenuItem key={tab}>
                    <button
                      type="button"
                      className={`inline-flex h-[27px] items-center justify-center border-b-[3px] px-2.5 pb-[7px] pt-[5px] [font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap transition-colors duration-200 ${
                        activeTab === tab
                          ? "border-[#0957a1] text-app-primary"
                          : "border-transparent text-black hover:text-[#0957a1]"
                      }`}
                      aria-current={activeTab === tab ? "page" : undefined}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="invisible h-auto w-5 min-w-0 p-0"
            aria-hidden="true"
            tabIndex={-1}
          >
            <Settings2Icon className="h-4 w-4" />
          </Button>
        </div>
        <p className="sr-only" aria-live="polite">
          {copied ? "Link copied" : ""}
        </p>
      </div>
    </header>
  );
};
