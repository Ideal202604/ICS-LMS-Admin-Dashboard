import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { MockTestOverviewSection } from "./sections/MockTestOverviewSection";
import { SideNavigationSection } from "./sections/SideNavigationSection";

const createAction = {
  label: "Create",
  iconSrc: "https://c.animaapp.com/monzhd8m4FbejF/img/plus.svg",
};

export const MockTestOverview = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] bg-white">
        <aside className="shrink-0">
          <SideNavigationSection />
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="shrink-0">
            <AppHeaderSection />
          </header>
          <section className="flex flex-col px-[10px] pt-5 pb-8">
            <MockTestOverviewSection />
            <div className="mt-7 flex justify-end animate-fade-in">
              <Button
                type="button"
                onClick={() => navigate("/mock-test")}
                className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white hover:bg-[#0957a1]/90 transition-all duration-200 hover:shadow-md active:scale-[0.97]"
              >
                <img
                  className="h-5 w-5"
                  alt="Plus"
                  src={createAction.iconSrc}
                />
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
                  {createAction.label}
                </span>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
