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
import { CourseDetailsFormSection } from "./sections/CourseDetailsFormSection";

const breadcrumbItems = [
  { label: "Courses", href: "/courses", current: false },
  { label: "Create Courses", href: null, current: true },
];

export const CreateCourse = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-col px-2 pt-2 pb-8">
        <Breadcrumb className="px-4 pt-2">
          <BreadcrumbList className="gap-1 text-xs leading-8 [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
            {breadcrumbItems.map((item, index) => (
              <div key={item.label} className="flex items-center">
                <BreadcrumbItem>
                  {item.current ? (
                    <BreadcrumbPage className="text-[#0957a1]">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      className="cursor-pointer text-[#202124] hover:text-[#0957a1] transition-colors duration-150"
                      onClick={() => item.href && navigate(item.href)}
                    >
                      {item.label}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < breadcrumbItems.length - 1 && (
                  <BreadcrumbSeparator className="mx-1 text-[#202124]">
                    /
                  </BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <CourseDetailsFormSection />
      </section>
    </AppLayout>
  );
};
