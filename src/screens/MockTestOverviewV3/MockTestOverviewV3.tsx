import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { MockTestOverviewSection } from "./sections/MockTestOverviewSection";
import { SideNavigationSection } from "./sections/SideNavigationSection";

export const MockTestOverviewV3 = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-white">
      <div className="grid w-full grid-cols-[156px_minmax(0,1fr)] grid-rows-[auto_1fr]">
        {/* Sidebar spans both rows */}
        <aside className="row-span-2 border-r border-[#d9d9d9]">
          <SideNavigationSection />
        </aside>

        {/* Top header */}
        <header className="border-b border-[#d9d9d9]">
          <AppHeaderSection />
        </header>

        {/* Main content */}
        <section className="flex min-w-0 flex-col bg-white px-2 pt-4 pb-8 sm:px-4 lg:px-8">
          <div className="animate-fade-in">
            <MockTestOverviewSection />
          </div>
          <div className="flex justify-end pt-6 animate-fade-in">
            <Button
              type="button"
              onClick={() => navigate("/mock-test-editor")}
              className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#084a88] hover:shadow-md active:scale-[0.97]"
            >
              <img
                className="h-5 w-5"
                alt="Plus"
                src="https://c.animaapp.com/moo3kvsppKe6iN/img/plus.svg"
              />
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
                Create
              </span>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
};
