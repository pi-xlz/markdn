import { useRef } from "react";
import { DeleteIcon, LogoIcon, MenuIcon, SaveIcon } from "@/assets/icons";
import { Button, Dialog, FileName } from "@/components";

const Toolbar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <header
      // onClick={(e) => {
      //   if (dialogRef.current && e.target === dialogRef.current)
      //     dialogRef.current?.close();
      // }}
      className="w-full flex justify-between"
    >
      <Dialog ref={dialogRef} />
      <button className="bg-clr-text-dark w-14 px-4 flex items-center justify-center">
        <MenuIcon />
      </button>
      <div className="w-full flex justify-between bg-clr-highlight-dark py-2 pr-2">
        <div className="hidden">
          <LogoIcon />
        </div>
        <FileName />
        <div className="flex items-center gap-6">
          <button onClick={handleDelete}>
            <DeleteIcon />
          </button>
          <Button
            withIcon
            icon={<SaveIcon />}
            responsive
          >
            Save Changes
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Toolbar;
