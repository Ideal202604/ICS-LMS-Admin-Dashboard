import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

type TabName = "Questions" | "Responses" | "Settings";

interface SurveyFormContentSectionProps {
  activeTab: TabName;
  acceptingResponses: boolean;
}

const shortAnswerFields = ["Name", "Email", "Phone Number"];

const answerOptions = ["New Delhi.", "Kolhapur", "Mumbai.", "Pune ."];

const repeatedQuestionCards = Array.from({ length: 4 }, (_, index) => ({
  id: `question-card-${index + 1}`,
  title: "Capital of India",
}));

const lowerQuestionCards = Array.from({ length: 4 }, (_, index) => ({
  id: `lower-question-card-${index + 1}`,
  title: "Capital of India",
}));

type ChoiceCardProps = {
  title: string;
  highlighted?: boolean;
  withFeedback?: boolean;
  sectionLabel?: string;
};

const PointsMeta = () => {
  return (
    <div className="inline-flex items-center gap-[5px] border-b border-gray-600 px-2.5 py-[5px]">
      <span className="whitespace-nowrap [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-600">
        0
      </span>
      <img
        className="h-6 w-6"
        alt="Uil arrow"
        src="https://c.animaapp.com/moqzlycwD1XIkf/img/uil-arrow.svg"
      />
      <span className="whitespace-nowrap [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-600">
        points
      </span>
    </div>
  );
};

