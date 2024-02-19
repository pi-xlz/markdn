import { Button } from "..";

interface DialogProps {
  title: string;
  message: string;
}

const Dialog = ({ title, message }: DialogProps) => {
  return (
    <dialog>
      <h3>{title}</h3>
      <p>{message}</p>
      <Button>Cofirm & Delete</Button>
    </dialog>
  );
};

export default Dialog;
