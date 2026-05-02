import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  BellIcon,
  ChevronRightIcon,
  CircleHelpIcon,
  GlobeIcon,
  LinkIcon,
  Share2Icon,
  RefreshCwIcon,
  UploadIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  ChevronDownIcon,
  ZoomInIcon,
  ZoomOutIcon,
  MaximizeIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface LessonItem {
  id: number;
  title: string;
  completed: boolean;
  subItems?: string[];
}

/* ─── Static data ────────────────────────────────────────────────────────── */
const initialLessons: LessonItem[] = [
  { id: 1, title: "Objectives", completed: true, subItems: [] },
  { id: 2, title: "Index Introduction", completed: false, subItems: [] },
  {
    id: 3,
    title: "Fundamental Of Research Writing",
    completed: false,
    subItems: [
      "1.3.1 What is Research Writing",
      "1.3.2 Structure of a Research Paper",
      "1.3.3 Literature Review Basics",
    ],
  },
  {
    id: 4,
    title: "Role of AI in Research",
    completed: false,
    subItems: [
      "1.4.1 AI Tools for Research Assistance",
      "1.4.2 AI for Literature Discovery",
      "1.4.3 AI in Data Analysis",
      "1.4.4 AI for Academic Writing Support",
    ],
  },
  { id: 5, title: "Index Introduction", completed: false, subItems: [] },
];

const headerActionIcons = [
  { icon: CircleHelpIcon, label: "Help" },
  { icon: GlobeIcon, label: "Language" },
  { icon: ChevronRightIcon, label: "Next" },
  { icon: LinkIcon, label: "Link" },
  { icon: Share2Icon, label: "Share" },
];

