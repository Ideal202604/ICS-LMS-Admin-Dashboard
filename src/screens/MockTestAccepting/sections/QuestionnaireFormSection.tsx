import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface QuestionnaireFormSectionProps {
  activeTab: string;
  acceptingResponses: boolean;
}

const shortAnswerFields = [
  { label: "Name", required: true },
  { label: "Email", required: true },
  { label: "Phone Number", required: true },
];

const options = ["New Delhi.", "Kolhapur", "Mumbai.", "Pune ."];

const repeatedQuestionCards = Array.from({ length: 4 }, () => ({
  title: "Capital of India",
  points: "0",
  options,
}));

const repeatedQuestionCardsAfterSection = Array.from({ length: 3 }, () => ({
  title: "Capital of India",
  points: "0",
  options,
}));

const headerQuestion = {
  title: "Untitled Title",
  description: "Description (optional)",
  toolbarSrc: "https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317581.svg",
  actionSrc: "https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317663.svg",
  dividerSrc: "https://c.animaapp.com/mor18xk944oqGG/img/line-1682.svg",
};

const highlightedQuestion = {
  title: "Choose correct answers:",
  points: "0",
  options,
  arrowSrc: "https://c.animaapp.com/mor18xk944oqGG/img/uil-arrow.svg",
  feedbackActionSrc: "https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317692.svg",
  feedbackText: "New Delhi",
  dividerSrc: "https://c.animaapp.com/mor18xk944oqGG/img/line-1682-1.svg",
};

const sectionQuestion = {
  title: "Capital of India",
  points: "0",
  options,
};

const arrowIconSrc = "https://c.animaapp.com/mor18xk944oqGG/img/uil-arrow.svg";

const QuestionHeader = ({
  title,
  points,
}: {
  title: string;
  points: string;
}) => (
  <div className="flex min-h-[51px] w-full items-center justify-between gap-4 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5">
    <div className="min-w-0 flex-1 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
      {title}
    </div>

    <button
      type="button"
      className="flex shrink-0 items-center gap-[5px] border-b border-gray-600 px-2.5 py-[5px] text-gray-600 transition-colors duration-300 hover:border-[#0957a1] hover:text-[#0957a1]"
    >
      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0]">
        {points}
      </span>
      <img className="h-6 w-6" alt="Uil arrow" src={arrowIconSrc} />
      <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0]">
        points
      </span>
    </button>
  </div>
);

