import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const headers = [
  { key: "course",     label: "Course Name", className: "col-span-12 md:col-span-5" },
  { key: "instructor", label: "Instructor",  className: "col-span-12 md:col-span-2" },
  { key: "dateTime",   label: "Date & Time", className: "col-span-12 md:col-span-2" },
  { key: "status",     label: "Status",      className: "col-span-6 md:col-span-2" },
  { key: "actions",    label: "Actions",     className: "col-span-6 md:col-span-1" },
] as const;

type StatusType = "Upcoming" | "Completed" | "Published" | "Ongoing" | "Cancelled";

interface Row {
  id: number;
  courseTitle: string;
  courseMeta: string;
  instructor: string;
  dateLine1: string;
  dateLine2: string;
  status: StatusType;
  actionSrc: string;
}

const statusStyles: Record<StatusType, string> = {
  Upcoming:  "bg-[#fff3e0] text-[#faa71b] border-[#faa71b]",
  Completed: "bg-[#e9eaf2] text-gray-600 border-gray-600",
  Published: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
  Ongoing:   "bg-[#f0f8ff] text-[#0957a1] border-[#0957a1]",
  Cancelled: "bg-[#ffeaea] text-[#e02323] border-[#e02323]",
};

const initialRows: Row[] = [
  {
    id: 1,
    courseTitle: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Dr. Arpita Kathane",
    dateLine1: "26 Apr 2025",
    dateLine2: "11:00 to 2:00pm",
    status: "Upcoming",
    actionSrc: "https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317555-2.svg",
  },
  {
    id: 2,
    courseTitle: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Mr. Amol Ghadge",
    dateLine1: "26 Apr 2025",
    dateLine2: "11:00 to 2:00pm",
    status: "Completed",
    actionSrc: "https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317555-4.svg",
  },
  {
    id: 3,
    courseTitle: "Complete Web Development Bootcamp",
    courseMeta: "Onging - Started at 2:00 PM",
    instructor: "Dr. Arpita Kathane",
    dateLine1: "26 Apr 2025",
    dateLine2: "11:00 to 2:00pm",
    status: "Published",
    actionSrc: "https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317555-1.svg",
  },
  {
    id: 4,
    courseTitle: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Mr. Amol Ghadge",
    dateLine1: "26 Apr 2025",
    dateLine2: "11:00 to 2:00pm",
    status: "Ongoing",
    actionSrc: "https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317555.svg",
  },
  {
    id: 5,
    courseTitle: "Complete Web Development Bootcamp",
    courseMeta: "Cancelled",
    instructor: "Mr. Sumit Dorle",
    dateLine1: "Started at 2:00pm",
    dateLine2: "",
    status: "Cancelled",
    actionSrc: "https://c.animaapp.com/monv6cn87vGYX8/img/frame-1321317555-3.svg",
  },
];

export const EventDetailsFormSection = (): JSX.Element => {
  const [rows] = useState<Row[]>(initialRows);

  return (
    <section className="relative w-full">
      <Card className="w-full overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-200 hover:shadow-md">
        <CardContent className="p-4">
          <div className="overflow-x-auto overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
            <header className="hidden min-h-12 grid-cols-12 bg-[#edeef1] md:grid">
              {headers.map((header, index) => (
                <div
                  key={header.key}
                  className={`${header.className} flex items-center justify-center px-2.5 py-2 ${
                    index !== headers.length - 1 ? "border-r border-gray-300" : ""
                  } ${header.key === "course" ? "justify-start" : ""}`}
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    {header.label}
                  </span>
                </div>
              ))}
            </header>
            <div className="flex flex-col">
              {rows.map((row, index) => (
                <article
                  key={row.id}
                  className={`border-gray-300 transition-colors duration-150 hover:bg-[#f8fbff] ${
                    index !== rows.length - 1 ? "border-b" : ""
                  }`}
                >
                  {/* Desktop row */}
                  <div className="hidden min-h-[78px] grid-cols-12 md:grid">
                    <div className="col-span-5 flex min-h-[78px] items-center border-r border-gray-300 px-2.5 py-3">
                      <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                        <span className="font-semibold">{row.courseTitle}<br /></span>
                        <span className="font-bold text-gray-500">{row.courseMeta}</span>
                      </div>
                    </div>
                    <div className="col-span-2 flex min-h-[78px] items-center justify-center border-r border-gray-300 px-2.5 py-3">
                      <span className="[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-[#111111] text-center">{row.instructor}</span>
                    </div>
                    <div className="col-span-2 flex min-h-[78px] items-center justify-center border-r border-gray-300 px-2.5 py-3">
                      <div className="[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-[#111111] text-center">
                        <div>{row.dateLine1}</div>
                        {row.dateLine2 ? <div>{row.dateLine2}</div> : null}
                      </div>
                    </div>
                    <div className="col-span-2 flex min-h-[78px] items-center justify-center border-r border-gray-300 px-2.5 py-3">
                      <span
                        className={`inline-flex h-7 items-center justify-center rounded-[9px] border px-2.5 [font-family:'Roboto',Helvetica] text-sm font-bold leading-7 tracking-[0] whitespace-nowrap transition-all duration-150 ${statusStyles[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </div>
                    <div className="col-span-1 flex min-h-[78px] items-center justify-center px-0 py-0">
                      <Button type="button" variant="ghost" className="h-auto rounded-none p-0 hover:bg-transparent active:scale-95 transition-transform duration-150">
                        <img className="h-[78px] w-auto" alt="Actions" src={row.actionSrc} />
                      </Button>
                    </div>
                  </div>
                  {/* Mobile card */}
                  <div className="grid gap-3 p-4 md:hidden">
                    <div className="space-y-1">
                      <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-gray-600">Course Name</div>
                      <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#111111]">
                        <span className="font-semibold">{row.courseTitle}<br /></span>
                        <span className="font-bold text-gray-500">{row.courseMeta}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-gray-600">Instructor</div>
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-[#111111]">{row.instructor}</div>
                      </div>
                      <div className="space-y-1">
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-gray-600">Date &amp; Time</div>
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-[#111111]">
                          <div>{row.dateLine1}</div>
                          {row.dateLine2 ? <div>{row.dateLine2}</div> : null}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1">
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-gray-600">Status</div>
                        <span className={`inline-flex h-7 items-center justify-center rounded-[9px] border px-2.5 [font-family:'Roboto',Helvetica] text-sm font-bold leading-7 whitespace-nowrap ${statusStyles[row.status]}`}>
                          {row.status}
                        </span>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="[font-family:'Roboto',Helvetica] text-sm font-bold leading-5 text-gray-600">Actions</div>
                        <Button type="button" variant="ghost" className="h-auto p-0 hover:bg-transparent active:scale-95">
                          <img className="h-[40px] w-auto" alt="Actions" src={row.actionSrc} />
                        </Button>
                      </div>
                    </div>
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
