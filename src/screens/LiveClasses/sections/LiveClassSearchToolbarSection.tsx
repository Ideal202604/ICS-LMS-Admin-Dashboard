import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDaysIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "../../../components/ui/toggle-group";

const viewOptions = [
  { value: "list",     label: "List view",     icon: ListIcon },
  { value: "grid",     label: "Grid view",     icon: LayoutGridIcon },
  { value: "calendar", label: "Calendar view", icon: CalendarDaysIcon },
];

export const LiveClassSearchToolbarSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [view, setView] = useState("calendar");
  const [search, setSearch] = useState("");

  return (
    <section className="relative w-full px-4 py-6 md:px-6">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-none transition-shadow duration-200 hover:shadow-sm">
        <CardContent className="flex flex-col gap-4 p-0">
          <header className="flex flex-col gap-4 border-b border-gray-300 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:items-start md:justify-between">
            <div className="flex min-w-0 flex-col gap-1">
              <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                Live Class
              </h2>
              <p className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-700">
                View and manage your live classes
              </p>
            </div>
            <Button
              type="button"
              onClick={() => navigate("/create-live-class")}
              className="h-auto self-start rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-white transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
            >
              <PlusIcon className="mr-1.5 h-4 w-4" />
              <span className="[font-family:'Inter',Helvetica] text-xs font-semibold tracking-[0]">
                Create Live Class
              </span>
            </Button>
          </header>
          <div className="flex flex-col gap-3 px-4 pb-4 sm:px-6 sm:pb-5 md:flex-row md:items-center md:justify-between">
            <div className="w-full max-w-80">
              <div className="relative">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  className="h-10 rounded-[10px] border-gray-300 bg-white pl-9 text-base text-gray-500 shadow-[var(--shadow-xs)] placeholder:text-gray-500 [font-family:'Inter',Helvetica] transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40"
                  aria-label="Search live class"
                />
              </div>
            </div>
            <ToggleGroup
              type="single"
              value={view}
              onValueChange={(v) => { if (v) setView(v); }}
              aria-label="View options"
              className="justify-start md:justify-end"
            >
              {viewOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <ToggleGroupItem
                    key={option.value}
                    value={option.value}
                    aria-label={option.label}
                    className="h-8 w-8 rounded-md border border-[#b9d3ea] bg-[#eaf4fb] p-0 text-[#4f6b83] transition-all duration-150 hover:scale-105 data-[state=on]:bg-[#0957a1] data-[state=on]:text-white data-[state=on]:border-[#0957a1]"
                  >
                    <Icon className="h-4 w-4" />
                  </ToggleGroupItem>
                );
              })}
            </ToggleGroup>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