const OptionList = ({ items }: { items: string[] }) => (
  <div className="flex flex-col gap-2.5 px-[26px] pb-5 pt-[5px]">
    {items.map((option, index) => (
      <label
        key={`${option}-${index}`}
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-md p-2.5 transition-colors duration-300 hover:bg-[#f4f7fb]"
      >
        <span className="h-5 w-5 rounded-full bg-[#d9d9d9] ring-0 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#0957a1]/20" />
        <span className="min-w-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
          {option}
        </span>
      </label>
    ))}
  </div>
);

const SimpleQuestionCard = ({
  title,
  points,
  items,
}: {
  title: string;
  points: string;
  items: string[];
}) => (
  <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_8px_18px_#00000018]">
    <CardContent className="p-0">
      <div className="px-4 pt-[18px]">
        <QuestionHeader title={title} points={points} />
      </div>
      <OptionList items={items} />
    </CardContent>
  </Card>
);

const ResponsesView = ({ acceptingResponses }: { acceptingResponses: boolean }) => (
  <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
    <CardContent className="flex min-h-[360px] flex-col items-center justify-center gap-3 p-8 text-center">
      <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold text-black">
        Responses
      </h2>
      <p className="[font-family:'Roboto',Helvetica] text-base text-[#595959]">
        {acceptingResponses ? "This form is accepting responses." : "This form is no longer accepting responses."}
      </p>
    </CardContent>
  </Card>
);

const SettingsView = () => (
  <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
    <CardContent className="flex min-h-[360px] flex-col gap-5 p-8">
      <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold text-black">
        Settings
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {["Collect email addresses", "Limit to one response", "Shuffle question order", "Show progress bar"].map((setting) => (
          <button
            key={setting}
            type="button"
            className="flex items-center justify-between rounded-lg border border-[#dadce0] bg-white px-4 py-3 text-left transition-all duration-300 hover:border-[#0957a1] hover:shadow-sm"
          >
            <span className="[font-family:'Roboto',Helvetica] text-base text-[#595959]">{setting}</span>
            <span className="h-5 w-9 rounded-full bg-[#d1e9ff] p-0.5">
              <span className="block h-4 w-4 rounded-full bg-[#0957a1]" />
            </span>
          </button>
        ))}
      </div>
    </CardContent>
  </Card>
);

export const QuestionnaireFormSection = ({
  activeTab,
  acceptingResponses,
}: QuestionnaireFormSectionProps): JSX.Element => {
  if (activeTab === "Responses") {
    return <ResponsesView acceptingResponses={acceptingResponses} />;
  }

  if (activeTab === "Settings") {
    return <SettingsView />;
  }

  return (
    <section className="relative w-full animate-fade-in">
      <div className="flex w-full flex-col items-start gap-2.5">
        <p className="sr-only">
          A questionnaire form builder section with short answer questions, multiple choice questions, feedback, and a section label.
        </p>

        <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_8px_18px_#00000018]">
          <CardContent className="p-0">
            <div className="flex flex-col gap-5 px-4 pb-12 pt-[18px]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-h-[51px] w-full max-w-[862px] items-center border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5">
                  <h2 className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                    {headerQuestion.title}
                  </h2>
                </div>
                <img
                  className="shrink-0 transition-transform duration-300 hover:scale-105"
                  alt="Frame"
                  src={headerQuestion.actionSrc}
                />
              </div>

              <img
                className="h-5 w-[134px]"
                alt="Frame"
                src={headerQuestion.toolbarSrc}
              />

              <div className="max-w-[650px] px-2.5">
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  {headerQuestion.description}
                </p>
              </div>

              <img
                className="h-px w-full max-w-[870px]"
                alt="Line"
                src={headerQuestion.dividerSrc}
              />
            </div>
          </CardContent>
        </Card>

        {shortAnswerFields.map((field) => (
          <Card
            key={field.label}
            className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_8px_18px_#00000018]"
          >
            <CardContent className="px-[26px] pb-8 pt-7">
              <h3 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                {field.label}
                {field.required && <span className="text-[#e02323]">*</span>}
              </h3>
              <div className="mt-6 flex max-w-[650px] items-center border-b border-[#595959] px-2.5 py-2.5">
                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Short answer text
                </span>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_8px_18px_#00000018]">
          <CardContent className="p-0">
            <div className="flex flex-col px-[15px] pb-[18px] pt-4">
              <div className="w-full border-b border-[#595959] px-2.5 py-2.5">
                <h3 className="[font-family:'Inter',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-black">
                  {highlightedQuestion.title}
                </h3>
              </div>

              <div className="flex items-end justify-between gap-4 px-1 pt-8">
                <div className="flex min-h-[51px] flex-1 items-center px-2.5 py-2.5">
                  <div className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                    Capital of India
                  </div>
                </div>

                <button
                  type="button"
                  className="flex shrink-0 items-center gap-[5px] border-b border-gray-600 px-2.5 py-[5px] text-gray-600 transition-colors duration-300 hover:border-[#0957a1] hover:text-[#0957a1]"
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0]">
                    {highlightedQuestion.points}
                  </span>
                  <img
                    className="h-6 w-6"
                    alt="Uil arrow"
                    src={highlightedQuestion.arrowSrc}
                  />
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0]">
                    points
                  </span>
                </button>
              </div>

              <div className="pt-2">
                <OptionList items={highlightedQuestion.options} />
              </div>

              <div className="mx-px mt-2 flex min-h-[73px] items-center justify-between gap-4 bg-[#4b55631a] px-[51px] py-2.5">
                <div className="min-w-0">
                  <div className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                    Feedback for correct answers
                  </div>
                  <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                    {highlightedQuestion.feedbackText}
                  </div>
                </div>
                <img
                  className="w-[58px] shrink-0 transition-transform duration-300 hover:scale-105"
                  alt="Frame"
                  src={highlightedQuestion.feedbackActionSrc}
                />
              </div>

              <img
                className="mx-px mt-[16.5px] h-px w-full"
                alt="Line"
                src={highlightedQuestion.dividerSrc}
              />

              <div className="mt-[9.5px] flex justify-end">
                <Button className="h-10 rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#084f91] hover:shadow-md active:translate-y-0">
                  Done
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {repeatedQuestionCards.map((card, index) => (
          <SimpleQuestionCard
            key={`repeated-question-${index}`}
            title={card.title}
            points={card.points}
            items={card.options}
          />
        ))}

        <div className="relative w-full pt-[34px]">
          <div className="absolute left-0 top-0 inline-flex h-[34px] items-center justify-center gap-2.5 rounded-[10px_10px_0px_0px] bg-[#0957a1] p-2.5">
            <span className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-white">
              Section 1 of 1
            </span>
          </div>
          <Card className="w-full rounded-[0px_10px_10px_10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_8px_18px_#00000018]">
            <CardContent className="p-0">
              <div className="px-4 pt-[18px]">
                <QuestionHeader
                  title={sectionQuestion.title}
                  points={sectionQuestion.points}
                />
              </div>
              <OptionList items={sectionQuestion.options} />
            </CardContent>
          </Card>
        </div>

        {repeatedQuestionCardsAfterSection.map((card, index) => (
          <SimpleQuestionCard
            key={`repeated-question-after-section-${index}`}
            title={card.title}
            points={card.points}
            items={card.options}
          />
        ))}
      </div>
    </section>
  );
};
