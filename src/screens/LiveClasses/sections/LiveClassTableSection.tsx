import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const columns = [
  "Course Name",
  "Instructor",
  "Date & Time",
  "Status",
  "Actions",
] as const;

type StatusType = "Upcoming" | "Completed" | "Published" | "Ongoing" | "Cancelled";

interface LiveClassRow {
  id: number;
  courseName: string;
  courseMeta: string;
  instructor: string;
  date: string;
  time: string;
  status: StatusType;
}

const statusStyles: Record<StatusType, string> = {
  Upcoming:  "bg-[#fff3e0] text-[#faa71b] border-[#faa71b]",
  Completed: "bg-[#e9eaf2] text-gray-600 border-gray-400",
  Published: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
  Ongoing:   "bg-[#f0f8ff] text-[#0957a1] border-[#0957a1]",
  Cancelled: "bg-[#ffeaea] text-[#e02323] border-[#e02323]",
};

const initialRows: LiveClassRow[] = [
  {
    id: 1,
    courseName: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Dr. Arpita Kathane",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Upcoming",
  },
  {
    id: 2,
    courseName: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Mr. Amol Ghadge",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Completed",
  },
  {
    id: 3,
    courseName: "Complete Web Development Bootcamp",
    courseMeta: "Ongoing - Started at 2:00 PM",
    instructor: "Dr. Arpita Kathane",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Published",
  },
  {
    id: 4,
    courseName: "Complete Web Development Bootcamp",
    courseMeta: "Live attended",
    instructor: "Mr. Amol Ghadge",
    date: "26 Apr 2025",
    time: "11:00 to 2:00pm",
    status: "Ongoing",
  },
  {
    id: 5,
    courseName: "Complete Web Development Bootcamp",
    courseMeta: "Cancelled",
    instructor: "Mr. Sumit Dorle",
    date: "Started at 2:00pm",
    time: "",
    status: "Cancelled",
  },
];

export const LiveClassTableSection = (): JSX.Element => {
  const [rows] = useState<LiveClassRow[]>(initialRows);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section className="relative w-full px-4 pb-6 md:px-6">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-200 hover:shadow-md">
        <CardContent className="p-4">
          <div className="overflow-x-auto rounded-[10px] border border-gray-300 shadow-[0px_0px_4px_#00000040]">
            <Table className="w-full border-collapse">
              <TableHeader>
                <TableRow className="h-12 border-b border-gray-300 bg-[#edeef1] hover:bg-[#edeef1]">
                  {columns.map((col, i) => (
                    <TableHead
                      key={col}
                      className={[
                        "h-12 px-2.5 align-middle text-gray-600 [font-family:'Roboto',Helvetica] text-base font-bold leading-7 whitespace-nowrap",
                        i === 0 ? "min-w-[380px] text-left" : "",
                        i === 1 ? "min-w-[170px] text-center" : "",
                        i === 2 ? "min-w-[150px] text-center" : "",
                        i === 3 ? "min-w-[150px] text-center" : "",
                        i === 4 ? "min-w-[100px] text-center" : "",
                        i !== columns.length - 1 ? "border-r border-gray-300" : "",
                      ].join(" ")}
                    >
                      {col}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((item) => (
                  <TableRow
                    key={item.id}
                    className="h-[78px] border-b border-gray-300 transition-colors duration-150 hover:bg-[#f8fbff]"
                  >
                    {/* Course Name */}
                    <TableCell className="min-w-[380px] border-r border-gray-300 px-2.5 py-3 align-middle">
                      <div className="[font-family:'Roboto',Helvetica] text-base leading-7 text-[#111111]">
                        <span className="font-semibold">{item.courseName}</span>
                        <br />
                        <span className="font-normal text-gray-500">{item.courseMeta}</span>
                      </div>
                    </TableCell>

                    {/* Instructor */}
                    <TableCell className="min-w-[170px] border-r border-gray-300 px-2.5 py-3 text-center align-middle">
                      <div className="[font-family:'Roboto',Helvetica] text-base leading-7 text-[#111111] whitespace-nowrap">
                        {item.instructor}
                      </div>
                    </TableCell>

                    {/* Date & Time */}
                    <TableCell className="min-w-[150px] border-r border-gray-300 px-2.5 py-3 text-center align-middle">
                      <div className="[font-family:'Roboto',Helvetica] text-base leading-7 text-[#111111]">
                        {item.time ? (
                          <>
                            {item.date}
                            <br />
                            {item.time}
                          </>
                        ) : (
                          <span className="whitespace-nowrap">{item.date}</span>
                        )}
                      </div>
                    </TableCell>

                    {/* Status */}
                    <TableCell className="min-w-[150px] border-r border-gray-300 px-2.5 py-3 text-center align-middle">
                      <div className="flex justify-center">
                        <span
                          className={`inline-flex h-7 items-center justify-center rounded-[9px] border px-2.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 whitespace-nowrap transition-all duration-150 ${statusStyles[item.status]}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </TableCell>

                    {/* Actions */}
                    <TableCell className="min-w-[100px] px-2.5 py-3 text-center align-middle">
                      <div className="relative flex items-center justify-center">
                        <Button
                          type="button"
                          variant="ghost"
                          aria-label={`Actions for ${item.courseName}`}
                          onClick={() =>
                            setActiveMenu(activeMenu === item.id ? null : item.id)
                          }
                          className="h-8 w-8 rounded-md p-0 text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-gray-700 active:scale-95"
                        >
                          <MoreVerticalIcon className="h-4 w-4" />
                        </Button>
                        {activeMenu === item.id && (
                          <div
                            className="absolute right-0 top-8 z-20 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150"
                            onBlur={() => setActiveMenu(null)}
                          >
                            {["View", "Edit", "Join Live", "Delete"].map((action) => (
                              <button
                                key={action}
                                type="button"
                                onClick={() => {
                                  setActiveMenu(null);
                                  if (action === "Join Live") navigate("/live-classes-on");
                                }}
                                className={[
                                  "w-full px-4 py-2 text-left text-sm transition-colors duration-100",
                                  action === "Delete"
                                    ? "text-red-600 hover:bg-red-50"
                                    : action === "Join Live"
                                    ? "text-[#0957a1] hover:bg-blue-50 font-medium"
                                    : "text-gray-700 hover:bg-gray-50",
                                ].join(" ")}
                              >
                                {action}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
