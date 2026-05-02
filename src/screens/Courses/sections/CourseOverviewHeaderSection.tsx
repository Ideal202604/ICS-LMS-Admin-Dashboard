import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const actions = [
  {
    label: "Reorder",
    iconSrc: "https://c.animaapp.com/mol2o23wUxBYqe/img/folder-plus.svg",
    iconAlt: "Folder plus",
    variant: "outline" as const,
    className:
      "h-auto border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 active:scale-[0.98]",
  },
  {
    label: "Create",
    iconSrc: "https://c.animaapp.com/mol2o23wUxBYqe/img/plus.svg",
    iconAlt: "Plus",
    variant: "default" as const,
    className:
      "h-auto bg-[#0957a1] px-4 py-2 text-base font-medium leading-6 text-white hover:bg-[#084a89] transition-all duration-200 active:scale-[0.98]",
  },
];

export const CourseOverviewHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border border-solid border-border bg-white shadow-none">
        <CardContent className="p-6">
          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <header className="flex min-w-0 flex-1 flex-col items-start gap-1">
              <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                Courses
              </h1>
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-black">
                Welcome to your course dashboard
              </p>
            </header>
            <nav
              aria-label="Course actions"
              className="flex flex-wrap items-center gap-3"
            >
              {actions.map((action) => (
                <Button
                  key={action.label}
                  type="button"
                  variant={action.variant}
                  onClick={() => action.label === "Create" && navigate("/create-course")}
                  className={`${action.className} inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg [font-family:'Roboto',Helvetica]`}
                >
                  <img
                    className="h-5 w-5"
                    alt={action.iconAlt}
                    src={action.iconSrc}
                  />
                  <span className="whitespace-nowrap">{action.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
