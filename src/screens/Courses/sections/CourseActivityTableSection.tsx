import { useState } from "react";
import { EllipsisVerticalIcon, UsersIcon } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

const activities = [
  {
    course: "Complete Web Development Bootcamp",
    status: "Published",
    enrollments: "234",
    revenue: "$12,450",
    updated: "2 days ago",
    statusClassName: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
  },
  {
    course: "Advance React & TypeScript",
    status: "Published",
    enrollments: "156",
    revenue: "$15,860",
    updated: "2 days ago",
    statusClassName: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
  },
  {
    course: "Python for Data Science",
    status: "Draft",
    enrollments: "0",
    revenue: "$0",
    updated: "2 Week ago",
    statusClassName: "bg-[#fef8bc] text-[#c07006] border-[#c07006]",
  },
  {
    course: "UI/UX Design Masterclass",
    status: "Published",
    enrollments: "89",
    revenue: "$5,860",
    updated: "2 days ago",
    statusClassName: "bg-[#ebfaf0] text-[#00c950] border-[#00c950]",
  },
];

export const CourseActivityTableSection = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <section className="w-full">
      <Card className="w-full overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-0">
          <div className="px-[19px] pt-[13px] pb-[14px]">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
              Recent Activity
            </h2>
          </div>
          <div className="mx-[19px] mb-[18px] overflow-hidden rounded-[10px] border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
            <Table>
              <TableHeader>
                <TableRow className="h-12 border-b border-gray-300 bg-[#edeef1] hover:bg-[#edeef1]">
                  <TableHead className="h-12 w-[42%] border-r border-gray-300 px-2.5 text-left align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Course
                  </TableHead>
                  <TableHead className="h-12 w-[13%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Status
                  </TableHead>
                  <TableHead className="h-12 w-[13%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Enrollments
                  </TableHead>
                  <TableHead className="h-12 w-[12%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Revenue
                  </TableHead>
                  <TableHead className="h-12 w-[12%] border-r border-gray-300 px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Last Updated
                  </TableHead>
                  <TableHead className="h-12 w-[8%] px-2.5 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow
                    key={activity.course}
                    className="h-12 border-b border-gray-300 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell className="px-2.5 py-2 align-middle [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0] text-[#111111] sm:text-base">
                      <span className="block truncate whitespace-nowrap">
                        {activity.course}
                      </span>
                    </TableCell>
                    <TableCell className="px-2.5 py-2 text-center align-middle">
                      <Badge
                        variant="outline"
                        className={`h-7 rounded-[9px] border px-2.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0] ${activity.statusClassName}`}
                      >
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-2.5 py-2 align-middle">
                      <div className="flex items-center justify-center gap-2.5">
                        <UsersIcon className="h-4 w-4 text-[#bcbcbc]" />
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                          {activity.enrollments}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                      {activity.revenue}
                    </TableCell>
                    <TableCell className="px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                      {activity.updated}
                    </TableCell>
                    <TableCell className="px-2.5 py-2 text-center align-middle">
                      <DropdownMenu
                        open={openMenu === activity.course}
                        onOpenChange={(open) => setOpenMenu(open ? activity.course : null)}
                      >
                        <DropdownMenuTrigger asChild>
                          <button
                            type="button"
                            aria-label={`Open actions for ${activity.course}`}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[#111111] transition-colors hover:bg-gray-100 active:scale-95"
                          >
                            <EllipsisVerticalIcon className="h-4 w-4" />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-32">
                          <DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
