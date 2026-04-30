import { Card, CardContent } from "../../../components/ui/card";

const actionPanelData = {
  title: "Copy Product",
  description:
    "Create copy of course, mock test or test series to a new product or existing product within school or sub-school.",
  note: "Note: Copy of course will be created as encrypted course",
  iconSrc: "https://c.animaapp.com/mokyir3ag1EJQa/img/frame-1321317428.svg",
};

export const UtilitiesActionPanelSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-lg border border-border bg-white shadow-none transition-shadow duration-200 hover:shadow-md">
        <CardContent className="flex items-center justify-between gap-4 px-6 py-3">
          <article className="min-w-0 flex-1">
            <header className="pb-2">
              <h2 className="[font-family:'Roboto',Helvetica] text-xl font-semibold leading-7 tracking-[0] text-black">
                {actionPanelData.title}
              </h2>
            </header>
            <div className="space-y-1">
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-gray-500">
                {actionPanelData.description}
              </p>
              <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-gray-500">
                {actionPanelData.note}
              </p>
            </div>
          </article>
          <img
            className="h-auto shrink-0 transition-transform duration-200 hover:scale-105"
            alt="Copy product action"
            src={actionPanelData.iconSrc}
          />
        </CardContent>
      </Card>
    </section>
  );
};
