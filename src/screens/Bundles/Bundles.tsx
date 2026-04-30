import { Button } from "../../components/ui/button";
import { BundlesHeaderSection } from "./sections/BundlesHeaderSection";
import { AppLayout } from "../../components/shared";

export const Bundles = (): JSX.Element => {
  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-1 flex-col px-[10px] pt-5 pb-8">
        <BundlesHeaderSection />
        <div className="mt-7 flex justify-end">
          <Button
            type="button"
            className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
          >
            <img
              className="h-5 w-5"
              alt="Plus"
              src="https://c.animaapp.com/mojw47fz1YxegC/img/plus.svg"
            />
            <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
              Create
            </span>
          </Button>
        </div>
      </section>
    </AppLayout>
  );
};
