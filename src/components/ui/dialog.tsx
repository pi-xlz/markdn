import { forwardRef } from "react";
import { Button } from "..";

type DialogProps = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  message?: string;
};

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ title, message, ...rest }: DialogProps, ref) => {
    const defaultTitle = "Delete this document?";
    const defaultMsg =
      "Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be reversed.";
    return (
      <dialog
        ref={ref}
        className="z-50 dialog rounded"
        id="deleteDialog"
        {...rest}
      >
        <h3 className="font-slab text-xl font-bold text-clr-text-dark mb-4">
          {title || defaultTitle}
        </h3>
        <p className="font-slab text-sm leading-6 text-clr-scndry-100 mb-4">
          {message || defaultMsg}
        </p>
        <Button>Confirm & Delete</Button>
      </dialog>
    );
  }
);

export default Dialog;
