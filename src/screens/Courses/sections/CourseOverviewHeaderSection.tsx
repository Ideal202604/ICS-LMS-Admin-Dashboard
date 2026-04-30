import { FolderPlusIcon, PlusIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const actions = [
  {
    label: "Reorder",
    variant: "outline" as const,
    icon: FolderPlusIcon,
    className: "h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 active:scale-[0.98]",
  },
  {
    label: "Create",
    variant: "default" as const,
    icon: PlusIcon,
    className: "h-auto gap-2 rounded-lg bg-[#0957a1] px-4 py-2 text-white hover:bg-[#084b89] transition-all duration-200 active:scale-[0.98]",
  },
];

export const CourseOverviewHeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border border-solid bg-white shadow-none">
        <CardContent className="p-6">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <header className="flex min-w-0 flex-1 flex-col gap-1">
              <h1 className="mt-[-1.00px] w-fit whitespace-nowrap [font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                Courses
              </h1>
              <p className="self-stretch [font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-black">
                Welcome to your course dashboard
              </p>
            </header>
            <nav aria-label="Course actions" className="flex flex-wrap items-center gap-3">
              {actions.map((action) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.label}
                    type="button"
                    variant={action.variant}
                    className={action.className}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">
                      {action.label}
                    </span>
                  </Button>
                );
              })}
            </nav>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
