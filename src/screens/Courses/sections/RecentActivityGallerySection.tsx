import { SearchIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const filterOptions = [
  {
    label: "All Courses",
    icon: "https://c.animaapp.com/mol2o23wUxBYqe/img/frame-1.svg",
  },
];

export const RecentActivityGallerySection = (): JSX.Element => {
  return (
    <section className="w-full" aria-label="Courses filters">
      <div className="flex w-full items-center gap-3 rounded-[10px] border border-border bg-transparent p-1">
        <div className="flex-1">
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              defaultValue=""
              placeholder="Search"
              aria-label="Search courses"
              className="h-11 rounded-[10px] border-gray-300 bg-white pl-9 pr-3 shadow-shadow-xs [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-500 placeholder:text-gray-500 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30 focus-visible:ring-offset-0"
            />
          </div>
        </div>
        {filterOptions.map((option) => (
          <Button
            key={option.label}
            type="button"
            variant="outline"
            className="h-auto shrink-0 rounded-lg border-gray-300 bg-white px-4 py-2 text-gray-700 transition-all duration-200 hover:bg-white hover:shadow-sm active:scale-[0.98]"
          >
            <img
              className="h-5 w-5"
              alt=""
              src={option.icon}
              aria-hidden="true"
            />
            <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
              {option.label}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
};
