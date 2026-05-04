import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

const actionButtons = [
  {
    label: "Upgrade",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#0957a1]/90 active:scale-[0.97]",
  },
  {
    label: "View As Learner",
    className:
      "h-auto rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#d1e9ff]/90 active:scale-[0.97]",
  },
];

const searchablePages = [
  { label: "Dashboard", path: "/" },
  { label: "Mock Test", path: "/mock-test" },
  { label: "Create Mock Test", path: "/create-mock-test" },
  { label: "Question Editor", path: "/mock-test-question-editor" },
  { label: "Question Pool", path: "/question-pool" },
];

export const AssessmentHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const submitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const match = searchablePages.find((page) =>
      page.label.toLowerCase().includes(search.trim().toLowerCase()),
    );
    if (match) navigate(match.path);
  };

  return (
    <header className="relative z-10 flex min-h-[84px] w-full items-center bg-white shadow-[0px_0px_15px_#00000040]">
      <div className="flex w-full items-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex h-[84px] w-[154px] shrink-0 items-center bg-[#0d457a] px-5 transition-opacity duration-200 hover:opacity-95"
        >
          <img
            className="h-8 w-auto"
            alt="ICS"
            src="https://c.animaapp.com/moqo91i5jG62g8/img/avatar.svg"
          />
        </button>

        <div className="flex min-w-0 flex-1 items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <button
              type="button"
              aria-label="Go back"
              onClick={() => navigate(-1)}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px] bg-white transition-transform duration-200 hover:scale-110 active:scale-95"
            >
              <img
                className="h-2.5 w-1.5"
                alt="Back"
                src="https://c.animaapp.com/moqo91i5jG62g8/img/vector.svg"
              />
            </button>

            <form onSubmit={submitSearch} className="relative hidden w-full max-w-[471px] sm:block">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search"
                className="h-[46px] rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base font-normal leading-6 text-gray-500 shadow-shadow-xs placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1] focus-visible:ring-[#0957a1]/20"
              />
            </form>
          </div>

          <nav className="flex shrink-0 items-center gap-2 md:gap-3">
            {actionButtons.map((button) => (
              <Button key={button.label} type="button" className={button.className}>
                {button.label}
              </Button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="hidden h-auto gap-2 rounded-lg border-gray-300 bg-white px-4 py-2 text-base font-medium leading-6 text-gray-700 transition-all duration-200 hover:bg-gray-50 active:scale-[0.97] xl:inline-flex"
            >
              <img
                className="h-5 w-5"
                alt="Help circle"
                src="https://c.animaapp.com/moqo91i5jG62g8/img/help-circle.svg"
              />
              <span>Help</span>
            </Button>

            <button
              type="button"
              aria-label="Notifications"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-200 hover:bg-gray-100 active:scale-95"
            >
              <img
                className="h-6 w-6"
                alt="Notifications"
                src="https://c.animaapp.com/moqo91i5jG62g8/img/frame.svg"
              />
            </button>

            <button
              type="button"
              aria-label="Profile"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#074d8c] active:scale-95"
            >
              J
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
