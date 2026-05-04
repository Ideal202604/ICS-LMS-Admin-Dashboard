import { useMemo, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

type ResponseView = "Summary" | "Question" | "Individual";

const tabs: ResponseView[] = ["Summary", "Question", "Individual"];

const insightStats = [
  { label: "Average", value: "0 \\ 0 points" },
  { label: "Median", value: "0 \\ 0 points" },
  { label: "Range", value: "0 \\ 0 points" },
];

const missedQuestions = [
  {
    question: "Capital of India",
    correct: "2",
    total: "/5",
  },
];

const scores = [
  {
    email: "sumitdorle486@gmail.com",
    score: "8/10",
    released: "Feb20, 10:25 AM",
  },
  {
    email: "vaishnavihawale943@gmail.com",
    score: "8/10",
    released: "Feb20, 10:25 AM",
  },
  {
    email: "pawarrani12001@gmail.com",
    score: "8/10",
    released: "Not released",
  },
];

export const SurveyInsightsDashboardSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<ResponseView>("Summary");
  const [scoresReleased, setScoresReleased] = useState(false);
  const responseCount = useMemo(() => scores.length + 2, []);

  const handleReleaseScores = () => {
    setScoresReleased(true);
  };

  const handleCopyChart = async () => {
    const chartText = "4 responses - Opection1: 100%";

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(chartText);
    }
  };

  return (
    <section className="relative flex w-full flex-col gap-2.5 px-0 pb-8 sm:px-2">
      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up">
        <CardContent className="p-0">
          <header className="flex flex-col">
              <div className="flex min-h-[98px] items-start justify-between gap-4 px-5 pb-4 pt-[22px] sm:px-[20px] lg:px-6">
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-black">
                {responseCount} responses
              </h2>

              <div className="flex items-center gap-6 pt-0">
                <button
                  type="button"
                  onClick={() => alert("Connected to sheet.")}
                  className="flex items-center gap-[15px] text-app-primary transition-all duration-200 hover:-translate-y-0.5 hover:text-[#084a88]"
                >
                  <img
                    className="h-[18px] w-[18px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mor2yztbLGweGw/img/vector.svg"
                  />
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 whitespace-nowrap">
                    Link to Sheet
                  </span>
                </button>

                <button
                  type="button"
                  className="shrink-0 rounded-md transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0957a1]"
                  aria-label="More response actions"
                >
                  <img
                    className="h-6 w-6"
                    alt="Svg spinners dots"
                    src="https://c.animaapp.com/mor2yztbLGweGw/img/svg-spinners-3-dots-fade.svg"
                  />
                </button>
              </div>
            </div>

            <nav
              aria-label="Survey response views"
              className="flex items-center justify-center gap-[197px] px-4 pb-6"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`inline-flex h-[27px] items-center justify-center p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#0957a1] ${
                      isActive ? "border-b-2 border-[#0957a1]" : ""
                    }`}
                  >
                    <span
                      className={`[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap ${
                        isActive ? "text-app-primary" : "text-black"
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}
            </nav>

          </header>
        </CardContent>
      </Card>

      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up [--animation-delay:120ms]">
        <CardContent className="p-0">
          <section>
            <header className="flex items-center border-b border-[#b9b9b9] px-[18px] py-2.5">
              <h3 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-black">
                Insights
              </h3>
            </header>

            <div className="flex flex-col items-center px-6 pb-10 pt-8">
              <div className="flex w-full max-w-[657px] items-center justify-center gap-[30px]">
                {insightStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex h-[82px] w-[199px] flex-col items-center justify-center rounded-[10px] bg-[#4b55631a] opacity-[0.99] transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="w-full [font-family:'Inter',Helvetica] text-center text-base font-semibold leading-8 text-black">
                      {stat.label}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-base font-normal leading-8 text-black whitespace-nowrap">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 [font-family:'Inter',Helvetica] text-center text-base font-semibold leading-8 text-black">
                Total points distribution
              </div>

              <div className="mt-1 flex w-full max-w-[700px] items-end justify-center gap-3">
                <div className="flex h-[155px] items-center justify-center">
                  <div className="-rotate-90 [font-family:'Inter',Helvetica] text-center text-sm font-normal leading-8 text-black italic whitespace-nowrap">
                    # of respondents
                  </div>
                </div>

                <img
                  className="h-[155px] w-[537px]"
                  alt="Total points distribution chart"
                  src="https://c.animaapp.com/mor2yztbLGweGw/img/image-159.png"
                />
              </div>

              <div className="mt-1 [font-family:'Inter',Helvetica] text-center text-sm font-normal leading-8 text-black italic">
                Point Scored
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up [--animation-delay:180ms]">
        <CardContent className="px-[35px] pb-8 pt-[22px]">
          <section className="flex flex-col">
            <h3 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-black">
              Frequently missed questions
            </h3>

            <div className="mt-[21px] grid grid-cols-[1fr_auto] items-center gap-4 px-[10px]">
              <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                Questions
              </div>
              <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500 whitespace-nowrap">
                Correct responses
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              {missedQuestions.map((item) => (
                <button
                  key={item.question}
                  type="button"
                  className="flex items-center justify-between rounded-[10px] border border-solid border-gray-300 bg-white px-3 py-2.5 text-left shadow-shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0957a1] hover:shadow-md"
                >
                  <div className="min-w-0 flex-1 [font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                    {item.question}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] text-base font-normal leading-4">
                    <span className="font-body-small-regular text-[length:var(--body-small-regular-font-size)] font-[number:var(--body-small-regular-font-weight)] leading-[var(--body-small-regular-line-height)] tracking-[var(--body-small-regular-letter-spacing)] text-[#ea4335] [font-style:var(--body-small-regular-font-style)]">
                      {item.correct}
                    </span>
                    <span className="font-body-small-regular text-[length:var(--body-small-regular-font-size)] font-[number:var(--body-small-regular-font-weight)] leading-[var(--body-small-regular-line-height)] tracking-[var(--body-small-regular-letter-spacing)] text-gray-500 [font-style:var(--body-small-regular-font-style)]">
                      {item.total}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up [--animation-delay:240ms]">
        <CardContent className="p-0">
          <section>
            <header className="flex items-start justify-between gap-4 px-[22px] pt-3">
              <h3 className="[font-family:'Roboto',Helvetica] mt-[10px] text-2xl font-semibold leading-8 text-black">
                Scores
              </h3>

              <Button
                type="button"
                variant="outline"
                onClick={handleReleaseScores}
                className="h-auto rounded-[5px] border-[#d9d9d9] px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-app-primary transition-all duration-200 hover:border-[#0957a1] hover:bg-[#f0f7ff] hover:text-app-primary active:scale-[0.97]"
              >
                {scoresReleased ? "Scores released" : "Release scores"}
              </Button>
            </header>

            <Separator className="mt-[13px] bg-[#d9d9d9]" />

            <div className="px-[22px] pb-8 pt-7">
              <div className="grid grid-cols-[minmax(0,1fr)_120px_180px] items-center gap-4 px-[18px]">
                <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                  Email
                </div>
                <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                  Score
                </div>
                <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                  Score released
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-[10px]">
                {scores.map((item) => (
                  <div
                    key={item.email}
                    className="grid grid-cols-[minmax(0,1fr)_120px_180px] items-center gap-4 rounded-[10px] border border-solid border-gray-300 bg-white px-3 py-2.5 shadow-shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0957a1] hover:shadow-md"
                  >
                    <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500">
                      {item.email}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-base font-medium leading-6 text-gray-500 whitespace-nowrap">
                      {item.score}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-base font-normal leading-4 text-gray-500">
                      <span className="font-body-small-regular text-[length:var(--body-small-regular-font-size)] font-[number:var(--body-small-regular-font-weight)] leading-[var(--body-small-regular-line-height)] tracking-[var(--body-small-regular-letter-spacing)] [font-style:var(--body-small-regular-font-style)]">
                        {scoresReleased ? "Released now" : item.released}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </CardContent>
      </Card>

      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-up [--animation-delay:300ms]">
        <CardContent className="px-[22px] pb-[27px] pt-[23px]">
          <section>
            <header className="flex items-start justify-between gap-4">
              <h3 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-black whitespace-nowrap">
                4 responses
              </h3>

              <button
                type="button"
                onClick={handleCopyChart}
                className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-app-primary whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:text-[#084a88]"
              >
                Copy Chart
              </button>
            </header>

            <div className="mt-4 grid min-h-[220px] grid-cols-1 items-center gap-8 md:grid-cols-[360px_1fr]">
              <div className="flex items-center justify-center">
                <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-app-primary transition-all duration-300 hover:scale-[1.03] hover:shadow-lg">
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-white whitespace-nowrap">
                    100%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-heading whitespace-nowrap">
                  Opection1
                </div>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </section>
  );
};
