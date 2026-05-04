import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface ImportConfirmationNotificationProps {
  open: boolean;
  onClose: () => void;
}

export const ImportConfirmationNotification = ({
  open,
  onClose,
}: ImportConfirmationNotificationProps): JSX.Element | null => {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true));
      });
    } else {
      setAnimating(false);
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!visible) return null;

  const message =
    "Questions are imported to the quiz, Go back to Quiz Builder and verify the questions";

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${animating ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"}`}
      onClick={onClose}
    >
      <Card
        className={`w-full max-w-[732px] rounded-[10px] border border-gray-300 bg-white shadow-lg transition-all duration-300 ${animating ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent className="flex min-h-[182px] flex-col justify-between p-0">
          <section className="px-8 pt-11">
            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
              {message}
            </p>
          </section>
          <footer className="flex justify-end px-8 pb-5">
            <Button
              type="button"
              onClick={onClose}
              className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white transition-all duration-200 hover:bg-[#0957a1]/90 hover:shadow-md active:scale-[0.97]"
            >
              Close
            </Button>
          </footer>
        </CardContent>
      </Card>
    </div>
  );
};
