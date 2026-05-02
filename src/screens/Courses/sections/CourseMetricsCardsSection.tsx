import { Card, CardContent } from "../../../components/ui/card";

const metrics = [
  { label: "Total Course", value: "27" },
  { label: "Encrypted Course", value: "5" },
  { label: "Unencrypted Course", value: "22" },
  { label: "Encrypted Course Limit", value: "100" },
];

export const CourseMetricsCardsSection = (): JSX.Element => {
  return (
    <section aria-label="Course metrics" className="relative w-full">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            className="rounded-[10px] border border-solid border-border bg-white shadow-none transition-shadow duration-200 hover:shadow-sm"
          >
            <CardContent className="flex flex-col items-start justify-center gap-1 p-6">
              <p className="w-full [font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-600">
                {metric.label}
              </p>
              <p className="w-full [font-family:'Roboto',Helvetica] text-3xl font-semibold leading-[38px] tracking-[0] text-gray-900">
                {metric.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
