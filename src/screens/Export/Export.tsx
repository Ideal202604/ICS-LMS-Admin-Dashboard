import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon, X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { AppLayout } from "../../components/shared";

const topActions = [
  {
    label: "Email Settings",
    icon: {
      alt: "Setting",
      src: "https://c.animaapp.com/mol2wk1svsRCiM/img/setting.svg",
    },
  },
];

const rightFilters = [
  { label: "Filter By Date Created", icon: null },
  {
    label: "Select Columns",
    icon: {
      alt: "Chevron up",
      src: "https://c.animaapp.com/mol2wk1svsRCiM/img/chevron-up-1.svg",
    },
  },
];

const leftActions = [
  {
    label: "Export",
    icon: {
      alt: "Frame",
      src: "https://c.animaapp.com/mol2wk1svsRCiM/img/frame-1.svg",
    },
  },
];

const searchActions = [
  { label: "Search", variant: "primary" as const, icon: null },
  {
    label: "Add Filter",
    variant: "secondary" as const,
    icon: {
      alt: "Frame",
      src: "https://c.animaapp.com/mol2wk1svsRCiM/img/frame.svg",
    },
  },
];

export const Export = (): JSX.Element => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <AppLayout className="bg-[#f8f8f8]">
      <div className="relative min-h-[calc(100vh-84px)] w-full overflow-hidden [font-family:'Roboto',Helvetica]">
        {/* Overlay backdrop */}
        {showSuccess && (
          <div
            className="absolute inset-0 z-10 bg-[#001a3366] transition-opacity duration-300"
            onClick={() => setShowSuccess(false)}
            aria-hidden="true"
          />
        )}

        {/* Page Content */}
        <section className="relative mx-auto flex w-full flex-col px-4 pb-24 pt-6 sm:px-6">
          {/* Back header */}
          <div className="mb-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="h-auto gap-2 px-2 py-2 text-base font-medium text-gray-700 hover:bg-transparent hover:text-gray-900 transition-colors duration-200 active:scale-[0.98]"
            >
              <img
                className="h-5 w-5 rotate-90"
                alt="Back"
                src="https://c.animaapp.com/mol2wk1svsRCiM/img/chevron-up.svg"
              />
              <span className="leading-6">Back</span>
            </Button>
          </div>

          <Card className="mx-auto w-full max-w-[1112px] rounded-[10px] border border-border bg-white shadow-none transition-shadow duration-200 hover:shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <h1 className="text-2xl font-semibold leading-8 text-black">
                    Learner Support
                  </h1>
                  <p className="text-base font-normal leading-5 text-black">
                    Seamlessly manage and resolve learner support requests
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {topActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                    >
                      {action.icon ? (
                        <img className="h-5 w-5" alt={action.icon.alt} src={action.icon.src} />
                      ) : null}
                      <span>{action.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="mx-auto mt-3 flex w-full max-w-[1112px] flex-col gap-3">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex flex-col gap-3">
                <form
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="w-full sm:w-80">
                    <div className="flex items-center gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 shadow-[var(--shadow-xs)] transition-all duration-200 focus-within:border-[#0957a1]/40 focus-within:ring-1 focus-within:ring-[#0957a1]/20">
                      <SearchIcon className="h-5 w-5 shrink-0 text-gray-400" />
                      <Input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Search"
                        className="h-auto border-0 p-0 text-base font-normal text-gray-700 shadow-none placeholder:text-gray-500 focus-visible:ring-0"
                      />
                      {searchValue && (
                        <button
                          type="button"
                          onClick={() => setSearchValue("")}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                  {searchActions.map((action) => (
                    <Button
                      key={action.label}
                      variant={action.variant === "primary" ? "default" : "outline"}
                      className={
                        action.variant === "primary"
                          ? "h-auto rounded-lg bg-[#0957a1] px-4 py-2 text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074d8c] active:scale-[0.98]"
                          : "h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                      }
                    >
                      {action.icon ? (
                        <img className="h-5 w-5" alt={action.icon.alt} src={action.icon.src} />
                      ) : null}
                      <span>{action.label}</span>
                    </Button>
                  ))}
                </form>
                <div className="flex items-center gap-3">
                  {leftActions.map((action) => (
                    <Button
                      key={action.label}
                      variant="outline"
                      onClick={() => setShowSuccess(true)}
                      className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                    >
                      <span>{action.label}</span>
                      {action.icon ? (
                        <img className="h-5 w-5" alt={action.icon.alt} src={action.icon.src} />
                      ) : null}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 lg:items-end">
                {rightFilters.map((filter) => (
                  <Button
                    key={filter.label}
                    variant="outline"
                    className="h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-sm active:scale-[0.98]"
                  >
                    <span>{filter.label}</span>
                    {filter.icon ? (
                      <img className="h-5 w-5" alt={filter.icon.alt} src={filter.icon.src} />
                    ) : null}
                  </Button>
                ))}
              </div>
            </div>

            {/* Empty state */}
            <div className="relative flex min-h-[360px] items-center justify-center">
              <div className="flex w-56 flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <img
                  className="w-full"
                  alt="No results"
                  src="https://c.animaapp.com/mol2wk1svsRCiM/img/frame-1321317145.svg"
                />
                <p className="text-center text-base font-semibold leading-6 text-gray-900">
                  No results found
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* ── Success Modal ── */}
        {showSuccess && (
          <div className="absolute inset-0 z-20 flex items-center justify-center px-4 animate-in fade-in zoom-in-95 duration-300">
            <Card
              className="w-full max-w-[585px] rounded-2xl border-0 bg-white shadow-[0px_20px_60px_rgba(0,0,0,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="flex flex-col gap-8 p-6 sm:p-8">
                <section className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ebfaf0]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-[#3fae00]"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-medium leading-8 text-[#111827]">
                    Export Request Successful
                  </h2>
                  <p className="max-w-[537px] text-base font-normal leading-6 text-gray-600">
                    Your export request is sent successfully. You will soon get an
                    email of your export results.
                  </p>
                </section>
                <div className="flex justify-end">
                  <Button
                    onClick={() => setShowSuccess(false)}
                    className="h-10 rounded-lg bg-[#3fae00] px-6 py-2 text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#35950a] active:scale-[0.98]"
                  >
                    OKAY
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AppLayout>
  );
};
