import { Card, CardContent } from "../../../../components/ui/card";

const overviewCards = [
  {
    value: "24",
    label: "Total Sales",
    iconType: "image" as const,
    iconAlt: "Bi book",
    iconSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/bi-book.svg",
    iconWrapperClassName: "",
    iconClassName: "h-10 w-10",
  },
  {
    value: "$45.6k",
    label: "Active Learners",
    iconType: "image" as const,
    iconAlt: "Ph student",
    iconSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/ph-student.svg",
    iconWrapperClassName: "",
    iconClassName: "h-10 w-10",
  },
  {
    value: "892",
    label: "Monthly Revenue",
    iconType: "text" as const,
    iconAlt: "Dollar sign",
    iconText: "$",
    iconWrapperClassName:
      "flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#dbfce7]",
    iconClassName:
      "w-3.5 [font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-[#36bb68]",
  },
  {
    value: "68%",
    label: "Completion Rate",
    iconType: "image" as const,
    iconAlt: "Streamline graph",
    iconSrc:
      "https://c.animaapp.com/mojt1gccgC9EQf/img/streamline-graph-arrow-increase.svg",
    iconWrapperClassName: "",
    iconClassName: "h-10 w-10",
  },
];

export const PerformanceSummarySection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
      <div className="px-[19px] pb-[22px] pt-[14px]">
        <header className="mb-4">
          <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
            Overview
          </h2>
        </header>
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[18px] xl:gap-[26px]">
          {overviewCards.map((card) => (
            <Card
              key={card.label}
              className="rounded-[10px] border border-solid bg-white shadow-none"
            >
              <CardContent className="flex min-h-[150px] flex-col items-start justify-center gap-5 p-6">
                {card.iconType === "image" ? (
                  <img
                    className={card.iconClassName}
                    alt={card.iconAlt}
                    src={card.iconSrc}
                  />
                ) : (
                  <div className={card.iconWrapperClassName} aria-hidden="true">
                    <span className={card.iconClassName}>{card.iconText}</span>
                  </div>
                )}

                <div className="flex flex-col items-start gap-1 self-stretch">
                  <p className="[font-family:'Roboto',Helvetica] text-3xl font-semibold leading-[38px] tracking-[0] text-black">
                    {card.value}
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-gray-600">
                    {card.label}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
