import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Separator } from "../../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const guestEmails = [
  "guest1@email.com",
  "guest2@email.com",
  "digitlmarketingstudent@email.com",
];

const notificationChannels = ["Email", "WhatsApp", "Call", "All"];
const notificationUnits    = ["Minutes", "Hours", "Day", "Weeks"];
const guestPermissions     = ["Modify event", "Invite others", "See guest list"];

interface LiveClassDetailsSectionProps {
  onClose?: () => void;
}

export const LiveClassDetailsSection = ({ onClose }: LiveClassDetailsSectionProps): JSX.Element => {
  const [checkedPerms,         setCheckedPerms]         = useState<Record<string, boolean>>({});
  const [allDay,               setAllDay]               = useState(false);
  const [showNotifDropdowns,   setShowNotifDropdowns]   = useState(false);
  const [activeTab,            setActiveTab]            = useState("event-details");

  const togglePerm = (p: string) => setCheckedPerms((prev) => ({ ...prev, [p]: !prev[p] }));

  return (
    <section className="relative w-full rounded-[10px] border-[0.5px] border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">
      <div className="flex flex-col gap-4 p-5 pb-5">

        {/* ── Header ── */}
        <header className="flex items-start justify-between gap-4">
          <div className="border-b-[0.5px] border-black px-2.5 pb-2 pt-2.5">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
              Live Class
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close Live Class details"
            onClick={onClose}
            className="shrink-0 transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            <img
              className="h-8 w-8"
              alt="Close"
              src="https://c.animaapp.com/monxmvbmbjk2ou/img/hugeicons-cancel-01.svg"
            />
          </button>
        </header>

        {/* ── Date / time chips ── */}
        <div className="flex flex-wrap items-center gap-[15px]">
          <div className="flex items-center gap-2.5">
            {["Feb 13,2026", "10:30 am"].map((item) => (
              <div
                key={item}
                className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5 cursor-pointer transition-colors duration-150 hover:bg-[#d8e5f2]"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-black whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-black whitespace-nowrap">
            to
          </span>
          <div className="flex items-center gap-2.5">
            {["11:30 am", "Feb 13,2026"].map((item) => (
              <div
                key={item}
                className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5 cursor-pointer transition-colors duration-150 hover:bg-[#d8e5f2]"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-black whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <Button
            type="button"
            variant="outline"
            className="h-[38px] rounded-[5px] border-[3px] border-[#0957a1] bg-transparent px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1] transition-all duration-150 hover:bg-[#ebf4ff] hover:border-[#074985]"
          >
            Time zone
          </Button>
        </div>

        {/* ── All Day / Repeat ── */}
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex cursor-pointer items-center gap-2.5">
            <Checkbox
              checked={allDay}
              onCheckedChange={(v) => setAllDay(Boolean(v))}
              className="h-5 w-5 rounded-none border-[#595959] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
            />
            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
              All Day
            </span>
          </label>
          <button
            type="button"
            className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
          >
            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
              Does not Repeat
            </span>
            <img
              className="h-5 w-5"
              alt="Chevron up"
              src="https://c.animaapp.com/monxmvbmbjk2ou/img/chevron-up.svg"
            />
          </button>
        </div>

        {/* ── Body grid: event details + guests ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,636px)_minmax(0,397px)]">

          {/* ── Event details card with Tabs ── */}
          <Card className="overflow-hidden rounded-lg border-0 bg-white shadow-none">
            <CardContent className="p-0">
              {/* Tabs header */}
              <div className="border-b border-gray-300 px-[33px] pt-0">
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="h-auto justify-start gap-5 rounded-none bg-transparent p-0">
                    <TabsTrigger
                      value="event-details"
                      className="h-auto rounded-none border-b-2 border-transparent px-[5px] py-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-gray-500 shadow-none transition-colors duration-150 data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1]"
                    >
                      Event details
                    </TabsTrigger>
                    <TabsTrigger
                      value="find-a-time"
                      className="h-auto rounded-none border-b-2 border-transparent px-0 py-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-gray-500 shadow-none transition-colors duration-150 data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1]"
                    >
                      Find a time
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Fields */}
              <div className="px-11 pb-[22px] pt-5">
                <div className="grid grid-cols-[20px_minmax(0,1fr)_68px] items-start gap-x-4 gap-y-5">

                  {/* Join link */}
                  <img
                    className="mt-[17px] h-5 w-5"
                    alt="Link"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/line-md-link.svg"
                  />
                  <div className="min-w-0">
                    <div className="[font-family:'Roboto',Helvetica] text-base font-medium leading-8 tracking-[0] whitespace-nowrap text-[#0957a1]">
                      Join with Link
                    </div>
                    <div className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 tracking-[0] text-gray-500 truncate">
                      meet.google.com/xyx-yghr-ioj · Up to 100 guest connections
                    </div>
                  </div>
                  <img
                    className="mt-[13px] h-4 w-[68px] justify-self-end"
                    alt="Frame"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/frame-1321317578.svg"
                  />

                  {/* Location */}
                  <img
                    className="mt-[9px] h-5 w-5"
                    alt="Location"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/lsicon-location-outline.svg"
                  />
                  <div className="col-span-2">
                    <div className="flex min-h-[42px] w-full items-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs cursor-text transition-shadow duration-150 hover:shadow-md">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        Online
                      </span>
                    </div>
                  </div>

                  {/* Notification */}
                  <img
                    className="mt-[7px] h-5 w-5"
                    alt="Notifications"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/ic-outline-notifications.svg"
                  />
                  <div className="col-span-2 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowNotifDropdowns((p) => !p)}
                      className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      aria-expanded={showNotifDropdowns}
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                        Notification
                      </span>
                      <img
                        className={`h-5 w-5 transition-transform duration-200 ${showNotifDropdowns ? "rotate-180" : ""}`}
                        alt="Chevron"
                        src="https://c.animaapp.com/monxmvbmbjk2ou/img/chevron-up.svg"
                      />
                    </button>
                    <div className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                        30
                      </span>
                    </div>
                    <button
                      type="button"
                      className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] border-b-[3px] border-[#0957a1] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                        Minutes
                      </span>
                      <img
                        className="h-5 w-5"
                        alt="Chevron"
                        src="https://c.animaapp.com/monxmvbmbjk2ou/img/chevron-up-6.svg"
                      />
                    </button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="h-auto p-0 hover:bg-transparent"
                      aria-label="Remove notification"
                    >
                      <img
                        className="h-5 w-5"
                        alt="Cancel"
                        src="https://c.animaapp.com/monxmvbmbjk2ou/img/hugeicons-cancel-01.svg"
                      />
                    </Button>
                  </div>

                  {/* Notification dropdowns */}
                  {showNotifDropdowns && (
                    <div className="col-span-3 -mt-2 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Card className="w-[135px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                        <CardContent className="p-4">
                          <nav aria-label="Notification methods">
                            <ul className="flex flex-col gap-4">
                              {notificationChannels.map((option) => (
                                <li
                                  key={option}
                                  className="[font-family:'Inter',Helvetica] cursor-pointer text-sm font-normal leading-5 text-gray-900 transition-colors duration-150 hover:text-[#0957a1]"
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </CardContent>
                      </Card>
                      <Card className="w-[106px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                        <CardContent className="p-4">
                          <nav aria-label="Notification timing">
                            <ul className="flex flex-col gap-4">
                              {notificationUnits.map((option, index) => (
                                <li
                                  key={option}
                                  className={`[font-family:'Inter',Helvetica] cursor-pointer text-sm font-normal leading-5 transition-colors duration-150 hover:text-[#0957a1] ${
                                    index === 0 ? "text-[#0957a1]" : "text-gray-900"
                                  }`}
                                >
                                  {option}
                                </li>
                              ))}
                            </ul>
                          </nav>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Calendar / category */}
                  <img
                    className="mt-[5px] h-5 w-5"
                    alt="Calendar"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/stash-data-date-light.svg"
                  />
                  <div className="col-span-2 flex flex-wrap items-center gap-4">
                    <div className="cursor-pointer border-b border-gray-600 px-1 pb-0 pt-1">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] whitespace-nowrap text-gray-500">
                        Digital Marketing
                      </span>
                    </div>
                    <button
                      type="button"
                      className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                    >
                      <span className="h-5 w-5 rounded-[10px] bg-[#0957a1]" />
                      <img
                        className="h-5 w-5"
                        alt="Chevron"
                        src="https://c.animaapp.com/monxmvbmbjk2ou/img/chevron-up.svg"
                      />
                    </button>
                  </div>

                  {/* Visibility */}
                  <img
                    className="mt-[7px] h-5 w-5"
                    alt="Status"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/uil-bag.svg"
                  />
                  <div className="col-span-2 flex flex-wrap items-center gap-4">
                    {["Busy", "Default Visibility"].map((label) => (
                      <button
                        key={label}
                        type="button"
                        className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                          {label}
                        </span>
                        <img
                          className="h-5 w-5"
                          alt="Chevron"
                          src="https://c.animaapp.com/monxmvbmbjk2ou/img/chevron-up.svg"
                        />
                      </button>
                    ))}
                    <img
                      className="h-6 w-6 shrink-0"
                      alt="Help"
                      src="https://c.animaapp.com/monxmvbmbjk2ou/img/mingcute-question-line.svg"
                    />
                  </div>

                  {/* Add notification / description */}
                  <img
                    className="mt-[18px] h-5 w-5"
                    alt="Description"
                    src="https://c.animaapp.com/monxmvbmbjk2ou/img/iconamoon-menu-burger-horizontal-duotone.svg"
                  />
                  <div className="col-span-2 min-w-0">
                    <div className="mb-2 flex items-center justify-between">
                      <button
                        type="button"
                        className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-8 tracking-[0] whitespace-nowrap text-[#0957a1] transition-opacity duration-150 hover:opacity-70"
                      >
                        Add notification
                      </button>
                    </div>
                    <Card className="rounded-[5px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                      <CardContent className="overflow-hidden p-0">
                        <div className="bg-[#e4e9f2] px-[17px] py-3">
                          <img
                            className="h-[29px] w-[260px]"
                            alt="Toolbar"
                            src="https://c.animaapp.com/monxmvbmbjk2ou/img/frame-1321317581.svg"
                          />
                        </div>
                        <div className="px-[17px] pb-6 pt-4 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                          🚀 Paid Live Class – Advanced UI/UX Masterclass
                          <br /><br />
                          This is a premium live training session designed for serious learners.
                          <br /><br />
                          ✅ Access: Paid (Only enrolled students allowed)<br />
                          ✅ Topic: Modern SaaS Dashboard Design (2026 Edition)<br />
                          ✅ Includes:<br />
                          Live Figma walkthrough<br />
                          UI system design<br />
                          Grid &amp; spacing mastery<br />
                          Q&amp;A session<br />
                          Recording access (24 hours)
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── Guests panel ── */}
          <aside className="flex flex-col">
            <div className="border-b border-gray-300 px-2.5 pb-0 pt-2.5">
              <div className="inline-flex border-b-2 border-[#0957a1] px-[5px] py-0">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1]">
                  Guests
                </h3>
              </div>
            </div>
            <div className="pt-10">
              <div className="flex items-start gap-5">
                <img
                  className="mt-0.5 h-5 w-5 shrink-0"
                  alt="Lock"
                  src="https://c.animaapp.com/monxmvbmbjk2ou/img/majesticons-lock.svg"
                />
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Only paid &amp; verified students can access this class.
                </p>
              </div>
              <Card className="mt-10 rounded-[10px] border-0 bg-white shadow-none">
                <CardContent className="p-[9px_10px_20px]">
                  <div className="flex h-11 cursor-text items-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                      Add Guests
                    </span>
                  </div>
                  <div className="px-2 pt-4">
                    <ul className="space-y-3">
                      {guestEmails.map((email) => (
                        <li key={email} className="group flex items-center gap-2.5">
                          <div className="flex h-7 w-7 items-center justify-center rounded-[50px] bg-[#a14835] p-2.5 transition-transform duration-150 group-hover:scale-110">
                            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-white whitespace-nowrap">
                              t
                            </span>
                          </div>
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959] transition-colors duration-150 group-hover:text-[#111111]">
                            {email}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 [font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                      Guests Permissions
                    </div>
                    <div className="space-y-2 pt-2">
                      {guestPermissions.map((permission) => (
                        <label
                          key={permission}
                          className="group flex cursor-pointer items-center gap-2.5"
                        >
                          <Checkbox
                            checked={!!checkedPerms[permission]}
                            onCheckedChange={() => togglePerm(permission)}
                            className="h-5 w-5 rounded-none border-[#b6b6b6] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
                          />
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959] transition-colors duration-150 group-hover:text-[#111111]">
                            {permission}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        <Separator className="opacity-0" />

        {/* Footer save button */}
        <footer className="flex justify-end">
          <Button
            onClick={onClose}
            className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
          >
            Save
          </Button>
        </footer>
      </div>
    </section>
  );
};
