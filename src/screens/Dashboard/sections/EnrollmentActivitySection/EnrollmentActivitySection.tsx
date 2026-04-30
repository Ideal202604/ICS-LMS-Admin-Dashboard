import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const activities = [
  {
    title: "New enrollment",
    description: "Sarah Johnson enrolled in complete Web Dvelopment",
    time: "5 minutes ago",
  },
  {
    title: "New enrollment",
    description: "Sarah Johnson enrolled in complete Web Dvelopment",
    time: "5 minutes ago",
  },
  {
    title: "New enrollment",
    description: "Sarah Johnson enrolled in complete Web Dvelopment",
    time: "5 minutes ago",
  },
  {
    title: "New enrollment",
    description: "Sarah Johnson enrolled in complete Web Dvelopment",
    time: "3 hours ago",
  },
];

export const EnrollmentActivitySection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="h-auto w-full rounded-[10px] border-[0.5px] border-solid border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-0">
          <div className="flex flex-col gap-[31px] px-[19px] pb-8 pt-[29px]">
            <header>
              <h2 className="h-8 [font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                Recent Activity
              </h2>
            </header>
            <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
              <CardContent className="p-0">
                <ul className="flex flex-col">
                  {activities.map((activity, index) => (
                    <li
                      key={`${activity.title}-${index}`}
                      className="list-none"
                    >
                      <article className="flex min-h-20 items-center justify-between gap-4 px-5 py-5">
                        <div className="flex min-w-0 items-center gap-2.5">
                          <img
                            className="h-10 w-10 shrink-0"
                            alt="Bi book"
                            src="https://c.animaapp.com/mojt1gccgC9EQf/img/bi-book.svg"
                          />
                          <div className="min-w-0">
                            <div className="[font-family:'Roboto',Helvetica] text-base leading-4 tracking-[0] text-gray-600">
                              <div className="font-bold leading-7 text-gray-600">
                                {activity.title}
                              </div>
                              <p className="overflow-hidden text-ellipsis whitespace-nowrap leading-5 text-gray-600">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        <time className="shrink-0 whitespace-nowrap [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0] text-gray-600">
                          {activity.time}
                        </time>
                      </article>
                      {index < activities.length - 1 && (
                        <Separator className="bg-gray-300" />
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
