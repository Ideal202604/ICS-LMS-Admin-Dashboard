import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";

const headerIcons = [
  {
    alt: "Help",
    src: "https://c.animaapp.com/moqt64m1z03AlO/img/frame-1321317648.svg",
    className: "h-6 w-auto",
  },
  {
    alt: "Notifications",
    src: "https://c.animaapp.com/moqt64m1z03AlO/img/frame.svg",
    className: "h-6 w-6",
  },
];

export const AppHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-[0px_4px_4px_#00000040] animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="mx-auto flex min-h-[134px] w-full max-w-[1440px] flex-col px-8 pt-1">
        <div className="flex min-h-[88px] items-start justify-between gap-6 pt-1">
          <div className="flex shrink-0 items-start">
            <img
              className="h-[75px] w-20 object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
              alt="Ics png"
              src="https://c.animaapp.com/moqt64m1z03AlO/img/ics-png--1--1.png"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="flex items-center justify-end gap-3 pt-[17px]">
            {headerIcons.map((icon) => (
              <button
                key={icon.src}
                type="button"
                className="inline-flex items-center justify-center rounded-md text-[#202124] transition-all duration-200 hover:opacity-80 hover:scale-110"
                aria-label={icon.alt}
              >
                <img className={icon.className} alt={icon.alt} src={icon.src} />
              </button>
            ))}

            <Button
              type="button"
              variant="outline"
              className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dafc] hover:text-[#074a89] hover:shadow-md"
            >
              Publish
            </Button>
            <Avatar className="h-10 w-10 rounded-lg bg-[#0957a1] cursor-pointer transition-transform duration-200 hover:scale-105">
              <AvatarFallback className="[font-family:&apos;Roboto&apos;,Helvetica] text-base font-medium leading-6 text-white">
                J
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <nav className="flex items-center px-[7px] pb-2.5">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="[font-family:&apos;Roboto&apos;,Helvetica] text-xs font-normal leading-8 text-[#202124] transition-colors duration-200 hover:text-[#0957a1]"
          >
            Back
          </button>
        </nav>
      </div>
    </header>
  );
};
