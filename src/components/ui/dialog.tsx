import { Button } from "..";
import { cn } from "@/lib/utils";

type DialogProps = JSX.IntrinsicElements["div"] & {
  title?: string;
  message?: string;
  isDialogOpen?: boolean;
  onCloseDialog: (arg: boolean) => void;
};

const defaultTitle = "Delete this document?";
const defaultMsg =
  "Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.";

const Dialog = ({
  title,
  message,
  isDialogOpen,
  onCloseDialog,
  ...rest
}: DialogProps) => {
  const handleClickBackdrop = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      console.log("Backdrop Clicked!!!");
      onCloseDialog(false);
    }
  };

  return (
    <div
      onClick={handleClickBackdrop}
      className={cn(
        "z-50 fixed justify-center items-center bg-clr-dialog-bkdrp w-full h-dvh hidden",
        {
          flex: isDialogOpen,
        }
      )}
    >
      <div
        className="p-6 bg-clr-dialog-bg rounded w-[21.4375rem]"
        id="deleteDialog"
        {...rest}
      >
        <h3 className="font-slab text-xl font-bold text-clr-dialog-title mb-4">
          {title || defaultTitle}
        </h3>
        <p className="font-slab text-sm leading-6 text-clr-dialog-desc mb-4">
          {message || defaultMsg}
        </p>
        <Button>Confirm & Delete</Button>
      </div>
    </div>
  );
};

export default Dialog;
