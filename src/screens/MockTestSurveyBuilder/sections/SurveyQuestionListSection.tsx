import { useMemo, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import type { SurveyBuilderTab } from "../MockTestSurveyBuilder";

interface SurveyQuestionListSectionProps {
  activeTab: SurveyBuilderTab;
  extraQuestionCount: number;
  published: boolean;
  statusMessage: string;
}

const optionItems = ["New Delhi.", "Kolhapur", "Mumbai.", "Pune ."];

const shortAnswerQuestions = [
  { label: "Name", required: true },
  { label: "Email", required: true },
  { label: "Phone Number", required: true },
];

const repeatedQuestionCardsBottom = Array.from({ length: 3 }, (_, index) => ({
  id: `question-card-bottom-${index + 1}`,
  title: "Capital of India",
  options: optionItems,
}));

const PointsControl = ({
  points,
  onIncrease,
}: {
  points: number;
  onIncrease: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onIncrease}
      className="inline-flex items-center gap-[5px] border-b border-gray-600 px-2.5 py-[5px] transition-colors duration-200 hover:border-[#0957a1] active:scale-[0.98]"
      aria-label="Increase points"
    >
      <span className="mt-[-1.00px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-600 whitespace-nowrap">
        {points}
      </span>
      <img
        className="h-6 w-6"
        alt="Uil arrow"
        src="https://c.animaapp.com/moqyxd39KZXbmY/img/uil-arrow.svg"
      />
      <span className="mt-[-1.00px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-600 whitespace-nowrap">
        points
      </span>
    </button>
  );
};

