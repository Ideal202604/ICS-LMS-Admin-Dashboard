import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface ShareDialogOverlaySectionProps {
  acceptingResponses: boolean;
  copiedLink: boolean;
  onAcceptingChange: (value: boolean) => void;
  onCancel: () => void;
  onSave: () => void;
  onCopyLink: () => void;
}

const guestPermissions = [
  {
    initial: "t",
    initialBg: "bg-[#a14835]",
    name: "guest2 (you)",
    email: "guest2@email.com",
    role: "Owner",
  },
];

export const ShareDialogOverlaySection = ({
  acceptingResponses,
  copiedLink,
  onAcceptingChange,
  onCancel,
  onSave,
  onCopyLink,
}: ShareDialogOverlaySectionProps): JSX.Element => {
  const accessItems = [
    {
      id: "editor",
      iconSrc: "https://c.animaapp.com/mor18xk944oqGG/img/group-40246.png",
      iconAlt: "Group",
      title: "Editor View",
      value: "Restricted",
      description: acceptingResponses ? '"This form is accepting responses."' : '"This form is no longer accepting responses."',
      sideLabel: "Owner",
    },
    {
      id: "responder",
      iconSrc: "https://c.animaapp.com/mor18xk944oqGG/img/material-symbols-lock.svg",
      iconAlt: "Material symbols",
      title: "Responder view",
      value: "Anyone with the link",
      description: "Anyone on the internet with the link can respond",
      sideLabel: "Responder",
    },
  ];

  return (
    <section className="relative w-full px-4 py-6">
      <div className="mx-auto w-full max-w-[629px] animate-fade-up">
        <p className="mb-3 text-sm text-[#202124] [font-family:'Roboto',Helvetica]">
          Share &quot;Contact Information&quot;
        </p>

        <Card className="w-full rounded-[10px] border-0 bg-white shadow-[0px_16px_40px_#00000024]">
          <CardContent className="flex flex-col gap-4 p-4 pb-3">
            <header>
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
                Share &quot;Contact Information&quot;
              </h2>
            </header>

            <label className="w-full rounded-[5px] bg-white px-3 py-2.5 shadow-sm ring-1 ring-[#dadce0] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0957a1]">
              <span className="sr-only">Add people or group</span>
              <input
                className="w-full bg-transparent [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] outline-none placeholder:text-[#595959]"
                placeholder="Add People, Group"
              />
            </label>

            <div className="min-w-0 space-y-4">
              <section className="space-y-2">
                <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                  Guests Permissions
                </h3>

                {guestPermissions.map((guest) => (
                  <div
                    key={guest.email}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="flex items-start gap-[18px]">
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${guest.initialBg}`}
                      >
                        <span className="[font-family:'Roboto',Helvetica] text-[11px] font-normal leading-6 tracking-[0] text-white">
                          {guest.initial}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                          {guest.name}
                        </p>
                        <p className="[font-family:'Roboto',Helvetica] text-xs font-normal leading-6 tracking-[0] text-[#595959]">
                          {guest.email}
                        </p>
                      </div>
                    </div>

                    <p className="self-center [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#dadce0]">
                      {guest.role}
                    </p>
                  </div>
                ))}
              </section>

              <section className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="[font-family:'Roboto',Helvetica] text-base font-semibold leading-6 tracking-[0] text-[#595959]">
                    General Access
                  </h3>

                  <button
                    type="button"
                    onClick={() => onAcceptingChange(!acceptingResponses)}
                    className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
                      acceptingResponses ? "bg-[#0957a1]" : "bg-[#dadce0]"
                    }`}
                    aria-pressed={acceptingResponses}
                    aria-label="Toggle accepting responses"
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-transform duration-300 ${
                        acceptingResponses ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="space-y-5">
                  {accessItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4"
                    >
                      <div className="min-w-0">
                        <div className="flex items-start gap-[18px]">
                          <img
                            className="mt-0.5 h-5 w-5 shrink-0"
                            alt={item.iconAlt}
                            src={item.iconSrc}
                          />

                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#202124]">
                                {item.title}
                              </span>

                              <button
                                type="button"
                                className="inline-flex h-[22px] items-center gap-1.5 border-b border-[#d9d9d9] px-2.5 pb-[13px] pt-4 text-left transition-colors duration-300 hover:border-[#0957a1]"
                              >
                                <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
                                  {item.value}
                                </span>
                                <img
                                  className="h-[7.5px] w-[13.5px] shrink-0"
                                  alt="Vector"
                                  src="https://c.animaapp.com/mor18xk944oqGG/img/vector.svg"
                                />
                              </button>
                            </div>

                            <p className="[font-family:'Roboto',Helvetica] text-base font-light italic leading-6 tracking-[0] text-[#595959]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="pt-1 [font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#dadce0]">
                        {item.sideLabel}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <footer className="mt-1 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={onCopyLink}
                className="relative rounded-md transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0957a1]/30"
                aria-label="Copy link"
              >
                <img
                  className="h-6 w-6 shrink-0"
                  alt="Copy link"
                  src="https://c.animaapp.com/mor18xk944oqGG/img/ic-baseline-link.svg"
                />
                {copiedLink && (
                  <span className="absolute left-8 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-[#0957a1] px-2 py-1 text-xs text-white">
                    Copied
                  </span>
                )}
              </button>

              <div className="flex items-center gap-5">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="h-auto rounded-lg border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#0957a1] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c5e2fb] hover:shadow-md active:translate-y-0"
                >
                  Cancel
                </Button>

                <Button
                  type="button"
                  onClick={onSave}
                  className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#084f91] hover:shadow-md active:translate-y-0"
                >
                  Save
                </Button>
              </div>
            </footer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
