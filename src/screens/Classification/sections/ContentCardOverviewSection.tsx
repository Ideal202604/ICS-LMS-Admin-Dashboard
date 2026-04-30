import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const overviewCards = [
  {
    title: "Categories",
    description:
      "Create categories and add products for easy content discovery",
    iconAlt: "Tabler icon sitemap",
    iconSrc:
      "https://c.animaapp.com/moky24fd2yCa0P/img/tabler-icon-sitemap.svg",
  },
  {
    title: "Tags",
    descriptionLines: [
      "Create tags and use them to classify",
      "News Feed Posts and Questions",
    ],
    iconAlt: "Frame",
    iconSrc: "https://c.animaapp.com/moky24fd2yCa0P/img/frame-1.svg",
  },
  {
    title: "Segments",
    descriptionLines: [
      "Create Segments and Add multiple",
      "sub-segments or Products within",
    ],
    iconAlt: "Frame",
    iconSrc: "https://c.animaapp.com/moky24fd2yCa0P/img/frame.svg",
  },
];

export const ContentCardOverviewSection = (): JSX.Element => {
  return (
    <section aria-label="Content overview cards" className="w-full">
      <div className="grid w-full grid-cols-1 overflow-hidden rounded-lg border border-solid border-[#d1d5db] bg-white md:grid-cols-2 lg:grid-cols-3">
        {overviewCards.map((card, index) => (
          <Card
            key={card.title}
            className={`group rounded-none border-0 bg-white shadow-none transition-shadow duration-200 hover:shadow-md ${
              index < overviewCards.length - 1
                ? "lg:border-r lg:border-[#d1d5db]"
                : ""
            } ${index === 0 ? "md:border-b md:border-[#d1d5db] lg:border-b-0" : ""} ${
              index === 1 ? "border-b border-[#d1d5db] md:border-b-0" : ""
            }`}
          >
            <CardContent className="flex min-h-[108px] flex-col items-start gap-1 px-3 py-2.5 sm:px-4 sm:py-3">
              <img
                className="h-[42px] w-[42px] transition-transform duration-200 group-hover:scale-110"
                alt={card.iconAlt}
                src={card.iconSrc}
              />
              <div className="flex flex-col items-start">
                <h2 className="font-heading text-[24px] font-[number:var(--heading-font-weight)] leading-[var(--heading-line-height)] tracking-[var(--heading-letter-spacing)] text-[color:var(--heading)] [font-style:var(--heading-font-style)]">
                  {card.title}
                </h2>
                <p className="mt-0.5 font-body text-[16px] font-[number:var(--body-font-weight)] leading-[var(--body-line-height)] tracking-[var(--body-letter-spacing)] text-gray-500 [font-style:var(--body-font-style)]">
                  {"description" in card
                    ? card.description
                    : (card as { descriptionLines: string[] }).descriptionLines.map((line, lineIndex) => (
                        <span key={`${card.title}-line-${lineIndex}`}>
                          {line}
                          {lineIndex < (card as { descriptionLines: string[] }).descriptionLines.length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                </p>
              </div>
              <Button
                variant="link"
                className="h-auto p-0 font-sub-heading text-[16px] font-[number:var(--sub-heading-font-weight)] leading-[var(--sub-heading-line-height)] tracking-[var(--sub-heading-letter-spacing)] text-[#0957a1] no-underline transition-colors duration-150 hover:text-[#0957a1]/80 hover:no-underline [font-style:var(--sub-heading-font-style)]"
              >
                View
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
