import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Separator } from "../../../components/ui/separator";

const CDN = "https://c.animaapp.com/monxybvcQFTZef/img";

const scheduleChips = {
  start: ["Feb 13,2026", "10:30 am"],
  end: ["11:30 am", "Feb 13,2026"],
};

const repeatOptions = [
  "Does not Repeat",
  "Daily",
  "Weekly on Friday",
  "Every week Day",
  "Custom",
];

const guests = [
  "guest1@email.com",
  "guest2@email.com",
  "digitlmarketingstudent@email.com",
];

const guestPermissions = ["Modify event", "Invite others", "See guest list"];

const descriptionLines = [
  "🚀 Paid Live Class – Advanced UI/UX Masterclass",
  "",
  "This is a premium live training session designed for serious learners.",
  "",
  "✅ Access: Paid (Only enrolled students allowed)",
  "✅ Topic: Modern SaaS Dashboard Design (2026 Edition)",
  "✅ Includes:",
  "Live Figma walkthrough",
  "UI system design",
  "Grid & spacing mastery",
  "Q&A session",
  "Recording access (24 hours)",
];

interface CreateLiveDetailsFormSectionProps {
  onClose?: () => void;
}

export const CreateLiveDetailsFormSection = ({ onClose }: CreateLiveDetailsFormSectionProps): JSX.Element => {
  const [allDay, setAllDay] = useState(false);
  const [activeTab, setActiveTab] = useState<"event-details" | "find-a-time">("event-details");
  const [showRepeat, setShowRepeat] = useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState("Does not Repeat");
  const [showBusy, setShowBusy] = useState(false);
  const [checkedPerms, setCheckedPerms] = useState<Record<string, boolean>>({});

  const togglePerm = (p: string) =>
    setCheckedPerms((prev) => ({ ...prev, [p]: !prev[p] }));

  return (
    <section className="relative w-full animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-[10px] border border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">
      <div className="flex min-h-[1049px] flex-col px-4 pb-4 pt-6 md:px-5">

        {/* ── Header ── */}
        <header className="mb-6 flex items-start justify-between gap-4">
          <div className="border-b border-black px-2.5 pb-2 pt-2.5">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
              Live Class
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            <img
              className="h-8 w-8"
              alt="Close"
              src={`${CDN}/hugeicons-cancel-01.svg`}
            />
          </button>
        </header>

        <div className="flex flex-col gap-4">
          {/* ── Date / Time / Save row ── */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-[15px]">
              <div className="flex items-center gap-2">
                {scheduleChips.start.map((item) => (
                  <div
                    key={item}
                    className="inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[5px] bg-[#e9eef6] px-2.5 py-2.5 transition-colors duration-150 hover:bg-[#d8e5f2]"
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
              <div className="flex items-center gap-2">
                {scheduleChips.end.map((item) => (
                  <div
                    key={item}
                    className="inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[5px] bg-[#e9eef6] px-2.5 py-2.5 transition-colors duration-150 hover:bg-[#d8e5f2]"
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
                className="h-[38px] rounded-[5px] border-[3px] border-[#0957a1] bg-transparent px-4 py-2 text-[#0957a1] hover:bg-[#ebf4ff] hover:border-[#074985] transition-all duration-150"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                  Time zone
                </span>
              </Button>
            </div>
            <Button
              onClick={onClose}
              className="h-auto self-end rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white whitespace-nowrap">
                Save
              </span>
            </Button>
          </div>

          {/* ── All Day / Repeat ── */}
          <div className="flex flex-wrap items-start gap-4">
            <label className="flex h-6 cursor-pointer items-center gap-2.5">
              <Checkbox
                checked={allDay}
                onCheckedChange={(v) => setAllDay(Boolean(v))}
                className="h-5 w-5 rounded-[2px] border-[#9ca3af] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
              />
              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                All Day
              </span>
            </label>

            {/* Repeat dropdown */}
            <div className="relative flex flex-col items-start gap-[3px]">
              <button
                type="button"
                onClick={() => setShowRepeat((p) => !p)}
                className="flex h-[34px] w-[162px] items-center justify-center gap-2 rounded-[5px] border-b-[3px] border-[#0957a1] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                  {selectedRepeat}
                </span>
                <img
                  className={`h-5 w-5 transition-transform duration-200 ${showRepeat ? "rotate-180" : ""}`}
                  alt="Chevron"
                  src={`${CDN}/chevron-up-6.svg`}
                />
              </button>
              {showRepeat && (
                <Card className="absolute top-full left-0 z-50 mt-1 w-[162px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-in fade-in slide-in-from-top-2 duration-150">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-start gap-4">
                      {repeatOptions.map((option, index) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => { setSelectedRepeat(option); setShowRepeat(false); }}
                          className={`text-left [font-family:'Inter',Helvetica] text-sm font-normal leading-5 transition-colors duration-150 hover:text-[#0957a1] ${
                            option === selectedRepeat || index === 0 ? "text-[#0957a1]" : "text-gray-900"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* ── Main body: Event Details + Guests ── */}
          <div className="grid gap-3 lg:grid-cols-[minmax(0,636px)_minmax(0,397px)]">

            {/* ── Event Details Card ── */}
            <Card className="overflow-hidden rounded-lg border-0 bg-white shadow-none">
              <CardContent className="p-0">
                {/* Tabs */}
                <div className="flex h-[42px] items-end gap-5 border-b-[0.5px] border-gray-300 px-10 pb-0 pt-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab("event-details")}
                    className={`flex items-center justify-center px-[5px] py-0 transition-colors duration-150 ${activeTab === "event-details" ? "border-b-2 border-[#0957a1]" : ""}`}
                  >
                    <span className={`[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] whitespace-nowrap ${activeTab === "event-details" ? "text-[#0957a1]" : "text-gray-500 hover:text-gray-700"}`}>
                      Event details
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("find-a-time")}
                    className={`flex items-center justify-center px-[5px] py-0 transition-colors duration-150 ${activeTab === "find-a-time" ? "border-b-2 border-[#0957a1]" : ""}`}
                  >
                    <span className={`[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] whitespace-nowrap ${activeTab === "find-a-time" ? "text-[#0957a1]" : "text-gray-500 hover:text-gray-700"}`}>
                      Find a time
                    </span>
                  </button>
                </div>

                <div className="px-2 pb-6 pt-5">
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 gap-y-4">

                    {/* Join link */}
                    <div className="pt-3">
                      <img className="h-5 w-5" alt="Link" src={`${CDN}/line-md-link.svg`} />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="[font-family:'Roboto',Helvetica] text-base font-medium leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                          Join with Link
                        </div>
                        <div className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 tracking-[0] text-gray-500 whitespace-nowrap">
                          meet.google.com/xyx-yghr-ioj · Up to 100 guest connections
                        </div>
                      </div>
                      <img
                        className="mt-1 h-4 w-[68px] shrink-0"
                        alt="Frame"
                        src={`${CDN}/frame-1321317578.svg`}
                      />
                    </div>

                    {/* Location */}
                    <div className="pt-2.5">
                      <img className="h-5 w-5" alt="Location" src={`${CDN}/lsicon-location-outline.svg`} />
                    </div>
                    <div>
                      <div className="flex min-h-[44px] cursor-text items-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                          Online
                        </span>
                      </div>
                    </div>

                    {/* Notification */}
                    <div className="pt-1.5">
                      <img className="h-5 w-5" alt="Notifications" src={`${CDN}/ic-outline-notifications.svg`} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                          Notification
                        </span>
                        <img className="h-5 w-5" alt="Chevron" src={`${CDN}/chevron-up.svg`} />
                      </button>
                      <div className="flex h-[34px] items-center justify-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">30</span>
                      </div>
                      <button
                        type="button"
                        className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] border-b-[3px] border-[#0957a1] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">minutes</span>
                        <img className="h-5 w-5" alt="Chevron" src={`${CDN}/chevron-up-6.svg`} />
                      </button>
                      <button
                        type="button"
                        className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap transition-opacity duration-150 hover:opacity-70"
                      >
                        Add notification
                      </button>
                    </div>

                    {/* Category */}
                    <div className="pt-2">
                      <img className="h-5 w-5" alt="Calendar" src={`${CDN}/stash-data-date-light.svg`} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="cursor-pointer border-b border-gray-600 px-1 pb-0 pt-1">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-gray-500 whitespace-nowrap">
                          Digital Marketing
                        </span>
                      </div>
                      <button
                        type="button"
                        className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      >
                        <span className="h-5 w-5 rounded-[10px] bg-[#0957a1]" />
                        <img className="h-5 w-5" alt="Chevron" src={`${CDN}/chevron-up.svg`} />
                      </button>
                    </div>

                    {/* Visibility / Busy */}
                    <div className="pt-1.5">
                      <img className="h-5 w-5" alt="Status" src={`${CDN}/uil-bag.svg`} />
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      {/* Busy dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setShowBusy((p) => !p)}
                          className="inline-flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                        >
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">Busy</span>
                          <img className="h-5 w-5" alt="Chevron" src={`${CDN}/chevron-up.svg`} />
                        </button>
                        {showBusy && (
                          <Card className="absolute left-0 top-full z-50 mt-1 w-[87px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-in fade-in slide-in-from-top-2 duration-150">
                            <CardContent className="p-4">
                              <div className="flex flex-col items-start gap-4">
                                <button
                                  type="button"
                                  onClick={() => setShowBusy(false)}
                                  className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 text-[#0957a1] transition-opacity duration-150 hover:opacity-70"
                                >
                                  Busy
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setShowBusy(false)}
                                  className="[font-family:'Inter',Helvetica] text-sm font-normal leading-5 text-gray-900 transition-colors duration-150 hover:text-[#0957a1]"
                                >
                                  Free
                                </button>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                      <button
                        type="button"
                        className="inline-flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">Default Visibility</span>
                        <img className="h-5 w-5" alt="Chevron" src={`${CDN}/chevron-up.svg`} />
                      </button>
                      <img className="h-6 w-6" alt="Help" src={`${CDN}/mingcute-question-line.svg`} />
                    </div>

                    {/* Description */}
                    <div className="pt-2">
                      <img className="h-5 w-5" alt="Description" src={`${CDN}/iconamoon-menu-burger-horizontal-duotone.svg`} />
                    </div>
                    <div>
                      <Card className="rounded-[5px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                        <CardContent className="p-0">
                          <div className="h-[51px] rounded-t-[5px] bg-[#e4e9f2]">
                            <div className="px-[17px] pt-3">
                              <img
                                className="h-[29px] w-[260px]"
                                alt="Toolbar"
                                src={`${CDN}/frame-1321317581.svg`}
                              />
                            </div>
                          </div>
                          <div className="px-[17px] pb-6 pt-[19px]">
                            <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                              {descriptionLines.map((line, index) => (
                                <div key={`${index}`}>
                                  {line === "" ? <br /> : line}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ── Guests Panel ── */}
            <div className="flex flex-col">
              <div className="flex h-[42px] items-end gap-5 border-b-[0.5px] border-gray-300 px-2.5 pb-0 pt-2.5">
                <div className="flex items-center justify-center border-b-2 border-[#0957a1] px-[5px] py-0">
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                    Guests
                  </span>
                </div>
              </div>
              <div className="px-1 pt-6">
                <div className="mb-6 flex items-start gap-5">
                  <img
                    className="mt-0.5 h-5 w-5 shrink-0"
                    alt="Lock"
                    src={`${CDN}/majesticons-lock.svg`}
                  />
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                    Only paid &amp; verified students can access this class.
                  </p>
                </div>
                <Card className="rounded-[10px] border-0 bg-white shadow-none">
                  <CardContent className="flex flex-col gap-4 p-[9px]">
                    <div className="flex h-11 cursor-text items-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        Add Guests
                      </span>
                    </div>
                    <div className="px-[11px] pb-2">
                      <div className="mb-3 flex flex-col gap-3">
                        {guests.map((guest) => (
                          <div key={guest} className="group flex items-center gap-2.5">
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[50px] bg-[#a14835] p-2.5 transition-transform duration-150 group-hover:scale-110">
                              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-white whitespace-nowrap">
                                t
                              </span>
                            </div>
                            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] transition-colors duration-150 group-hover:text-[#111111]">
                              {guest}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mb-3 [font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                        Guests Permissions
                      </div>
                      <div className="flex flex-col gap-2.5">
                        {guestPermissions.map((permission) => (
                          <label key={permission} className="group flex cursor-pointer items-center gap-2.5">
                            <Checkbox
                              checked={!!checkedPerms[permission]}
                              onCheckedChange={() => togglePerm(permission)}
                              className="h-5 w-5 rounded-[2px] border-[#9ca3af] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
                            />
                            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap transition-colors duration-150 group-hover:text-[#111111]">
                              {permission}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Separator className="hidden" />
      </div>
    </section>
  );
};
