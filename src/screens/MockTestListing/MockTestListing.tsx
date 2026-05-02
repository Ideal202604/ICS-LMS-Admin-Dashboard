import { AppLayout } from "../../components/shared";
import { MockTestListingHeaderSection } from "./sections/MockTestListingHeaderSection";
import { MockTestListingTableSection } from "./sections/MockTestListingTableSection";

export const MockTestListing = (): JSX.Element => {
  return (
    <AppLayout className="bg-white">
      <div className="flex w-full flex-col gap-3 p-3 md:gap-4 md:p-4">
        <MockTestListingHeaderSection />
        <MockTestListingTableSection />
      </div>
    </AppLayout>
  );
};
