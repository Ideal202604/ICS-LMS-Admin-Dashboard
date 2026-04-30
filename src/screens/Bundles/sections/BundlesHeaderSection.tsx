import { Card, CardContent } from "../../../components/ui/card";

export const BundlesHeaderSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border border-[#d1d5dc] bg-transparent shadow-none">
        <CardContent className="flex min-h-[145px] w-full items-center justify-center px-6 py-12 sm:min-h-[160px] sm:px-8">
          <header className="flex max-w-[253px] flex-col items-center text-center [font-family:'Roboto',Helvetica]">
            <h1 className="font-extrabold text-[24px] leading-6 tracking-[0.12px] text-black">
              Bundles
            </h1>
            <p className="mt-4 font-medium text-base leading-6 tracking-[0] text-gray-600">
              Create and manage course bundles
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
