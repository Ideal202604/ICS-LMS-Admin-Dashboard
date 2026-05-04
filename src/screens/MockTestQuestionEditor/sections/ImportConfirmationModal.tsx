import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";

interface ImportConfirmationModalProps {
  open: boolean;
  onClose: () => void;
}

export const ImportConfirmationModal = ({
  open,
  onClose,
}: ImportConfirmationModalProps): JSX.Element => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-[732px] gap-0 rounded-[10px] border border-gray-300 bg-white p-0 shadow-[0px_8px_32px_rgba(0,0,0,0.12)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.97] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.97] duration-250 [&>button]:hidden overflow-hidden"
        aria-describedby="import-confirmation-desc"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Import Confirmation</DialogTitle>
        <DialogDescription id="import-confirmation-desc" className="sr-only">
          Confirmation that questions have been imported successfully
        </DialogDescription>

        <div className="flex min-h-[182px] flex-col justify-between">
          <section className="px-8 pt-11">
            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959] animate-in fade-in slide-in-from-bottom-1 duration-300 delay-100 fill-mode-both">
              Questions are imported to the quiz, Go back to Quiz Builder and verify the questions
            </p>
          </section>

          <footer className="flex justify-end px-8 pb-5">
            <Button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="h-auto rounded-lg border border-gray-300 bg-[#0957a1] px-4 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-white shadow-none transition-all duration-200 hover:bg-[#074985] hover:shadow-md active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-[#0957a1]/40 focus-visible:ring-offset-2"
            >
              Close
            </Button>
          </footer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
