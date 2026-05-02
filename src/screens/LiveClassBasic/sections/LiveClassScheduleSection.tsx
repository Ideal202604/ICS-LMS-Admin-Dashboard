import { useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const timezones = [
  "GMT + 5:30 India Standard Time",
  "GMT + 0:00 UTC",
  "GMT - 5:00 Eastern Standard Time",
  "GMT - 8:00 Pacific Standard Time",
];

export const LiveClassScheduleSection = (): JSX.Element => {
  const [startDate, setStartDate] = useState("");
  const [day, setDay] = useState("");
  const [fromTime, setFromTime] = useState("11:00 AM");
  const [toTime, setToTime] = useState("11:30 AM");
  const [timezone, setTimezone] = useState(timezones[0]);

  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-5 pt-[18px]">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="start-date"
                  className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
                >
                  Start Date
                </label>
                <Input
                  id="start-date"
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    const d = new Date(e.target.value);
                    if (!isNaN(d.getTime())) {
                      setDay(d.toLocaleDateString("en-US", { weekday: "long" }));
                    }
                  }}
                  className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <label
                  htmlFor="day"
                  className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
                >
                  Day
                </label>
                <Input
                  id="day"
                  readOnly
                  value={day}
                  placeholder="----------"
                  className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2.5">
                <label className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                  Start Time
                </label>
                <div className="flex h-11 items-center gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 shadow-[var(--shadow-xs)]">
                  <input
                    type="time"
                    aria-label="From time"
                    defaultValue="11:00"
                    onChange={(e) => setFromTime(e.target.value)}
                    className="min-w-0 flex-1 border-none bg-transparent [font-family:'Roboto',Helvetica] text-base font-medium text-gray-500 outline-none"
                  />
                  <span className="shrink-0 [font-family:'Roboto',Helvetica] text-sm font-medium text-gray-400">
                    to
                  </span>
                  <input
                    type="time"
                    aria-label="To time"
                    defaultValue="11:30"
                    onChange={(e) => setToTime(e.target.value)}
                    className="min-w-0 flex-1 border-none bg-transparent [font-family:'Roboto',Helvetica] text-base font-medium text-gray-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                  Time zone
                </label>
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timezones.map((tz) => (
                      <SelectItem key={tz} value={tz}>{tz}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="timezone-display"
                className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
              >
                Selected Timezone
              </label>
              <Input
                id="timezone-display"
                readOnly
                value={timezone}
                className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] placeholder:text-gray-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
