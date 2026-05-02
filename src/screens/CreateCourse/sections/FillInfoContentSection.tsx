import { useState, useCallback } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const SECTION_TYPES = ["Text", "Video", "Quiz"] as const;
type SectionType = (typeof SECTION_TYPES)[number];

interface CourseSection {
  id: number;
  title: string;
  type: SectionType;
  duration: string;
}

const defaultSections: CourseSection[] = [
  { id: 1, title: "Introduction to the Course", type: "Video", duration: "5:30 hr" },
  { id: 2, title: "Introduction to the Course", type: "Text",  duration: "" },
];

let nextId = 3;

export const FillInfoContentSection = (): JSX.Element => {
  const [sections, setSections]         = useState<CourseSection[]>(defaultSections);
  const [openMenuId, setOpenMenuId]     = useState<number | null>(null);
  const [resourceFile, setResourceFile] = useState<File | null>(null);
  const [resDragging, setResDragging]   = useState(false);

  const updateType = useCallback((id: number, type: SectionType) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, type } : s)));
    setOpenMenuId(null);
  }, []);

  const deleteSection = useCallback((id: number) => {
    setSections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const addSection = useCallback(() => {
    setSections((prev) => [
      ...prev,
      { id: nextId++, title: "New Section", type: "Text", duration: "" },
    ]);
  }, []);

  const updateTitle = useCallback((id: number, title: string) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, title } : s)));
  }, []);

  const updateDuration = useCallback((id: number, duration: string) => {
    setSections((prev) => prev.map((s) => (s.id === id ? { ...s, duration } : s)));
  }, []);

  /* ── Resource upload helpers ── */
  const handleResFile = (file: File) => setResourceFile(file);

  return (
    <div className="space-y-5 p-4 md:p-5 animate-fade-up">

      {/* ── Sections Card ── */}
      <Card className="overflow-visible rounded-lg border border-gray-300 bg-white shadow-none">
        <CardContent className="p-0">
          <section className="relative px-3 pb-5 pt-5">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-bold leading-6 text-black">
              Research Writing &amp; Use of AI
            </h2>

            <div className="mt-5 space-y-4">
              {sections.map((section, index) => (
                <div key={section.id} className="relative group">
                  <div
                    className="flex min-h-[64px] items-center gap-2 rounded-[10px] border border-gray-300
                                bg-gray-50 px-2.5 py-2.5 shadow-[var(--shadow-xs)]
                                transition-shadow duration-200 hover:shadow-md"
                  >
                    {/* Drag handle */}
                    <button
                      type="button"
                      aria-label="Reorder section"
                      className="shrink-0 cursor-grab opacity-50 hover:opacity-100 transition-opacity duration-150 active:cursor-grabbing"
                    >
                      <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="9"  cy="7"  r="1.5"/>
                        <circle cx="15" cy="7"  r="1.5"/>
                        <circle cx="9"  cy="12" r="1.5"/>
                        <circle cx="15" cy="12" r="1.5"/>
                        <circle cx="9"  cy="17" r="1.5"/>
                        <circle cx="15" cy="17" r="1.5"/>
                      </svg>
                    </button>

                    <div className="grid flex-1 grid-cols-1 gap-3 md:grid-cols-[minmax(220px,288px)_minmax(220px,288px)_minmax(160px,273px)]">

                      {/* Title field */}
                      <div className="flex min-h-[44px] items-center rounded-[10px] border border-gray-300 bg-white px-2.5 py-2.5 shadow-[var(--shadow-xs)] transition-all duration-150 focus-within:ring-1 focus-within:ring-[#0957a1]/30">
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => updateTitle(section.id, e.target.value)}
                          className="w-full bg-transparent text-sm text-gray-500 outline-none placeholder:text-gray-400 [font-family:'Inter',Helvetica]"
                          placeholder="Section title"
                        />
                      </div>

                      {/* Type dropdown */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setOpenMenuId(openMenuId === section.id ? null : section.id)}
                          className="flex min-h-[44px] w-full items-center gap-2 rounded-[10px] border border-gray-300
                                     bg-white px-2.5 py-2.5 text-left shadow-[var(--shadow-xs)]
                                     transition-all duration-150 hover:border-[#0957a1]/50 focus:outline-none
                                     focus:ring-1 focus:ring-[#0957a1]/30"
                        >
                          <span className="flex-1 text-sm text-gray-500 [font-family:'Inter',Helvetica]">
                            {section.type}
                          </span>
                          <svg
                            className={`h-3 w-3 shrink-0 text-gray-500 transition-transform duration-200 ${openMenuId === section.id ? "rotate-180" : ""}`}
                            viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2"
                          >
                            <path d="M1 1l5 5 5-5" />
                          </svg>
                        </button>

                        {openMenuId === section.id && (
                          <Card className="absolute left-0 top-[48px] z-30 w-full rounded-md border border-gray-300 bg-white shadow-[0px_0px_4px_#00000040] animate-fade-in">
                            <CardContent className="p-3">
                              <div className="flex flex-col items-start gap-3">
                                {SECTION_TYPES.map((option) => (
                                  <button
                                    key={option}
                                    type="button"
                                    onClick={() => updateType(section.id, option)}
                                    className={`text-sm transition-colors duration-100 [font-family:'Inter',Helvetica] hover:text-[#0957a1] ${
                                      option === section.type
                                        ? "font-semibold text-[#0957a1]"
                                        : "font-normal text-gray-700"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </div>

                      {/* Duration field */}
                      <div className="flex min-h-[44px] items-center rounded-[10px] border border-gray-300 bg-white px-2.5 py-2.5 shadow-[var(--shadow-xs)] transition-all duration-150 focus-within:ring-1 focus-within:ring-[#0957a1]/30">
                        <input
                          type="text"
                          value={section.duration}
                          onChange={(e) => updateDuration(section.id, e.target.value)}
                          className="w-full bg-transparent text-sm text-gray-500 outline-none placeholder:text-gray-400 [font-family:'Inter',Helvetica]"
                          placeholder="e.g. 5:30 hr"
                        />
                      </div>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      aria-label="Delete section"
                      onClick={() => deleteSection(section.id)}
                      className="shrink-0 opacity-50 transition-all duration-150 hover:opacity-100 hover:scale-110 group-hover:opacity-70"
                    >
                      <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                type="button"
                onClick={addSection}
                className="h-auto rounded-lg bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-white transition-all duration-200 hover:bg-[#084a89] active:scale-[0.98]"
              >
                + Add Section
              </Button>
            </div>
          </section>
        </CardContent>
      </Card>

      {/* ── Course Resources Card ── */}
      <Card className="rounded-[10px] border-0 bg-white shadow-none">
        <CardContent className="px-4 py-5">
          <section>
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 text-gray-900">
              Course Resources
            </h2>
            <div
              onDragOver={(e) => { e.preventDefault(); setResDragging(true); }}
              onDragLeave={() => setResDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setResDragging(false);
                const file = e.dataTransfer.files[0];
                if (file) handleResFile(file);
              }}
              onClick={() => document.getElementById("resource-file-input")?.click()}
              className={`mt-2 flex min-h-[212px] cursor-pointer flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-dashed px-3 py-2.5 shadow-[var(--shadow-xs)] transition-all duration-200 ${
                resDragging
                  ? "border-[#0957a1] bg-[#ecf5fe]"
                  : "border-gray-300 bg-white hover:border-[#0957a1]/50 hover:bg-blue-50/20"
              }`}
            >
              <input
                id="resource-file-input"
                type="file"
                accept=".pdf,.zip,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleResFile(file);
                }}
              />
              {resourceFile ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    <svg className="h-8 w-8 text-[#0957a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] text-base font-medium text-[#0957a1]">
                    {resourceFile.name}
                  </p>
                  <p className="[font-family:'Roboto',Helvetica] text-sm text-gray-400">
                    {(resourceFile.size / 1024).toFixed(1)} KB &bull; Click to replace
                  </p>
                </div>
              ) : (
                <>
                  <svg className="h-[72px] w-[72px] opacity-50 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-center [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-gray-500">
                    Upload course materials
                    <br />
                    <span className="text-sm font-normal text-gray-400">PDF, ZIP, documents up to 50MB</span>
                  </p>
                </>
              )}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};
