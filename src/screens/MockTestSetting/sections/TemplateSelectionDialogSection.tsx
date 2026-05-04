import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";

const templateTabs = ["Pool", "Word document", "Excel sheet", "Mt Drive"];

const templateCards = [
  {
    title: "Abc Pool",
    image: "https://c.animaapp.com/moqt0jbqy3eJFd/img/image-125.png",
  },
  {
    title: "Abc Pool",
    image: "https://c.animaapp.com/moqt0jbqy3eJFd/img/image-125-1.png",
  },
];

export const TemplateSelectionDialogSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[629px] rounded-[10px] bg-[#f1f3f4]">
        <div className="flex items-start justify-between px-4 pb-3 pt-4 sm:px-[26px]">
          <div className="w-full max-w-[577px]">
            <p className="sr-only">
              Template selection dialog showing search, template type tabs, and
              pool templates.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="h-auto shrink-0 p-1 text-[#5f6368] hover:bg-transparent hover:text-[#202124]"
            aria-label="Close dialog"
          >
            <img
              className="h-4 w-4"
              alt="Close"
              src="https://c.animaapp.com/moqt0jbqy3eJFd/img/vector.svg"
            />
          </Button>
        </div>
        <div className="px-4 sm:px-[26px]">
          <div className="flex items-center gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 shadow-shadow-xs">
            <img
              className="h-5 w-5"
              alt="Search"
              src="https://c.animaapp.com/moqt0jbqy3eJFd/img/search.svg"
            />
            <span className="flex-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-gray-500">
              Search
            </span>
            <button
              type="button"
              aria-label="Filter templates"
              className="flex h-6 w-6 items-center justify-center"
            >
              <img
                className="h-6 w-6"
                alt="Mage filter"
                src="https://c.animaapp.com/moqt0jbqy3eJFd/img/mage-filter.svg"
              />
            </button>
          </div>
        </div>
        <Tabs defaultValue="Pool" className="mt-4 w-full">
          <div className="border-b border-gray-300 px-4 sm:px-[31px]">
            <TabsList className="h-auto w-full justify-start gap-1 rounded-none border-0 bg-transparent p-0">
              {templateTabs.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="h-auto rounded-none border-b-2 border-transparent bg-transparent px-2.5 py-2 text-base font-medium text-heading shadow-none data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1] data-[state=active]:shadow-none [font-family:'Roboto',Helvetica]"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="border-b border-gray-300 px-4 sm:px-[31px]">
            <nav aria-label="Selected template category" className="flex">
              <button
                type="button"
                className="h-auto px-2.5 py-2 text-left [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#3c4043]"
              >
                Pool
              </button>
            </nav>
          </div>
        </Tabs>
        <div className="px-4 pb-8 pt-5 sm:px-[39px]">
          <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#dadce0]">
            Today
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:w-fit sm:gap-[22px]">
            {templateCards.map((template, index) => (
              <Card
                key={`${template.title}-${index}`}
                className="w-full min-w-0 overflow-hidden rounded-[10px] border border-[#dadce0] bg-[#dbfce7] shadow-[0px_0px_4px_#00000040] sm:w-[175px]"
              >
                <CardContent className="p-0">
                  <article className="flex h-[186px] flex-col">
                    <div className="flex flex-1 items-start justify-center px-4 pt-2.5">
                      <img
                        className="h-[146px] w-[142px] object-contain"
                        alt={template.title}
                        src={template.image}
                      />
                    </div>
                    <div className="flex h-[49px] items-center justify-center bg-white px-3">
                      <h3 className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#3c4043]">
                        {template.title}
                      </h3>
                    </div>
                  </article>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
