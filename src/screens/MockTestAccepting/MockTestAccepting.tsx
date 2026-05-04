import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { QuestionnaireFormSection } from "./sections/QuestionnaireFormSection";
import { ShareDialogOverlaySection } from "./sections/ShareDialogOverlaySection";
import { TopNavbarSection } from "./sections/TopNavbarSection";

const floatingToolbarIcons = [
  {
    alt: "Form builder toolbar",
    src: "https://c.animaapp.com/mor18xk944oqGG/img/frame-1321317655.svg",
  },
];

export const MockTestAccepting = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"Questions" | "Responses" | "Settings">("Questions");
  const [showPublishOptions, setShowPublishOptions] = useState(true);
  const [acceptingResponses, setAcceptingResponses] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = async () => {
    const formUrl = `${window.location.origin}/mock-test-accepting`;

    try {
      await navigator.clipboard?.writeText(formUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 1800);
    } catch {
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 1800);
    }
  };

  return (
    <main className="w-full bg-[#f7f9fd] animate-fade-in" data-id="mock-test-accepting">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col bg-[#f7f9fd]">
        <TopNavbarSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onPublish={() => setShowPublishOptions(true)}
        />

        <section className="relative flex w-full justify-center px-4 pb-8 pt-2 sm:px-6 lg:px-[22px]">
          <div className="relative w-full">
            <QuestionnaireFormSection activeTab={activeTab} acceptingResponses={acceptingResponses} />

            <aside className="pointer-events-none absolute right-0 top-[248px] z-10 hidden lg:block">
              {floatingToolbarIcons.map((icon, index) => (
                <img
                  key={`floating-toolbar-${index}`}
                  className="h-[277px] w-12 transition-opacity duration-300 hover:opacity-90"
                  alt={icon.alt}
                  src={icon.src}
                />
              ))}
            </aside>

            {showPublishOptions && (
              <div className="pointer-events-auto absolute inset-x-0 top-[120px] z-20 flex justify-center px-2">
                <Card className="w-full max-w-[244px] border border-[#ef4444] bg-transparent shadow-none sm:max-w-[629px]">
                  <CardContent className="flex min-h-[202px] items-center justify-center p-0 text-center">
                    <ShareDialogOverlaySection
                      acceptingResponses={acceptingResponses}
                      copiedLink={copiedLink}
                      onAcceptingChange={setAcceptingResponses}
                      onCancel={() => setShowPublishOptions(false)}
                      onSave={() => setShowPublishOptions(false)}
                      onCopyLink={handleCopyLink}
                    />
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
