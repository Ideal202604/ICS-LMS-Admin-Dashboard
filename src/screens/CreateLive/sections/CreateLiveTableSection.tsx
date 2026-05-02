import { Card, CardContent } from "../../../components/ui/card";

type StatusType = "Upcoming" | "Completed" | "Published" | "Ongoing" | "Cancelled";

interface LiveRow {
  courseTitle: string;
  courseSubtitle: string;
  instructor: string;
  date?: string;
  time?: string;
  dateTimeSingleLine?: string;
  status: StatusType;
  statusClassName: string;
  actionSrc: string;
}

const guestRows: LiveRow[] = [
  {
    courseTitle: "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor: "Dr. Arpita Kathane",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Upcoming",
    statusClassName: "bg-[#fff3e0] text-[#faa71b] border-[#faa71b]",
    actionSrc: "https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317555-2.svg",
  },
  {
    courseTitle: "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor: "Mr. Amol Ghadge",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Completed",
    statusClassName: "bg-[#e9eaf2] text-gray-600 border-gray-600",
    actionSrc: "https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317555-4.svg",
  },
  {
    courseTitle: "Complete Web Development Bootcamp",
    courseSubtitle: "Onging - Started at 2:00 PM",
    instructor: "Dr. Arpita Kathane",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Published",
    statusClassName: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
    actionSrc: "https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317555-1.svg",
  },
  {
    courseTitle: "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor: "Mr. Amol Ghadge",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Ongoing",
    statusClassName: "bg-[#f0f8ff] text-[#0957a1] border-[#0957a1]",
    actionSrc: "https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317555.svg",
  },
  {
    courseTitle: "Complete Web Development Bootcamp",
    courseSubtitle: "Cancelled",
    instructor: "Mr. Sumit Dorle",
    dateTimeSingleLine: "Started at 2:00pm",
    status: "Cancelled",
    statusClassName: "bg-[#ffeaea] text-[#e02323] border-[#e02323]",
    actionSrc: "https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317555-3.svg",
  },
];

const headers = ["Course Name", "Instructor", "Date & Time", "Status", "Actions"];

export const CreateLiveTableSection = (): JSX.Element => {
  return (
    <section className="relative w-full animate-in fade-in duration-300">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] overflow-hidden transition-shadow duration-200 hover:shadow-md">
        <CardContent className="p-4">
          <div className="overflow-x-auto overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
            {/* Header row */}
            <div className="grid min-h-12 grid-cols-[minmax(260px,2.4fr)_minmax(160px,1fr)_minmax(150px,0.95fr)_minmax(140px,0.95fr)_130px] bg-[#edeef1]">
              {headers.map((header, index) => (
                <div
                  key={header}
                  className={`flex items-center p-2.5 ${index < headers.length - 1 ? "border-r border-gray-300" : ""} ${index === 0 ? "justify-start" : "justify-center"}`}
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    {header}
                  </span>
                </div>
              ))}
            </div>
            {/* Body rows */}
            <div>
              {guestRows.map((row, index) => (
                <article
                  key={`${row.instructor}-${index}`}
                  className={`grid min-h-[78px] grid-cols-[minmax(260px,2.4fr)_minmax(160px,1fr)_minmax(150px,0.95fr)_minmax(140px,0.95fr)_130px] bg-white transition-colors duration-150 hover:bg-[#f8fbff] ${
                    index < guestRows.length - 1 ? "border-b border-gray-300" : ""
                  }`}
                >
                  {/* Course Name */}
                  <div className="flex min-h-[78px] items-center border-r border-gray-300 p-2.5">
                    <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                      <span className="font-semibold">
                        {row.courseTitle}
                        <br />
                      </span>
                      <span className="font-normal text-gray-500">
                        {row.courseSubtitle}
                      </span>
                    </div>
                  </div>
                  {/* Instructor */}
                  <div className="flex min-h-[78px] items-center justify-center border-r border-gray-300 p-2.5 text-center">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                      {row.instructor}
                    </span>
                  </div>
                  {/* Date & Time */}
                  <div className="flex min-h-[78px] items-center justify-center border-r border-gray-300 p-2.5 text-center">
                    <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                      {row.dateTimeSingleLine ? (
                        <span className="whitespace-nowrap">{row.dateTimeSingleLine}</span>
                      ) : (
                        <>
                          {row.date}
                          <br />
                          {row.time}
                        </>
                      )}
                    </div>
                  </div>
                  {/* Status */}
                  <div className="flex min-h-[78px] items-center justify-center border-r border-gray-300 p-2.5">
                    <div
                      className={`inline-flex h-7 items-center justify-center rounded-[9px] border px-2.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0] whitespace-nowrap transition-all duration-150 ${row.statusClassName}`}
                    >
                      {row.status}
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex min-h-[78px] items-center justify-center">
                    <button
                      type="button"
                      className="h-[78px] w-[129px] transition-opacity duration-150 hover:opacity-80 active:scale-95"
                    >
                      <img className="h-full w-full" alt="Actions" src={row.actionSrc} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
