import { Card, CardContent } from "../../../components/ui/card";

const utilitiesContent = {
  title: "Utilities",
  description:
    "Utilities lets you create multiple copies of an existing course and encrypt your unencrypted courses.",
};

export const UtilitiesHeaderSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border border-border bg-white shadow-none">
        <CardContent className="flex items-center gap-4 p-6">
          <header className="flex flex-1 flex-col items-start gap-1">
            <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
              {utilitiesContent.title}
            </h1>
            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-5 tracking-[0] text-black">
              {utilitiesContent.description}
            </p>
          </header>
        </CardContent>
      </Card>
    </section>
  );
};
