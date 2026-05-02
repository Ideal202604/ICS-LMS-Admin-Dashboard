import { AppLayout } from "../../components/shared";
import { MockTestContentSection } from "./sections/MockTestContentSection";

export const MockTest = (): JSX.Element => {
  return (
    <AppLayout className="bg-[#f4f6f9]">
      <div className="flex flex-col">
        <MockTestContentSection />
      </div>
    </AppLayout>
  );
};
