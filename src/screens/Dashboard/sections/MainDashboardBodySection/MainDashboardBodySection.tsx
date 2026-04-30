import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainDashboardBodySection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full">
      <Card className="relative w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-none">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          alt="Dashboard hero background"
          src="https://c.animaapp.com/mojt1gccgC9EQf/img/image-54.png"
        />
        <CardContent className="relative z-10 flex min-h-[199px] flex-col justify-center px-4 py-7 sm:px-[19px] sm:py-[29px]">
          <div className="max-w-[811px]">
            <h2 className="[font-family:'Roboto',Helvetica] text-xl sm:text-2xl font-semibold leading-8 tracking-[0] text-white">
              Welcome, To Learnyst Admin
            </h2>
            <p className="mt-1 max-w-[811px] [font-family:'Roboto',Helvetica] text-sm sm:text-base font-normal leading-5 tracking-[0] text-white">
              Manage your courses, learners, and sales from one place.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/courses")}
              className="h-auto min-w-[140px] rounded-lg border-0 bg-white px-4 py-2 text-[#0957a1] hover:bg-white/95 transition-all duration-200 active:scale-[0.98]"
            >
              <img className="h-5 w-5 shrink-0" alt="Plus" src="https://c.animaapp.com/mojt1gccgC9EQf/img/plus.svg" />
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">Create</span>
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/courses")}
              className="h-auto min-w-[140px] rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-white/95 transition-all duration-200 active:scale-[0.98]"
            >
              <img className="h-5 w-5 shrink-0" alt="Folder" src="https://c.animaapp.com/mojt1gccgC9EQf/img/folder-plus.svg" />
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0]">Reorder</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
