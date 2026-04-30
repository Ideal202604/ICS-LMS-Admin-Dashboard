import { AppLayout } from "../../components/shared";
import { CourseOverviewHeaderSection } from "./sections/CourseOverviewHeaderSection";
import { CourseMetricsCardsSection } from "./sections/CourseMetricsCardsSection";
import { RecentActivityGallerySection } from "./sections/RecentActivityGallerySection";
import { CourseActivityTableSection } from "./sections/CourseActivityTableSection";

export const Courses = (): JSX.Element => {
  return (
    <AppLayout className="bg-[#f8f8f8]">
      <div className="flex flex-col gap-3 px-4 pt-4 pb-8 md:gap-4 md:px-4 md:pt-4 md:pb-8">
        <CourseOverviewHeaderSection />
        <CourseMetricsCardsSection />
        <RecentActivityGallerySection />
        <CourseActivityTableSection />
      </div>
    </AppLayout>
  );
};