const ChoiceCard = ({
  title,
  highlighted = false,
  withFeedback = false,
  sectionLabel,
}: ChoiceCardProps) => {
  const [selectedOption, setSelectedOption] = useState(answerOptions[0]);
  const [feedbackSaved, setFeedbackSaved] = useState(false);

  return (
    <section className="w-full animate-fade-up">
      {sectionLabel ? (
        <div className="mb-0 inline-flex h-[34px] items-center justify-center rounded-b-none rounded-t-[10px] bg-app-secondary px-2.5 py-2.5">
          <span className="whitespace-nowrap [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-white">
            {sectionLabel}
          </span>
        </div>
      ) : null}

      <Card
        className={[
          "w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_6px_18px_#0000001f]",
          highlighted ? "border-l-[5px] border-l-[#f7b902]" : "",
          sectionLabel ? "rounded-tl-none" : "",
        ].join(" ")}
      >
        <CardContent className="p-0">
          {highlighted ? (
            <>
              <div className="px-[18px] pt-4">
                <div className="flex w-full items-center border-b border-[#595959] px-2.5 py-2.5">
                  <h2 className="[font-family:'Inter',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-black">
                    Choose correct answers:
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-4 px-4 pt-4">
                <div className="flex items-end justify-between gap-4">
                  <div className="flex min-h-[51px] flex-1 items-center px-2.5 py-2.5">
                    <h3 className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                      {title}
                    </h3>
                  </div>
                  <PointsMeta />
                </div>
                <div className="flex flex-col gap-2.5 px-[10px]">
                  {answerOptions.map((option) => (
                    <label
                      key={option}
                      className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 transition-colors duration-200 hover:bg-[#f3f7fc]"
                    >
                      <input
                        type="radio"
                        name="highlighted-capital-answer"
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                        className="h-5 w-5 accent-[#0957a1]"
                      />
                      <span className="max-w-[570px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              {withFeedback ? (
                <div className="px-[15px] pb-[18px] pt-3">
                  <div className="flex min-h-[73px] w-full items-center justify-between gap-6 bg-[#4b55631a] px-[51px] py-2.5">
                    <div className="flex min-w-0 flex-col">
                      <div className="whitespace-nowrap [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                        Feedback for correct answers
                      </div>
                      <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        {feedbackSaved ? selectedOption.replace(".", "") : "New Delhi"}
                      </div>
                    </div>
                    <img
                      className="w-[58px] shrink-0"
                      alt="Frame"
                      src="https://c.animaapp.com/moqzlycwD1XIkf/img/frame-1321317692.svg"
                    />
                  </div>
                  <Separator className="my-4 bg-[#d9d9d9]" />
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setFeedbackSaved(true)}
                      className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#084a88] hover:shadow-sm active:scale-[0.97]"
                    >
                      {feedbackSaved ? "Saved" : "Done"}
                    </Button>
                  </div>
                </div>
              ) : null}
            </>
          ) : (
            <>
              <div className="px-4 pt-[18px]">
                <div className="flex min-h-[51px] w-full items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] px-2.5 py-2.5">
                  <div className="min-w-0 flex-1 [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                    {title}
                  </div>
                  <PointsMeta />
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-[26px] pb-6 pt-2">
                {answerOptions.map((option) => (
                  <label
                    key={option}
                    className="flex w-full cursor-pointer items-center gap-2.5 p-2.5 transition-colors duration-200 hover:bg-[#f3f7fc]"
                  >
                    <input
                      type="radio"
                      name={`capital-answer-${sectionLabel ?? title}`}
                      className="h-5 w-5 accent-[#0957a1]"
                    />
                    <span className="max-w-[570px] [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export const SurveyFormContentSection = ({
  activeTab,
  acceptingResponses,
}: SurveyFormContentSectionProps): JSX.Element => {
  const [formFields, setFormFields] = useState<Record<string, string>>({
    Name: "",
    Email: "",
    "Phone Number": "",
  });

  if (activeTab === "Responses") {
    return (
      <section className="relative w-full px-[24px] py-10 md:px-[60px]">
        <Card className="w-full max-w-[680px] rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up">
          <CardContent className="flex min-h-[260px] flex-col items-center justify-center p-8 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#d1e9ff] text-[#0957a1]">
              0
            </div>
            <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold text-[#202124]">
              No responses yet
            </h2>
            <p className="mt-2 max-w-[420px] [font-family:'Roboto',Helvetica] text-base leading-6 text-[#595959]">
              Responses will appear here as soon as responders submit this mock test form.
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (activeTab === "Settings") {
    return (
      <section className="relative w-full px-[24px] py-10 md:px-[60px]">
        <Card className="w-full max-w-[680px] rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up">
          <CardContent className="p-6">
            <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold text-[#202124]">
              Form settings
            </h2>
            <Separator className="my-4 bg-[#d9d9d9]" />
            <div className="space-y-4">
              {["Collect email addresses", "Limit to one response", "Show progress bar", "Shuffle question order"].map((setting) => (
                <label
                  key={setting}
                  className="flex cursor-pointer items-center justify-between gap-4 rounded-md px-2 py-1 transition-colors duration-200 hover:bg-[#f3f7fc]"
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base text-[#424242]">
                    {setting}
                  </span>
                  <input type="checkbox" className="h-4 w-4 accent-[#0957a1]" />
                </label>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section className="relative w-full px-[24px] py-10 md:px-[60px]">
      <div className="flex w-full flex-col items-start gap-2.5">
        <Card className="w-full overflow-hidden rounded-[10px] border-b-0 border-l-[5px] border-r-0 border-t-0 border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_6px_18px_#0000001f]">
          <CardContent className="p-0">
            <div className="flex flex-col gap-5 px-4 pb-4 pt-[18px]">
              <header className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex min-h-[51px] w-full max-w-[862px] items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                    <h1
                      contentEditable
                      suppressContentEditableWarning
                      className="whitespace-nowrap outline-none [font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600 focus:text-[#202124]"
                    >
                      Untitled Title
                    </h1>
                  </div>
                </div>
                <img
                  className="shrink-0"
                  alt="Frame"
                  src="https://c.animaapp.com/moqzlycwD1XIkf/img/frame-1321317663.svg"
                />
              </header>
              <img
                className="h-5 w-[134px]"
                alt="Frame"
                src="https://c.animaapp.com/moqzlycwD1XIkf/img/frame-1321317581.svg"
              />
              <div className="px-2.5">
                <div
                  contentEditable
                  suppressContentEditableWarning
                  className="whitespace-nowrap outline-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] focus:text-[#202124]"
                >
                  Description (optional)
                </div>
              </div>
              <div className="px-4">
                <img
                  className="h-px w-full max-w-[870px]"
                  alt="Line"
                  src="https://c.animaapp.com/moqzlycwD1XIkf/img/line-1682.svg"
                />
              </div>
              {!acceptingResponses && (
                <div className="rounded-lg bg-[#fff7e0] px-4 py-3 [font-family:'Roboto',Helvetica] text-sm font-medium text-[#7a5600] animate-fade-in">
                  This form is currently closed for responses.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {shortAnswerFields.map((field) => (
          <Card
            key={field}
            className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_6px_18px_#0000001f] focus-within:shadow-[0px_0px_0px_2px_#0957a140]"
          >
            <CardContent className="px-[26px] py-7">
              <div className="flex flex-col gap-6">
                <h2 className="whitespace-nowrap [font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0]">
                  <span className="text-black">{field}</span>
                  <span className="text-[#e02323]">*</span>
                </h2>
                <div className="w-full max-w-[650px] border-b border-[#595959] px-2.5 py-2.5 transition-colors duration-200 focus-within:border-[#0957a1]">
                  <input
                    type={field === "Email" ? "email" : field === "Phone Number" ? "tel" : "text"}
                    value={formFields[field]}
                    onChange={(event) =>
                      setFormFields((current) => ({
                        ...current,
                        [field]: event.target.value,
                      }))
                    }
                    placeholder="Short answer text"
                    className="w-full bg-transparent outline-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] placeholder:text-[#595959]"
                    aria-label={field}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <ChoiceCard title="Capital of India" highlighted withFeedback />
        {repeatedQuestionCards.map((card) => (
          <ChoiceCard key={card.id} title={card.title} />
        ))}

        <ChoiceCard title="Capital of India" sectionLabel="Section 1 of 1" />
        {lowerQuestionCards.map((card) => (
          <ChoiceCard key={card.id} title={card.title} />
        ))}
      </div>
    </section>
  );
};
