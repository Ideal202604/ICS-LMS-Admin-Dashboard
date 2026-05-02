import { useState } from "react";
import { AppLayout } from "../../components/shared";
import { EventDetailsFormSection } from "./sections/EventDetailsFormSection";
import { EventTimezoneDialogSection } from "./sections/EventTimezoneDialogSection";
import { GuestListPanelSection } from "./sections/GuestListPanelSection";
import { LiveClassDetailsSection } from "./sections/LiveClassDetailsSection";
import { LiveClassHeaderSection } from "./sections/LiveClassHeaderSection";
import { LiveClassModalSection } from "./sections/LiveClassModalSection";

type ActiveView = "list" | "create";

export const CreateLiveClass = (): JSX.Element => {
  const [activeView, setActiveView]       = useState<ActiveView>("list");
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [guestPanelOpen, setGuestPanelOpen] = useState(false);
  const [detailsOpen,    setDetailsOpen]    = useState(false);

  const handleCreateClick = () => {
    setActiveView("create");
    setOverlayVisible(true);
    setGuestPanelOpen(true);
    setDetailsOpen(true);
  };

  const handleDismiss = () => {
    setOverlayVisible(false);
    setGuestPanelOpen(false);
    setDetailsOpen(false);
    setActiveView("list");
  };

  return (
    <AppLayout className="bg-white">
      <section className="relative flex min-w-0 flex-1 flex-col overflow-hidden animate-in fade-in duration-300">

        {/* ── Top nav header ── */}
        <LiveClassModalSection onCreateClick={handleCreateClick} />

        {/* ── Page body ── */}
        <div className="relative flex w-full flex-col gap-3 px-4 pt-4 pb-8 sm:px-6 lg:px-8">

          {/* Live Class page header card + search bar */}
          <LiveClassHeaderSection onCreateClick={handleCreateClick} />

          {/* ── LIST VIEW: table of live classes + timezone form ── */}
          {activeView === "list" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              {/* Live classes listing table */}
              <EventDetailsFormSection />

              {/* Event configuration form (timezone + details) — pixel-perfect from imported design */}
              <EventTimezoneDialogSection onClose={handleCreateClick} />
            </div>
          )}

          {/* ── CREATE VIEW: overlay + panels ── */}
          {activeView === "create" && (
            <div className="relative w-full animate-in fade-in duration-300">
              {/* Blurred backdrop */}
              {overlayVisible && (
                <div
                  aria-hidden="true"
                  onClick={handleDismiss}
                  className="pointer-events-auto absolute inset-0 z-0 rounded-lg bg-[#11111182] backdrop-blur-[2.35px] [-webkit-backdrop-filter:blur(2.35px)_brightness(100%)] animate-in fade-in duration-300"
                />
              )}

              {/* Guest list panel */}
              {guestPanelOpen && (
                <aside className="relative z-10 mb-4 ml-auto w-full max-w-[640px] animate-in fade-in slide-in-from-top-3 duration-300">
                  <GuestListPanelSection onClose={() => setGuestPanelOpen(false)} />
                </aside>
              )}

              {/* Full event details section */}
              {detailsOpen && (
                <div className="relative z-10 min-w-0 -mt-2 animate-in fade-in slide-in-from-bottom-3 duration-300">
                  <LiveClassDetailsSection onClose={handleDismiss} />
                </div>
              )}

              {/* Empty state */}
              {!detailsOpen && !guestPanelOpen && (
                <div className="flex flex-col items-center gap-4 py-20 animate-in fade-in duration-300">
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal text-gray-400">
                    Click &ldquo;Create Live Class&rdquo; to open the event editor.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </AppLayout>
  );
};
