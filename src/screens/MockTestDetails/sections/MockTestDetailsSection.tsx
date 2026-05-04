import { useMemo, useState } from "react";
import {
  ChevronDownIcon,
  DownloadIcon,
  ListChecksIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";

const initialQuestions = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  title: "How many videos are allowed in one Lesson",
  tag: "#Course",
  difficulty: "Easy",
}));

const refreshIcon = "https://c.animaapp.com/moqudvu82FAX2C/img/frame-1321317618.svg";
const questionsIcon = "https://c.animaapp.com/moqudvu82FAX2C/img/lineicons-message-2-question.svg";
const marksIcon = "https://c.animaapp.com/moqudvu82FAX2C/img/tabler-checkbox.svg";

const headerActions = [
  {
    icon: <ChevronDownIcon className="h-4 w-4" />,
    label: "Collapse section",
  },
  {
    icon: <img className="h-4 w-4" alt="" src={refreshIcon} />,
    label: "Refresh questions",
  },
];

export const MockTestDetailsSection = (): JSX.Element => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [searchQuery, setSearchQuery] = useState("");
  const [sectionExpanded, setSectionExpanded] = useState(true);

  const filtered = useMemo(
    () =>
      questions.filter(
        (q) =>
          q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.tag.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    [questions, searchQuery],
  );

  const stats = [
    {
      icon: questionsIcon,
      alt: "Questions",
      label: `${filtered.length} Questions`,
    },
    {
      icon: marksIcon,
      alt: "Marks",
      label: `${filtered.length} Marks`,
    },
  ];

  const handleAddQuestion = () => {
    const newId = Date.now();
    setQuestions((prev) => [
      ...prev,
      {
        id: newId,
        title: "New Question",
        tag: "#General",
        difficulty: "Medium",
      },
    ]);
  };

  const handleRemoveQuestion = (id: number) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <section className="relative w-full animate-fade-in">
      <p className="sr-only">
        The content card includes an unpublished status, the mock test title, a compact action toolbar, searchable questions, section controls, question rows, and add actions.
      </p>
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_8px_#00000030]">
        <CardContent className="p-4 sm:p-5 lg:p-6">
          <header className="mb-4 flex flex-col gap-4 lg:mb-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 flex-col gap-1">
                <Badge className="h-[26px] w-fit rounded-[5px] bg-[#ffb8b8] px-2.5 py-1 [font-family:'Inter',Helvetica] text-xs font-normal leading-5 text-[#e02323] transition-colors duration-200 hover:bg-[#ffb8b8]">
                  Unpublished
                </Badge>
                <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                  Research Writing &amp; Use of AI
                </h2>
              </div>
              <div className="flex items-center justify-start gap-2 lg:justify-end">
                {headerActions.map((action, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    size="icon"
                    className="h-[35px] w-[35px] rounded-[4px] border-[#93bddb] bg-[#e9f4fb] p-0 text-[#356b8c] transition-all duration-200 hover:border-[#7bafc8] hover:bg-[#dff0fb] active:scale-95"
                    aria-label={action.label}
                  >
                    {action.icon}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full max-w-80">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  aria-label="Search questions"
                  className="h-[41px] rounded-[10px] border-gray-300 pl-9 pr-3 [font-family:'Inter',Helvetica] text-base font-normal leading-4 text-gray-500 shadow-shadow-xs transition-all duration-200 placeholder:text-gray-500 focus-visible:border-[#0957a1]/40 focus-visible:ring-2 focus-visible:ring-[#0957a1]/10"
                />
              </div>
              <div className="flex items-center gap-4 self-end lg:self-auto">
                {stats.map((stat) => (
                  <div key={stat.alt} className="flex items-center gap-1">
                    <img className="h-6 w-6" alt={stat.alt} src={stat.icon} />
                    <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setSectionExpanded((p) => !p)}
              className="flex w-full flex-col gap-3 rounded-[10px] border bg-[var(--ics-global-191924learnystcomcatskill-white,#e4e9f2)] px-2.5 py-2.5 text-left transition-all duration-200 hover:bg-[#dbe1ed] hover:shadow-sm sm:flex-row sm:items-center sm:gap-[7px]"
            >
              <ChevronDownIcon
                className={`h-5 w-5 text-sub-heading transition-transform duration-300 ${sectionExpanded ? "rotate-0" : "-rotate-90"}`}
              />
              <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                1.
              </span>
              <h3 className="min-w-0 flex-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading">
                Section 1
              </h3>
              <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                  {filtered.length} Questions
                </span>
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                  {filtered.length} Marks
                </span>
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                  0 Groups
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 p-0 text-sub-heading hover:bg-transparent hover:text-[#0957a1] transition-colors duration-200"
                  aria-label="Download section"
                  onClick={(e) => e.stopPropagation()}
                >
                  <DownloadIcon className="h-5 w-5" />
                </Button>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${sectionExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="overflow-hidden rounded-[10px] border">
                {filtered.length === 0 ? (
                  <div className="flex items-center justify-center py-8 text-sm text-gray-400 [font-family:'Inter',Helvetica]">
                    No questions found
                  </div>
                ) : (
                  filtered.map((question, index) => (
                    <article
                      key={question.id}
                      className={`group flex w-full flex-col gap-3 px-2.5 py-2.5 transition-colors duration-200 hover:bg-gray-50 sm:flex-row sm:items-center sm:gap-[7px] ${index !== filtered.length - 1 ? "border-b" : ""}`}
                    >
                      <ListChecksIcon className="h-5 w-5 shrink-0 text-[#d97b8b]" />
                      <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading whitespace-nowrap">
                        {index + 1}.
                      </span>
                      <h4 className="min-w-0 flex-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-sub-heading group-hover:text-[#374151] transition-colors duration-200">
                        {question.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 sm:ml-auto sm:justify-end lg:gap-8">
                        <Badge className="h-7 rounded-[9px] border border-[#e4e9f2] bg-[#eff1fa] px-2.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 text-[#595959] hover:bg-[#e5e8f5] transition-colors duration-200">
                          {question.tag}
                        </Badge>
                        <Badge className="h-7 rounded-[9px] border border-[#faa71b] bg-[#fff3e0] px-2.5 [font-family:'Roboto',Helvetica] text-sm font-normal leading-7 text-[#faa71b] hover:bg-[#ffe8c4] transition-colors duration-200">
                          {question.difficulty}
                        </Badge>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 p-0 text-sub-heading hover:bg-transparent hover:text-[#0957a1] transition-colors duration-200 active:scale-90"
                          aria-label={`More options for question ${question.id}`}
                          onClick={() => handleRemoveQuestion(question.id)}
                        >
                          <MoreHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </article>
                  ))
                )}
              </div>
            </div>

            <Button
              type="button"
              variant="ghost"
              onClick={handleAddQuestion}
              className="h-11 w-full rounded-[10px] bg-[#ebfaf0] [font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-black transition-all duration-200 hover:bg-[#d6f5e3] hover:shadow-sm active:scale-[0.99]"
            >
              <PlusIcon className="mr-1 h-4 w-4" />
              Add Question
            </Button>

            <Button
              type="button"
              variant="ghost"
              className="h-11 w-full rounded-[10px] bg-[#d2e3fc] [font-family:'Roboto',Helvetica] text-sm font-medium leading-6 text-black transition-all duration-200 hover:bg-[#bdd4f7] hover:shadow-sm active:scale-[0.99]"
            >
              <PlusIcon className="mr-1 h-4 w-4" />
              Add Section
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
