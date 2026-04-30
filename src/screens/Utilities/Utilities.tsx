import { AppLayout } from "../../components/shared";
import { UtilitiesHeaderSection } from "./sections/UtilitiesHeaderSection";
import { UtilitiesActionPanelSection } from "./sections/UtilitiesActionPanelSection";

export const Utilities = (): JSX.Element => {
  return (
    <AppLayout className="bg-[#f8f8f8]">
      <section className="flex min-w-0 flex-1 flex-col px-4 pb-8 pt-5">
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <UtilitiesHeaderSection />
          <UtilitiesActionPanelSection />
        </div>
      </section>
    </AppLayout>
  );
};
