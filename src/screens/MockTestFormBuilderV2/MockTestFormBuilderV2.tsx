import { Card, CardContent } from "../../components/ui/card";
import { ApplicationNavigationSection } from "./sections/ApplicationNavigationSection";
import { FormBuilderCanvasSection } from "./sections/FormBuilderCanvasSection";
import { ThemeSettingsSection } from "./sections/ThemeSettingsSection";

const toolbarIcons = [
  {
    alt: "Frame",
    src: "https://c.animaapp.com/moqp98as9j0Smr/img/frame-1321317667.svg",
  },
];

export const MockTestFormBuilderV2 = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f9fd]" data-screen="MockTestFormBuilderV2">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <header className="w-full shrink-0">
          <ApplicationNavigationSection />
        </header>
        <section className="flex w-full items-start gap-4 px-8 pb-8 pt-2 max-lg:flex-col max-lg:px-4">
          <div className="min-w-0 flex-1 max-lg:w-full">
            <FormBuilderCanvasSection />
          </div>
          <aside className="flex w-[29%] shrink-0 items-start gap-3 max-lg:w-full">
            <Card className="w-12 shrink-0 border-[#d9dde5] bg-white shadow-none transition-shadow duration-300 hover:shadow-[0px_4px_16px_#00000018]">
              <CardContent className="flex flex-col items-center justify-start p-0">
                {toolbarIcons.map((icon, index) => (
                  <img
                    key={`toolbar-icon-${index}`}
                    className="block h-[318px] w-12"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </CardContent>
            </Card>
            <div className="min-w-0 flex-1">
              <ThemeSettingsSection />
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
};
