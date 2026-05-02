import { AppLayout } from "../../components/shared";
import { LiveClassSearchToolbarSection } from "./sections/LiveClassSearchToolbarSection";
import { LiveClassTableSection } from "./sections/LiveClassTableSection";

export const LiveClasses = (): JSX.Element => {
  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-1 flex-col">
        <div className="flex flex-col gap-3 px-3 pt-2 md:px-4">
          <LiveClassSearchToolbarSection />
          <LiveClassTableSection />
        </div>
      </section>
    </AppLayout>
  );
};
