import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const RecentActivityGallerySection = (): JSX.Element => {
  return (
    <section className="w-full" aria-label="Course filters">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="relative">
            <SearchIcon
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
              aria-hidden="true"
            />
            <Input
              type="search"
              defaultValue=""
              placeholder="Search"
              aria-label="Search courses"
              className="h-10 w-full rounded-[10px] border-gray-300 bg-white pl-10 pr-3 [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-500 shadow-[var(--shadow-xs)] placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30 focus-visible:ring-offset-0 transition-all duration-200"
            />
          </div>
        </div>
        <div className="flex shrink-0 items-center">
          <Button
            type="button"
            variant="outline"
            className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 hover:bg-white transition-all duration-200 active:scale-[0.98]"
          >
            <SlidersHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            <span className="[font-family:'Roboto',Helvetica]">All Courses</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
