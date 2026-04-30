import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const steps = [
  {
    title: "Set Up Payments",
    state: "completed",
    imageSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/group-40150.png",
  },
  {
    title: "Set Up Payments",
    state: "completed",
    imageSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/group-40151.png",
  },
  {
    title: "Publish & Go Live",
    state: "pending",
    stepNumber: "3",
    actionLabel: "Start",
  },
  {
    title: "Publish & Go Live",
    state: "pending",
    stepNumber: "4",
    actionLabel: "Start",
  },
] as const;

export const SetupProgressSection = (): JSX.Element => {
  const completedCount = 2;
  const totalCount = 4;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border-[0.5px] border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-4 pt-4 sm:p-5 sm:pt-4">
          <header className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h2 className="text-2xl leading-8 font-semibold text-black [font-family:'Roboto',Helvetica]">
                Complete Your Setup
              </h2>
              <p className="text-base leading-5 font-normal text-black [font-family:'Roboto',Helvetica]">
                Get your platform ready in just a few steps.
              </p>
            </div>
            <Badge className="h-auto self-start rounded-[261px] bg-[#f0f7fc] px-3 py-1 text-xs leading-5 font-normal text-[#0957a1] hover:bg-[#f0f7fc] [font-family:'Roboto',Helvetica]">
              2&nbsp;of&nbsp;4&nbsp;completed
            </Badge>
          </header>
          <div className="mb-4 h-2 w-full overflow-hidden rounded-[100px] bg-[#edeef1]">
            <div
              className="h-full rounded-[100px] bg-[#0957a1]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-[26px]">
            {steps.map((step, index) => {
              const isCompleted = step.state === "completed";

              return (
                <Card
                  key={`${step.title}-${index}`}
                  className={
                    isCompleted
                      ? "rounded-[10px] border border-[#00c950] bg-[#ebfaf0] shadow-none"
                      : "rounded-[10px] border bg-gray-50 shadow-none"
                  }
                >
                  <CardContent className="flex min-h-[93px] flex-col justify-between px-[15px] py-3.5">
                    <div className="flex items-start gap-[5px]">
                      {isCompleted ? (
                        <img
                          className="h-[30px] w-[30px] shrink-0"
                          alt="Group"
                          src={step.imageSrc}
                        />
                      ) : (
                        <div className="relative flex h-[30px] w-8 shrink-0 items-center justify-center">
                          <div className="h-[30px] w-[30px] rounded-[15px] border border-solid border-[#6a7282] bg-gray-200" />
                          <span className="absolute text-lg leading-5 font-semibold whitespace-nowrap text-[#6a7282] [font-family:'Roboto',Helvetica]">
                            {step.stepNumber}
                          </span>
                        </div>
                      )}

                      <div
                        className={
                          isCompleted
                            ? "mt-[5px] text-lg leading-5 font-semibold whitespace-nowrap text-[#008236] [font-family:'Roboto',Helvetica]"
                            : "mt-[5px] text-lg leading-5 font-semibold whitespace-nowrap text-[#6a7282] [font-family:'Roboto',Helvetica]"
                        }
                      >
                        {step.title}
                      </div>
                    </div>
                    {!isCompleted && (
                      <button
                        type="button"
                        className="ml-auto flex items-center gap-[3px] text-sm leading-5 font-bold whitespace-nowrap text-[#0957a1] [font-family:'Roboto',Helvetica]"
                      >
                        <span>{step.actionLabel}</span>
                        <img
                          className="h-3.5 w-3.5"
                          alt="Solar arrow up"
                          src="https://c.animaapp.com/mojt1gccgC9EQf/img/solar-arrow-up-outline.svg"
                        />
                      </button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
