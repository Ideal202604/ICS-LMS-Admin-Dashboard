import { Button } from "../../components/ui/button";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { MockTestOverviewSection } from "./sections/MockTestOverviewSection";
import { SideNavigationSection } from "./sections/SideNavigationSection";

export const MockTestOverviewV2 = (): JSX.Element => {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[156px_minmax(0,1fr)] grid-rows-[auto_1fr] bg-white">
        <aside className="row-span-2 border-r border-[#d9d9d9]">
          <SideNavigationSection />
        </aside>
        <header className="border-b border-[#d9d9d9]">
          <AppHeaderSection />
        </header>
        <section className="min-w-0 bg-white px-[10px] pt-4 pb-8">
          <MockTestOverviewSection />
          <div className="mt-6 flex justify-end">
            <Button
              type="button"
              className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white hover:bg-[#0957a1]/90"
            >
              <img
                className="h-5 w-5"
                alt="Plus"
                src="https://c.animaapp.com/moo0hot3G8QUUI/img/plus.svg"
              />
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white">
                Create
              </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};
