import { useNavigate } from "react-router-dom";
import { AppLayout } from "../../components/shared";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { Button } from "../../components/ui/button";
import { LiveClassDetailsSection } from "./sections/LiveClassDetailsSection";
import { LiveClassScheduleSection } from "./sections/LiveClassScheduleSection";

export const LiveClassBasic = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-1 flex-col px-3 pb-8 pt-4 sm:px-4 lg:px-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="w-full max-w-[860px]">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="#"
                  onClick={(e) => { e.preventDefault(); navigate("/live-classes"); }}
                  className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-[#0957a1] transition-colors duration-150 hover:text-[#074985]"
                >
                  Live Classes
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400" />
              <BreadcrumbItem>
                <BreadcrumbPage className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-5 tracking-[0] text-gray-700">
                  Create Live Class
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page heading + action buttons */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-bold leading-8 tracking-[0] text-gray-900">
                Create Live Class
              </h1>
              <p className="mt-0.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-5 text-gray-500">
                Fill in the details below to schedule a new live class.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/live-classes")}
                className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 shadow-none transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="h-10 rounded-lg border border-transparent bg-[#0957a1] px-5 text-sm font-semibold text-white shadow-none transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
              >
                Save Live Class
              </Button>
            </div>
          </div>

          {/* Form sections */}
          <div className="flex flex-col gap-4">
            <LiveClassDetailsSection />
            <LiveClassScheduleSection />
          </div>

          {/* Bottom action bar */}
          <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-100 pt-5">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/live-classes")}
              className="h-10 rounded-lg border border-gray-300 bg-white px-4 text-sm font-medium text-gray-700 shadow-none transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="h-10 rounded-lg border border-transparent bg-[#0957a1] px-5 text-sm font-semibold text-white shadow-none transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.98]"
            >
              Save Live Class
            </Button>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
