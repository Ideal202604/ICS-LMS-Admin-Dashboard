import { useState } from "react";
import { Button } from "../../components/ui/button";
import { AppLayout } from "../../components/shared";
import { QuestionPoolContentSection } from "./sections/QuestionPoolContentSection";
import { AddQuestionsModal } from "./sections/AddQuestionsModal";

export const QuestionPool = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-col px-[10px] pt-5 pb-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <QuestionPoolContentSection />
        <div className="mt-6 flex justify-end">
          <Button
            type="button"
            onClick={() => setModalOpen(true)}
            className="h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
          >
            <img
              className="h-5 w-5"
              alt="Plus"
              src="https://c.animaapp.com/mokxjjoomDPsSW/img/plus.svg"
            />
            <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
              Create
            </span>
          </Button>
        </div>
      </section>

      <AddQuestionsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </AppLayout>
  );
};
