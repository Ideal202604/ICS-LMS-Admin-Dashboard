import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Switch } from "../../../components/ui/switch";

const shortAnswerFields = [
  { label: "Name", required: true },
  { label: "Email", required: true },
  { label: "Phone Number", required: true },
];

const multipleChoiceOptions = ["New Delhi.", "Kolhapur", "Mumbai.", "Pune ."];

export const FormBuilderCanvasSection = (): JSX.Element => {
  return (
    <section className="relative w-full max-w-[902px]">
      <div className="mb-2.5 text-[0px] leading-none text-transparent">
        What I see in the image: a stacked form builder canvas with white cards,
        rounded corners, soft shadows, a yellow-highlighted active title card,
        short-answer question cards for Name, Email, and Phone Number, and a
        highlighted multiple-choice question card for Capital of India with four
        options, toolbar icons, a question type selector, and a footer row with
        actions and a Required switch.
      </div>
      <div className="flex w-full flex-col items-start gap-2.5">
        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-0">
            <div className="flex min-h-[234px] flex-col px-4 pt-[18px]">
              <header className="flex items-start justify-between gap-4">
                <div className="flex h-[51px] w-full max-w-[490px] items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                  <h2 className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                    Untitled Title
                  </h2>
                </div>
                <img
                  className="shrink-0"
                  alt="Frame"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317663.svg"
                />
              </header>
              <div className="mt-[10px]">
                <img
                  className="h-5 w-[134px]"
                  alt="Frame"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317581.svg"
                />
              </div>
              <div className="mt-[48px] flex w-full max-w-[650px] items-center gap-2.5 p-2.5">
                <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                  Description (optional)
                </p>
              </div>
              <div className="mt-auto w-full border-t border-transparent pb-[49px]">
                <img
                  className="h-px w-full"
                  alt="Line"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/line-1682.svg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {shortAnswerFields.slice(0, 1).map((field) => (
          <Card
            key={field.label}
            className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]"
          >
            <CardContent className="px-[26px] py-7">
              <article className="flex min-h-[90px] flex-col">
                <h3 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                  {field.label}
                  {field.required ? (
                    <span className="text-[#e02323]">*</span>
                  ) : null}
                </h3>
                <div className="mt-[10px] flex w-full max-w-[650px] items-center gap-2.5 border-b border-[#595959] p-2.5">
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                    Short answer text
                  </p>
                </div>
              </article>
            </CardContent>
          </Card>
        ))}

        <Card className="w-full overflow-hidden rounded-[10px] border-0 border-l-[5px] border-l-[#f7b902] bg-white shadow-[0px_0px_4px_#00000040]">
          <CardContent className="p-0">
            <article className="flex min-h-[394px] flex-col px-4 pt-[18px]">
              <header className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 flex-1 flex-wrap items-center gap-[20px] lg:flex-nowrap lg:gap-[41px]">
                  <div className="flex h-[51px] w-full max-w-[490px] items-center gap-2.5 border-b border-gray-600 bg-[#4b55631a] p-2.5">
                    <h3 className="[font-family:'Inter',Helvetica] text-base font-semibold leading-8 tracking-[0] text-gray-600">
                      Capital of India
                    </h3>
                  </div>
                  <img
                    className="h-6 w-6 shrink-0"
                    alt="Material symbols"
                    src="https://c.animaapp.com/moqt0jbqy3eJFd/img/material-symbols-image-outline.svg"
                  />
                  <button
                    type="button"
                    className="flex h-auto w-full max-w-[263px] items-center gap-1.5 rounded-[5px] border border-solid border-[#d9d9d9] p-2.5 text-left"
                  >
                    <span className="relative block h-5 w-5 rounded-[10px] border border-solid border-[#595959]">
                      <span className="absolute left-[5px] top-[5px] block h-2.5 w-2.5 rounded-[5px] bg-[#595959]" />
                    </span>
                    <span className="[font-family:'Roboto',Helvetica] w-[191px] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                      Multiple choice
                    </span>
                    <img
                      className="h-[9.5px] w-[16.5px] shrink-0"
                      alt="Vector"
                      src="https://c.animaapp.com/moqt0jbqy3eJFd/img/vector-1.svg"
                    />
                  </button>
                </div>
              </header>
              <div className="mt-[5px] ml-[10px] w-6">
                <img
                  className="h-6 w-6"
                  alt="Material symbols"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/material-symbols-image-outline.svg"
                />
              </div>
              <div className="mt-[-6px] flex w-full max-w-[650px] flex-col items-start gap-2.5 pl-[10px]">
                {multipleChoiceOptions.map((option, index) => (
                  <div
                    key={`${option}-${index}`}
                    className="flex w-full items-center gap-2.5 p-2.5"
                  >
                    <span className="block h-5 w-5 rounded-[10px] bg-[#d9d9d9]" />
                    <span className="[font-family:'Roboto',Helvetica] flex-1 text-base font-normal leading-6 tracking-[0] text-[#595959]">
                      {option}
                    </span>
                    <img
                      className="h-6 w-6 shrink-0"
                      alt="Hugeicons cancel"
                      src="https://c.animaapp.com/moqt0jbqy3eJFd/img/hugeicons-cancel-01.svg"
                    />
                  </div>
                ))}
              </div>
              <footer className="mt-auto pb-[19px]">
                <img
                  className="h-px w-full"
                  alt="Line"
                  src="https://c.animaapp.com/moqt0jbqy3eJFd/img/line-1682.svg"
                />
                <div className="mt-[10.5px] flex justify-end pr-3">
                  <div className="flex items-center justify-center gap-[11px]">
                    <img
                      className="shrink-0"
                      alt="Frame"
                      src="https://c.animaapp.com/moqt0jbqy3eJFd/img/frame-1321317661.svg"
                    />
                    <div className="flex items-center gap-2.5">
                      <span className="[font-family:'Roboto',Helvetica] w-[86px] text-right text-base font-normal leading-6 tracking-[0] text-[#595959]">
                        Required
                      </span>
                      <Switch
                        checked={false}
                        aria-label="Required"
                        className="data-[state=unchecked]:bg-[#b9b9b9]"
                      />
                    </div>
                    <img
                      className="h-6 w-6 shrink-0"
                      alt="Svg spinners dots"
                      src="https://c.animaapp.com/moqt0jbqy3eJFd/img/svg-spinners-3-dots-fade.svg"
                    />
                  </div>
                </div>
              </footer>
            </article>
          </CardContent>
        </Card>
        {shortAnswerFields.slice(1).map((field) => (
          <Card
            key={field.label}
            className="w-full overflow-hidden rounded-[10px] border-0 bg-white shadow-[0px_0px_4px_#00000040]"
          >
            <CardContent className="px-[26px] py-7">
              <article className="flex min-h-[90px] flex-col">
                <h3 className="[font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                  {field.label}
                  {field.required ? (
                    <span className="text-[#e02323]">*</span>
                  ) : null}
                </h3>
                <div className="mt-[10px] w-full max-w-[650px]">
                  <Input
                    defaultValue="Short answer text"
                    readOnly
                    className="h-auto rounded-none border-0 border-b border-[#595959] px-2.5 py-2.5 shadow-none [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </article>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
