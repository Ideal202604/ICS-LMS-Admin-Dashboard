import { Card, CardContent } from "../../../components/ui/card";

const codeManagementContent = {
  title: "Code",
  description: "Create and manage Code",
};

export const CodeManagementSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border-2 border-dashed border-[#d1d5dc] bg-transparent shadow-none">
        <CardContent className="flex min-h-[277px] items-center justify-center px-6 py-10">
          <header className="flex max-w-[181px] flex-col items-center text-center [font-family:'Roboto',Helvetica]">
            <h2 className="text-2xl font-extrabold leading-6 tracking-[0.12px] text-black">
              {codeManagementContent.title}
            </h2>
            <p className="mt-5 text-base font-medium leading-6 tracking-[0] text-gray-600">
              {codeManagementContent.description}
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
