import { SurveyHeaderSection } from "./sections/SurveyHeaderSection";
import { SurveyInsightsDashboardSection } from "./sections/SurveyInsightsDashboardSection";

export const MockTestResponses = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f9fd]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[12px]">
        <SurveyHeaderSection />
        <SurveyInsightsDashboardSection />
      </div>
    </main>
  );
};
