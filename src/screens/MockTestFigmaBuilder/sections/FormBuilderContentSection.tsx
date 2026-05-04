import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import type { MockTestBuilderTab } from "../MockTestFigmaBuilder";

interface FormBuilderContentSectionProps {
  activeTab: MockTestBuilderTab;
  extraQuestionCount: number;
}

const shortAnswerFields = [
  { label: "Name" },
  { label: "Email" },
  { label: "Phone Number" },
];

const answerOptions = ["New Delhi.", "Kolhapur", "Mumbai.", "Pune ."];

export const FormBuilderContentSection = ({
  activeTab,
  extraQuestionCount,
}: FormBuilderContentSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const [formTitle, setFormTitle] = useState("Untitled Title");
  const [description, setDescription] = useState("Description (optional)");
  const [selectedAnswer, setSelectedAnswer] = useState("New Delhi.");
  const [points, setPoints] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [done, setDone] = useState(false);
  const [acceptingResponses, setAcceptingResponses] = useState(true);
  const [shuffleQuestions, setShuffleQuestions] = useState(false);

  const repeatedCards = useMemo(
    () =>
      Array.from({ length: 4 + extraQuestionCount }, (_, index) => ({
        title: index < 4 ? "Capital of India" : `New Question ${index - 3}`,
        options: answerOptions,
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
            </div>
            <Button
              type="button"
              onClick={() => navigate("/mock-test-fill-the")}
              className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
            >
              Open learner preview
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
              <Separator className="bg-[#bdbdbd]" />
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
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative w-full px-[34px] py-4 animate-fade-up">
      <div className="flex w-full flex-col items-start gap-2.5">
        <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#0000001f]">
          <CardContent className="p-0">
            <div className="flex min-h-[234px] flex-col">
              <div className="flex items-start justify-between gap-4 px-4 pt-[18px]">
                <label className="h-[51px] w-full max-w-[862px] border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5">
                  <span className="sr-only">Form title</span>
                  <input
                    value={formTitle}
                    onChange={(event) => setFormTitle(event.target.value)}
                    className="w-full bg-transparent [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 outline-none"
                  />
                </label>
                <img
                  className="shrink-0 transition-opacity duration-200 hover:opacity-70"
                  alt="Frame"
                  src="https://c.animaapp.com/moqxsq4fICsZLG/img/frame-1321317663.svg"
                />
              </div>
              <div className="px-4 pt-[10px]">
                <img
                  className="h-5 w-[134px]"
                  alt="Frame"
                  src="https://c.animaapp.com/moqxsq4fICsZLG/img/frame-1321317581.svg"
                />
              </div>
              <div className="px-4 pt-[48px]">
                <label className="flex w-full max-w-[650px] items-center gap-2.5 p-2.5">
                  <span className="sr-only">Description</span>
                  <input
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    className="w-full bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none"
                  />
                </label>
              </div>
              <div className="px-4 pt-[3px]">
                <div className="w-full max-w-[870px]">
                  <Separator className="bg-[#bdbdbd]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {shortAnswerFields.map((field) => (
          <Card
            key={field.label}
            className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#0000001f]"
          >
            <CardContent className="flex min-h-[146px] flex-col justify-start px-[26px] pb-0 pt-7">
              <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                {field.label}
                <span className="text-[#e02323]">*</span>
              </h2>
              <div className="mt-[14px] flex w-full max-w-[650px] items-center gap-2.5 border-b border-[#595959] p-2.5">
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-[#595959]">
                  Short answer text
                </p>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="w-full rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_4px_14px_#0000001f]">
          <CardContent className="p-0">
            <div className="flex min-h-[466px] flex-col">
              <div className="px-[18px] pt-4">
                <div className="border-b border-[#595959] px-2.5 py-2.5">
                  <h2 className="[font-family:'Inter',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-black">
                    Choose correct answers:
                  </h2>
                </div>
              </div>
              <div className="flex items-end justify-between gap-4 px-4 pt-6">
                <div className="flex h-[51px] w-full max-w-[860px] items-center gap-2.5 p-2.5">
                  <div className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] whitespace-nowrap text-gray-600">
                    Capital of India
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPoints((value) => value + 1)}
                  className="inline-flex items-center gap-[5px] border-b border-gray-600 px-2.5 py-[5px] transition-colors duration-200 hover:border-[#0957a1]"
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-gray-600">
                    {points}
                  </span>
                  <img
                    className="h-6 w-6"
                    alt="Uil arrow"
                    src="https://c.animaapp.com/moqxsq4fICsZLG/img/uil-arrow.svg"
                  />
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] whitespace-nowrap text-gray-600">
                    points
                  </span>
                </button>
              </div>
              <div className="flex flex-1 flex-col px-[26px] pt-[17px]">
                <div className="flex w-full flex-col items-start gap-2.5">
                  {answerOptions.map((option) => (
                    <label
                      key={option}
                      className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 transition-colors duration-200 hover:bg-[#f7f9fd]"
                    >
                      <input
                        type="radio"
                        name="correct-answer"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => setSelectedAnswer(option)}
                        className="sr-only"
                      />
                      <span className={`h-5 w-5 rounded-[10px] transition-all duration-200 ${selectedAnswer === option ? "bg-[#0957a1] ring-4 ring-[#d1e9ff]" : "bg-[#d9d9d9]"}`} />
                      <span className="w-full max-w-[570px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="mt-auto pb-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setFeedbackOpen((open) => !open)}
                    className="inline-flex h-6 w-[209px] items-center justify-center gap-2.5 px-2.5 py-0 transition-opacity duration-200 hover:opacity-75"
                  >
                    <img
                      className="h-6 w-6"
                      alt="Si clipboard filled"
                      src="https://c.animaapp.com/moqxsq4fICsZLG/img/si-clipboard-filled-line.svg"
                    />
                    <span className="[font-family:'Roboto',Helvetica] flex h-[18px] w-[155px] items-center justify-end text-right text-base font-medium leading-6 tracking-[0] whitespace-nowrap text-app-primary">
                      Add answer feedback
                    </span>
                  </button>
                  {feedbackOpen && (
                    <textarea
                      value={feedback}
                      onChange={(event) => setFeedback(event.target.value)}
                      placeholder="Write answer feedback"
                      className="mt-3 h-20 w-full max-w-[650px] resize-none rounded-lg border border-gray-300 px-3 py-2 [font-family:'Roboto',Helvetica] text-sm text-[#595959] outline-none transition-all duration-200 focus:border-[#0957a1] focus:ring-2 focus:ring-[#0957a1]/10"
                    />
                  )}
                  <div className="pt-[9.5px]">
                    <Separator className="bg-[#bdbdbd]" />
                  </div>
                  <div className="flex justify-end pt-[9.5px]">
                    <Button
                      type="button"
                      onClick={() => setDone(true)}
                      className="h-auto w-[70px] rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-md active:scale-[0.98]"
                    >
                      {done ? "Saved" : "Done"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {repeatedCards.map((card, index) => (
          <Card
            key={`${card.title}-${index}`}
            className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_4px_14px_#0000001f]"
          >
            <CardContent className="p-0">
              <div className="flex min-h-[298px] flex-col">
                <div className="px-4 pt-[18px]">
                  <div className="flex h-[51px] w-full items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                    <div className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] whitespace-nowrap text-gray-600">
                      {card.title}
                    </div>
                  </div>
                </div>
                <div className="px-[26px] pt-[13px]">
                  <div className="flex w-full flex-col items-start gap-2.5">
                    {card.options.map((option) => (
                      <label
                        key={`${option}-${index}`}
                        className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 transition-colors duration-200 hover:bg-[#f7f9fd]"
                      >
                        <span className="h-5 w-5 rounded-[10px] bg-[#d9d9d9]" />
                        <span className="w-full max-w-[570px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
