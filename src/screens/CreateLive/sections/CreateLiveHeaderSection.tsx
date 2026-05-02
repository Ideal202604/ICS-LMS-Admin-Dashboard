import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

interface CreateLiveHeaderSectionProps {
  onCreateClick?: () => void;
}

export const CreateLiveHeaderSection = ({ onCreateClick }: CreateLiveHeaderSectionProps): JSX.Element => {
  return (
    <section className="relative flex w-full flex-col items-start gap-6 animate-in fade-in duration-300">
      {/* Title card */}
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-none transition-shadow duration-200 hover:shadow-sm">
        <CardContent className="p-6">
          <header className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 flex-col gap-1">
              <h1 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                Live Class
              </h1>
              <p className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-700">
                View and manage your live clases
              </p>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={onCreateClick}
              className="h-auto self-start rounded-lg border border-gray-300 bg-[#dbeeff] px-4 py-2 text-[#0957a1] shadow-none transition-all duration-200 hover:bg-[#c7e3ff] hover:shadow-sm active:scale-[0.98]"
            >
              <img
                className="h-[12.29px] w-[150.62px]"
                alt="Create Live Class"
                src="https://c.animaapp.com/monxybvcQFTZef/img/text.png"
              />
            </Button>
          </header>
        </CardContent>
      </Card>

      {/* Search + view toggle row */}
      <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full max-w-80">
          <div className="relative">
            <img
              className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
              alt="Search"
              src="https://c.animaapp.com/monxybvcQFTZef/img/search.svg"
            />
            <Input
              type="search"
              defaultValue=""
              placeholder="Search"
              className="[font-family:'Inter',Helvetica] h-[46px] rounded-[10px] border-gray-300 bg-white pl-10 text-base font-normal leading-4 tracking-[0] text-gray-500 shadow-shadow-xs placeholder:text-gray-500 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30"
              aria-label="Search"
            />
          </div>
        </div>
        <button
          type="button"
          className="inline-flex h-auto flex-shrink-0 items-center justify-center self-end transition-transform duration-150 hover:scale-105 active:scale-95 sm:self-auto"
          aria-label="View actions"
        >
          <img
            className="block h-auto max-w-full"
            alt="View actions"
            src="https://c.animaapp.com/monxybvcQFTZef/img/frame-1321317527.svg"
          />
        </button>
      </div>
    </section>
  );
};
