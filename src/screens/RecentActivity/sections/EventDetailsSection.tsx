import { ChevronDownIcon, XIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

const tabs = [
  { label: "Event details", active: true },
  { label: "Find a time", active: false },
];

const topActions = [
  {
    alt: "Settings",
    src: "https://c.animaapp.com/molfmds0qJHEaZ/img/frame-1321317578.svg",
    className: "h-4 w-[68px]",
  },
  {
    alt: "Close",
    icon: <XIcon className="h-4 w-4 text-[#595959]" strokeWidth={2} />,
    className: "flex h-4 w-4 items-center justify-center",
  },
];

const notificationFields = [
  { label: "Notification", withChevron: true, minWidth: "min-w-[135px]" },
  { label: "01", withChevron: false, minWidth: "min-w-11" },
  { label: "minutes", withChevron: true, minWidth: "min-w-[106px]" },
];

const visibilityFields = [
  { label: "Busy", withChevron: true },
  { label: "Default Visibility", withChevron: true },
];

const editorToolbarImages = [
  {
    alt: "Formatting toolbar",
    src: "https://c.animaapp.com/molfmds0qJHEaZ/img/frame-1321317581.svg",
    className: "h-[29px] w-[259.67px]",
  },
];

export const EventDetailsSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full max-w-[635px] rounded-[10px] border-0 bg-white shadow-none overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col">
            <header className="px-4 pt-3">
              <nav
                aria-label="Event details tabs"
                className="flex w-full max-w-[550px] items-end gap-5 border-b border-gray-300 px-2.5"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    type="button"
                    className={`h-auto pb-0 text-left [font-family:'Roboto',Helvetica] text-base font-bold leading-8 whitespace-nowrap ${
                      tab.active
                        ? "border-b-2 border-[#0957a1] px-[5px] text-[#0957a1]"
                        : "text-[#595959]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </header>
            <div className="px-2 pb-6 pt-4">
              <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 gap-y-4">
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Line md link"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/line-md-link.svg"
                  />
                </div>
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#0957a1]">
                      Join with Link
                    </h2>
                    <p className="[font-family:'Roboto',Helvetica] text-xs font-bold leading-8 text-[#595959]">
                      meet.google.com/xyx-yghr-ioj · Up to 100 guest connections
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    {topActions.map((action) =>
                      action.src ? (
                        <img
                          key={action.alt}
                          className={action.className}
                          alt={action.alt}
                          src={action.src}
                        />
                      ) : (
                        <button
                          key={action.alt}
                          type="button"
                          aria-label={action.alt}
                          className={action.className}
                        >
                          {action.icon}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Lsicon location"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/lsicon-location-outline.svg"
                  />
                </div>
                <div>
                  <Input
                    defaultValue="Add Location"
                    className="h-[40px] rounded-[5px] border-0 bg-[#f1f3f4] px-3 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] shadow-sm"
                  />
                </div>
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Ic outline"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/ic-outline-notifications.svg"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {notificationFields.map((field) => (
                    <Button
                      key={field.label}
                      type="button"
                      variant="ghost"
                      className={`h-[34px] ${field.minWidth} rounded-[5px] bg-[#f1f3f4] px-3 py-2.5 shadow-sm hover:bg-[#f1f3f4]`}
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">
                        {field.label}
                      </span>
                      {field.withChevron && (
                        <ChevronDownIcon
                          className="h-5 w-5 text-[#595959]"
                          strokeWidth={2}
                        />
                      )}
                    </Button>
                  ))}
                  <button
                    type="button"
                    aria-label="Remove notification"
                    className="flex h-5 w-5 items-center justify-center"
                  >
                    <XIcon className="h-4 w-4 text-[#595959]" strokeWidth={2} />
                  </button>
                </div>
                <div />
                <div>
                  <button
                    type="button"
                    className="h-auto [font-family:'Roboto',Helvetica] text-base font-semibold leading-8 text-[#0957a1]"
                  >
                    Add notification
                  </button>
                </div>
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Stash data date"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/stash-data-date-light.svg"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    className="h-auto border-b border-gray-600 px-1 pt-1 [font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#595959]"
                  >
                    Digital Marketing
                  </button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-[34px] min-w-[66px] rounded-[5px] bg-[#f1f3f4] px-3 py-2.5 shadow-sm hover:bg-[#f1f3f4]"
                  >
                    <span className="h-5 w-5 rounded-[10px] bg-[#0957a1]" />
                    <ChevronDownIcon className="h-5 w-5 text-[#595959]" strokeWidth={2} />
                  </Button>
                </div>
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Uil bag"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/uil-bag.svg"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {visibilityFields.map((field) => (
                    <Button
                      key={field.label}
                      type="button"
                      variant="ghost"
                      className="h-[34px] rounded-[5px] bg-[#f1f3f4] px-3 py-2.5 shadow-sm hover:bg-[#f1f3f4]"
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">
                        {field.label}
                      </span>
                      {field.withChevron && (
                        <ChevronDownIcon className="h-5 w-5 text-[#595959]" strokeWidth={2} />
                      )}
                    </Button>
                  ))}
                  <img
                    className="h-6 w-6"
                    alt="Mingcute question"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/mingcute-question-line.svg"
                  />
                </div>
                <div className="pt-2">
                  <img
                    className="h-5 w-5"
                    alt="Iconamoon menu"
                    src="https://c.animaapp.com/molfmds0qJHEaZ/img/iconamoon-menu-burger-horizontal-duotone.svg"
                  />
                </div>
                <div>
                  <div className="min-h-[234px] rounded-lg bg-[#e4e9f2]">
                    <div className="px-[17px] pt-3">
                      <div className="flex items-center gap-3">
                        {editorToolbarImages.map((item) => (
                          <img
                            key={item.alt}
                            className={item.className}
                            alt={item.alt}
                            src={item.src}
                          />
                        ))}
                      </div>
                      <Separator className="mt-3 mb-4 opacity-0" />
                      <p className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">
                        Add&nbsp;&nbsp;description
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
