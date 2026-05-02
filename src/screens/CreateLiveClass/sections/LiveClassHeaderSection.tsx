import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

interface LiveClassHeaderSectionProps {
  onCreateClick?: () => void;
}

export const LiveClassHeaderSection = ({ onCreateClick }: LiveClassHeaderSectionProps): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="flex w-full flex-col items-start gap-6">
        {/* Title card */}
        <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-none transition-shadow duration-200 hover:shadow-sm">
          <CardContent className="p-6">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <header className="flex min-w-0 flex-1 flex-col items-start gap-1">
                <h1 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                  Live Class
                </h1>
                <p className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-700">
                  View and manage your live clases
                </p>
              </header>
              <Button
                type="button"
                onClick={onCreateClick}
                className="h-auto self-start rounded-lg border border-gray-300 bg-[#dbeeff] px-4 py-2 text-[#0957a1] shadow-none transition-all duration-200 hover:bg-[#c7e3ff] hover:shadow-sm active:scale-[0.98]"
                variant="outline"
              >
                <img
                  className="h-[12.29px] w-[150.62px]"
                  alt="Create Live Class"
                  src="https://c.animaapp.com/monvxjv0GNYi6v/img/text.png"
                />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search + view toggle row */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full max-w-80">
            <div className="relative">
              <img
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2"
                alt="Search"
                src="https://c.animaapp.com/monvxjv0GNYi6v/img/search.svg"
              />
              <Input
                defaultValue=""
                aria-label="Search live classes"
                placeholder="Search"
                className="[font-family:'Inter',Helvetica] h-[46px] rounded-[10px] border-gray-300 bg-white pl-10 pr-3 text-base font-normal leading-4 tracking-[0] text-gray-500 shadow-shadow-xs placeholder:text-gray-500 transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/30"
              />
            </div>
          </div>
          <nav aria-label="View actions" className="flex items-center justify-end gap-3 self-end sm:self-auto">
            <Button
              type="button"
              variant="ghost"
              className="h-auto p-0 transition-transform duration-150 hover:scale-105 hover:bg-transparent active:scale-95"
            >
              <img
                className="block flex-none"
                alt="Grid view"
                src="https://c.animaapp.com/monvxjv0GNYi6v/img/frame-1321317527.svg"
              />
            </Button>
          </nav>
        </div>
      </div>
    </section>
  );
};
