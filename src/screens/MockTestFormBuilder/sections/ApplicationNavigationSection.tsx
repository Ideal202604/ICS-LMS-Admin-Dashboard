import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import { useNavigate } from "react-router-dom";

const topActionIcons = [
  {
    alt: "Help and preview actions",
    src: "https://c.animaapp.com/mooa01hs93Tlx5/img/frame-1321317648.svg",
    className: "h-6 w-auto",
  },
  {
    alt: "Notifications",
    src: "https://c.animaapp.com/mooa01hs93Tlx5/img/frame.svg",
    className: "h-6 w-6",
  },
];

const tabs = [
  { label: "Questions", active: true },
  { label: "Responses", active: false },
  { label: "Settings", active: false },
];

export const ApplicationNavigationSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 w-full overflow-hidden bg-white shadow-[0px_4px_4px_#00000040]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="flex min-h-[86px] items-start justify-between gap-4 px-8 pb-2 pt-[6px]">
          <div className="flex shrink-0 items-start">
            <img
              className="h-[75px] w-20 cursor-pointer object-contain transition-opacity duration-200 hover:opacity-80"
              alt="Logo"
              src="https://c.animaapp.com/mooa01hs93Tlx5/img/ics-png--1--1.png"
              onClick={() => navigate("/mock-test")}
            />
          </div>
          <div className="flex items-center justify-end gap-3 self-start pt-2">
            {topActionIcons.map((icon) => (
              <img
                key={icon.src}
                className={`${icon.className} cursor-pointer transition-opacity duration-200 hover:opacity-70`}
                alt={icon.alt}
                src={icon.src}
              />
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] hover:bg-[#b8d9f5] hover:text-[#0957a1] [font-family:'Roboto',Helvetica]"
            >
              Publish
            </Button>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1">
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                J
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-end gap-6 px-[7px] pr-2.5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="h-auto whitespace-nowrap pb-0 text-left [font-family:'Roboto',Helvetica] text-xs font-normal leading-8 tracking-[0] text-[#202124] transition-colors duration-150 hover:text-[#0957a1] hover:underline"
          >
            Back
          </button>
          <img
            className="w-[53px] shrink-0 self-center"
            alt="Breadcrumb icon"
            src="https://c.animaapp.com/mooa01hs93Tlx5/img/frame-1321317649.svg"
          />
          <nav
            aria-label="Application sections"
            className="flex flex-1 items-end justify-center gap-2.5"
          >
            {tabs.map((tab) => (
              <button
                key={tab.label}
                type="button"
                aria-current={tab.active ? "page" : undefined}
                className={`inline-flex h-[27px] items-center justify-center px-2.5 pb-[7px] pt-[5px] [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] whitespace-nowrap transition-colors duration-150 ${
                  tab.active
                    ? "border-b-[3px] border-[#0957a1] text-[#0957a1]"
                    : "border-b-[3px] border-transparent text-black hover:text-[#0957a1]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <Separator className="mt-0 h-px w-full bg-transparent" />
      </div>
    </header>
  );
};
