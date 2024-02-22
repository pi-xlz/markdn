import { useState } from "react";
import { DeleteIcon, LogoIcon, MenuIcon, SaveIcon } from "@/assets/icons";
import { Button, Dialog, FileName } from "@/components";

const Toolbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className="w-full flex">
      <Dialog
        isDialogOpen={isDialogOpen}
        onCloseDialog={setIsDialogOpen}
      />
      <button className="bg-clr-text-dark max-w-14 px-4 flex items-center justify-center outline-none border-none">
        <MenuIcon />
      </button>
      <div className="flex grow justify-between bg-clr-highlight-dark py-2 pr-2 outline-none border-none">
        <div className="hidden">
          <LogoIcon />
        </div>
        <FileName />
        <div className="flex items-center gap-6">
          <button onClick={() => setIsDialogOpen(true)}>
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
