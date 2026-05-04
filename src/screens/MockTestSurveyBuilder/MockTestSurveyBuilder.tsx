import { useMemo, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FormTopToolbarSection } from "./sections/FormTopToolbarSection";
import { SurveyQuestionListSection } from "./sections/SurveyQuestionListSection";

export type SurveyBuilderTab = "Questions" | "Responses" | "Settings";

const sideToolbarIcons = [
  {
    alt: "Add question tools",
    src: "https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317655.svg",
  },
];

export const MockTestSurveyBuilder = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<SurveyBuilderTab>("Questions");
  const [extraQuestionCount, setExtraQuestionCount] = useState(0);
  const [published, setPublished] = useState(false);

  const statusMessage = useMemo(() => {
    if (published) return "Mock test form published successfully.";
    return "Draft saved automatically.";
  }, [published]);

  return (
    <main className="w-full bg-[#f7f9fd]" data-screen="MockTestSurveyBuilder">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <section aria-label="Form top toolbar" className="w-full animate-fade-in">
          <FormTopToolbarSection
            activeTab={activeTab}
            onTabChange={setActiveTab}
            published={published}
            onPublish={() => setPublished(true)}
          />
        </section>
        <div className="flex w-full items-start px-4 pt-2 pb-3 sm:px-6">
          <section aria-label="Survey question list" className="min-w-0 flex-1 animate-fade-up">
            <SurveyQuestionListSection
              activeTab={activeTab}
              extraQuestionCount={extraQuestionCount}
              published={published}
              statusMessage={statusMessage}
            />
          </section>
          <aside
            aria-label="Floating editor toolbar"
            className="sticky top-[120px] ml-6 hidden shrink-0 self-start lg:block"
          >
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                {sideToolbarIcons.map((icon, index) => (
                  <button
                    key={`side-toolbar-${index}`}
                    type="button"
                    onClick={() => setExtraQuestionCount((count) => count + 1)}
                    className="block rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_8px_20px_#00000018] active:scale-[0.98]"
                    aria-label="Add a question card"
                  >
                    <img
                      className="h-[277px] w-12"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </button>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
};
