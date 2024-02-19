import { DeleteIcon, LogoIcon, MenuIcon, SaveIcon } from "@/assets/icons";
import { Button, FileName } from "@/components";
// import { Toggle } from "@/components/ui/toggle";

const Toolbar = () => {
  return (
    <header className="w-full flex justify-between">
      {/* <Toggle className="bg-clr-text-dark basis-14 rounded-none self-stretch">
      <MenuIcon />
      </Toggle> */}
      <button className="bg-clr-text-dark w-14 px-4 flex items-center justify-center">
        <MenuIcon />
      </button>
      <div className="w-full flex justify-between bg-clr-highlight-dark py-2 pr-2">
        <div className="hidden">
          <LogoIcon />
        </div>
        <FileName />
        <div className="flex items-center gap-6">
          <button>
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
