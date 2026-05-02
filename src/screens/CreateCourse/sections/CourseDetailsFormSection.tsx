import { useState } from "react";
import { ChevronDownIcon, XIcon } from "lucide-react";
import { FillInfoContentSection } from "./FillInfoContentSection";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Textarea } from "../../../components/ui/textarea";

const tabItems = [
  { value: "basic-information", label: "Basic Information" },
  { value: "content", label: "Content" },
  { value: "settings", label: "Settings" },
];

const selectFields = [
  { id: "category", label: "Category", placeholder: "Select Category" },
  { id: "level", label: "Level", placeholder: "Select Level" },
  { id: "duration", label: "Estimate Duration", placeholder: "Select Duration" },
];

export const CourseDetailsFormSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("basic-information");

  const handleTabChange = (value: string) => {
    if (value === "content") {
      navigate("/fill-info");
      return;
    }
    setActiveTab(value);
  };
  const [isDragging, setIsDragging] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setThumbnailPreview(url);
    }
  };

  return (
    <section className="w-full px-4 py-6 md:px-6 lg:px-8 animate-fade-up">
      <div className="mx-auto w-full max-w-[1068px] rounded-[10px] border border-gray-300 bg-[#f1f3f4] shadow-[-1px_1px_4px_#00000040]">

        {/* ── Header ── */}
        <header className="flex items-start justify-between gap-4 border-b border-black px-5 pb-3 pt-6 md:px-[22px] md:pt-8">
          <div className="min-w-0">
            <h1 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 text-[#202124]">
              Create New Course
            </h1>
            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-8 text-[#202124]">
              Build engaging content for your learners
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-auto p-0 text-[#5f6368] transition-colors duration-150 hover:bg-transparent hover:text-[#202124]"
            aria-label="Close"
            onClick={() => navigate("/courses")}
          >
            <XIcon className="h-8 w-8" />
          </Button>
        </header>

        <div className="px-4 pb-6 pt-5 md:px-6">

          {/* ── Tabs card ── */}
          <Card className="rounded-[10px] border-0 bg-white shadow-none">
            <CardContent className="p-0">
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <div className="border-b border-gray-300 px-3 pt-2.5">
                  <TabsList className="h-auto w-full justify-start gap-5 rounded-none bg-transparent p-0">
                    {tabItems.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="[font-family:'Roboto',Helvetica] h-auto rounded-none border-b-2 border-transparent px-[5px] pb-2 pt-0 text-base font-normal leading-8 text-gray-500 shadow-none transition-all duration-200 data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1] data-[state=active]:shadow-none data-[state=active]:font-medium"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value="basic-information" className="m-0">
                  <div className="space-y-5 p-4 md:p-5">
                    {/* Course Details */}
                    <section>
                      <h2 className="ml-1 [font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-gray-900">
                        Course Details
                      </h2>
                      <div className="mt-2 space-y-3">
                        <div className="space-y-2">
                          <Label
                            htmlFor="course-title"
                            className="ml-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                          >
                            Course Title<span className="text-[#ea4335]">*</span>
                          </Label>
                          <Input
                            id="course-title"
                            value={courseTitle}
                            onChange={(e) => setCourseTitle(e.target.value)}
                            placeholder="Enter your course title"
                            className="h-11 rounded-[10px] border-gray-300 px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-700 shadow-shadow-xs placeholder:text-gray-400 transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40 focus-visible:ring-offset-0"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="description"
                            className="ml-1 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                          >
                            Description<span className="text-[#ea4335]">*</span>
                          </Label>
                          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-white transition-all duration-150 focus-within:ring-1 focus-within:ring-[#0957a1]/40">
                            {/* Toolbar row */}
                            <div className="flex h-9 items-center gap-1 border-b border-gray-200 bg-gray-50 px-3">
                              {["B", "I", "U"].map((fmt) => (
                                <button
                                  key={fmt}
                                  type="button"
                                  className="flex h-6 w-6 items-center justify-center rounded text-xs font-bold text-gray-500 transition-colors duration-100 hover:bg-gray-200 hover:text-gray-700"
                                >
                                  {fmt}
                                </button>
                              ))}
                              <div className="mx-1 h-4 w-px bg-gray-300" />
                              {["≡", "•"].map((fmt) => (
                                <button
                                  key={fmt}
                                  type="button"
                                  className="flex h-6 w-6 items-center justify-center rounded text-sm text-gray-500 transition-colors duration-100 hover:bg-gray-200 hover:text-gray-700"
                                >
                                  {fmt}
                                </button>
                              ))}
                            </div>
                            <Textarea
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder="Add description"
                              className="min-h-[98px] resize-none border-0 px-3 pb-3 pt-3 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-700 shadow-none placeholder:text-gray-400 focus-visible:ring-0"
                            />
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Meta fields grid */}
                    <section className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
                      {selectFields.slice(0, 2).map((field) => (
                        <div key={field.id} className="space-y-1">
                          <Label
                            htmlFor={field.id}
                            className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                          >
                            {field.label}
                          </Label>
                          <button
                            id={field.id}
                            type="button"
                            className="flex h-11 w-full items-center justify-between gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-left shadow-shadow-xs transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0957a1]/40"
                          >
                            <span className="[font-family:'Roboto',Helvetica] text-base font-normal text-gray-400">
                              {field.placeholder}
                            </span>
                            <ChevronDownIcon className="h-4 w-4 shrink-0 text-gray-500" />
                          </button>
                        </div>
                      ))}

                      <div className="space-y-1">
                        <Label
                          htmlFor="price"
                          className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                        >
                          Price ($)
                        </Label>
                        <Input
                          id="price"
                          placeholder="Enter Price"
                          className="h-11 rounded-[10px] border-gray-300 px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal text-gray-700 shadow-shadow-xs placeholder:text-gray-400 transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40 focus-visible:ring-offset-0"
                        />
                      </div>

                      <div className="space-y-1">
                        <Label
                          htmlFor={selectFields[2].id}
                          className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                        >
                          {selectFields[2].label}
                        </Label>
                        <button
                          id={selectFields[2].id}
                          type="button"
                          className="flex h-11 w-full items-center justify-between gap-2 rounded-[10px] border border-gray-300 bg-white px-3 py-2.5 text-left shadow-shadow-xs transition-all duration-150 hover:border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#0957a1]/40"
                        >
                          <span className="[font-family:'Roboto',Helvetica] text-base font-normal text-gray-400">
                            {selectFields[2].placeholder}
                          </span>
                          <ChevronDownIcon className="h-4 w-4 shrink-0 text-gray-500" />
                        </button>
                      </div>
                    </section>
                  </div>
                </TabsContent>

                <TabsContent value="content" className="m-0">
                  <FillInfoContentSection />
                </TabsContent>

                <TabsContent value="settings" className="m-0">
                  <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 p-8 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                      <svg className="h-6 w-6 text-[#0957a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="[font-family:'Roboto',Helvetica] text-base font-medium text-gray-500">
                      Course settings coming soon
                    </p>
                    <p className="[font-family:'Roboto',Helvetica] text-sm font-normal text-gray-400">
                      Configure visibility, access, and enrollment options
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* ── Thumbnail card ── */}
          <Card className="mt-5 rounded-[10px] border-0 bg-white shadow-none">
            <CardContent className="px-5 pb-6 pt-5">
              <section className="space-y-3">
                <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-gray-900">
                  Thumbnail
                </h2>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById("thumbnail-input")?.click()}
                  className={`flex min-h-[212px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-dashed px-3 py-4 shadow-shadow-xs transition-all duration-200 ${
                    isDragging
                      ? "border-[#0957a1] bg-[#ecf5fe]"
                      : "border-gray-300 bg-white hover:border-[#0957a1]/50 hover:bg-blue-50/30"
                  }`}
                >
                  <input
                    id="thumbnail-input"
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = URL.createObjectURL(file);
                        setThumbnailPreview(url);
                      }
                    }}
                  />
                  {thumbnailPreview ? (
                    <div className="relative w-full max-w-[320px]">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail preview"
                        className="h-auto w-full rounded-[8px] object-cover shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setThumbnailPreview(null);
                        }}
                        className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-150 hover:bg-red-50"
                      >
                        <XIcon className="h-3.5 w-3.5 text-gray-500" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <img
                        className="h-[72px] w-[72px] opacity-60"
                        alt="Upload image"
                        src="https://c.animaapp.com/mol8iyw3tXa1qq/img/ion-image.svg"
                      />
                      <div className="text-center">
                        <p className="[font-family:'Roboto',Helvetica] text-base font-medium text-gray-500">
                          Drag and drop an image, or{" "}
                          <span className="text-[#0957a1] underline underline-offset-2">click to upload</span>
                        </p>
                        <p className="mt-1 [font-family:'Roboto',Helvetica] text-sm font-normal text-gray-400">
                          Minimum: 800×450px &bull; Max: 2MB &bull; PNG, JPEG, GIF
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </section>
            </CardContent>
          </Card>

          {/* ── Footer actions ── */}
          <footer className="mt-5 flex items-center justify-end gap-3">
            <Button
              type="button"
              onClick={() => navigate("/courses")}
              variant="secondary"
              className="h-auto rounded-lg bg-[#dbeeff] px-6 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-gray-900 transition-all duration-200 hover:bg-[#dbeeff]/90 active:scale-[0.98]"
            >
              Preview
            </Button>
            <Button
              type="button"
              className="h-auto rounded-lg bg-[#0957a1] px-6 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-white transition-all duration-200 hover:bg-[#084a89] active:scale-[0.98]"
            >
              Save &amp; Publish
            </Button>
          </footer>

        </div>
      </div>
    </section>
  );
};
