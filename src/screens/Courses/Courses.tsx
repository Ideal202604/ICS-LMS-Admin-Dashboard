import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { AppLayout } from "../../components/shared";
import { CourseOverviewHeaderSection } from "./sections/CourseOverviewHeaderSection";
import { CourseMetricsCardsSection } from "./sections/CourseMetricsCardsSection";
import { RecentActivityGallerySection } from "./sections/RecentActivityGallerySection";
import { CourseActivityTableSection } from "./sections/CourseActivityTableSection";

const statusMenuItems = [
  { label: "All Courses", active: true },
  { label: "Published", active: false },
  { label: "Draft", active: false },
  { label: "Archived", active: false },
];

export const Courses = (): JSX.Element => {
  const [activeStatus, setActiveStatus] = useState("All Courses");

  return (
    <AppLayout className="bg-white">
      <div className="flex flex-col gap-2 px-2 pb-8 pt-2">
        <CourseOverviewHeaderSection />
        <CourseMetricsCardsSection />
        <RecentActivityGallerySection />
        <div className="relative">
          <CourseActivityTableSection activeStatus={activeStatus} />
          {/* Status filter floating card */}
          <Card className="absolute right-4 top-[180px] z-10 w-[130px] rounded-md border-0 bg-white shadow-[0px_0px_4px_#00000040] hidden xl:block">
            <CardContent className="p-4">
              <nav aria-label="Course status filter">
                <ul className="flex flex-col items-start gap-4">
                  {statusMenuItems.map((item) => (
                    <li key={item.label} className="w-full">
                      <button
                        type="button"
                        onClick={() => setActiveStatus(item.label)}
                        className={`w-full text-left [font-family:'Roboto',Helvetica] text-sm font-normal leading-5 transition-colors duration-150 hover:text-[#0957a1] ${
                          activeStatus === item.label
                            ? "whitespace-nowrap font-medium text-[#0957a1]"
                            : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};
