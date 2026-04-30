import { Card, CardContent } from "../../../components/ui/card";

const moreProductsContent = {
  title: "More Products",
  description: "Create and manage More Products",
};

export const MoreProductsOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border-2 border-dashed border-[#d1d5dc] bg-transparent shadow-none">
        <CardContent className="flex min-h-[277px] items-center justify-center px-6 py-10">
          <header className="flex max-w-[250px] flex-col items-center text-center [font-family:'Roboto',Helvetica]">
            <h2 className="text-2xl font-extrabold leading-6 tracking-[0.12px] text-black">
              {moreProductsContent.title}
            </h2>
            <p className="mt-5 text-base font-medium leading-6 tracking-[0] text-gray-600">
              {moreProductsContent.description}
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
