import { Separator } from "../../components/ui/separator";
import { FormBuilderCanvasSection } from "./sections/FormBuilderCanvasSection";
import { GlobalHeaderNavSection } from "./sections/GlobalHeaderNavSection";
import { TemplateSelectionDialogSection } from "./sections/TemplateSelectionDialogSection";
import { ThemeSettingsSidebarSection } from "./sections/ThemeSettingsSidebarSection";

export const MockTestSetting = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f7f9fd]">
      <div className="relative flex w-full flex-col bg-[#f7f9fd]">
        <GlobalHeaderNavSection />
        <section className="relative">
          <div className="grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[minmax(0,1fr)_48px_392px]">
            <div className="min-w-0">
              <FormBuilderCanvasSection />
            </div>
            <div className="hidden h-full items-start justify-center lg:flex">
              <div className="flex h-full w-12 justify-center py-[235px]">
                <img
                  className="h-[318px] w-12"
                  alt="Frame"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317667.svg"
                />
              </div>
            </div>
            <aside className="min-w-0">
              <ThemeSettingsSidebarSection />
            </aside>
          </div>
          <div className="absolute inset-0 z-10 bg-[#11111182] backdrop-blur-[2.35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.35px)_brightness(100%)]" />
          <div className="absolute inset-0 z-20 flex items-start justify-center px-4 pt-28 sm:px-6 md:pt-36 lg:pt-[154px]">
            <TemplateSelectionDialogSection />
          </div>
        </section>
        <Separator className="sr-only" />
      </div>
    </main>
  );
};
