import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const quickActions = [
  {
    title: "Create Crouse",
    description: "Build and publish new courses",
    iconAlt: "Bi book",
    iconSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/bi-book.svg",
  },
  {
    title: "Add Lesson",
    description: "Create new lesson content",
    iconAlt: "Bi book",
    iconSrc: "https://c.animaapp.com/mojt1gccgC9EQf/img/bi-book.svg",
  },
  {
    title: "Customize Website",
    description: "Edit your site design",
    iconAlt: "Streamline graph",
    iconSrc:
      "https://c.animaapp.com/mojt1gccgC9EQf/img/streamline-graph-arrow-increase.svg",
  },
  {
    title: "Send Promotion",
    description: "Launch marketing campaigns",
    iconAlt: "Streamline graph",
    iconSrc:
      "https://c.animaapp.com/mojt1gccgC9EQf/img/streamline-graph-arrow-increase.svg",
  },
];

export const CreatorShortcutSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border border-[#d9d9d9] bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-0">
          <div className="flex flex-col gap-4 px-[19px] py-5 sm:gap-5 sm:py-6">
            <header>
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                Quick Actions
              </h2>
            </header>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[26px]">
              {quickActions.map((action) => (
                <Button
                  key={action.title}
                  type="button"
                  variant="ghost"
                  className="h-auto justify-start rounded-[10px] border border-[#e5e7eb] bg-white p-0 text-left hover:bg-[#f8fafc]"
                >
                  <article className="flex min-h-[141px] w-full flex-col items-start justify-center gap-5 p-6">
                    <img
                      className="h-10 w-10"
                      alt={action.iconAlt}
                      src={action.iconSrc}
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h3 className="[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-[#4b5563]">
                        {action.title}
                      </h3>
                      <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-4 tracking-[0] text-[#6b7280]">
                        {action.description}
                      </p>
                    </div>
                  </article>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
