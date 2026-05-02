import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const CDN = "https://c.animaapp.com/monvxjv0GNYi6v/img";

interface LiveClassModalSectionProps {
  onCreateClick?: () => void;
}

export const LiveClassModalSection = ({ onCreateClick }: LiveClassModalSectionProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 w-full bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex h-[84px] w-full items-center justify-between gap-4 px-4 sm:px-5 lg:px-8">
        {/* Logo */}
        <div className="flex min-w-0 shrink-0 items-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            aria-label="Go to dashboard"
            className="flex items-center focus:outline-none"
          >
            <img
              className="h-8 w-auto"
              alt="ICS"
              src={`${CDN}/frame.svg`}
            />
          </button>
        </div>

        {/* Search */}
        <div className="flex min-w-0 flex-1 justify-center px-2">
          <div className="relative w-full max-w-[471px]">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src={`${CDN}/search.svg`}
            />
            <Input
              defaultValue=""
              placeholder="Search"
              className="h-11 rounded-[10px] border-gray-300 bg-white pl-10 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-700 shadow-shadow-xs placeholder:text-gray-700 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30"
            />
          </div>
        </div>

        {/* Right actions */}
        <nav aria-label="Top navigation actions" className="flex shrink-0 items-center gap-3">
          <Button
            type="button"
            className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
          >
            Upgrade
          </Button>
          <Button
            type="button"
            className="h-auto rounded-lg border border-gray-300 bg-[#dbeeff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#c7e3ff] active:scale-[0.98]"
          >
            View As Learner
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
          >
            <img className="h-5 w-5" alt="Help circle" src={`${CDN}/help-circle.svg`} />
            <span>Help</span>
          </Button>
          <button
            type="button"
            aria-label="Notifications"
            className="inline-flex h-6 w-6 items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95"
          >
            <img className="h-6 w-6" alt="Notifications" src={`${CDN}/vector-1.svg`} />
          </button>
          <button
            type="button"
            aria-label="Profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-150 hover:bg-[#074985]"
          >
            <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">J</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
