import { Card, CardContent } from "../../../components/ui/card";

const mockTestContent = {
  title: "Mock Test",
  description: "Create and manage Mock Test",
};

export const MockTestContentSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 pt-4 md:px-6 lg:px-8">
      <Card className="w-full rounded-[10px] border-2 border-dashed border-[#d1d5dc] bg-transparent shadow-none">
        <CardContent className="flex min-h-[145px] items-center justify-center px-6 py-10 md:min-h-[277px]">
          <header className="text-center [font-family:'Roboto',Helvetica]">
            <h2 className="text-2xl font-extrabold leading-6 tracking-[0.12px] text-black">
              {mockTestContent.title}
            </h2>
            <p className="mt-4 text-base font-medium leading-6 tracking-[0] text-gray-600">
              {mockTestContent.description}
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
