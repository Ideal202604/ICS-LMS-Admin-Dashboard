import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FormBuilderContentSection } from "./sections/FormBuilderContentSection";
import { FormNavigationHeaderSection } from "./sections/FormNavigationHeaderSection";

export type MockTestBuilderTab = "Questions" | "Responses" | "Settings";

const toolbarIcons = [
  {
    alt: "Add element",
    src: "https://c.animaapp.com/moqxsq4fICsZLG/img/frame-1321317655.svg",
  },
];

export const MockTestFigmaBuilder = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<MockTestBuilderTab>("Questions");
  const [extraQuestionCount, setExtraQuestionCount] = useState(0);

  return (
    <main className="w-full bg-[#f7f9fd]" data-screen="MockTestFigmaBuilder">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col bg-[#f7f9fd]">
        <section className="w-full shrink-0 animate-fade-in">
          <FormNavigationHeaderSection activeTab={activeTab} onTabChange={setActiveTab} />
        </section>
        <section className="relative w-full px-8 pb-8 pt-3">
          <div className="flex w-full items-start gap-3">
            <div className="min-w-0 flex-1 animate-fade-up">
              <Card className="h-auto w-full border-0 bg-transparent shadow-none">
                <CardContent className="p-0">
                  <FormBuilderContentSection activeTab={activeTab} extraQuestionCount={extraQuestionCount} />
                </CardContent>
              </Card>
            </div>
            <aside aria-label="Form builder tools" className="hidden shrink-0 pt-20 md:block">
              {toolbarIcons.map((icon, index) => (
                <button
                  key={`toolbar-icon-${index}`}
                  type="button"
                  onClick={() => setExtraQuestionCount((count) => count + 1)}
                  className="block rounded-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_8px_20px_#00000018] active:scale-[0.98]"
                  aria-label="Add a new question card"
                >
                  <img className="block h-[277px] w-12" alt={icon.alt} src={icon.src} />
                </button>
              ))}
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
};
