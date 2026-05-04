import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";

interface PublishedOptionsModalSectionProps {
  acceptingResponses: boolean;
  copiedLink: boolean;
  onAcceptingChange: (checked: boolean) => void;
  onCancel: () => void;
  onSave: () => void;
  onCopyLink: () => void;
}

export const PublishedOptionsModalSection = ({
  acceptingResponses,
  copiedLink,
  onAcceptingChange,
  onCancel,
  onSave,
  onCopyLink,
}: PublishedOptionsModalSectionProps): JSX.Element => {
  const [manageMessageVisible, setManageMessageVisible] = useState(false);

  return (
    <section className="w-full">
      <Card className="mx-auto w-full max-w-[629px] overflow-hidden rounded-[10px] border-0 bg-white shadow-none">
        <CardContent className="p-0">
          <header className="px-[26px] pb-[25px] pt-[27px]">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
              Published Options
            </h2>
          </header>

          <section className="px-[31px] pb-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-start gap-2.5">
                <img
                  className="mt-0.5 h-6 w-6 shrink-0"
                  alt="Mdi playlist edit"
                  src="https://c.animaapp.com/moqzlycwD1XIkf/img/mdi-playlist-edit.svg"
                />
                <div className="min-w-0">
                  <h3 className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-heading">
                    Accepting responses
                  </h3>
                </div>
              </div>
              <Switch
                checked={acceptingResponses}
                onCheckedChange={onAcceptingChange}
                aria-label="Accepting responses"
                className="data-[state=checked]:bg-[#0957a1] data-[state=unchecked]:bg-gray-300"
              />
            </div>
            <p className="mt-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-heading">
              Responders will see this message when the form is closed for responses
            </p>
            <p className="mt-2 [font-family:'Roboto',Helvetica] text-base font-light italic leading-6 tracking-[0] text-[#595959]">
              {acceptingResponses ? "\"This form is accepting responses.\"" : "\"This form is no longer accepting responses.\""}
            </p>
          </section>

          <Separator className="bg-[#d9d9d9]" />

          <section className="px-[31px] py-[14px]">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <span className="h-6 w-6 shrink-0" aria-hidden="true" />
                  <h3 className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-heading">
                    Responders
                  </h3>
                </div>
                <div className="ml-11 mt-[10px] flex items-center gap-2.5">
                  <img
                    className="mt-0.5 h-5 w-5 shrink-0"
                    alt="Group"
                    src="https://c.animaapp.com/moqzlycwD1XIkf/img/group-40246.png"
                  />
                  <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-sub-heading">
                    Anyone with the link
                  </p>
                </div>
                {manageMessageVisible && (
                  <p className="ml-11 mt-2 animate-fade-in [font-family:'Roboto',Helvetica] text-sm leading-5 text-[#0957a1]">
                    Link access is enabled for all responders.
                  </p>
                )}
              </div>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setManageMessageVisible((visible) => !visible)}
                className="h-auto self-end rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dcff] hover:text-[#0957a1] active:scale-[0.97]"
              >
                Manage
              </Button>
            </div>
          </section>

          <Separator className="bg-[#d9d9d9]" />

          <footer className="flex items-center justify-between px-[31px] py-4">
            <button
              type="button"
              onClick={onCopyLink}
              className="relative rounded-md transition-all duration-200 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#0957a1] focus:ring-offset-2 active:scale-95"
              aria-label="Copy form link"
            >
              <img
                className="h-6 w-6 shrink-0"
                alt="Ic baseline link"
                src="https://c.animaapp.com/moqzlycwD1XIkf/img/ic-baseline-link.svg"
              />
              {copiedLink && (
                <span className="absolute left-1/2 top-8 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-[#0957a1] px-2 py-1 [font-family:'Roboto',Helvetica] text-xs text-white shadow-md animate-fade-in">
                  Link copied
                </span>
              )}
            </button>

            <div className="flex items-center gap-5">
              <Button
                type="button"
                variant="secondary"
                onClick={onCancel}
                className="h-auto min-w-[81px] rounded-lg border border-gray-300 bg-[#d1e9ff] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-[#0957a1] transition-all duration-200 hover:bg-[#b8dcff] hover:text-[#0957a1] active:scale-[0.97]"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={onSave}
                className="h-auto min-w-[67px] rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 text-white transition-all duration-200 hover:bg-[#084a88] hover:shadow-sm active:scale-[0.97]"
              >
                Save
              </Button>
            </div>
          </footer>
        </CardContent>
      </Card>
    </section>
  );
};
