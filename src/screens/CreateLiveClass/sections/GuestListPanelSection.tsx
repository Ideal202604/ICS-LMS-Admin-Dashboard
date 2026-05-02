import {
  ChevronDownIcon,
  CircleXIcon,
  LockIcon,
  PlusIcon,
  XIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Separator } from "../../../components/ui/separator";

const guestEmails = ["guest1@email.com", "guest2@email.com"];

interface GuestListPanelSectionProps {
  onClose?: () => void;
}

export const GuestListPanelSection = ({ onClose }: GuestListPanelSectionProps): JSX.Element => {
  return (
    <Card className="w-full overflow-hidden rounded-[10px] border border-[#c7c7c7] bg-white shadow-[-1px_1px_4px_#00000040] transition-all duration-300">
      <CardContent className="p-0">
        <section aria-label="Guest list panel" className="rounded-[10px] bg-white">
          {/* Header with close */}
          <header className="flex items-start justify-end border-b border-[#d3d3d3] px-4 py-3 sm:px-5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-auto p-1 text-[#6b7280] transition-all duration-150 hover:bg-transparent hover:text-[#111111] hover:scale-110 active:scale-95"
              aria-label="Close panel"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </header>

          {/* Two-column body */}
          <div className="grid grid-cols-1 gap-0 md:grid-cols-[1.6fr_1fr]">
            {/* Left: date/time and event details */}
            <section className="min-w-0 border-b border-[#d9d9d9] p-4 transition-colors duration-150 hover:bg-[#fafafa] md:border-b-0 md:border-r md:border-[#d9d9d9]">
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#111111] [font-family:'Roboto',Helvetica] sm:gap-3">
                <div className="rounded-sm bg-[#f3f4f6] px-3 py-2 transition-colors duration-150 hover:bg-[#e5e7eb]">
                  10:30 am
                </div>
                <span>to</span>
                <div className="rounded-sm bg-[#f3f4f6] px-3 py-2 transition-colors duration-150 hover:bg-[#e5e7eb]">
                  11:30 am
                </div>
                <div className="rounded-sm bg-[#f3f4f6] px-3 py-2 transition-colors duration-150 hover:bg-[#e5e7eb]">
                  Feb 13,2026
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="h-auto rounded-sm border-[#2b6cb0] px-3 py-1.5 text-[11px] font-normal text-[#2b6cb0] transition-all duration-150 hover:bg-[#ebf4ff] [font-family:'Roboto',Helvetica]"
                >
                  Time zone
                </Button>
              </div>

              <div className="mt-3">
                <Button
                  type="button"
                  variant="secondary"
                  className="h-auto rounded-sm bg-[#f3f4f6] px-3 py-1.5 text-[11px] font-normal text-[#6b7280] transition-all duration-150 hover:bg-[#eceef2] [font-family:'Roboto',Helvetica]"
                >
                  Does not Repeat
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Button>
              </div>

              <nav aria-label="Event tabs" className="mt-4 flex items-end gap-4 text-[11px] [font-family:'Roboto',Helvetica]">
                <button type="button" className="border-b border-[#2563eb] pb-0.5 text-[#2563eb] transition-colors duration-150 hover:text-[#1d4ed8]">
                  details
                </button>
                <button type="button" className="pb-0.5 text-[#444444] transition-colors duration-150 hover:text-[#111111]">
                  Find a time
                </button>
              </nav>
              <Separator className="mt-0.5 bg-[#d9d9d9]" />

              {/* Meeting link block */}
              <div className="mt-4">
                <div className="flex items-center justify-between rounded-t-sm border border-b-0 border-[#d9d9d9] bg-[#f3f4f6] px-3 py-2">
                  <span className="text-[11px] text-[#2563eb] [font-family:'Roboto',Helvetica]">link</span>
                  <div className="flex items-center gap-2 text-[#7b7b7b]">
                    <LockIcon className="h-3 w-3 transition-colors duration-150 hover:text-[#111111]" />
                    <CircleXIcon className="h-3 w-3 transition-colors duration-150 hover:text-[#111111]" />
                    <XIcon className="h-3 w-3 transition-colors duration-150 hover:text-[#111111]" />
                  </div>
                </div>
                <div className="border border-[#d9d9d9] border-t-0 px-3 py-2 text-[9px] text-[#111111] [font-family:'Roboto',Helvetica]">
                  zoom/xyz-rqjo-jjj | up to 100 guest connections
                </div>
                <div className="h-6 border border-[#d9d9d9] border-t-0 bg-[#eceff5]" />
              </div>

              {/* Duration controls */}
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] [font-family:'Roboto',Helvetica]">
                <Button
                  type="button"
                  variant="secondary"
                  className="h-auto rounded-sm bg-[#f3f4f6] px-3 py-1.5 text-[11px] font-normal text-[#6b7280] transition-all duration-150 hover:bg-[#eceef2]"
                >
                  Duration
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Button>
                <div className="rounded-sm bg-[#f3f4f6] px-3 py-1.5 text-[#6b7280]">30</div>
                <Button
                  type="button"
                  variant="secondary"
                  className="h-auto rounded-sm bg-[#f3f4f6] px-3 py-1.5 text-[11px] font-normal text-[#6b7280] transition-all duration-150 hover:bg-[#eceef2]"
                >
                  Minutes
                  <ChevronDownIcon className="ml-1 h-3 w-3" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto px-1 py-1 text-[#444444] transition-all duration-150 hover:bg-transparent hover:text-[#111111]"
                  aria-label="Remove duration"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </Button>
              </div>
            </section>

            {/* Right: guests */}
            <aside className="min-w-0 p-4">
              <h2 className="text-[11px] text-[#4b74a6] [font-family:'Roboto',Helvetica]">Guests</h2>
              <Separator className="mt-1 bg-[#d9d9d9]" />
              <div className="mt-4 flex items-start gap-2 text-[11px] text-[#6b7280] [font-family:'Roboto',Helvetica]">
                <LockIcon className="mt-0.5 h-3 w-3 shrink-0" />
                <p className="max-w-[230px] leading-4">
                  Only paid &amp; verified students can access this class.
                </p>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="add-guests-panel"
                  className="mb-1 block text-[11px] text-[#6b7280] [font-family:'Roboto',Helvetica]"
                >
                  Add Guests
                </label>
                <div className="flex items-center rounded-sm bg-[#eceff5] px-2 transition-colors duration-150 focus-within:bg-[#e2e7f0]">
                  <PlusIcon className="h-3 w-3 text-[#6b7280]" />
                  <Input
                    id="add-guests-panel"
                    defaultValue=""
                    className="h-7 border-0 bg-transparent px-2 py-1 text-[11px] shadow-none focus-visible:ring-0 [font-family:'Roboto',Helvetica]"
                  />
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {guestEmails.map((email) => (
                  <li key={email} className="flex items-center gap-2 group">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b8573c] text-[9px] text-white [font-family:'Roboto',Helvetica] transition-transform duration-150 group-hover:scale-110">
                      t
                    </span>
                    <span className="text-[11px] text-[#6b7280] [font-family:'Roboto',Helvetica] transition-colors duration-150 group-hover:text-[#444444]">
                      {email}
                    </span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </CardContent>
    </Card>
  );
};
