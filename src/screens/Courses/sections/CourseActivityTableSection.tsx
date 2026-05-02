import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EllipsisVerticalIcon, UsersIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

const recentActivities = [
  {
    course: "Complete Web Development Bootcamp",
    status: "Published",
    enrollments: "234",
    revenue: "$12,450",
    updated: "2 days ago",
    statusClasses:
      "border-[#00c950] bg-[#ebfaf0] text-[#00c950] hover:bg-[#ebfaf0]",
  },
  {
    course: "Advance React & TypeScript",
    status: "Published",
    enrollments: "156",
    revenue: "$15,860",
    updated: "2 days ago",
    statusClasses:
      "border-[#00c950] bg-[#ebfaf0] text-[#00c950] hover:bg-[#ebfaf0]",
  },
  {
    course: "Python for Data Science",
    status: "Draft",
    enrollments: "0",
    revenue: "$0",
    updated: "2 Week ago",
    statusClasses:
      "border-[#c07006] bg-[#fef8bc] text-[#c07006] hover:bg-[#fef8bc]",
  },
  {
    course: "UI/UX Design Masterclass",
    status: "Published",
    enrollments: "89",
    revenue: "$5,860",
    updated: "2 days ago",
    statusClasses:
      "border-[#00c950] bg-[#ebfaf0] text-[#00c950] hover:bg-[#ebfaf0]",
  },
];

const actionItems = ["Published", "Draft", "Archived"] as const;

interface CourseActivityTableSectionProps {
  activeStatus?: string;
}

export const CourseActivityTableSection = ({
  activeStatus = "All Courses",
}: CourseActivityTableSectionProps): JSX.Element => {
  const navigate = useNavigate();
  const [openRow, setOpenRow] = useState<number | null>(null);
  const [rowStatuses, setRowStatuses] = useState<Record<number, string>>(
    Object.fromEntries(recentActivities.map((a, i) => [i, a.status]))
  );

  const filteredActivities = recentActivities.filter((activity, idx) => {
    const currentStatus = rowStatuses[idx] ?? activity.status;
    if (activeStatus === "All Courses") return true;
    return currentStatus === activeStatus;
  });

  const getStatusClasses = (status: string) => {
    if (status === "Published")
      return "border-[#00c950] bg-[#ebfaf0] text-[#00c950] hover:bg-[#ebfaf0]";
    if (status === "Draft")
      return "border-[#c07006] bg-[#fef8bc] text-[#c07006] hover:bg-[#fef8bc]";
    return "border-gray-400 bg-gray-100 text-gray-500 hover:bg-gray-100";
  };

  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-[14px] sm:p-[18px]">
          <div className="mb-3 flex items-center">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-black">
              Recent Activity
            </h2>
          </div>
          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-[#edeef1]">
                    <th className="h-12 w-[40%] border-r border-gray-300 px-2.5 text-left align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Course
                    </th>
                    <th className="h-12 w-[14%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Status
                    </th>
                    <th className="h-12 w-[14%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Enrollments
                    </th>
                    <th className="h-12 w-[14%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Revenue
                    </th>
                    <th className="h-12 w-[14%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Last Updated
                    </th>
                    <th className="h-12 w-[4%] px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 text-gray-600">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredActivities.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="py-10 text-center [font-family:'Roboto',Helvetica] text-sm text-gray-400"
                      >
                        No courses found for &ldquo;{activeStatus}&rdquo;
                      </td>
                    </tr>
                  ) : (
                    filteredActivities.map((activity, index) => {
                      const originalIndex = recentActivities.indexOf(activity);
                      const currentStatus =
                        rowStatuses[originalIndex] ?? activity.status;
                      return (
                        <tr
                          key={activity.course}
                          className="h-12 border-b border-gray-300 transition-colors duration-150 last:border-b-0 hover:bg-gray-50"
                        >
                          <td className="px-2.5 py-2 align-middle">
                            <span className="block [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0] text-[#111111] sm:text-base">
                              {activity.course}
                            </span>
                          </td>
                          <td className="px-2.5 py-2 text-center align-middle">
                            <Badge
                              variant="outline"
                              className={`h-7 rounded-[9px] px-2.5 py-0 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 ${getStatusClasses(currentStatus)}`}
                            >
                              {currentStatus}
                            </Badge>
                          </td>
                          <td className="px-2.5 py-2 text-center align-middle">
                            <div className="inline-flex items-center justify-center gap-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-7 text-[#111111]">
                              <UsersIcon className="h-4 w-4 text-gray-400" />
                              <span>{activity.enrollments}</span>
                            </div>
                          </td>
                          <td className="px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-normal leading-7 text-[#111111]">
                            {activity.revenue}
                          </td>
                          <td className="px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-normal leading-7 text-[#111111]">
                            {activity.updated}
                          </td>
                          <td className="px-2.5 py-2 text-center align-middle">
                            <DropdownMenu
                              open={openRow === index}
                              onOpenChange={(open) =>
                                setOpenRow(open ? index : null)
                              }
                            >
                              <DropdownMenuTrigger asChild>
                                <Button
                                  variant="ghost"
                                  className="h-auto p-1 text-[#111111] transition-colors duration-150 hover:bg-gray-100 focus:outline-none active:scale-95"
                                  aria-label={`Actions for ${activity.course}`}
                                >
                                  <EllipsisVerticalIcon className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="min-w-[110px] rounded-sm border border-gray-300 bg-white p-1 shadow-md"
                              >
                                <DropdownMenuItem
                                  className="cursor-pointer [font-family:'Roboto',Helvetica] text-sm font-medium text-[#0957a1] focus:bg-[#e8f3ff]"
                                  onSelect={() => { setOpenRow(null); navigate("/lesson-viewer"); }}
                                >
                                  View Lesson
                                </DropdownMenuItem>
                                {actionItems.map((item) => (
                                  <DropdownMenuItem
                                    key={item}
                                    className="cursor-pointer [font-family:'Roboto',Helvetica] text-sm font-normal text-[#111111] focus:bg-gray-100"
                                    onSelect={() => {
                                      setRowStatuses((prev) => ({
                                        ...prev,
                                        [originalIndex]: item,
                                      }));
                                      setOpenRow(null);
                                    }}
                                  >
                                    {item}
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
