import { useState } from "react";
import { AppLayout } from "../../components/shared";
import { CreateLiveHeaderSection } from "./sections/CreateLiveHeaderSection";
import { CreateLiveTableSection } from "./sections/CreateLiveTableSection";
import { CreateLiveDetailsFormSection } from "./sections/CreateLiveDetailsFormSection";

export const CreateLive = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleOpen  = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <AppLayout className="bg-white">
      <section className="relative flex min-w-0 flex-1 flex-col overflow-hidden animate-in fade-in duration-300">

        {/* ── Page body ── */}
        <div className="relative flex w-full flex-col gap-4 px-4 pt-4 pb-8 sm:px-6 lg:px-8">

          {/* Header with search + create button */}
          <CreateLiveHeaderSection onCreateClick={handleOpen} />

          {/* Content area with optional overlay */}
          <div className="relative w-full">

            {/* Live class table (always visible under overlay) */}
            <CreateLiveTableSection />

            {/* Blurred backdrop overlay */}
            {modalOpen && (
              <div
                aria-hidden="true"
                onClick={handleClose}
                className="pointer-events-auto absolute inset-0 z-[5] rounded-lg bg-[#11111182] backdrop-blur-[2.35px] [-webkit-backdrop-filter:blur(2.35px)_brightness(100%)] animate-in fade-in duration-300"
              />
            )}

            {/* ── Details form modal (on top of overlay) ── */}
            {modalOpen && (
              <div className="absolute inset-x-0 top-0 z-10 animate-in fade-in slide-in-from-top-3 duration-300">
                <CreateLiveDetailsFormSection onClose={handleClose} />
              </div>
            )}

            {/* Empty state when modal closed */}
            {!modalOpen && (
              <div className="flex flex-col items-center gap-4 py-20 animate-in fade-in duration-300">
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal text-gray-400">
                  Click &ldquo;Create Live Class&rdquo; to open the event editor.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
