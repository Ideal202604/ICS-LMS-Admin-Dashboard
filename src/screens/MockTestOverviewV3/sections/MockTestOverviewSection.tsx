import { Card, CardContent } from "../../../components/ui/card";

const mockTestOverview = {
  title: "Mock Test",
  description: "Create and manage Mock Test",
};

export const MockTestOverviewSection = (): JSX.Element => {
  return (
    <>
      <p className="sr-only">
        The highlighted section in the image is a wide centered overview panel
        with a light gray background, rounded corners, and vertically centered
        text showing the title and subtitle.
      </p>
      <section className="w-full animate-fade-in">
        <Card className="w-full rounded-[10px] border border-[#d1d5dc] bg-[#f3f3f3] shadow-none transition-shadow duration-300 hover:shadow-sm">
          <CardContent className="flex min-h-[144px] w-full items-center justify-center px-6 py-12 sm:min-h-[160px]">
            <header className="flex max-w-[240px] flex-col items-center text-center">
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-extrabold leading-6 tracking-[0.12px] text-black">
                {mockTestOverview.title}
              </h2>
              <p className="[font-family:'Roboto',Helvetica] mt-4 text-base font-medium leading-6 tracking-[0] text-gray-600">
                {mockTestOverview.description}
              </p>
            </header>
          </CardContent>
        </Card>
      </section>
    </>
  );
};
