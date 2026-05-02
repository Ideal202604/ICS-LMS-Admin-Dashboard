import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface FormField {
  id: string;
  label: string;
  required: boolean;
  value: string;
}

/* ─── Static data ───────────────────────────────────────────────────────── */
const initialFields: FormField[] = [
  { id: "name",  label: "Name",         required: true, value: "" },
  { id: "email", label: "Email",        required: true, value: "" },
  { id: "phone", label: "Phone Number", required: true, value: "" },
];

const sideToolbarIcons = [
  {
    alt: "Add item",
    src: "https://c.animaapp.com/moo70pelMpFarp/img/frame-1321317665.svg",
  },
];

/* ─── MockTestForm ──────────────────────────────────────────────────────── */
export const MockTestForm = (): JSX.Element => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("questions");
  const [fields, setFields] = useState<FormField[]>(initialFields);
  const [titleFocused, setTitleFocused] = useState(false);
  const [descFocused, setDescFocused]   = useState(false);
  const [published, setPublished]       = useState(false);

  const handleFieldChange = (id: string, value: string) => {
    setFields((prev) =>
      prev.map((f) => (f.id === id ? { ...f, value } : f))
    );
  };

  return (
    <main className="min-h-screen bg-[#f3f4f8] animate-[fadeIn_0.35s_ease-out]">
      <style>{`
        @keyframes fadeIn   { from { opacity: 0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        @keyframes slideDown{ from { opacity: 0; transform: translateY(-6px); } to { opacity:1; transform: translateY(0); } }
        @keyframes cardIn   { from { opacity: 0; transform: translateY(12px) scale(0.99); } to { opacity:1; transform: translateY(0) scale(1); } }
      `}</style>

      <section
        aria-label="Mock test form builder"
        className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col bg-[#f3f4f8]"
      >
        {/* ── Header ── */}
        <header
          className="sticky top-0 z-20 bg-white shadow-[0px_4px_8px_#00000025]"
          style={{ animation: "slideDown 0.3s ease-out" }}
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col">
            {/* Top row */}
            <div className="flex min-h-[86px] items-start justify-between px-6 pt-3 pb-2 md:px-8">
              {/* Logo */}
              <button
                type="button"
                onClick={() => navigate("/mock-test")}
                className="flex items-start transition-opacity duration-200 hover:opacity-80 active:scale-95"
                aria-label="Go to mock test listing"
              >
                <img
                  className="h-[75px] w-20 object-contain"
                  alt="Logo"
                  src="https://c.animaapp.com/moo70pelMpFarp/img/ics-png--1--1.png"
                />
              </button>

              {/* Right actions */}
              <div className="flex items-center gap-3 pt-[2px]">
                <img
                  className="shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70"
                  alt="Notifications"
                  src="https://c.animaapp.com/moo70pelMpFarp/img/frame-1321317648.svg"
                />
                <Button
                  type="button"
                  onClick={() => setPublished((p) => !p)}
                  className={[
                    "h-auto rounded-lg border px-4 py-2 text-base font-medium [font-family:'Roboto',Helvetica] transition-all duration-200 active:scale-[0.97]",
                    published
                      ? "border-green-300 bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700"
                      : "border-gray-300 bg-[#d1e9ff] text-[#0957a1] hover:bg-[#b8d9f5] hover:text-[#0957a1]",
                  ].join(" ")}
                >
                  {published ? "Published ✓" : "Publish"}
                </Button>
                <img
                  className="h-6 w-6 shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70"
                  alt="More options"
                  src="https://c.animaapp.com/moo70pelMpFarp/img/frame.svg"
                />
                <button
                  type="button"
                  aria-label="User avatar"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0957a1] p-1 transition-all duration-200 hover:bg-[#0747882] active:scale-90 hover:shadow-md"
                >
                  <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white">
                    J
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom row — breadcrumb + tabs */}
            <div className="px-[30px] pb-[6px]">
              <div className="flex items-center gap-[22px]">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-8 text-[#202124] transition-colors duration-150 hover:text-[#0957a1] hover:underline"
                >
                  Back
                </button>
                <img
                  className="w-[53px] shrink-0"
                  alt="Breadcrumb"
                  src="https://c.animaapp.com/moo70pelMpFarp/img/frame-1321317649.svg"
                />
                <div className="flex flex-1 justify-center">
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-auto"
                  >
                    <TabsList className="h-auto gap-2.5 rounded-none border-0 bg-transparent p-0 shadow-none">
                      {[
                        { value: "questions", label: "Questions" },
                        { value: "responses", label: "Responses" },
                        { value: "settings",  label: "Settings"  },
                      ].map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className="h-[27px] rounded-none border-b-[3px] border-transparent px-2.5 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-black shadow-none transition-colors duration-150 data-[state=active]:border-[#0957a1] data-[state=active]:bg-transparent data-[state=active]:text-[#0957a1] data-[state=active]:shadow-none hover:text-[#0957a1]"
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <section className="px-[30px] pb-16 pt-[14px]">
          {activeTab === "questions" && (
            <div className="relative">
              {/* Form cards */}
              <div className="max-w-[676px] space-y-[4px]">

                {/* Title card */}
                <Card
                  className={[
                    "rounded-[10px] border bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-200",
                    titleFocused ? "border-[#0957a1] shadow-[0px_0px_8px_#0957a120]" : "border-[#dedede]",
                  ].join(" ")}
                  style={{ animation: "cardIn 0.3s ease-out" }}
                >
                  <CardContent
                    className="px-[14px] pb-[18px] pt-[16px]"
                    onFocus={() => setTitleFocused(true)}
                    onBlur={() => setTitleFocused(false)}
                  >
                    <img
                      className="h-[29px] w-[259.67px]"
                      alt="Form title"
                      src="https://c.animaapp.com/moo70pelMpFarp/img/frame-1321317581.svg"
                    />
                    <p
                      contentEditable
                      suppressContentEditableWarning
                      className={[
                        "mt-[8px] cursor-text outline-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 transition-colors duration-150",
                        descFocused ? "text-[#202124]" : "text-[#595959]",
                      ].join(" ")}
                      onFocus={() => setDescFocused(true)}
                      onBlur={() => setDescFocused(false)}
                    >
                      Add&nbsp;&nbsp;description
                    </p>
                  </CardContent>
                </Card>

                {/* Field cards */}
                {fields.map((field, idx) => (
                  <Card
                    key={field.id}
                    className="rounded-[10px] border border-[#dedede] bg-white shadow-[0px_0px_4px_#00000040] transition-all duration-200 hover:border-[#aac4e0] hover:shadow-[0px_0px_8px_#00000020] focus-within:border-[#0957a1] focus-within:shadow-[0px_0px_8px_#0957a120]"
                    style={{ animation: `cardIn ${0.3 + idx * 0.06}s ease-out` }}
                  >
                    <CardContent className="px-[18px] pb-[16px] pt-[14px]">
                      <h2 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                        {field.label}
                        {field.required && (
                          <span className="text-[#e02323]">*</span>
                        )}
                      </h2>
                      <div className="mt-[10px] w-full max-w-[345px] border-b border-[#595959] px-1 pb-[6px] transition-colors duration-150 focus-within:border-[#0957a1]">
                        <input
                          type={field.id === "email" ? "email" : field.id === "phone" ? "tel" : "text"}
                          value={field.value}
                          onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          placeholder="Short answer text"
                          className="w-full bg-transparent outline-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 text-[#595959] placeholder:text-[#595959]/60"
                          aria-label={field.label}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Side toolbar */}
              <aside className="absolute right-[18px] top-[80px] hidden md:flex">
                {sideToolbarIcons.map((icon) => (
                  <img
                    key={icon.src}
                    className="h-[318px] w-12 transition-opacity duration-200 hover:opacity-80 cursor-pointer"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ))}
              </aside>
            </div>
          )}

          {activeTab === "responses" && (
            <div
              className="flex max-w-[676px] flex-col items-center justify-center rounded-[10px] border border-[#dedede] bg-white px-8 py-16 shadow-[0px_0px_4px_#00000040]"
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d1e9ff]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0957a1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="[font-family:'Inter',Helvetica] text-xl font-semibold text-[#202124]">No responses yet</h3>
              <p className="mt-2 text-center [font-family:'Roboto',Helvetica] text-base text-[#595959]">
                Responses will appear here once the form is published and submissions are received.
              </p>
            </div>
          )}

          {activeTab === "settings" && (
            <div
              className="max-w-[676px] space-y-4"
              style={{ animation: "fadeIn 0.3s ease-out" }}
            >
              <Card className="rounded-[10px] border border-[#dedede] bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="px-6 py-5">
                  <h3 className="[font-family:'Inter',Helvetica] text-lg font-semibold text-[#202124]">Form Settings</h3>
                  <Separator className="my-3" />
                  <div className="space-y-4">
                    {[
                      { label: "Collect email addresses",   id: "collect-email" },
                      { label: "Allow one response",        id: "one-response"  },
                      { label: "Show progress bar",        id: "progress-bar"  },
                      { label: "Shuffle question order",   id: "shuffle"       },
                    ].map((setting) => (
                      <label
                        key={setting.id}
                        htmlFor={setting.id}
                        className="flex cursor-pointer items-center justify-between gap-4 group"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal text-[#424242] group-hover:text-[#0957a1] transition-colors duration-150">
                          {setting.label}
                        </span>
                        <input
                          type="checkbox"
                          id={setting.id}
                          className="h-4 w-4 cursor-pointer accent-[#0957a1]"
                        />
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[10px] border border-[#dedede] bg-white shadow-[0px_0px_4px_#00000040]">
                <CardContent className="px-6 py-5">
                  <h3 className="mb-3 [font-family:'Inter',Helvetica] text-lg font-semibold text-[#202124]">Presentation</h3>
                  <Separator className="mb-3" />
                  <div className="space-y-4">
                    {[
                      { label: "Show confirmation message", id: "confirm-msg"    },
                      { label: "Display header image",      id: "header-img"     },
                    ].map((setting) => (
                      <label
                        key={setting.id}
                        htmlFor={setting.id}
                        className="flex cursor-pointer items-center justify-between gap-4 group"
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-base font-normal text-[#424242] group-hover:text-[#0957a1] transition-colors duration-150">
                          {setting.label}
                        </span>
                        <input
                          type="checkbox"
                          id={setting.id}
                          className="h-4 w-4 cursor-pointer accent-[#0957a1]"
                        />
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </section>
      </section>
    </main>
  );
};
