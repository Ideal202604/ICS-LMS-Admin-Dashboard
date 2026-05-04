import { useState, useCallback, useEffect, useRef } from "react";
import { XIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "../../../components/ui/dialog";
import { Card, CardContent } from "../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";

interface Question {
  id: number;
  text: string;
}

const initialQuestions: Question[] = [
  { id: 1, text: "249 + 250 = _ _ _ ?" },
  { id: 2, text: "249 + 250 = _ _ _ ?" },
];

interface SelectedQuestionsModalProps {
  open: boolean;
  onClose: () => void;
  onImport?: () => void;
}

export const SelectedQuestionsModal = ({
  open,
  onClose,
  onImport,
}: SelectedQuestionsModalProps): JSX.Element => {
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [removingId, setRemovingId] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setQuestions(initialQuestions);
      setRemovingId(null);
    }
  }, [open]);

  const handleRemove = useCallback((id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      setQuestions((prev) => prev.filter((q) => q.id !== id));
      setRemovingId(null);
    }, 280);
  }, []);

  const selectedCount = questions.length;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
      <DialogContent
        className="max-w-[1068px] gap-0 rounded-[10px] border border-gray-300 bg-[#f1f3f4] p-0 shadow-[0px_16px_48px_rgba(0,0,0,0.18)] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[0.97] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[0.97] duration-250 [&>button]:hidden overflow-hidden"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">Selected Questions</DialogTitle>

        {/* ── Header ── */}
        <header className="flex items-start justify-between gap-4 px-6 pb-4 pt-6 sm:px-6">
          <div className="space-y-[15px]">
            <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-normal leading-8 tracking-[0] text-[#202124]">
              {selectedCount} Question{selectedCount !== 1 ? "s" : ""} Selected
            </h2>
            <p className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#595959]">
              Only the questions that are not imported into the test will be displayed here
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[#595959] transition-all duration-200 hover:bg-black/5 hover:text-[#202124] active:scale-90"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </header>

        {/* ── Table ── */}
        <div className="px-6 pb-6" ref={listRef}>
          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-white">
            {questions.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-300 bg-[#edeef1] hover:bg-[#edeef1]">
                    <TableHead className="h-auto px-4 py-2.5 text-left [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                      Question Detail
                    </TableHead>
                    <TableHead className="h-auto w-[290px] border-l border-gray-300 px-4 py-2.5 text-center [font-family:'Roboto',Helvetica] text-base font-bold leading-7 tracking-[0] text-gray-600">
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {questions.map((question) => {
                    const isRemoving = removingId === question.id;
                    return (
                      <TableRow
                        key={question.id}
                        className={[
                          "h-[58px] border-b border-gray-300 last:border-b-0 transition-all duration-280 ease-out",
                          isRemoving
                            ? "opacity-0 translate-x-4 scale-y-95 max-h-0"
                            : "opacity-100 translate-x-0 scale-y-100 max-h-[80px] hover:bg-[#f8fafc]",
                        ].join(" ")}
                      >
                        <TableCell className="px-4 py-4 align-middle [font-family:'Roboto',Helvetica] text-base font-semibold leading-7 tracking-[0] text-[#111111]">
                          {question.text}
                        </TableCell>
                        <TableCell className="w-[290px] border-l border-gray-300 px-4 py-4 text-center align-middle">
                          <button
                            type="button"
                            onClick={() => handleRemove(question.id)}
                            disabled={isRemoving}
                            className="[font-family:'Roboto',Helvetica] text-base font-normal leading-7 tracking-[0] text-[#e02323] transition-all duration-200 hover:text-[#b91c1c] hover:underline active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
                          >
                            Remove
                          </button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <div className="flex flex-col items-center justify-center py-14 text-center animate-in fade-in duration-300">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <XIcon className="h-5 w-5 text-gray-300" />
                </div>
                <p className="[font-family:'Roboto',Helvetica] text-sm font-medium text-gray-400">
                  No questions selected
                </p>
                <p className="mt-1 [font-family:'Roboto',Helvetica] text-xs text-gray-300">
                  Add questions from the question pool to see them here
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="flex items-center justify-between border-t border-gray-300 bg-[#f8f9fa] px-6 py-3">
          <span className="[font-family:'Roboto',Helvetica] text-sm font-medium text-gray-500">
            {selectedCount} question{selectedCount !== 1 ? "s" : ""} ready to import
          </span>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              className="h-auto rounded-lg border border-gray-300 bg-white px-4 py-2 [font-family:'Roboto',Helvetica] text-sm font-medium text-[#595959] transition-all duration-200 hover:bg-gray-100 active:scale-[0.98]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={() => { if (onImport) onImport(); else onClose(); }}
              disabled={selectedCount === 0}
              className="h-auto rounded-lg bg-[#0957a1] px-5 py-2 [font-family:'Roboto',Helvetica] text-sm font-medium text-white transition-all duration-200 hover:bg-[#074985] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
            >
              Import {selectedCount > 0 ? `${selectedCount} ` : ""}Question{selectedCount !== 1 ? "s" : ""}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