const ChoiceList = ({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected?: string;
  onSelect?: (option: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start gap-2.5">
      {options.map((option, index) => (
        <label
          key={`${option}-${index}`}
          className={`flex w-full cursor-pointer items-center gap-2.5 p-2.5 transition-colors duration-200 hover:bg-[#f7f9fd] ${
            index === options.length - 1 ? "max-w-[650px]" : ""
          }`}
        >
          <input
            type="radio"
            name={onSelect ? "survey-answer" : `survey-answer-${option}-${index}`}
            value={option}
            checked={selected === option}
            onChange={() => onSelect?.(option)}
            className="sr-only"
          />
          <span className={`h-5 w-5 rounded-[10px] transition-all duration-200 ${selected === option ? "bg-[#0957a1] ring-4 ring-[#d1e9ff]" : "bg-[#d9d9d9]"}`} />
          <span className="mt-[-1.00px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
            {option}
          </span>
        </label>
      ))}
    </div>
  );
};

const RepeatedQuestionCard = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [points, setPoints] = useState(0);

  return (
    <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#0000001f]">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <header className="flex items-center gap-4 px-4 pt-[18px]">
            <div className="flex h-[51px] w-full items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
              <h3 className="flex-1 mt-[-1.50px] [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                {title}
              </h3>
              <PointsControl points={points} onIncrease={() => setPoints((value) => value + 1)} />
            </div>
          </header>
          <div className="px-[26px] pb-[18px] pt-[13px]">
            <ChoiceList options={options} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const SurveyQuestionListSection = ({
  activeTab,
  extraQuestionCount,
  published,
  statusMessage,
}: SurveyQuestionListSectionProps): JSX.Element => {
  const [formTitle, setFormTitle] = useState("Untitled Title");
  const [description, setDescription] = useState("Description (optional)");
  const [selectedAnswer, setSelectedAnswer] = useState("New Delhi.");
  const [points, setPoints] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("New Delhi");
  const [saved, setSaved] = useState(false);
  const [acceptingResponses, setAcceptingResponses] = useState(true);
  const [shuffleQuestions, setShuffleQuestions] = useState(false);

  const repeatedQuestionCards = useMemo(
    () =>
      Array.from({ length: 4 + extraQuestionCount }, (_, index) => ({
        id: `question-card-top-${index + 1}`,
        title: index < 4 ? "Capital of India" : `New Question ${index - 3}`,
        options: optionItems,
      })),
    [extraQuestionCount],
  );

  if (activeTab === "Responses") {
    return (
      <section className="relative w-full animate-fade-up">
        <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="flex min-h-[380px] flex-col items-center justify-center gap-5 p-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ecf5fe] [font-family:'Roboto',Helvetica] text-2xl font-semibold text-[#0957a1]">
              0
            </div>
            <div>
              <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                No responses yet
              </h2>
              <p className="mt-2 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                Publish the mock test form and share it with learners to start collecting responses.
              </p>
              <p className="mt-2 [font-family:'Roboto',Helvetica] text-sm font-medium leading-5 text-[#0957a1]">
                {statusMessage}
              </p>
            </div>
            <Button
              type="button"
              className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
            >
              Preview learner form
            </Button>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (activeTab === "Settings") {
    return (
      <section className="relative w-full animate-fade-up">
        <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-0">
            <div className="flex min-h-[380px] flex-col gap-6 px-6 py-7">
              <div>
                <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                  Form settings
                </h2>
                <p className="mt-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                  Configure response collection and learner experience.
                </p>
              </div>
              <div className="h-px bg-[#bdbdbd]" />
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setAcceptingResponses((value) => !value)}
                  className="flex w-full items-center justify-between rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-left transition-all duration-200 hover:border-[#0957a1]/30 hover:bg-[#f7f9fd]"
                >
                  <span>
                    <span className="block [font-family:'Inter',Helvetica] text-base font-semibold leading-6 text-black">
                      Accept responses
                    </span>
                    <span className="block [font-family:'Roboto',Helvetica] text-sm leading-5 text-[#595959]">
                      Learners can submit answers while this is enabled.
                    </span>
                  </span>
                  <span className={`h-6 w-11 rounded-full p-0.5 transition-colors duration-200 ${acceptingResponses ? "bg-[#0957a1]" : "bg-gray-300"}`}>
                    <span className={`block h-5 w-5 rounded-full bg-white transition-transform duration-200 ${acceptingResponses ? "translate-x-5" : "translate-x-0"}`} />
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setShuffleQuestions((value) => !value)}
                  className="flex w-full items-center justify-between rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-left transition-all duration-200 hover:border-[#0957a1]/30 hover:bg-[#f7f9fd]"
                >
                  <span>
                    <span className="block [font-family:'Inter',Helvetica] text-base font-semibold leading-6 text-black">
                      Shuffle question order
                    </span>
                    <span className="block [font-family:'Roboto',Helvetica] text-sm leading-5 text-[#595959]">
                      Show questions in a different order for every learner.
                    </span>
                  </span>
                  <span className={`h-6 w-11 rounded-full p-0.5 transition-colors duration-200 ${shuffleQuestions ? "bg-[#0957a1]" : "bg-gray-300"}`}>
                    <span className={`block h-5 w-5 rounded-full bg-white transition-transform duration-200 ${shuffleQuestions ? "translate-x-5" : "translate-x-0"}`} />
                  </span>
                </button>
              </div>
              <p className="[font-family:'Roboto',Helvetica] text-sm font-medium text-[#0957a1]">
                {published ? "Published forms are visible to learners." : "Publish when you are ready to collect responses."}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative w-full">
      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="flex w-full flex-col items-start gap-2.5">
          <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#0000001f]">
            <CardContent className="p-0">
              <div className="flex min-h-[234px] flex-col px-4 pb-12 pt-[18px]">
                <header className="flex flex-wrap items-start justify-between gap-4">
                  <label className="flex h-[51px] w-full max-w-[862px] items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                    <span className="sr-only">Form title</span>
                    <input
                      value={formTitle}
                      onChange={(event) => setFormTitle(event.target.value)}
                      className="mt-[-1.50px] w-full bg-transparent [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none"
                    />
                  </label>
                  <button
                    type="button"
                    className="shrink-0 transition-opacity duration-200 hover:opacity-75"
                    aria-label="Open title card options"
                  >
                    <img
                      alt="Frame"
                      src="https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317663.svg"
                    />
                  </button>
                </header>
                <img
                  className="mt-[10px] h-5 w-[134px]"
                  alt="Frame"
                  src="https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317581.svg"
                />
                <label className="mt-[48px] flex max-w-[650px] items-center gap-2.5 p-2.5">
                  <span className="sr-only">Description</span>
                  <input
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none"
                  />
                </label>
                <div className="mt-[6px] w-full max-w-[870px] border-b border-[#c7c7c7]" />
              </div>
            </CardContent>
          </Card>
          {shortAnswerQuestions.map((question) => (
            <Card
              key={question.label}
              className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#0000001f]"
            >
              <CardContent className="px-[26px] pb-8 pt-7">
                <header>
                  <h3 className="font-semibold text-transparent text-2xl leading-8 tracking-[0] whitespace-nowrap [font-family:'Inter',Helvetica]">
                    <span className="text-black">{question.label}</span>
                    {question.required ? (
                      <span className="text-[#e02323]">*</span>
                    ) : null}
                  </h3>
                </header>
                <div className="mt-[14px] flex max-w-[650px] items-center gap-2.5 border-b border-[#595959] p-2.5">
                  <p className="mt-[-1.00px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] whitespace-nowrap">
                    Short answer text
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#0000001f]">
            <CardContent className="p-0">
              <div className="flex min-h-[508px] flex-col px-[15px] pb-[18px] pt-4">
                <div className="flex w-full items-center gap-2.5 border-b border-[#595959] p-2.5">
                  <h3 className="mt-[-1.00px] [font-family:'Inter',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-black whitespace-nowrap">
                    Choose correct answers:
                  </h3>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-between gap-4 px-[1px]">
                  <div className="flex h-[51px] w-full max-w-[860px] items-center gap-2.5 p-2.5">
                    <h4 className="mt-[-1.50px] [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 whitespace-nowrap">
                      Capital of India
                    </h4>
                  </div>
                  <PointsControl points={points} onIncrease={() => setPoints((value) => value + 1)} />
                </div>
                <div className="mt-4 px-[11px]">
                  <ChoiceList options={optionItems} selected={selectedAnswer} onSelect={setSelectedAnswer} />
                </div>
                <div className="mt-auto flex flex-col">
                  <button
                    type="button"
                    onClick={() => setFeedbackOpen((open) => !open)}
                    className="flex items-center justify-between gap-4 bg-[#4b55631a] px-[51px] py-2.5 text-left transition-colors duration-200 hover:bg-[#4b556326]"
                  >
                    <div className="flex min-h-[62px] flex-col">
                      <h5 className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 whitespace-nowrap">
                        Feedback for correct answers
                      </h5>
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        {feedback || selectedAnswer}
                      </p>
                    </div>
                    <img
                      className="w-[58px] shrink-0"
                      alt="Frame"
                      src="https://c.animaapp.com/moqyxd39KZXbmY/img/frame-1321317692.svg"
                    />
                  </button>
                  {feedbackOpen && (
                    <textarea
                      value={feedback}
                      onChange={(event) => setFeedback(event.target.value)}
                      placeholder="Write feedback"
                      className="mx-[51px] mt-3 h-20 resize-none rounded-lg border border-gray-300 px-3 py-2 [font-family:'Roboto',Helvetica] text-sm text-[#595959] outline-none transition-all duration-200 focus:border-[#0957a1] focus:ring-2 focus:ring-[#0957a1]/10"
                    />
                  )}
                  <div className="mx-px mt-[16.5px] border-b border-[#d6d6d6]" />
                  <div className="mt-[9.5px] flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setSaved(true)}
                      className="h-auto w-[70px] rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
                    >
                      {saved ? "Saved" : "Done"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {repeatedQuestionCards.map((card) => (
          <RepeatedQuestionCard
            key={card.id}
            title={card.title}
            options={card.options}
          />
        ))}

        <section className="w-full">
          <div className="inline-flex h-[34px] items-center justify-center gap-2.5 rounded-t-[10px] bg-app-secondary p-2.5">
            <span className="mt-[-10.00px] mb-[-8.00px] [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-white whitespace-nowrap">
              Section 1 of 1
            </span>
          </div>
          <Card className="w-full rounded-[0px_10px_10px_10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#0000001f]">
            <CardContent className="p-0">
              <div className="flex flex-col gap-[5px]">
                <header className="ml-4 mt-[18px] flex h-[51px] w-[calc(100%-16px)] items-center gap-[41px]">
                  <div className="flex h-[51px] w-full items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                    <h3 className="flex-1 mt-[-1.50px] [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                      Capital of India
                    </h3>
                    <PointsControl points={0} onIncrease={() => undefined} />
                  </div>
                </header>
                <div className="px-[26px] pb-[18px]">
                  <ChoiceList options={optionItems} />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        {repeatedQuestionCardsBottom.map((card) => (
          <RepeatedQuestionCard
            key={card.id}
            title={card.title}
            options={card.options}
          />
        ))}
      </div>
    </section>
  );
};
