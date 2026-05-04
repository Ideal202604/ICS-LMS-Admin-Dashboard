import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../components/ui/card";
import { AppNavigationSection } from "./sections/AppNavigationSection";
import { AssessmentHeaderSection } from "./sections/AssessmentHeaderSection";
import { QuestionEditorSection } from "./sections/QuestionEditorSection";
import { QuestionTypeModalSection } from "./sections/QuestionTypeModalSection";
import { SelectedQuestionsModal } from "./sections/SelectedQuestionsModal";
import { ImportConfirmationModal } from "./sections/ImportConfirmationModal";

const breadcrumbItems = [
  { label: "Mock Test", href: "/mock-test", color: "text-[#202124]" },
  { label: "Create Mock Test", href: null, color: "text-[#0957a1]" },
];

export const MockTestQuestionEditor = (): JSX.Element => {
  const navigate = useNavigate();
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(true);
  const [selectedQuestionType, setSelectedQuestionType] = useState("Numerical");
  const [isSelectedQuestionsOpen, setIsSelectedQuestionsOpen] = useState(false);
  const [isImportConfirmationOpen, setIsImportConfirmationOpen] = useState(false);

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] bg-white">
        <aside className="hidden shrink-0 lg:block">
          <AppNavigationSection />
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <AssessmentHeaderSection />

          <section className="flex flex-1 flex-col bg-white">
            <div className="px-4 pt-4 md:px-6">
              <nav
                aria-label="Breadcrumb"
                className="flex items-center gap-1 [font-family:'Roboto',Helvetica] text-xs font-normal leading-8 tracking-[0]"
              >
                {breadcrumbItems.map((item, index) =>
                  item.href ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => navigate(item.href)}
                      className={`${item.color} transition-colors duration-200 hover:text-[#0957a1]`}
                    >
                      {item.label}
                      {index < breadcrumbItems.length - 1 ? " /" : ""}
                    </button>
                  ) : (
                    <span key={item.label} className={item.color}>
                      {item.label}
                    </span>
                  ),
                )}
              </nav>
            </div>

            <div className="flex flex-1 flex-col px-4 pb-8 md:px-6">
              <QuestionEditorSection
                onAddQuestion={() => setIsQuestionModalOpen(true)}
                onViewSelected={() => setIsSelectedQuestionsOpen(true)}
              />
            </div>
          </section>

          <SelectedQuestionsModal
            open={isSelectedQuestionsOpen}
            onClose={() => setIsSelectedQuestionsOpen(false)}
            onImport={() => {
              setIsSelectedQuestionsOpen(false);
              setTimeout(() => setIsImportConfirmationOpen(true), 280);
            }}
          />

          <ImportConfirmationModal
            open={isImportConfirmationOpen}
            onClose={() => setIsImportConfirmationOpen(false)}
          />

          {isQuestionModalOpen && (
            <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-[#11111182] px-4 py-12 backdrop-blur-[2.35px] backdrop-brightness-[100%] animate-fade-in lg:absolute lg:pt-[28vh]">
              <Card className="w-full max-w-[585px] border-0 bg-transparent shadow-none animate-fade-up">
                <CardContent className="p-0">
                  <QuestionTypeModalSection
                    selectedType={selectedQuestionType}
                    onSelectType={setSelectedQuestionType}
                    onClose={() => setIsQuestionModalOpen(false)}
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