/* ─── LessonViewer ───────────────────────────────────────────────────────── */
export const LessonViewer = (): JSX.Element => {
  const navigate = useNavigate();

  /* state */
  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set([3, 4]));
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(true); // matches Figma default
  const [addedLinks, setAddedLinks] = useState<string[]>([]);
  const [zoomLevel, setZoomLevel] = useState(100);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleExpand = useCallback((id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const handleFileChange = useCallback((file: File) => {
    setUploadedFile(file);
    setUploadSuccess(true);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFileChange(file);
    },
    [handleFileChange],
  );

  const handleReplace = useCallback(() => {
    setUploadedFile(null);
    setUploadSuccess(false);
  }, []);

  const handleAddLink = useCallback(() => {
    const url = prompt("Enter a link URL:");
    if (url && url.trim()) {
      setAddedLinks((prev) => [...prev, url.trim()]);
    }
  }, []);

  const completedCount = initialLessons.filter((l) => l.completed).length;

  return (
    <main className="min-h-screen w-full bg-[#f7f9fd]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col">

        {/* ── Sticky Header ─────────────────────────────────────────────── */}
        <header className="sticky top-0 z-20 bg-white shadow-[0px_4px_4px_#00000040] animate-fade-in">
          <div className="flex h-[88px] items-center justify-between px-4 sm:px-6">
            {/* Logo */}
            <img
              className="h-[75px] w-20 shrink-0 cursor-pointer object-contain transition-opacity duration-200 hover:opacity-80"
              alt="ICS Global logo"
              src="https://c.animaapp.com/molec567SXjNc2/img/ics-png--1--1.png"
              onClick={() => navigate("/")}
            />

            {/* Right cluster */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Icon actions */}
              <nav aria-label="Header actions" className="flex items-center gap-1 sm:gap-2 text-[#5f6368]">
                {headerActionIcons.map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    type="button"
                    aria-label={label}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-[#5f6368] transition-all duration-200 hover:bg-gray-100 hover:text-[#111827] active:scale-95"
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                  </button>
                ))}
              </nav>

              {/* Publish */}
              <Button
                type="button"
                variant="outline"
                className="h-auto rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#c4e0ff] hover:shadow-sm active:scale-[0.98]"
              >
                Publish
              </Button>

              {/* Bell */}
              <button
                type="button"
                aria-label="Notifications"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[#5f6368] transition-all duration-200 hover:bg-gray-100 hover:text-[#111827] active:scale-95"
              >
                <BellIcon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>

              {/* Avatar */}
              <button
                type="button"
                aria-label="User profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#074d8c] active:scale-95"
              >
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                  J
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        <section className="px-3 pb-7 pt-[23px] sm:px-[22px] animate-fade-up">

          {/* ── Course Banner Card ── */}
          <Card className="rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-2px_2px_8px_#00000030]">
            <CardContent className="flex min-h-[130px] flex-col justify-between gap-6 p-4 sm:p-[21px] md:flex-row md:items-start">
              <div className="flex flex-col gap-1">
                <p className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 text-[#202124]">
                  Research Writing &amp; Use of AI &bull; Information
                </p>
                <h1 className="[font-family:'Inter',Helvetica] text-xl font-semibold leading-8 text-black sm:text-2xl">
                  Research Writing &amp; Use of&nbsp;&nbsp;AI
                </h1>
              </div>
              <div className="flex items-center gap-5 self-end md:self-center">
                <p className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#595959] whitespace-nowrap">
                  {completedCount}/{initialLessons.length} Lessons
                </p>
                {/* Progress bar visual */}
                <div className="flex h-[35px] w-[115px] items-center">
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full bg-[#0957a1] transition-all duration-500"
                      style={{ width: `${(completedCount / initialLessons.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ── Three-column content grid ── */}
          <section className="mt-[17px] grid grid-cols-1 gap-[9px] xl:grid-cols-[351px_minmax(0,678px)_351px]">

            {/* ── LEFT: Lesson Index Sidebar ── */}
            <aside className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
              <Card className="h-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="px-[22px] pt-5">
                    <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                      Index_Introduction
                    </h2>
                    <p className="mt-0.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#595959]">
                      {completedCount}/{initialLessons.length} Lessons
                    </p>
                  </div>
                  <nav
                    aria-label="Lesson index"
                    className="mt-[34px] flex flex-col gap-3.5 px-5 pb-6"
                  >
                    {initialLessons.map((item) => {
                      const isActive = activeLessonId === item.id;
                      const isExpanded = expandedIds.has(item.id);
                      const hasSubItems = item.subItems && item.subItems.length > 0;

                      return (
                        <div key={item.id} className="flex flex-col">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLessonId(item.id);
                              if (hasSubItems) toggleExpand(item.id);
                            }}
                            className="flex items-start gap-4 text-left group transition-opacity duration-150 hover:opacity-80"
                          >
                            {/* Radio indicator */}
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[10px] border transition-all duration-200 ${
                                isActive || item.completed
                                  ? "border-[#0957a1] scale-110"
                                  : "border-[#595959]"
                              }`}
                            >
                              {(isActive || item.completed) && (
                                <span className="h-2.5 w-2.5 rounded-[5px] bg-[#0957a1] animate-in zoom-in-50 duration-200" />
                              )}
                            </span>
                            <span className="flex min-w-0 flex-1 flex-col">
                              <span
                                className={`[font-family:'Roboto',Helvetica] text-base font-medium leading-6 transition-colors duration-150 ${
                                  isActive ? "text-[#0957a1]" : "text-[#595959] group-hover:text-[#374151]"
                                }`}
                              >
                                {item.title}
                              </span>
                            </span>
                            {hasSubItems && (
                              <ChevronDownIcon
                                className={`mt-1 h-4 w-4 shrink-0 text-[#595959] transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                strokeWidth={2}
                              />
                            )}
                          </button>

                          {/* Sub-items */}
                          {hasSubItems && (
                            <div
                              className={[
                                "ml-9 overflow-hidden transition-all duration-300 ease-in-out",
                                isExpanded ? "max-h-64 opacity-100 mt-2" : "max-h-0 opacity-0",
                              ].join(" ")}
                            >
                              <div className="flex flex-col gap-1">
                                {item.subItems!.map((sub, si) => (
                                  <button
                                    key={si}
                                    type="button"
                                    className="text-left [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959] transition-colors duration-150 hover:text-[#0957a1]"
                                  >
                                    {sub}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* ── CENTER: PDF Content Area ── */}
            <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <Card className="h-full rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="p-0">
                  {/* Content header bar */}
                  <div className="flex min-h-[70px] items-center justify-between gap-4 rounded-t-[10px] bg-[#f7b902] px-3 transition-colors duration-200">
                    <div className="flex items-center gap-3.5">
                      <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#f7f9fc] transition-all duration-200 hover:text-white hover:underline active:scale-95"
                      >
                        Close
                      </button>
                      <div className="h-[37px] w-px bg-white/40" />
                      <h2 className="[font-family:'Roboto',Helvetica] text-xl font-medium leading-6 text-[#f7f9fc] sm:text-2xl">
                        PDF Lesson {activeLessonId}
                      </h2>
                    </div>

                    {/* Zoom controls */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Zoom out"
                        onClick={() => setZoomLevel((z) => Math.max(50, z - 10))}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-white transition-all duration-150 hover:bg-white/20 active:scale-90"
                      >
                        <ZoomOutIcon className="h-4 w-4" />
                      </button>
                      <span className="w-12 text-center [font-family:'Roboto',Helvetica] text-xs font-medium text-white">
                        {zoomLevel}%
                      </span>
                      <button
                        type="button"
                        aria-label="Zoom in"
                        onClick={() => setZoomLevel((z) => Math.min(200, z + 10))}
                        className="flex h-7 w-7 items-center justify-center rounded-md text-white transition-all duration-150 hover:bg-white/20 active:scale-90"
                      >
                        <ZoomInIcon className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Fullscreen"
                        className="flex h-7 w-7 items-center justify-center rounded-md text-white transition-all duration-150 hover:bg-white/20 active:scale-90"
                      >
                        <MaximizeIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* PDF preview area */}
                  <div className="p-3">
                    <div
                      className="flex min-h-[413px] items-center justify-center overflow-hidden rounded-[10px] bg-[#f0f8ff] transition-all duration-300"
                      style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
                    >
                      <img
                        className="h-auto w-full max-w-[624px] object-contain transition-opacity duration-300 hover:opacity-95"
                        alt="Course content lesson document"
                        src="https://c.animaapp.com/molec567SXjNc2/img/image-170.png"
                      />
                    </div>

                    {/* Upload status card */}
                    <Card className="mt-3 rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-200 hover:shadow-[0px_0px_8px_#00000025]">
                      <CardContent className="flex min-h-[89px] items-center justify-between gap-4 px-4 py-4 sm:px-[27px] sm:py-5">
                        <div className="flex items-center gap-3.5">
                          <CheckCircle2Icon
                            className="h-5 w-5 shrink-0 text-[#00c950] transition-transform duration-200 hover:scale-110"
                            strokeWidth={1.75}
                          />
                          <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959]">
                            {uploadedFile
                              ? `"${uploadedFile.name}" uploaded successfully`
                              : "Content uploaded successfully"}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 sm:gap-[25px]">
                          {/* Refresh */}
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center justify-center transition-transform duration-200 hover:rotate-180 active:scale-90"
                            aria-label="Replace content"
                          >
                            <RefreshCwIcon className="h-6 w-6 text-gray-600 transition-colors duration-150 hover:text-[#0957a1]" strokeWidth={1.75} />
                          </button>
                          <Button
                            type="button"
                            onClick={handleReplace}
                            className="h-auto rounded-lg bg-[#e02323] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium text-white transition-all duration-200 hover:bg-[#c51f1f] hover:shadow-sm active:scale-[0.98]"
                          >
                            Remove
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Lesson navigation arrows */}
                    <div className="mt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveLessonId((id) => Math.max(1, id - 1))}
                        disabled={activeLessonId === 1}
                        className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-[var(--shadow-xs)] transition-all duration-200 hover:border-[#0957a1]/40 hover:bg-[#e8f3ff] hover:text-[#0957a1] disabled:cursor-not-allowed disabled:opacity-40 [font-family:'Inter',Helvetica]"
                      >
                        <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
                        Previous
                      </button>
                      <span className="[font-family:'Roboto',Helvetica] text-sm text-[#595959]">
                        {activeLessonId} / {initialLessons.length}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActiveLessonId((id) => Math.min(initialLessons.length, id + 1))}
                        disabled={activeLessonId === initialLessons.length}
                        className="flex h-9 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-[var(--shadow-xs)] transition-all duration-200 hover:border-[#0957a1]/40 hover:bg-[#e8f3ff] hover:text-[#0957a1] disabled:cursor-not-allowed disabled:opacity-40 [font-family:'Inter',Helvetica]"
                      >
                        Next
                        <ChevronRightIcon className="h-4 w-4" strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* ── RIGHT: Attachment Panel ── */}
            <aside className="flex flex-col gap-3 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              {/* Attachment upload card */}
              <Card className="rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="p-0">
                  <div className="px-[22px] pt-5">
                    <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 text-black">
                      Attachment
                    </h2>
                    <p className="mt-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#595959]">
                      Add supporting files
                    </p>
                  </div>

                  <div className="px-[15px] pb-[22px] pt-[30px]">
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileChange(file);
                      }}
                    />

                    {/* Drop zone */}
                    <div
                      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={[
                        "flex min-h-[280px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed px-6 py-8 transition-all duration-200",
                        isDragging
                          ? "border-[#0957a1] bg-[#ecf5fe] scale-[1.01]"
                          : "border-gray-300 hover:border-[#0957a1]/50 hover:bg-blue-50/20",
                      ].join(" ")}
                    >
                      {uploadedFile ? (
                        <div className="flex flex-col items-center gap-3 animate-in zoom-in-95 duration-300">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ebfaf0]">
                            <CheckCircle2Icon className="h-8 w-8 text-[#00c950]" strokeWidth={1.5} />
                          </div>
                          <p className="text-center [font-family:'Roboto',Helvetica] text-sm font-medium text-[#374151]">
                            {uploadedFile.name}
                          </p>
                          <p className="text-center [font-family:'Roboto',Helvetica] text-xs text-gray-400">
                            {(uploadedFile.size / 1024).toFixed(1)} KB &bull; Click to replace
                          </p>
                        </div>
                      ) : (
                        <>
                          <img
                            className="h-[124px] w-[124px] transition-transform duration-200 group-hover:scale-105"
                            alt="Upload files illustration"
                            src="https://c.animaapp.com/molec567SXjNc2/img/group-40269.png"
                          />
                          <p className="mt-[27px] text-center [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#595959]">
                            Drag &amp; Drop files here, or
                          </p>
                          <Button
                            type="button"
                            className="mt-3 inline-flex h-auto items-center gap-2 rounded-lg bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium text-white transition-all duration-200 hover:bg-[#074d8c] hover:shadow-sm active:scale-[0.98]"
                            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                          >
                            <UploadIcon className="h-5 w-5" strokeWidth={1.75} />
                            Upload File
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Added links list */}
              {addedLinks.length > 0 && (
                <div className="flex flex-col gap-2 animate-fade-up">
                  {addedLinks.map((link, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-[10px] border border-gray-200 bg-white px-4 py-3 shadow-[0px_0px_4px_#00000020] transition-all duration-200 hover:shadow-[0px_0px_6px_#00000030]"
                    >
                      <LinkIcon className="h-4 w-4 shrink-0 text-[#0957a1]" strokeWidth={1.75} />
                      <span className="min-w-0 flex-1 truncate [font-family:'Roboto',Helvetica] text-sm text-[#595959]">
                        {link}
                      </span>
                      <button
                        type="button"
                        onClick={() => setAddedLinks((prev) => prev.filter((_, idx) => idx !== i))}
                        className="text-gray-400 transition-colors duration-150 hover:text-red-500"
                        aria-label="Remove link"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add link button */}
              <Button
                type="button"
                variant="outline"
                onClick={handleAddLink}
                className="h-auto w-full justify-center gap-2 rounded-lg border bg-white px-4 py-4 shadow-[0px_0px_4px_#00000040] transition-all duration-200 hover:bg-gray-50 hover:shadow-[0px_0px_6px_#00000030] active:scale-[0.99]"
              >
                <img
                  className="h-6 w-6"
                  alt="Add link"
                  src="https://c.animaapp.com/molec567SXjNc2/img/material-symbols-add-rounded.svg"
                />
                <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#595959]">
                  Add link
                </span>
              </Button>

              {/* Back to courses */}
              <Button
                type="button"
                variant="ghost"
                onClick={() => navigate("/courses")}
                className="mt-1 h-auto w-full justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-600 shadow-[var(--shadow-xs)] transition-all duration-200 hover:bg-[#e8f3ff] hover:border-[#0957a1]/30 hover:text-[#0957a1] active:scale-[0.98] [font-family:'Roboto',Helvetica]"
              >
                <ChevronLeftIcon className="h-4 w-4" strokeWidth={2} />
                Back to Courses
              </Button>
            </aside>

          </section>
        </section>
      </div>
    </main>
  );
};
