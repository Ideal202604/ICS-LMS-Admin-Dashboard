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
import { MockTestBuilderSection } from "./sections/MockTestBuilderSection";

const breadcrumbItems = [
  { label: "Mock Test", href: "/mock-test", current: false },
  { label: "Create Mock Test", href: null, current: true },
];

export const MockTestBuilder = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AppLayout className="bg-white">
      <section className="min-w-0 flex-1 bg-white">
        <div className="w-full px-2 pb-8 pt-3 sm:px-4 lg:px-2">
          <Breadcrumb className="mb-2 [font-family:'Roboto',Helvetica]">
            <BreadcrumbList className="gap-1 text-xs leading-8">
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
          <MockTestBuilderSection />
        </div>
      </section>
    </AppLayout>
  );
};
