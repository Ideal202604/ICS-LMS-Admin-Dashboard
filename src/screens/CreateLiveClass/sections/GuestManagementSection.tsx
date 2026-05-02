import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";

const guestPermissions = ["Modify event", "Invite others", "See guest list"];

interface GuestManagementSectionProps {
  onClose?: () => void;
}

export const GuestManagementSection = ({ onClose }: GuestManagementSectionProps): JSX.Element => {
  const [checkedPerms, setCheckedPerms] = useState<Record<string, boolean>>({});

  const togglePerm = (perm: string) =>
    setCheckedPerms((prev) => ({ ...prev, [perm]: !prev[perm] }));

  return (
    <section className="w-full rounded-[10px] border-[0.5px] border-solid border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">
      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* Header */}
        <header className="flex items-start justify-between gap-4">
          <div className="border-b-[0.5px] border-black px-2.5 pb-2 pt-2.5">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-bold leading-8 tracking-[0] text-[#202124]">
              Live Class
            </h2>
          </div>
          <button
            type="button"
            className="shrink-0 transition-transform duration-150 hover:scale-110 active:scale-95"
            aria-label="Close"
            onClick={onClose}
          >
            <img className="h-8 w-8" alt="Close" src="https://c.animaapp.com/monv6cn87vGYX8/img/hugeicons-cancel-01.svg" />
          </button>
        </header>

        {/* Date / time row */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-[15px]">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 tracking-[0] text-black whitespace-nowrap">Feb 13,2026</span>
              </div>
              <div className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 tracking-[0] text-black whitespace-nowrap">10:30 am</span>
              </div>
            </div>
            <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-black">to</span>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-black whitespace-nowrap">11:30 am</span>
              </div>
              <div className="inline-flex h-[38px] items-center justify-center rounded-[5px] bg-[#e9eef6] p-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-black whitespace-nowrap">Feb 13,2026</span>
              </div>
            </div>
            <Button type="button" variant="outline" className="h-[38px] rounded-[5px] border-[3px] border-[#0957a1] bg-transparent px-2.5 [font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#0957a1] hover:bg-transparent transition-colors duration-150 hover:border-[#074985] hover:text-[#074985]">
              Time zone
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <label className="flex cursor-pointer items-center gap-2.5">
              <Checkbox className="h-5 w-5 rounded-none border-[#595959] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1]" />
              <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap">All Day</span>
            </label>
            <div className="inline-flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
              <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap">Does not Repeat</span>
              <img className="h-5 w-5" alt="Chevron up" src="https://c.animaapp.com/monv6cn87vGYX8/img/chevron-up.svg" />
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,635px)_minmax(280px,397px)] lg:items-start">

          {/* Event details panel */}
          <Card className="overflow-hidden rounded-[10px] border-0 bg-white shadow-none">
            <CardContent className="p-0">
              <div className="flex min-h-[646px] flex-col">
                {/* Tabs */}
                <div className="mx-auto flex h-[42px] w-full max-w-[550px] items-end gap-5 border-b-[0.5px] border-gray-300 px-2.5 pb-0 pt-2.5">
                  <button type="button" className="flex items-center justify-center gap-2.5 border-b-2 border-[#0957a1] px-[5px] py-0">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#0957a1] whitespace-nowrap">Event details</span>
                  </button>
                  <button type="button" className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-gray-500 whitespace-nowrap transition-colors duration-150 hover:text-gray-700">Find a time</button>
                </div>
                {/* Fields */}
                <div className="flex flex-col gap-4 px-2 pt-5 sm:px-8">
                  {/* Join link */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1">
                    <img className="h-5 w-5" alt="Link" src="https://c.animaapp.com/monv6cn87vGYX8/img/line-md-link.svg" />
                    <div>
                      <div className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#0957a1] whitespace-nowrap">Join with Link</div>
                      <div className="[font-family:'Roboto',Helvetica] text-xs font-bold leading-8 text-gray-500">meet.google.com/xyx-yghr-ioj · Up to 100 guest connections</div>
                    </div>
                    <img className="h-4 w-[68px]" alt="Frame" src="https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317578.svg" />
                  </div>
                  {/* Location */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] items-center gap-3">
                    <img className="h-5 w-5" alt="Location" src="https://c.animaapp.com/monv6cn87vGYX8/img/lsicon-location-outline.svg" />
                    <div className="flex min-h-[40px] cursor-text items-center rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">Add Location</span>
                    </div>
                  </div>
                  {/* Notification */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3">
                    <img className="mt-2 h-5 w-5" alt="Notifications" src="https://c.animaapp.com/monv6cn87vGYX8/img/ic-outline-notifications.svg" />
                    <div className="flex flex-wrap items-center gap-3">
                      {["Notification", "minutes"].map((label) => (
                        <div key={label} className="inline-flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap">{label}</span>
                          <img className="h-5 w-5" alt="Chevron up" src="https://c.animaapp.com/monv6cn87vGYX8/img/chevron-up.svg" />
                        </div>
                      ))}
                      <div className="inline-flex h-[34px] items-center justify-center rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)]">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap">01</span>
                      </div>
                      <button type="button" className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-8 text-[#0957a1] whitespace-nowrap transition-opacity duration-150 hover:opacity-80">
                        Add notification
                      </button>
                    </div>
                  </div>
                  {/* Category */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] items-center gap-3">
                    <img className="h-5 w-5" alt="Category" src="https://c.animaapp.com/monv6cn87vGYX8/img/stash-data-date-light.svg" />
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="cursor-pointer border-b border-gray-600 px-1 pb-0 pt-1">
                        <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-gray-500 whitespace-nowrap">Digital Marketing</span>
                      </div>
                      <div className="inline-flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
                        <span className="h-5 w-5 rounded-[10px] bg-[#0957a1]" />
                        <img className="h-5 w-5" alt="Chevron up" src="https://c.animaapp.com/monv6cn87vGYX8/img/chevron-up.svg" />
                      </div>
                    </div>
                  </div>
                  {/* Visibility */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3">
                    <img className="mt-2 h-5 w-5" alt="Bag" src="https://c.animaapp.com/monv6cn87vGYX8/img/uil-bag.svg" />
                    <div className="flex flex-wrap items-center gap-3">
                      {["Busy", "Default Visibility"].map((label) => (
                        <div key={label} className="inline-flex h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
                          <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap">{label}</span>
                          <img className="h-5 w-5" alt="Chevron up" src="https://c.animaapp.com/monv6cn87vGYX8/img/chevron-up.svg" />
                        </div>
                      ))}
                      <img className="h-6 w-6" alt="Question" src="https://c.animaapp.com/monv6cn87vGYX8/img/mingcute-question-line.svg" />
                    </div>
                  </div>
                  {/* Description */}
                  <div className="grid grid-cols-[20px_minmax(0,1fr)] items-start gap-3 pb-6">
                    <img className="mt-2 h-5 w-5" alt="Menu" src="https://c.animaapp.com/monv6cn87vGYX8/img/iconamoon-menu-burger-horizontal-duotone.svg" />
                    <div className="min-h-[234px] rounded-lg bg-[#e4e9f2] px-[17px] py-3">
                      <div className="flex flex-col gap-[29px]">
                        <img className="h-[29px] w-[259.67px]" alt="Text formatting toolbar" src="https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317581.svg" />
                        <div className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">Add&nbsp;&nbsp;description</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guests panel */}
          <div className="flex flex-col gap-4">
            <div className="flex h-[42px] items-end gap-5 border-b-[0.5px] border-gray-300 px-2.5 pb-0 pt-2.5">
              <button type="button" className="mt-[-2px] flex items-center justify-center gap-2.5 border-b-2 border-[#0957a1] px-[5px] py-0">
                <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-[#0957a1]">Guests</span>
              </button>
            </div>
            <div className="flex items-start gap-5 px-[5px]">
              <img className="h-5 w-5 shrink-0 mt-0.5" alt="Lock" src="https://c.animaapp.com/monv6cn87vGYX8/img/majesticons-lock.svg" />
              <p className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">
                Only paid &amp; verified students can access this class.
              </p>
            </div>
            <Card className="rounded-[10px] border-0 bg-white shadow-none">
              <CardContent className="p-[9px]">
                <div className="flex flex-col">
                  <div className="flex h-11 cursor-text items-center justify-center gap-2 rounded-[5px] bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-shadow duration-150 hover:shadow-md">
                    <div className="w-full [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959]">Add Guests</div>
                  </div>
                  <div className="mt-[11px] [font-family:'Roboto',Helvetica] text-base font-semibold leading-6 text-[#595959] whitespace-nowrap">Guests Permissions</div>
                  <div className="mt-2 flex flex-col gap-[9px]">
                    {guestPermissions.map((permission) => (
                      <label key={permission} className="flex cursor-pointer items-start gap-2.5 group">
                        <Checkbox
                          checked={!!checkedPerms[permission]}
                          onCheckedChange={() => togglePerm(permission)}
                          className="mt-0.5 h-5 w-5 rounded-none border-[#595959] data-[state=checked]:bg-[#0957a1] data-[state=checked]:border-[#0957a1] transition-colors duration-150"
                        />
                        <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-[#595959] whitespace-nowrap group-hover:text-gray-700 transition-colors duration-150">
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

        {/* Footer */}
        <div className="flex justify-end">
          <Button
            onClick={onClose}
            className="h-auto rounded-lg border border-solid border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
