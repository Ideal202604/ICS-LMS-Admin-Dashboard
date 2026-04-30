import { Card, CardContent } from "../../components/ui/card";
import { AppLayout } from "../../components/shared";
import { CreatorShortcutSection } from "./sections/CreatorShortcutSection";
import { DashboardHeroSection } from "./sections/DashboardHeroSection";
import { EnrollmentActivitySection } from "./sections/EnrollmentActivitySection";
import { MainDashboardBodySection } from "./sections/MainDashboardBodySection";
import { PerformanceSummarySection } from "./sections/PerformanceSummarySection";
import { SetupProgressSection } from "./sections/SetupProgressSection";

const dashboardSections = [
  { key: "setup-progress", component: SetupProgressSection },
  { key: "performance-summary", component: PerformanceSummarySection },
  { key: "creator-shortcut", component: CreatorShortcutSection },
  { key: "enrollment-activity", component: EnrollmentActivitySection },
];

export const Dashboard = (): JSX.Element => {
  return (
    <AppLayout className="bg-white">
      <div className="flex flex-col">
        <DashboardHeroSection />
        <section className="flex flex-col gap-3 px-3 pb-8 pt-3 sm:px-4 sm:gap-4">
          <MainDashboardBodySection />
          {dashboardSections.map(({ key, component: SectionComponent }) => (
            <Card
              key={key}
              className="h-auto w-full rounded-none border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0">
                <SectionComponent />
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </AppLayout>
  );
};
