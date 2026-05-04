import { useMemo, useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";

type QuestionRow = {
  id: string;
  detail: {
    title: string;
    subtitle?: string;
  };
  type: string;
  tag: string;
  level: string;
  marks: {
    positive: string;
    negative: string;
  };
  used: string;
};

const questionRows: QuestionRow[] = [
  {
    id: "q1",
    detail: {
      title: "Complete Web Development Bootcamp",
      subtitle: "Live attended",
    },
    type: "MCQ",
    tag: "Geometry",
    level: "Easy",
    marks: {
      positive: "+ 2.0",
      negative: "-0.25",
    },
    used: "13",
  },
  {
    id: "q2",
    detail: {
      title: "249 + 250 = _ _ _ ?",
    },
    type: "Design",
    tag: "UI",
    level: "Medium",
    marks: {
      positive: "+ 3.0",
      negative: "-0.0",
    },
    used: "11",
  },
  {
    id: "q3",
    detail: {
      title: "249 + 250 = _ _ _ ?",
    },
    type: "Research",
    tag: "UX",
    level: "Easy",
    marks: {
      positive: "+ 5.0",
      negative: "-0.0",
    },
    used: "12",
  },
  {
    id: "q4",
    detail: {
      title: "Complete Web Development Bootcamp",
      subtitle: "Live attended",
    },
    type: "Essay",
    tag: "Marketing",
    level: "Hard",
    marks: {
      positive: "+ 1.0",
      negative: "-0.0",
    },
    used: "11",
  },
];

export const QuestionGridSection = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allSelected = useMemo(
    () => questionRows.length > 0 && selectedRows.length === questionRows.length,
    [selectedRows],
  );

  const toggleAllRows = (checked: boolean | "indeterminate") => {
    setSelectedRows(checked === true ? questionRows.map((row) => row.id) : []);
  };

  const toggleRow = (rowId: string, checked: boolean | "indeterminate") => {
    setSelectedRows((prev) =>
      checked === true ? [...prev, rowId] : prev.filter((id) => id !== rowId),
    );
  };

  const filteredRows = useMemo(() => {
    if (!searchQuery.trim()) return questionRows;
    const q = searchQuery.toLowerCase();
    return questionRows.filter(
      (row) =>
        row.detail.title.toLowerCase().includes(q) ||
        (row.detail.subtitle && row.detail.subtitle.toLowerCase().includes(q)) ||
        row.type.toLowerCase().includes(q) ||
        row.tag.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  return (
    <section className="w-full px-[30px] py-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-shadow duration-300 hover:shadow-[0px_0px_12px_#00000025]">
        <CardContent className="p-[18px] sm:p-[24px] lg:p-[30px]">
          <header className="mb-5 flex flex-col gap-[15px]">
            <div className="h-6 [font-family:'Roboto',Helvetica] text-2xl font-medium leading-6 tracking-[0] text-heading">
              MCQ Design
            </div>
            <p className="max-w-[531px] text-base font-normal leading-6 tracking-[0] text-[#595959] [font-family:'Roboto',Helvetica]">
              Only the questions that are not imported into the test will be displayed here
            </p>
          </header>

          <div className="mb-[14px] flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full max-w-[642px] items-start gap-3">
              <div className="w-full max-w-[577px]">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by question Details"
                  className="h-[45px] rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-base font-normal leading-6 tracking-[0] text-gray-500 shadow-shadow-xs [font-family:'Roboto',Helvetica] placeholder:text-gray-500 transition-all duration-200 focus:border-[#0957a1] focus:ring-1 focus:ring-[#0957a1]"
                />
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-[45px] w-[53px] rounded-md border-[#7aa7cf] bg-[#d1e9ff] p-0 transition-all duration-200 hover:bg-[#b8dafc] hover:shadow-md"
              >
                <img
                  className="h-6 w-6"
                  alt="Frame"
                  src="https://c.animaapp.com/moqt64m1z03AlO/img/frame-1321317524.svg"
                />
              </Button>
            </div>
            <div className="pt-0 lg:pt-[38px]">
              <Select defaultValue="select-columns">
                <SelectTrigger className="h-[45px] w-full min-w-[231px] rounded-[5px] border border-[#d9d9d9] px-2.5 text-left shadow-none [font-family:'Roboto',Helvetica] data-[placeholder]:text-[#595959] lg:w-[231px] transition-colors duration-200">
                  <SelectValue placeholder="SELECT COLUMNS" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select-columns">SELECT COLUMNS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4 text-base font-normal leading-6 tracking-[0] text-[#595959] [font-family:'Roboto',Helvetica] transition-all duration-200">
            Selected item Count : {selectedRows.length}
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-white">
            <Table>
              <TableHeader>
                <TableRow className="h-[50px] border-b border-gray-300 bg-[#edeef1] hover:bg-[#edeef1]">
                  <TableHead className="h-[50px] w-[68px] border-r border-gray-300 p-0 text-center align-middle">
                    <div className="flex items-center justify-center p-2.5">
                      <Checkbox
                        checked={allSelected}
                        onCheckedChange={toggleAllRows}
                        className="h-[15px] w-[15px] rounded-sm border-[#595959] data-[state=checked]:border-[#0957a1] data-[state=checked]:bg-[#0957a1]"
                        aria-label="Select all questions"
                      />
                    </div>
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[260px] border-r border-gray-300 px-2.5 py-2 text-left align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Question Detail
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[140px] border-r border-gray-300 px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Question Type
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[140px] border-r border-gray-300 px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Question Tag
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[130px] border-r border-gray-300 px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Question Level
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[120px] border-r border-gray-300 px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Marks
                  </TableHead>
                  <TableHead className="h-[50px] min-w-[80px] px-2.5 py-2 text-center align-middle [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                    Used
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    className="h-[78px] border-b border-gray-300 transition-colors duration-200 hover:bg-[#f0f6ff]"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <TableCell className="h-[78px] w-[68px] border-r border-gray-300 p-0 text-center align-middle">
                      <div className="flex items-center justify-center p-2.5">
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onCheckedChange={(checked) => toggleRow(row.id, checked)}
                          className="h-[15px] w-[15px] rounded-sm border-[#595959] data-[state=checked]:border-[#0957a1] data-[state=checked]:bg-[#0957a1] transition-all duration-150"
                          aria-label={`Select ${row.detail.title}`}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="h-[78px] border-r border-gray-300 px-2.5 py-2 align-middle">
                      {row.detail.subtitle ? (
                        <div className="text-base leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                          <span className="font-semibold">
                            {row.detail.title}
                            <br />
                          </span>
                          <span className="font-normal">{row.detail.subtitle}</span>
                        </div>
                      ) : (
                        <div className="whitespace-nowrap text-base font-semibold leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                          {row.detail.title}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="h-[78px] border-r border-gray-300 px-2.5 py-2 text-center align-middle">
                      <span className="whitespace-nowrap text-base font-normal leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                        {row.type}
                      </span>
                    </TableCell>
                    <TableCell className="h-[78px] border-r border-gray-300 px-2.5 py-2 text-center align-middle">
                      <span className="whitespace-nowrap text-base font-normal leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                        {row.tag}
                      </span>
                    </TableCell>
                    <TableCell className="h-[78px] border-r border-gray-300 px-2.5 py-2 text-center align-middle">
                      <span className="whitespace-nowrap text-base font-normal leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                        {row.level}
                      </span>
                    </TableCell>
                    <TableCell className="h-[78px] border-r border-gray-300 px-2.5 py-2 text-center align-middle">
                      <div className="whitespace-nowrap text-base font-normal leading-7 tracking-[0] [font-family:'Roboto',Helvetica]">
                        <span className="text-green-500">{row.marks.positive} </span>
                        <span className="text-[#111111]">/ </span>
                        <span className="text-[#e02323]">{row.marks.negative}</span>
                      </div>
                    </TableCell>
                    <TableCell className="h-[78px] px-2.5 py-2 text-center align-middle">
                      <span className="whitespace-nowrap text-base font-normal leading-7 tracking-[0] text-[#111111] [font-family:'Roboto',Helvetica]">
                        {row.used}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <footer className="mt-5 flex justify-end gap-3 sm:gap-5">
            <Button
              type="button"
              className="h-10 rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#074a89] hover:shadow-md [font-family:'Roboto',Helvetica]"
            >
              <span>Export</span>
              <img
                className="h-6 w-6"
                alt="Material symbols"
                src="https://c.animaapp.com/moqt64m1z03AlO/img/material-symbols-download-rounded.svg"
              />
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium uppercase leading-6 tracking-[0] text-[#0957a1] transition-all duration-200 hover:bg-[#b8dafc] hover:shadow-md [font-family:'Roboto',Helvetica]"
            >
              CANCEL
            </Button>
          </footer>
        </CardContent>
      </Card>
    </section>
  );
};
