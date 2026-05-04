import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FillFormToolbarSection } from "./sections/FillFormToolbarSection";
import { FillFormEditorSection } from "./sections/FillFormEditorSection";
import { FillFormThemeSection } from "./sections/FillFormThemeSection";
import { TestConfigurationModal } from "./sections/TestConfigurationModal";

const sideToolbarIcons = [
  {
    alt: "Editor tools",
    src: "https://c.animaapp.com/moqqfoy3vJwvbZ/img/frame-1321317665.svg",
  },
];

export const MockTestFillForm = (): JSX.Element => {
  const [configModalOpen, setConfigModalOpen] = useState(true);

  return (
    <main className="w-full bg-[#f7f9fd]" data-screen="MockTestFillForm">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        {/* App toolbar / header */}
        <header className="w-full shrink-0">
          <FillFormToolbarSection />
        </header>

        {/* Content area */}
        <div className="flex w-full items-start gap-7 px-8 py-2 max-lg:flex-col max-lg:gap-4 max-lg:px-4">
          {/* Question form editor */}
          <section
            aria-label="Question form editor"
            className="min-w-0 flex-1 max-lg:w-full"
          >
            <FillFormEditorSection onOpenTestConfig={() => setConfigModalOpen(true)} />
          </section>

          {/* Sidebar: tool strip + theme panel */}
          <aside
            className="flex shrink-0 items-start gap-3 max-lg:w-full"
            aria-label="Editor tools and theme configuration"
          >
            <Card className="w-12 shrink-0 border-[#d9e1ec] bg-white shadow-none transition-shadow duration-300 hover:shadow-[0px_4px_16px_#00000018]">
              <CardContent className="flex p-1">
                {sideToolbarIcons.map((icon, index) => (
                  <img
                    key={`toolbar-icon-${index}`}
                    className="block h-[318px] w-12 max-w-none"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </CardContent>
            </Card>
            <div className="w-[392px] min-w-0 max-lg:flex-1">
              <FillFormThemeSection />
            </div>
          </aside>
        </div>
      </div>
      {/* Test Configuration Modal */}
      <TestConfigurationModal
        open={configModalOpen}
        onClose={() => setConfigModalOpen(false)}
      />
    </main>
  );
};
