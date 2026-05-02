/**
 * DataTable — a reusable, fully-typed table component inspired by the MockTest
 * listing design. Supports custom column definitions, status-badge rendering,
 * row actions via dropdown, hover animations and an animated card wrapper.
 *
 * Usage:
 *   <DataTable columns={columns} rows={rows} />
 */
import { MoreVerticalIcon } from "lucide-react";
import React, { ReactNode } from "react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent } from "./card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

/* ─── Types ──────────────────────────────────────────────────────────────── */

/** Alignment for a column's header and cells. */
export type ColAlign = "left" | "center" | "right";

/**
 * A single column definition.
 * @template T - Shape of a row object.
 */
export interface DataTableColumn<T extends Record<string, unknown>> {
  /** Unique key — must match a field in T or be "actions". */
  key: keyof T | "actions";
  /** Header label text. */
  label: string;
  /** Flex basis / width string, e.g. "w-[42%]". */
  width?: string;
  /** Minimum width class, e.g. "min-w-[240px]". */
  minWidth?: string;
  /** Header + cell content alignment (default: "left"). */
  align?: ColAlign;
  /**
   * Custom renderer for cell content.
   * If omitted the raw cell value is rendered as text.
   */
  render?: (value: T[keyof T], row: T, rowIndex: number) => ReactNode;
}

/** A row action shown in the three-dot dropdown. */
export interface DataTableAction<T extends Record<string, unknown>> {
  label: string;
  /** Optional className overrides (e.g. "text-red-500"). */
  className?: string;
  onClick: (row: T, rowIndex: number) => void;
  /** If true, a <DropdownMenuSeparator> is placed before this item. */
  separatorBefore?: boolean;
}

/** Status config maps a status string to a badge styling class. */
export type StatusConfig = Record<
  string,
  {
    /** Full Tailwind class string for the badge, e.g. "border-[#00c950] bg-[#ebfaf0] text-[#00c950]". */
    className: string;
  }
>;

