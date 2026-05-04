import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, SettingsIcon, UploadCloudIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

type QuestionField = {
  id: number;
  label: string;
  required: boolean;
};

const topActionIcons = [
  {
    src: "https://c.animaapp.com/moqoxnqavaoDbD/img/frame-1321317648.svg",
    alt: "Actions",
    className: "h-4 w-auto transition-transform duration-200 hover:scale-105",
  },
  {
    src: "https://c.animaapp.com/moqoxnqavaoDbD/img/frame.svg",
    alt: "Notifications",
    className: "h-6 w-6 transition-transform duration-200 hover:scale-105",
  },
];

const toolbarActions = [
  { label: "Add question", icon: PlusIcon },
  { label: "Upload", icon: UploadCloudIcon },
  { label: "Settings", icon: SettingsIcon },
];

export const MockTestQuestions = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Questions");
  const [published, setPublished] = useState(false);
  const [description, setDescription] = useState("");
  const [questionFields, setQuestionFields] = useState<QuestionField[]>([
    { id: 1, label: "Name", required: true },
    { id: 2, label: "Email", required: true },
    { id: 3, label: "Phone Number", required: true },
  ]);

  const responses = useMemo(
    () => questionFields.map((field, index) => ({ field: field.label, responses: index === 0 ? 24 : index === 1 ? 18 : 12 })),
    [questionFields],
  );

  const addQuestion = () => {
    setQuestionFields((prev) => [
      ...prev,
      {
        id: Date.now(),
        label: `Question ${prev.length + 1}`,
        required: false,
      },
    ]);
  };

  const updateQuestionLabel = (id: number, value: string) => {
    setQuestionFields((prev) => prev.map((field) => (field.id === id ? { ...field, label: value } : field)));
  };

  return (
    <div className="min-h-screen w-full bg-[#f3f4f8]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">
        <header className="sticky top-0 z-20 bg-white shadow-[0px_4px_4px_#00000040] animate-fade-in">
          <div className="flex min-h-[72px] items-start justify-between gap-4 px-4 pb-2 pt-3 sm:px-8">
            <div className="flex items-start">
              <img
                className="h-[52px] w-auto object-contain"
                alt="ICS logo"
                src="https://c.animaapp.com/moqoxnqavaoDbD/img/ics-png--1--1.png"
              />
            </div>

            <div className="flex items-center gap-3 pt-1">
              {topActionIcons.map((icon) => (
                <button key={icon.src} type="button" className="rounded-md transition-colors duration-200 hover:bg-slate-100" aria-label={icon.alt}>
                  <img className={icon.className} alt={icon.alt} src={icon.src} />
                </button>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={() => setPublished(true)}
                className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 text-base font-medium text-[#0957a1] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#bfdfff] hover:text-[#0957a1] hover:shadow-md active:translate-y-0 [font-family:'Roboto',Helvetica]"
              >
                {published ? "Published" : "Publish"}
              </Button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-transform duration-200 hover:scale-105 active:scale-95"
                aria-label="Profile"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">J</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 px-4 pb-1 sm:flex-row sm:items-center sm:gap-8 sm:px-8">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 text-[#202124] transition-colors duration-200 hover:text-[#0957a1]"
              >
                Back
              </button>
              <img
                className="h-auto w-[53px]"
                alt="Header actions"
                src="https://c.animaapp.com/moqoxnqavaoDbD/img/frame-1321317649.svg"
              />
            </div>

            <div className="flex-1">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="h-auto w-full justify-center gap-2 rounded-none bg-transparent p-0">
                  {["Questions", "Responses", "Settings"].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="h-[30px] rounded-none border-b-[3px] border-transparent px-3 py-2 shadow-none transition-all duration-200 data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-app-primary data-[state=active]:shadow-none"
                    >
                      <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6">{tab}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </header>

        <main className="px-4 pb-12 pt-4 sm:px-[31px]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="Questions" className="m-0 animate-fade-up">
              <div className="flex items-start gap-3">
                <section className="flex-1 space-y-1.5">
                  <Card className="rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:shadow-[0px_4px_14px_#00000026]">
                    <CardContent className="px-[14px] pb-[18px] pt-[14px]">
                      <div className="rounded-[10px] border border-[#d9d9d9] bg-white px-[14px] pb-[82px] pt-3 transition-colors duration-200 focus-within:border-[#0957a1]/50">
                        <img
                          className="h-[29px] w-[259.67px]"
                          alt="Description toolbar"
                          src="https://c.animaapp.com/moqoxnqavaoDbD/img/frame-1321317581.svg"
                        />
                        <textarea
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                          placeholder="Add description"
                          className="mt-3 min-h-[54px] w-full resize-none border-0 bg-transparent p-0 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959] outline-none placeholder:text-[#595959]"
                          aria-label="Mock test description"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {questionFields.map((field, index) => (
                    <Card
                      key={field.id}
                      className="rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_5px_16px_#00000022]"
                      style={{ animationDelay: `${index * 70}ms` }}
                    >
                      <CardContent className="px-4 pb-4 pt-4">
                        <div className="space-y-6">
                          <label className="block">
                            <span className="sr-only">Question label</span>
                            <span className="flex items-center gap-1">
                              <input
                                value={field.label}
                                onChange={(event) => updateQuestionLabel(field.id, event.target.value)}
                                className="w-full border-0 bg-transparent p-0 [font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black outline-none transition-colors duration-200 focus:text-[#0957a1]"
                              />
                              {field.required && <span className="text-2xl font-semibold leading-8 text-[#e02323]">*</span>}
                            </span>
                          </label>

                          <div className="max-w-[346px] border-b border-[#595959] px-1 pb-2 transition-colors duration-200 hover:border-[#0957a1]">
                            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">Short answer text</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </section>

                <aside className="hidden pt-20 sm:block">
                  <div className="flex w-12 flex-col overflow-hidden rounded-[14px] bg-white shadow-[0px_0px_4px_#00000040]">
                    {toolbarActions.map((action) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={action.label}
                          type="button"
                          onClick={action.label === "Add question" ? addQuestion : undefined}
                          className="flex h-12 w-12 items-center justify-center text-[#0957a1] transition-all duration-200 hover:bg-[#d1e9ff] active:scale-95"
                          aria-label={action.label}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </button>
                      );
                    })}
                  </div>
                </aside>
              </div>

              <button
                type="button"
                onClick={addQuestion}
                className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-[#d1e9ff] [font-family:'Inter',Helvetica] text-sm font-semibold text-[#0957a1] transition-all duration-200 hover:bg-[#bfdfff] hover:shadow-sm active:scale-[0.99] sm:hidden"
              >
                <PlusIcon className="h-4 w-4" />
                Add question
              </button>
            </TabsContent>

            <TabsContent value="Responses" className="m-0 animate-fade-up">
              <Card className="rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="p-6">
                  <h1 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">Responses</h1>
                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    {responses.map((item) => (
                      <div key={item.field} className="rounded-[10px] border border-[#d9d9d9] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                        <p className="[font-family:'Roboto',Helvetica] text-sm font-normal text-[#595959]">{item.field}</p>
                        <p className="mt-2 [font-family:'Inter',Helvetica] text-3xl font-semibold text-[#0957a1]">{item.responses}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="Settings" className="m-0 animate-fade-up">
              <Card className="rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="space-y-5 p-6">
                  <h1 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">Settings</h1>
                  <label className="flex cursor-pointer items-center justify-between rounded-[10px] border border-[#d9d9d9] p-4 transition-colors duration-200 hover:bg-[#f3f4f8]">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-medium text-[#202124]">Require all fields before submission</span>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#0957a1]" />
                  </label>
                  <label className="flex cursor-pointer items-center justify-between rounded-[10px] border border-[#d9d9d9] p-4 transition-colors duration-200 hover:bg-[#f3f4f8]">
                    <span className="[font-family:'Roboto',Helvetica] text-base font-medium text-[#202124]">Collect learner email addresses</span>
                    <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#0957a1]" />
                  </label>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};
