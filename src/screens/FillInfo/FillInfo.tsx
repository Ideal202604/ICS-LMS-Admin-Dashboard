import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XIcon } from "lucide-react";
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
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Switch } from "../../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Textarea } from "../../components/ui/textarea";
import { FillInfoContentSection } from "../CreateCourse/sections/FillInfoContentSection";

/* ── Tab config ─────────────────────────────────────────────────── */
const tabItems = [
  { value: "basic-information", label: "Basic Information" },
  { value: "content", label: "Content" },
  { value: "settings", label: "Settings" },
] as const;

/* ── Course form meta fields ─────────────────────────────────────── */
const categoryOptions  = ["Development", "Design", "Business", "Marketing", "Finance"];
const levelOptions     = ["Beginner", "Intermediate", "Advanced", "Expert"];
const durationOptions  = ["< 1 Hour", "1–3 Hours", "3–6 Hours", "6–12 Hours", "> 12 Hours"];
const enrollmentOptions      = ["Always Open", "Limited Time", "Scheduled"] as const;
const enrollmentPeriodOptions = ["1 Month", "3 Months", "6 Months", "1 Year"] as const;

/* ── Settings toggles ────────────────────────────────────────────── */
const courseSettings = [
  {
    id: "enable-certificates",
    title: "Enable Certificates",
    description: "Issue certificates upon course completion",
    defaultChecked: false,
  },
  {
    id: "allow-comments",
    title: "Allow Comments",
    description: "Let learners comment on lessons",
    defaultChecked: true,
  },
  {
    id: "drip-content",
    title: "Drip Content",
    description: "Release lessons on a schedule",
    defaultChecked: false,
  },
  {
    id: "course-prerequisites",
    title: "Course Prerequisites",
    description: "Require completion of other courses first",
    defaultChecked: false,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════════ */
export const FillInfo = (): JSX.Element => {
  const navigate = useNavigate();

  /* Tabs */
  const [activeTab, setActiveTab] = useState<string>("basic-information");

  /* Basic Information form state */
  const [courseTitle,      setCourseTitle]      = useState("");
  const [description,      setDescription]      = useState("");
  const [category,         setCategory]         = useState("");
  const [level,            setLevel]            = useState("");
  const [price,            setPrice]            = useState("");
  const [duration,         setDuration]         = useState("");
  const [isDragging,       setIsDragging]       = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  /* Settings form state */
  const [maximumStudents,   setMaximumStudents]   = useState<string>("Always Open");
  const [enrollmentPeriod,  setEnrollmentPeriod]  = useState<string>("");

  /* Thumbnail helpers */
  const handleDragOver  = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop      = (e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) setThumbnailPreview(URL.createObjectURL(file));
  };

  return (
    <AppLayout className="bg-white">
      <section className="flex min-w-0 flex-col px-2 pt-2 pb-8">

        {/* ── Breadcrumb ── */}
        <Breadcrumb className="px-4 pt-2">
          <BreadcrumbList className="gap-1 text-xs leading-8 [font-family:'Roboto',Helvetica] font-normal tracking-[0]">
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer text-[#202124] hover:text-[#0957a1] transition-colors duration-150"
                onClick={() => navigate("/courses")}
              >
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-1 text-[#202124]">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="cursor-pointer text-[#202124] hover:text-[#0957a1] transition-colors duration-150"
                onClick={() => navigate("/create-course")}
              >
                Create Course
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-1 text-[#202124]">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#0957a1]">Fill Info</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ── Main container ── */}
        <div className="px-4 py-6 md:px-6 lg:px-8 animate-fade-up">
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

            {/* ── Body ── */}
            <div className="px-4 pb-6 pt-5 md:px-6">

              {/* ── Tabs card ── */}
              <Card className="rounded-[10px] border border-gray-300 bg-white shadow-none overflow-visible">
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">

                    {/* Tab headers */}
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

                    {/* ───────── Basic Information ───────── */}
                    <TabsContent value="basic-information" className="m-0 animate-fade-up">
                      <div className="space-y-5 p-4 md:p-5">

                        {/* Course Details */}
                        <section>
                          <h2 className="ml-1 [font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-gray-900">
                            Course Details
                          </h2>
                          <div className="mt-2 space-y-4">

                            {/* Course Title */}
                            <div className="space-y-[11px]">
                              <Label
                                htmlFor="course-title"
                                className="ml-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                              >
                                Course Title<span className="text-[#ea4335]">*</span>
                              </Label>
                              <Input
                                id="course-title"
                                value={courseTitle}
                                onChange={(e) => setCourseTitle(e.target.value)}
                                placeholder="Enter your live class title"
                                className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-700 shadow-shadow-xs placeholder:text-gray-500 transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40 focus-visible:ring-offset-0"
                              />
                            </div>

                            {/* Description */}
                            <div className="space-y-[11px]">
                              <Label
                                htmlFor="description"
                                className="ml-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900"
                              >
                                Description<span className="text-[#ea4335]">*</span>
                              </Label>
                              <div className="overflow-hidden rounded-lg border border-gray-300 bg-white transition-all duration-150 focus-within:ring-1 focus-within:ring-[#0957a1]/40">
                                {/* Toolbar */}
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
                                  className="min-h-[98px] resize-none border-0 px-3 pb-3 pt-3 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-gray-700 shadow-none placeholder:text-[#595959] focus-visible:ring-0"
                                />
                              </div>
                            </div>

                            {/* Meta grid: Category | Level | Price | Duration */}
                            <div className="grid grid-cols-1 gap-x-[29px] gap-y-5 md:grid-cols-2">

                              {/* Category */}
                              <div className="space-y-2">
                                <Label htmlFor="category" className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900">
                                  Category
                                </Label>
                                <Select value={category} onValueChange={setCategory}>
                                  <SelectTrigger
                                    id="category"
                                    className="h-[46px] rounded-[10px] border-gray-300 bg-white px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal text-gray-500 shadow-shadow-xs transition-all duration-150 hover:border-[#0957a1]/50 focus:ring-1 focus:ring-[#0957a1]/40"
                                  >
                                    <SelectValue placeholder="Select Category" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {categoryOptions.map((o) => (
                                      <SelectItem key={o} value={o}>{o}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              {/* Level */}
                              <div className="space-y-2">
                                <Label htmlFor="level" className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900">
                                  Level
                                </Label>
                                <Select value={level} onValueChange={setLevel}>
                                  <SelectTrigger
                                    id="level"
                                    className="h-[46px] rounded-[10px] border-gray-300 bg-white px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal text-gray-500 shadow-shadow-xs transition-all duration-150 hover:border-[#0957a1]/50 focus:ring-1 focus:ring-[#0957a1]/40"
                                  >
                                    <SelectValue placeholder="Select Level" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {levelOptions.map((o) => (
                                      <SelectItem key={o} value={o}>{o}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              {/* Price */}
                              <div className="space-y-2">
                                <Label htmlFor="price" className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900">
                                  Price ($)
                                </Label>
                                <Input
                                  id="price"
                                  type="number"
                                  min="0"
                                  value={price}
                                  onChange={(e) => setPrice(e.target.value)}
                                  placeholder="Enter Price"
                                  className="h-[46px] rounded-[10px] border-gray-300 bg-white px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal text-gray-700 shadow-shadow-xs placeholder:text-gray-500 transition-all duration-150 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40 focus-visible:ring-offset-0"
                                />
                              </div>

                              {/* Estimated Duration */}
                              <div className="space-y-2">
                                <Label htmlFor="duration" className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-900">
                                  Estimate Duration
                                </Label>
                                <Select value={duration} onValueChange={setDuration}>
                                  <SelectTrigger
                                    id="duration"
                                    className="h-[46px] rounded-[10px] border-gray-300 bg-white px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-normal text-gray-500 shadow-shadow-xs transition-all duration-150 hover:border-[#0957a1]/50 focus:ring-1 focus:ring-[#0957a1]/40"
                                  >
                                    <SelectValue placeholder="Select Level" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {durationOptions.map((o) => (
                                      <SelectItem key={o} value={o}>{o}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                            </div>
                          </div>
                        </section>
                      </div>

                      {/* ── Thumbnail card ── */}
                      <Card className="mx-4 mb-5 rounded-[10px] border-0 bg-white shadow-none md:mx-5">
                        <CardContent className="px-4 pb-7 pt-6">
                          <section>
                            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-gray-900">
                              Thumbnail
                            </h2>
                            <div
                              onDragOver={handleDragOver}
                              onDragLeave={handleDragLeave}
                              onDrop={handleDrop}
                              onClick={() => document.getElementById("thumbnail-input")?.click()}
                              className={`mt-2.5 flex min-h-[212px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-dashed px-3 py-4 shadow-shadow-xs transition-all duration-200 ${
                                isDragging
                                  ? "border-[#0957a1] bg-[#ecf5fe]"
                                  : "border-gray-300 bg-white hover:border-[#0957a1]/50 hover:bg-blue-50/20"
                              }`}
                            >
                              <input
                                id="thumbnail-input"
                                type="file"
                                accept="image/png,image/jpeg,image/gif"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) setThumbnailPreview(URL.createObjectURL(file));
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
                                    className="h-[81px] w-[81px] opacity-60"
                                    alt="Upload image"
                                    src="https://c.animaapp.com/molaxr74txqcce/img/ion-image.svg"
                                  />
                                  <div className="text-center">
                                    <p className="[font-family:'Roboto',Helvetica] max-w-[313px] text-center text-base font-medium leading-6 text-gray-500">
                                      Drag and drop an image, or{" "}
                                      <span className="text-[#0957a1] underline underline-offset-2">click to upload</span>
                                      .<br />
                                      Minimum dimension: 800x450px.<br />
                                      Maximum file size: 2MB.<br />
                                      Accepted file types: png, jpeg, gif
                                    </p>
                                  </div>
                                </>
                              )}
                            </div>
                          </section>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    {/* ───────── Content ───────── */}
                    <TabsContent value="content" className="m-0">
                      <FillInfoContentSection />
                    </TabsContent>

                    {/* ───────── Settings ───────── */}
                    <TabsContent value="settings" className="m-0 animate-fade-up">

                      {/* Course Settings Toggles */}
                      <section className="px-4 pb-6 pt-9">
                        <h2 className="[font-family:'Roboto',Helvetica] text-base font-normal uppercase leading-6 tracking-[0.32px] text-[#111827]">
                          COURSE SETTINGS
                        </h2>
                        <div className="mt-5 space-y-2.5">
                          {courseSettings.map((setting) => (
                            <div
                              key={setting.id}
                              className="flex items-start justify-between gap-6 py-[3px] transition-opacity duration-150"
                            >
                              <div className="max-w-[492px]">
                                <h3 className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-600">
                                  {setting.title}
                                </h3>
                                <p className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-6 text-gray-500">
                                  {setting.description}
                                </p>
                              </div>
                              <Switch
                                id={setting.id}
                                defaultChecked={setting.defaultChecked}
                                className="mt-2"
                              />
                            </div>
                          ))}
                        </div>
                      </section>

                      {/* Research Writing & Use of AI */}
                      <div className="px-4 pb-6">
                        <Card className="overflow-visible rounded-lg border border-gray-300 bg-white shadow-none">
                          <CardContent className="px-3 pb-6 pt-8">
                            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-bold leading-6 text-black">
                              Research Writing &amp; Use of AI
                            </h2>
                            <div className="mt-5 grid grid-cols-1 gap-[18px] lg:grid-cols-2">

                              {/* Maximum Students */}
                              <div className="flex flex-col gap-[11px]">
                                <label
                                  htmlFor="maximum-students"
                                  className="ml-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-600"
                                >
                                  Maximum Students
                                </label>
                                <Select value={maximumStudents} onValueChange={setMaximumStudents}>
                                  <SelectTrigger
                                    id="maximum-students"
                                    className="h-11 rounded-[10px] border-gray-300 px-3 py-2.5 shadow-shadow-xs transition-all duration-150 hover:border-[#0957a1]/50 focus:ring-1 focus:ring-[#0957a1]/40 [&>span]:[font-family:'Roboto',Helvetica] [&>span]:text-base [&>span]:font-medium [&>span]:leading-6 [&>span]:text-gray-500"
                                  >
                                    <SelectValue placeholder="Leave empty for unlimited" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-md border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
                                    {enrollmentOptions.map((option) => (
                                      <SelectItem
                                        key={option}
                                        value={option}
                                        className={`[font-family:'Inter',Helvetica] text-base leading-6 ${option === maximumStudents ? "text-[#0957a1]" : "text-[#111827]"}`}
                                      >
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                              {/* Enrollment Period */}
                              <div className="flex flex-col gap-[11px]">
                                <label
                                  htmlFor="enrollment-period"
                                  className="ml-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-600"
                                >
                                  Enrollment period
                                </label>
                                <Select value={enrollmentPeriod} onValueChange={setEnrollmentPeriod}>
                                  <SelectTrigger
                                    id="enrollment-period"
                                    className="h-11 rounded-[10px] border-gray-300 px-3 py-2.5 shadow-shadow-xs transition-all duration-150 hover:border-[#0957a1]/50 focus:ring-1 focus:ring-[#0957a1]/40 [&>span]:[font-family:'Roboto',Helvetica] [&>span]:text-base [&>span]:font-medium [&>span]:leading-6 [&>span]:text-gray-500"
                                  >
                                    <SelectValue placeholder="Select Period" />
                                  </SelectTrigger>
                                  <SelectContent className="rounded-md border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040]">
                                    {enrollmentPeriodOptions.map((option) => (
                                      <SelectItem
                                        key={option}
                                        value={option}
                                        className="[font-family:'Inter',Helvetica] text-base leading-6 text-[#111827]"
                                      >
                                        {option}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>

                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>

                  </Tabs>
                </CardContent>
              </Card>

              {/* ── Footer actions ── */}
              <footer className="mt-5 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => navigate("/courses")}
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
        </div>
      </section>
    </AppLayout>
  );
};