export interface DataTableProps<T extends Record<string, unknown>> {
  /** Column definitions. */
  columns: DataTableColumn<T>[];
  /** Row data. */
  rows: T[];
  /**
   * Field name that holds the status string (used for automatic badge
   * rendering). Combine with `statusConfig` for styled badges.
   */
  statusField?: keyof T;
  /**
   * Map from status value → badge className.
   * Only used when `statusField` is set and no custom `render` is provided
   * for that column.
   */
  statusConfig?: StatusConfig;
  /** Row actions rendered in a three-dot dropdown. */
  actions?: DataTableAction<T>[];
  /**
   * Called when a row is clicked (whole row, not action cell).
   * Set to undefined / omit to disable row clickability.
   */
  onRowClick?: (row: T, rowIndex: number) => void;
  /** Additional class names for the outer wrapper. */
  className?: string;
  /** Optional empty-state message. */
  emptyMessage?: string;
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

/** Resolves alignment to Tailwind text/flex classes. */
function alignClass(align: ColAlign = "left"): string {
  switch (align) {
    case "center": return "text-center";
    case "right":  return "text-right";
    default:       return "text-left";
  }
}

/** Resolves alignment to a flex-justify class for header content. */
function justifyClass(align: ColAlign = "left"): string {
  switch (align) {
    case "center": return "justify-center";
    case "right":  return "justify-end";
    default:       return "justify-start";
  }
}

/* ─── Component ──────────────────────────────────────────────────────────── */

/**
 * A flexible, animated data table that mirrors the Figma design:
 * - Outer card with drop shadow
 * - Gray header row with bold column labels
 * - Bordered inner table with row hover effect
 * - Status badge auto-rendering via `statusField` + `statusConfig`
 * - Three-dot action dropdown per row
 */
export function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  statusField,
  statusConfig = {},
  actions,
  onRowClick,
  className = "",
  emptyMessage = "No data available.",
}: DataTableProps<T>): JSX.Element {
  /* Separate action column from data columns */
  const hasActions = Boolean(actions && actions.length > 0);

  const dataColumns = columns.filter((c) => c.key !== "actions");
  const allColumns  = hasActions
    ? [...dataColumns, { key: "actions" as const, label: "Actions", align: "center" as ColAlign, width: "w-[12%]", minWidth: "min-w-[90px]" }]
    : dataColumns;

  return (
    <section
      className={[
        "relative w-full animate-[fadeIn_0.4s_ease-out_0.1s_both]",
        className,
      ].join(" ")}
    >
      <Card className="w-full overflow-hidden rounded-[10px] border-[0.5px] border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-1px_2px_10px_#00000025]">
        <CardContent className="p-4">
          <div className="overflow-x-auto rounded-[10px] border border-gray-300 shadow-[0px_0px_4px_#00000040]">
            <table className="w-full border-collapse bg-white" style={{ minWidth: 780 }}>
              {/* ── HEADER ── */}
              <thead>
                <tr className="h-12 bg-[#edeef1]">
                  {allColumns.map((col, idx) => (
                    <th
                      key={String(col.key)}
                      scope="col"
                      className={[
                        col.width   ?? "",
                        col.minWidth ?? "",
                        alignClass(col.align),
                        "px-3 py-2",
                        "[font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600",
                        idx !== allColumns.length - 1 ? "border-r border-gray-300" : "",
                      ].join(" ")}
                    >
                      <div className={`flex items-center ${justifyClass(col.align)}`}>
                        {col.label}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* ── BODY ── */}
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={allColumns.length}
                      className="px-4 py-10 text-center [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-400"
                    >
                      {emptyMessage}
                    </td>
                  </tr>
                ) : (
                  rows.map((row, rowIdx) => (
                    <tr
                      key={rowIdx}
                      className={[
                        "h-[78px] border-b border-gray-300 last:border-b-0",
                        "transition-colors duration-150",
                        onRowClick
                          ? "cursor-pointer hover:bg-[#f0f7ff]"
                          : "hover:bg-gray-50/60",
                      ].join(" ")}
                      onClick={
                        onRowClick ? () => onRowClick(row, rowIdx) : undefined
                      }
                    >
                      {dataColumns.map((col, colIdx) => {
                        const rawValue = row[col.key as keyof T];
                        const isStatus =
                          statusField && col.key === statusField;

                        /* ── Status cell: auto-badge ── */
                        if (isStatus && !col.render) {
                          const statusStr = String(rawValue ?? "");
                          const cfg       = statusConfig[statusStr];
                          return (
                            <td
                              key={String(col.key)}
                              className={[
                                col.width    ?? "",
                                col.minWidth ?? "",
                                alignClass(col.align),
                                "px-3 py-2 align-middle",
                                colIdx !== dataColumns.length - 1 || hasActions
                                  ? "border-r border-gray-300"
                                  : "",
                              ].join(" ")}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className={`flex items-center ${justifyClass(col.align)}`}>
                                <Badge
                                  variant="outline"
                                  className={[
                                    "h-7 rounded-[9px] border px-2.5 py-0",
                                    "[font-family:'Roboto',Helvetica] text-sm font-normal leading-7 tracking-[0]",
                                    "transition-all duration-200",
                                    cfg?.className ?? "border-gray-400 bg-gray-100 text-gray-600",
                                  ].join(" ")}
                                >
                                  {statusStr}
                                </Badge>
                              </div>
                            </td>
                          );
                        }

                        /* ── Custom render ── */
                        const cellContent = col.render
                          ? col.render(rawValue as T[keyof T], row, rowIdx)
                          : (
                            <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#111111]">
                              {String(rawValue ?? "")}
                            </span>
                          );

                        return (
                          <td
                            key={String(col.key)}
                            className={[
                              col.width    ?? "",
                              col.minWidth ?? "",
                              alignClass(col.align),
                              "px-3 py-2 align-middle",
                              colIdx !== dataColumns.length - 1 || hasActions
                                ? "border-r border-gray-300"
                                : "",
                            ].join(" ")}
                          >
                            {cellContent}
                          </td>
                        );
                      })}

                      {/* ── Actions cell ── */}
                      {hasActions && (
                        <td
                          className="w-[12%] min-w-[90px] px-3 py-2 text-center align-middle"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                className="h-8 w-8 rounded-md p-0 text-gray-500 transition-all duration-150 hover:bg-gray-100 hover:text-[#0957a1] active:scale-95"
                                aria-label="Row actions"
                              >
                                <MoreVerticalIcon className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="min-w-[130px] rounded-lg border border-gray-200 shadow-lg">
                              {actions!.map((action, aIdx) => (
                                <React.Fragment key={aIdx}>
                                  {action.separatorBefore && (
                                    <DropdownMenuSeparator />
                                  )}
                                  <DropdownMenuItem
                                    className={[
                                      "cursor-pointer [font-family:'Roboto',Helvetica] text-sm font-normal transition-colors duration-100",
                                      action.className ?? "",
                                    ].join(" ")}
                                    onClick={() => action.onClick(row, rowIdx)}
                                  >
                                    {action.label}
                                  </DropdownMenuItem>
                                </React.Fragment>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
