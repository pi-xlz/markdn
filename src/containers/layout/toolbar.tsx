import { useEffect, useRef } from "react";
import { DeleteIcon, LogoIcon, MenuIcon, SaveIcon } from "@/assets/icons";
import { Button, Dialog, FileName } from "@/components";
// import { Toggle } from "@/components/ui/toggle";

const Toolbar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleDelete = () => {
    console.log("clicked");
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Node)
      ) {
        dialogRef.current.close();
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [dialogRef]);

  return (
    <header className="w-full flex justify-between">
      {/* <Toggle className="bg-clr-text-dark basis-14 rounded-none self-stretch">
      <MenuIcon />
      </Toggle> */}
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
