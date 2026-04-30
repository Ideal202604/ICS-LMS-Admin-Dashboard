import { Card, CardContent } from "../../../components/ui/card";

const metrics = [
  { label: "Total Course", value: "27" },
  { label: "Encrypted Course", value: "5" },
  { label: "Unencrypted Course", value: "22" },
  { label: "Encrypted Course Limit", value: "100" },
];

export const CourseMetricsCardsSection = (): JSX.Element => {
  return (
    <section aria-label="Course metrics" className="w-full">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className="rounded-none border border-solid border-border bg-white shadow-none first:rounded-l-[10px] first:border-r-0 last:rounded-r-[10px] sm:[&:nth-child(2)]:rounded-none lg:first:rounded-l-[10px] lg:last:rounded-r-[10px] lg:[&:not(:last-child)]:border-r-0"
          >
            <CardContent className="flex min-h-[88px] flex-col items-start justify-center gap-1 p-4 sm:p-5 lg:p-6">
              <p className="w-full text-sm font-normal leading-5 tracking-[0] text-gray-600 [font-family:'Roboto',Helvetica]">
                {metric.label}
              </p>
              <p className="w-full text-3xl font-semibold leading-[38px] tracking-[0] text-gray-900 [font-family:'Roboto',Helvetica]">
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
