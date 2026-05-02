import { Badge } from "../../../components/ui/badge";

const eventHeaderItems = {
  start: ["Feb 13,2026", "10:30 am"],
  end: ["11:30 am", "Feb 13,2026"],
};

export const EventHeaderSection = (): JSX.Element => {
  return (
    <section aria-label="Event date and time" className="w-full">
      <div className="flex w-full flex-wrap items-center gap-[10px] sm:gap-[15px]">
        {eventHeaderItems.start.map((item) => (
          <Badge
            key={`start-${item}`}
            variant="secondary"
            className="h-[38px] rounded-[5px] bg-[#e9eef6] px-2.5 py-2 text-base font-bold leading-8 text-black hover:bg-[#e9eef6] [font-family:'Roboto',Helvetica]"
          >
            {item}
          </Badge>
        ))}

        <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-8 text-black">
          to
        </span>
        {eventHeaderItems.end.map((item) => (
          <Badge
            key={`end-${item}`}
            variant="secondary"
            className="h-[38px] rounded-[5px] bg-[#e9eef6] px-2.5 py-2 text-base font-bold leading-8 text-black hover:bg-[#e9eef6] [font-family:'Roboto',Helvetica]"
          >
            {item}
          </Badge>
        ))}
      </div>
    </section>
  );
};
