import React from "react";
import { DataTable, DataTableAction, DataTableColumn, StatusConfig } from "../../../components/ui/data-table";

/* ─── Row shape ──────────────────────────────────────────────────────────── */
interface MockTestRow extends Record<string, unknown> {
  courseTitle:    string;
  courseSubtitle: string;
  instructor:     string;
  dateLine1:      string;
  dateLine2:      string;
  status:         string;
}

/* ─── Column definitions ─────────────────────────────────────────────────── */
const columns: DataTableColumn<MockTestRow>[] = [
  {
    key:      "courseTitle",
    label:    "Course Name",
    width:    "w-[40%]",
    minWidth: "min-w-[240px]",
    align:    "left",
    render:   (_val, row) => (
      <div className="[font-family:'Roboto',Helvetica] text-base leading-7 tracking-[0] text-[#111111]">
        <div className="font-semibold">{row.courseTitle}</div>
        <div className="font-normal text-gray-600">{row.courseSubtitle}</div>
      </div>
    ),
  },
  {
    key:      "instructor",
    label:    "Instructor",
    width:    "w-[16%]",
    minWidth: "min-w-[140px]",
    align:    "center",
    render:   (_val, row) => (
      <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
        {row.instructor}
      </div>
    ),
  },
  {
    key:      "dateLine1",
    label:    "Date & Time",
    width:    "w-[16%]",
    minWidth: "min-w-[140px]",
    align:    "center",
    render:   (_val, row) => (
      <div className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
        <div>{row.dateLine1}</div>
        {row.dateLine2 ? <div>{row.dateLine2}</div> : null}
      </div>
    ),
  },
  {
    key:   "status",
    label: "Status",
    width:    "w-[14%]",
    minWidth: "min-w-[120px]",
    align: "center",
  },
];

/* ─── Status badge config ────────────────────────────────────────────────── */
const statusConfig: StatusConfig = {
  Upcoming:  { className: "border-[#faa71b] bg-[#fff3e0] text-[#faa71b] hover:bg-[#fff3e0]" },
  Completed: { className: "border-gray-600 bg-[#e9eaf2] text-gray-600 hover:bg-[#e9eaf2]" },
  Published: { className: "border-[#00c950] bg-[#ebfaf0] text-[#00c950] hover:bg-[#ebfaf0]" },
  Ongoing:   { className: "border-[#0957a1] bg-[#f0f8ff] text-[#0957a1] hover:bg-[#f0f8ff]" },
  Cancelled: { className: "border-[#e02323] bg-[#ffeaea] text-[#e02323] hover:bg-[#ffeaea]" },
};

/* ─── Row actions ────────────────────────────────────────────────────────── */
const actions: DataTableAction<MockTestRow>[] = [
  {
    label:   "Edit",
    onClick: (row) => console.log("Edit", row.courseTitle),
  },
  {
    label:   "Duplicate",
    onClick: (row) => console.log("Duplicate", row.courseTitle),
  },
  {
    label:            "Delete",
    className:        "text-red-500 focus:text-red-600",
    separatorBefore:  true,
    onClick:          (row) => console.log("Delete", row.courseTitle),
  },
];

/* ─── Data ───────────────────────────────────────────────────────────────── */
const rows: MockTestRow[] = [
  {
    courseTitle:    "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor:     "Dr. Arpita Kathane",
    dateLine1:      "26 Apr 2025",
    dateLine2:      "11:00 to 2:00pm",
    status:         "Upcoming",
  },
  {
    courseTitle:    "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor:     "Mr. Amol Ghadge",
    dateLine1:      "26 Apr 2025",
    dateLine2:      "11:00 to 2:00pm",
    status:         "Completed",
  },
  {
    courseTitle:    "Complete Web Development Bootcamp",
    courseSubtitle: "Onging - Started at 2:00 PM",
    instructor:     "Dr. Arpita Kathane",
    dateLine1:      "26 Apr 2025",
    dateLine2:      "11:00 to 2:00pm",
    status:         "Published",
  },
  {
    courseTitle:    "Complete Web Development Bootcamp",
    courseSubtitle: "Live attended",
    instructor:     "Mr. Amol Ghadge",
    dateLine1:      "26 Apr 2025",
    dateLine2:      "11:00 to 2:00pm",
    status:         "Ongoing",
  },
  {
    courseTitle:    "Complete Web Development Bootcamp",
    courseSubtitle: "Cancelled",
    instructor:     "Mr. Sumit Dorle",
    dateLine1:      "Started at 2:00pm",
    dateLine2:      "",
    status:         "Cancelled",
  },
];

/* ─── Section ────────────────────────────────────────────────────────────── */
const MockTestDataTable = DataTable as React.FC<import("../../../components/ui/data-table").DataTableProps<MockTestRow>>;

export const MockTestListingTableSection = (): JSX.Element => {
  return (
    <MockTestDataTable
      columns={columns}
      rows={rows}
      statusField="status"
      statusConfig={statusConfig}
      actions={actions}
    />
  );
};
