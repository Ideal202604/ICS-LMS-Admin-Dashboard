import { Button } from "../../components/ui/button";
import { MockTestContentSection } from "./sections/MockTestContentSection";
import { AppLayout } from "../../components/shared";

export const MockTest = (): JSX.Element => {
  return (
    <AppLayout className="bg-[#f8f8f8]">
      <section className="flex min-w-0 flex-1 flex-col px-2 pb-8 pt-3 sm:px-3 md:px-4 lg:px-6">
        <MockTestContentSection />
        <div className="mt-6 flex w-full justify-end">
          <Button
            type="button"
            className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
          >
            <img
              className="h-5 w-5"
              alt="Plus"
              src="https://c.animaapp.com/moju75b0PhxLWx/img/plus.svg"
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
