import { AppLayout } from "../../components/shared";
import { ContentCardOverviewSection } from "./sections/ContentCardOverviewSection";

export const Classification = (): JSX.Element => {
  return (
    <AppLayout className="bg-[#f8f8f8]">
      <section className="flex min-w-0 flex-1 flex-col px-4 pb-8 pt-5">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-300">
          <ContentCardOverviewSection />
        </div>
      </section>
    </AppLayout>
  );
};
