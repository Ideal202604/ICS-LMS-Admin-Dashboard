import { Card, CardContent } from "../../components/ui/card";
import { ApplicationNavigationSection } from "./sections/ApplicationNavigationSection";
import { FormBuilderCanvasSection } from "./sections/FormBuilderCanvasSection";
import { ThemeSettingsSection } from "./sections/ThemeSettingsSection";

const toolbarIcons = [
  {
    alt: "Add field",
    src: "https://c.animaapp.com/mooa01hs93Tlx5/img/frame-1321317667.svg",
  },
];

export const MockTestFormBuilder = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f9fd]" data-screen="MockTestFormBuilder">
      <div className="mx-auto w-full max-w-[1440px]">
        <ApplicationNavigationSection />
        <section
          className="grid w-full grid-cols-[1fr_48px_29%] items-start gap-4 px-8 pt-3"
          aria-label="Form builder layout"
        >
          <Card className="rounded-none border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <FormBuilderCanvasSection />
            </CardContent>
          </Card>
          <aside
            className="flex w-full items-start justify-center"
            aria-label="Canvas tools"
          >
            <div className="flex min-h-[318px] w-12 items-start justify-center pt-[78px]">
              {toolbarIcons.map((icon, index) => (
                <img
                  key={`toolbar-icon-${index}`}
                  className="block h-[318px] w-12"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </div>
          </aside>
          <Card className="rounded-none border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <ThemeSettingsSection />
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};
