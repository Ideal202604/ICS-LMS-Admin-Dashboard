import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";

const topActionIcons = [
  {
    alt: "Header actions",
    src: "https://c.animaapp.com/mor2yztbLGweGw/img/frame-1321317648.svg",
    className: "h-6 w-auto shrink-0",
  },
  {
    alt: "Notifications",
    src: "https://c.animaapp.com/mor2yztbLGweGw/img/frame.svg",
    className: "h-6 w-6 shrink-0",
  },
];

const tabs = [
  { label: "Question", path: "/mock-test-question-editor" },
  { label: "Responses", path: "/mock-test-responses" },
  { label: "Settings", path: "/mock-test-setting" },
];

export const SurveyHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="relative w-full bg-white shadow-[0px_4px_4px_#00000040] animate-fade-in">
      <div className="mx-auto flex min-h-[134px] w-full max-w-[1440px] flex-col px-8 pt-2">
        <div className="flex min-h-[78px] items-start justify-between gap-6">
          <button
            type="button"
            onClick={() => navigate("/mock-test-overview")}
            className="flex shrink-0 items-start rounded-lg pt-1 transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0957a1]"
            aria-label="Go to mock test overview"
          >
            <img
              className="h-[75px] w-20 object-contain"
              alt="ICS Global logo"
              src="https://c.animaapp.com/mor2yztbLGweGw/img/ics-png--1--1.png"
            />
          </button>

          <div className="flex flex-1 justify-end pt-[2px]">
            <div className="flex items-center gap-3">
              {topActionIcons.slice(0, 1).map((icon) => (
                <button
                  key={icon.src}
                  type="button"
                  aria-label={icon.alt}
                  className="rounded-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0957a1]"
                >
                  <img
                    className={icon.className}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </button>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() => alert("Survey published successfully.")}
                className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#bfdfff] hover:text-[#0957a1] hover:shadow-md active:scale-[0.97]"
              >
                Publish
              </Button>

              {topActionIcons.slice(1).map((icon) => (
                <button
                  key={icon.src}
                  type="button"
                  className="inline-flex items-center justify-center rounded-md transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0957a1]"
                  aria-label={icon.alt}
                >
                  <img
                    className={icon.className}
                    alt={icon.alt}
                    src={icon.src}
                  />
                </button>
              ))}

              <button
                type="button"
                aria-label="User profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#084a88] hover:shadow-md active:scale-[0.97]"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                  J
                </span>
              </button>
            </div>
          </div>
        </div>

        <nav
          aria-label="Survey navigation"
          className="flex items-end gap-[38px] pb-2"
        >
          <button
            type="button"
            onClick={() => navigate("/mock-test-overview")}
            className="shrink-0 rounded-md transition-transform duration-200 hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0957a1]"
            aria-label="Back to mock test overview"
          >
            <img
              className="w-[53px] shrink-0"
              alt="Back navigation"
              src="https://c.animaapp.com/mor2yztbLGweGw/img/frame-1321317649.svg"
            />
          </button>

          <div className="flex flex-1 items-center justify-center gap-2.5">
            {tabs.map((tab) => {
              const isActive = tab.path === "/mock-test-responses";

              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => navigate(tab.path)}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex h-[27px] items-center justify-center gap-2.5 border-b-2 p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#0957a1] ${
                    isActive ? "border-[#0957a1]" : "border-transparent"
                  }`}
                >
                  <span
                    className={`[font-family:'Roboto',Helvetica] text-base font-medium leading-6 whitespace-nowrap ${
                      isActive ? "text-app-primary" : "text-black"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};
