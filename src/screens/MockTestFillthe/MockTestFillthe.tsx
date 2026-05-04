import { AppHeaderSection } from "./sections/AppHeaderSection";
import { QuestionGridSection } from "./sections/QuestionGridSection";

export const MockTestFillthe = (): JSX.Element => {
  return (
    <main className="w-full min-h-screen bg-[#f7f9fd]">
      <div className="w-full">
        <AppHeaderSection />
        <div className="px-[4%] pt-[1%]">
          <QuestionGridSection />
        </div>
      </div>
    </main>
  );
};
