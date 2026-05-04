import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../components/ui/breadcrumb";
import { AppLayout } from "../../components/shared";
import { MockTestDetailsSection } from "./sections/MockTestDetailsSection";

const breadcrumbItems = [
  { label: "Mock Test", href: "/mock-test", current: false },
  { label: "Create Mock Test", href: null, current: true },
];

export const MockTestDetails = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AppLayout className="bg-white">
      <section className="min-w-0 flex-1 bg-white px-2 pt-3 pb-8 sm:px-4 lg:px-[8px]">
        <div className="w-full max-w-none">
          <Breadcrumb className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 tracking-[0]">
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <BreadcrumbItem>
                    {item.current ? (
                      <BreadcrumbPage className="font-normal text-[#0957a1]">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        className="cursor-pointer font-normal text-[#202124] hover:text-[#0957a1] transition-colors duration-150"
                        onClick={() => item.href && navigate(item.href)}
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator className="mx-1 text-[#202124]" />
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full">
            <MockTestDetailsSection />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};
