import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/shared";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { EventDetailsSection } from "./sections/EventDetailsSection";
import { EventHeaderSection } from "./sections/EventHeaderSection";
import { GuestAccessSection } from "./sections/GuestAccessSection";
import { ImportConfirmationNotification } from "./sections/ImportConfirmationNotification";

const topControls = [
  {
    id: "all-day",
    label: "All Day",
    iconSrc: "https://c.animaapp.com/molfmds0qJHEaZ/img/ion-checkbox-outline.svg",
    iconAlt: "Ion checkbox outline",
  },
  {
    id: "repeat",
    label: "Does not Repeat",
    iconSrc: "https://c.animaapp.com/molfmds0qJHEaZ/img/chevron-up.svg",
    iconAlt: "Chevron up",
    containerClassName:
      "flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-[#f1f3f4] px-3 py-2.5 shadow-sm",
  },
];

export const RecentActivity = (): JSX.Element => {
  const navigate = useNavigate();
  const [showImportNotification, setShowImportNotification] = useState(false);

  return (
    <AppLayout className="bg-[#f8f8f8]">
      <ImportConfirmationNotification
        open={showImportNotification}
        onClose={() => setShowImportNotification(false)}
      />
      <section className="flex min-w-0 flex-1 flex-col px-3 py-4 sm:px-4 lg:px-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <main className="w-full bg-transparent">
          <Card className="mx-auto w-full max-w-[1068px] rounded-[10px] border-[0.5px] border-gray-300 bg-[#f1f3f4] shadow-none">
            <CardContent className="p-0">
              <section className="flex min-h-[854px] flex-col">
                {/* Header */}
                <header className="flex items-start justify-between px-5 pb-0 pt-5">
                  <div className="inline-flex items-end justify-center gap-2.5 border-b-[0.5px] border-black p-2.5">
                    <h1 className="w-[585px] [font-family:'Roboto',Helvetica] text-2xl font-bold leading-8 tracking-[0] text-[#202124]">
                      Live Class
                    </h1>
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    className="shrink-0"
                    onClick={() => navigate("/live-classes")}
                  >
                    <img
                      className="h-8 w-8"
                      alt="Hugeicons cancel"
                      src="https://c.animaapp.com/molfmds0qJHEaZ/img/hugeicons-cancel-01.svg"
                    />
                  </button>
                </header>

                <div className="flex flex-1 flex-col gap-3 px-[15px] pb-4 pt-2">
                  {/* Event date/time header */}
                  <EventHeaderSection />

                  {/* All Day / Repeat / Timezone row */}
                  <section className="flex flex-wrap items-center gap-3 pl-[3px]">
                    <label className="flex h-6 items-start gap-2.5">
                      <img
                        className="mt-0.5 h-5 w-5"
                        alt={topControls[0].iconAlt}
                        src={topControls[0].iconSrc}
                      />
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                        {topControls[0].label}
                      </span>
                    </label>
                    <button
                      type="button"
                      className={topControls[1].containerClassName}
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                        {topControls[1].label}
                      </span>
                      <img
                        className="h-5 w-5"
                        alt={topControls[1].iconAlt}
                        src={topControls[1].iconSrc}
                      />
                    </button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-auto rounded-[5px] border-[3px] border-[#0957a1] bg-transparent px-5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-bold leading-8 tracking-[0] text-[#0957a1] hover:bg-transparent hover:text-[#0957a1]"
                    >
                      Time zone
                    </Button>
                  </section>

                  {/* Main two-column body */}
                  <section className="grid flex-1 grid-cols-1 gap-0 pt-1 lg:grid-cols-[1fr_299px] lg:items-start">
                    <div className="min-w-0 pr-0 lg:pr-0">
                      <EventDetailsSection />
                    </div>
                    <aside className="min-w-0 pt-0 lg:pl-0">
                      <Tabs defaultValue="guests" className="w-full">
                        <TabsList className="h-auto w-full justify-start gap-5 rounded-none border-b-[0.5px] border-gray-300 bg-transparent px-2.5 pb-0 pt-2.5">
                          <TabsTrigger
                            value="guests"
                            className="relative mt-[-32px] h-auto w-[60px] rounded-none border-b-2 border-transparent px-[5px] py-0 [font-family:'Roboto',Helvetica] text-base font-bold leading-8 tracking-[0] text-[#595959] shadow-none data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1] data-[state=active]:shadow-none"
                          >
                            Guests
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                      <div className="flex items-start gap-5 px-1 pb-3 pt-4">
                        <img
                          className="h-5 w-5 shrink-0"
                          alt="Majesticons lock"
                          src="https://c.animaapp.com/molfmds0qJHEaZ/img/majesticons-lock.svg"
                        />
                        <p className="[font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] text-[#595959]">
                          Only paid &amp; verified students can access this class.
                        </p>
                      </div>
                      <GuestAccessSection />
                    </aside>
                  </section>

                  {/* Footer */}
                  <footer className="flex justify-end gap-3 pt-1">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowImportNotification(true)}
                      className="h-auto rounded-lg border border-gray-300 bg-transparent px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] text-[#0957a1] transition-all duration-200 hover:bg-[#0957a1]/5 hover:shadow-sm active:scale-[0.97]"
                    >
                      Import Questions
                    </Button>
                    <Button
                      type="button"
                      className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#0957a1]/90 hover:shadow-md active:scale-[0.97]"
                    >
                      Save
                    </Button>
                  </footer>
                </div>
              </section>
            </CardContent>
          </Card>
        </main>
      </section>
    </AppLayout>
  );
};
