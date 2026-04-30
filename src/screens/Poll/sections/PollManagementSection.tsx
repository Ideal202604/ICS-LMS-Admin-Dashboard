import { Card, CardContent } from "../../../components/ui/card";

const pollSectionContent = {
  title: "Poll",
  description: "Create and manage Poll",
};

export const PollManagementSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border-2 border-dashed border-[#d1d5dc] bg-transparent shadow-none">
        <CardContent className="flex min-h-[277px] items-center justify-center p-6">
          <header className="flex max-w-[171px] flex-col items-center text-center [font-family:'Roboto',Helvetica]">
            <h2 className="text-2xl font-extrabold leading-6 tracking-[0.12px] text-black">
              {pollSectionContent.title}
            </h2>
            <p className="mt-4 text-base font-medium leading-6 tracking-[0] text-gray-600">
              {pollSectionContent.description}
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
