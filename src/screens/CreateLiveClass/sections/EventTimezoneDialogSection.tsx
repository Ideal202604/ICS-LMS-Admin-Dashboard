import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Separator } from "../../../components/ui/separator";

const repeatOptions = [
  "Does not Repeat",
  "Daily",
  "Weekly on Friday",
  "Every week Day",
  "Custom",
];

const availabilityOptions = ["Busy", "Free"];

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

interface EventTimezoneDialogSectionProps {
  onClose?: () => void;
}

export const EventTimezoneDialogSection = ({ onClose }: EventTimezoneDialogSectionProps): JSX.Element => {
  const [isTimezoneDialogOpen, setIsTimezoneDialogOpen] = useState(false);
  const [useSeparateZones, setUseSeparateZones] = useState(false);
  const [allDay, setAllDay] = useState(false);
  const [activeTab, setActiveTab] = useState<"event-details" | "find-a-time">("event-details");
  const [checkedPerms, setCheckedPerms] = useState<Record<string, boolean>>({});
  const [showRepeatDropdown, setShowRepeatDropdown] = useState(false);
  const [showAvailabilityDropdown, setShowAvailabilityDropdown] = useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState("Does not Repeat");
  const [selectedAvailability, setSelectedAvailability] = useState("Busy");

  const togglePerm = (p: string) => setCheckedPerms((prev) => ({ ...prev, [p]: !prev[p] }));

  return (
    <>
      <section className="relative w-full rounded-[10px] border border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">
        {/* Header */}
        <header className="flex flex-wrap items-start justify-between gap-4 px-3 pb-0 pt-6 sm:px-5">
          <div className="border-b border-black px-2.5 pb-2.5">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
              Live Class
            </h2>
          </div>
          <div className="flex items-start gap-3">
            <Button
              onClick={onClose}
              className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
            >
              Save
            </Button>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95"
            >
              <img
                className="h-8 w-8"
                alt="Close"
                src="https://c.animaapp.com/monyahwyrv4Cs7/img/hugeicons-cancel-01.svg"
              />
            </button>
          </div>
        </header>

        {/* Date / time row */}
        <div className="px-3 pt-3 sm:px-5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-center gap-[15px]">
              <div className="flex items-center gap-2">
                {["Feb 13,2026", "10:30 am"].map((item) => (
                  <div
                    key={item}
                    className="inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5 transition-colors duration-150 hover:bg-[#d8e5f2]"
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
                {["11:30 am", "Feb 13,2026"].map((item) => (
                  <div
                    key={item}
                    className="inline-flex h-[38px] cursor-pointer items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5 transition-colors duration-150 hover:bg-[#d8e5f2]"
                  >
                    <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-black whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsTimezoneDialogOpen(true)}
              className="flex h-[38px] items-center justify-center rounded-[5px] border-[3px] border-solid border-[#0957a1] px-2.5 transition-all duration-150 hover:bg-[#ebf4ff] active:scale-[0.98]"
            >
              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                Time zone
              </span>
            </button>
          </div>

          {/* All Day / Repeat */}
          <div className="mt-2 flex flex-wrap items-start gap-4">
            <label className="flex h-6 cursor-pointer items-center gap-2.5">
              <Checkbox
                checked={allDay}
                onCheckedChange={(v) => setAllDay(Boolean(v))}
                className="h-5 w-5 rounded-none border-[#595959] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
              />
              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                All Day
              </span>
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setShowRepeatDropdown((p) => !p);
                  setShowAvailabilityDropdown(false);
                }}
                className="flex h-[34px] items-center justify-center gap-2 rounded-[5px] border-b-[3px] border-[#0957a1] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                  {selectedRepeat}
                </span>
                <img
                  className={`h-5 w-5 transition-transform duration-200 ${showRepeatDropdown ? "rotate-180" : ""}`}
                  alt="Chevron"
                  src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up-6.svg"
                />
              </button>
              {showRepeatDropdown && (
                <div className="absolute left-0 top-full z-20 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  <Card className="w-[162px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-start gap-4">
                        {repeatOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSelectedRepeat(option);
                              setShowRepeatDropdown(false);
                            }}
                            className={`[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 transition-colors duration-150 hover:text-[#0957a1] ${
                              option === selectedRepeat ? "text-[#0957a1]" : "text-gray-900"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div className="grid gap-4 px-3 pb-5 pt-4 lg:grid-cols-[minmax(0,636px)_minmax(280px,397px)] lg:px-5">

          {/* Event details card */}
          <Card className="rounded-lg border-0 bg-white shadow-none">
            <CardContent className="p-0">
              {/* Tabs */}
              <div className="flex h-[42px] items-end gap-5 border-b border-gray-300 px-10 pt-2.5">
                {(["event-details", "find-a-time"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center justify-center px-[5px] pb-0.5 transition-all duration-150 ${
                      activeTab === tab
                        ? "border-b-2 border-[#0957a1] text-[#0957a1]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] whitespace-nowrap">
                      {tab === "event-details" ? "Event details" : "Find a time"}
                    </span>
                  </button>
                ))}
              </div>

              {activeTab === "event-details" && (
                <div className="px-2 pb-5 pt-5">
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] gap-x-4 gap-y-4">

                    {/* Join link */}
                    <img
                      className="mt-[17px] h-5 w-5"
                      alt="Link"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/line-md-link.svg"
                    />
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
                        className="mt-2 h-4 w-[68px]"
                        alt="Frame"
                        src="https://c.animaapp.com/monyahwyrv4Cs7/img/frame-1321317578.svg"
                      />
                    </div>

                    {/* Location */}
                    <img
                      className="mt-2 h-5 w-5"
                      alt="Location"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/lsicon-location-outline.svg"
                    />
                    <div className="flex cursor-text items-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                      <span className="flex-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        Online
                      </span>
                    </div>

                    {/* Notification */}
                    <img
                      className="mt-2 h-5 w-5"
                      alt="Notification"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/ic-outline-notifications.svg"
                    />
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                            Notification
                          </span>
                          <img
                            className="h-5 w-5"
                            alt="Chevron"
                            src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up.svg"
                          />
                        </div>
                        <div className="flex h-[34px] w-11 items-center justify-center rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                            30
                          </span>
                        </div>
                        <div className="flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                            minutes
                          </span>
                          <img
                            className="h-5 w-5"
                            alt="Chevron"
                            src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up.svg"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mt-2 flex items-center justify-center px-[5px] py-0 transition-opacity duration-150 hover:opacity-70"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                          Add notification
                        </span>
                      </button>
                    </div>

                    {/* Calendar category */}
                    <img
                      className="mt-2 h-5 w-5"
                      alt="Calendar"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/stash-data-date-light.svg"
                    />
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="cursor-pointer border-b border-gray-600 px-1 pt-1">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-gray-500 whitespace-nowrap">
                          Digital Marketing
                        </span>
                      </div>
                      <div className="flex h-[34px] w-[66px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                        <div className="h-5 w-5 rounded-[10px] bg-[#0957a1]" />
                        <img
                          className="h-5 w-5"
                          alt="Chevron"
                          src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up.svg"
                        />
                      </div>
                    </div>

                    {/* Visibility + availability */}
                    <img
                      className="mt-2 h-5 w-5"
                      alt="Status"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/uil-bag.svg"
                    />
                    <div className="relative flex flex-wrap items-center gap-3">
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            setShowAvailabilityDropdown((p) => !p);
                            setShowRepeatDropdown(false);
                          }}
                          className="inline-flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md"
                        >
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                            {selectedAvailability}
                          </span>
                          <img
                            className="h-5 w-5"
                            alt="Chevron"
                            src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up.svg"
                          />
                        </button>
                        {showAvailabilityDropdown && (
                          <div className="absolute left-0 top-full z-20 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                            <Card className="w-[87px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                              <CardContent className="p-4">
                                <div className="flex flex-col items-start gap-4">
                                  {availabilityOptions.map((option) => (
                                    <button
                                      key={option}
                                      type="button"
                                      onClick={() => {
                                        setSelectedAvailability(option);
                                        setShowAvailabilityDropdown(false);
                                      }}
                                      className={`[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 transition-colors duration-150 hover:text-[#0957a1] ${
                                        option === selectedAvailability ? "text-[#0957a1]" : "text-gray-900"
                                      }`}
                                    >
                                      {option}
                                    </button>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        )}
                      </div>
                      <div className="inline-flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                          Default Visibility
                        </span>
                        <img
                          className="h-5 w-5"
                          alt="Chevron"
                          src="https://c.animaapp.com/monyahwyrv4Cs7/img/chevron-up.svg"
                        />
                      </div>
                      <img
                        className="h-6 w-6"
                        alt="Help"
                        src="https://c.animaapp.com/monyahwyrv4Cs7/img/mingcute-question-line.svg"
                      />
                    </div>

                    {/* Description */}
                    <img
                      className="mt-5 h-5 w-5"
                      alt="Description"
                      src="https://c.animaapp.com/monyahwyrv4Cs7/img/iconamoon-menu-burger-horizontal-duotone.svg"
                    />
                    <Card className="rounded-[5px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                      <CardContent className="p-0">
                        <div className="rounded-t-[5px] bg-[#e4e9f2] px-[17px] py-3">
                          <img
                            className="h-[29px] w-[260px]"
                            alt="Toolbar"
                            src="https://c.animaapp.com/monyahwyrv4Cs7/img/frame-1321317581.svg"
                          />
                        </div>
                        <div className="px-[17px] py-6 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                          {descriptionLines.map((line, index) => (
                            <div key={`desc-${index}`}>
                              {line === "" ? <br /> : line}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "find-a-time" && (
                <div className="flex items-center justify-center px-10 py-20">
                  <p className="[font-family:'Roboto',Helvetica] text-base text-gray-400">
                    Find a time feature coming soon.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Guests aside */}
          <aside className="flex flex-col gap-4">
            <div className="border-b border-gray-300 px-2.5 pb-0 pt-2.5">
              <button
                type="button"
                className="flex items-center justify-center border-b-2 border-[#0957a1] px-[5px]"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 tracking-[0] text-[#0957a1] whitespace-nowrap">
                  Guests
                </span>
              </button>
            </div>
            <div className="flex items-start gap-5 pl-[5px]">
              <img
                className="mt-0.5 h-5 w-5 shrink-0"
                alt="Lock"
                src="https://c.animaapp.com/monyahwyrv4Cs7/img/majesticons-lock.svg"
              />
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                Only paid &amp; verified students can access this class.
              </p>
            </div>
            <Card className="rounded-[10px] border-0 bg-white shadow-none">
              <CardContent className="flex flex-col gap-4 p-0 pb-5">
                <div className="px-[5px] pt-[9px]">
                  <div className="flex h-11 cursor-text items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-shadow-xs transition-shadow duration-150 hover:shadow-md">
                    <span className="w-full [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                      Add Guests
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 px-5">
                  <ul className="space-y-3">
                    {guests.map((guest) => (
                      <li key={guest} className="group flex items-center gap-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-[50px] bg-[#a14835] p-2.5 transition-transform duration-150 group-hover:scale-110">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-white whitespace-nowrap">
                            t
                          </span>
                        </div>
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap transition-colors duration-150 group-hover:text-[#111111]">
                          {guest}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                    Guests Permissions
                  </div>
                  <div className="space-y-3">
                    {guestPermissions.map((permission) => (
                      <label
                        key={permission}
                        className="group flex cursor-pointer items-center gap-2.5"
                      >
                        <Checkbox
                          checked={!!checkedPerms[permission]}
                          onCheckedChange={() => togglePerm(permission)}
                          className="h-5 w-5 rounded-none border-[#595959] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
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
          </aside>
        </div>
      </section>

      {/* ── Timezone Dialog ── */}
      <Dialog open={isTimezoneDialogOpen} onOpenChange={setIsTimezoneDialogOpen}>
        <DialogContent className="w-[calc(100%-32px)] max-w-[364px] rounded-[6px] border-0 bg-white p-0 shadow-[0px_4px_12px_#00000026] animate-in zoom-in-95 duration-200">
          <DialogHeader className="px-5 pb-0 pt-5 text-left">
            <DialogTitle className="[font-family:'Roboto',Helvetica] text-[29px] font-normal leading-[1.2] tracking-[0] text-[#3c4043]">
              Event Time Zone
            </DialogTitle>
          </DialogHeader>
          <div className="px-5 pb-5 pt-4">
            <label className="flex cursor-pointer items-center gap-3">
              <Checkbox
                checked={useSeparateZones}
                onCheckedChange={(v) => setUseSeparateZones(Boolean(v))}
                className="h-4 w-4 rounded-[2px] border-[#bdbdbd] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
              />
              <span className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#5f6368]">
                Use separate start and end time zones
              </span>
            </label>
            <div className="mt-6 space-y-3">
              <div className="rounded-[2px] bg-[#eef2fa] px-3 py-2">
                <div className="[font-family:'Roboto',Helvetica] text-[8px] font-normal leading-3 tracking-[0] text-[#5f6368]">
                  Event start time zone
                </div>
                <div className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#5f6368]">
                  (GMT+05:30) India Standard Time - Kolkata
                </div>
              </div>
              <div className="flex items-center justify-end pr-1">
                <img
                  className="h-4 w-4"
                  alt="Swap"
                  src="https://c.animaapp.com/monyahwyrv4Cs7/img/vector-1.svg"
                />
              </div>
              <div className="rounded-[2px] bg-[#eef2fa] px-3 py-2">
                <div className="[font-family:'Roboto',Helvetica] text-[8px] font-normal leading-3 tracking-[0] text-[#5f6368]">
                  Event end time zone
                </div>
                <div className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-4 tracking-[0] text-[#5f6368]">
                  (GMT+05:30) India Standard Time - Kolkata
                </div>
              </div>
            </div>
            <Separator className="my-5 bg-transparent" />
            <DialogFooter className="flex-row items-center justify-between sm:flex-row">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  className="[font-family:'Roboto',Helvetica] text-xs font-medium leading-4 tracking-[0] text-[#1a73e8] transition-opacity duration-150 hover:opacity-70"
                >
                  Use current time zone
                </button>
                <button
                  type="button"
                  className="[font-family:'Roboto',Helvetica] text-xs font-medium leading-4 tracking-[0] text-[#1a73e8] transition-opacity duration-150 hover:opacity-70"
                  onClick={() => setIsTimezoneDialogOpen(false)}
                >
                  Cancel
                </button>
              </div>
              <Button
                className="h-auto rounded bg-[#1a73e8] px-3 py-1.5 [font-family:'Roboto',Helvetica] text-xs font-medium leading-4 text-white transition-all duration-200 hover:bg-[#1557b0] hover:shadow-md active:scale-[0.98]"
                onClick={() => setIsTimezoneDialogOpen(false)}
              >
                Ok
              </Button>
            </DialogFooter>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
