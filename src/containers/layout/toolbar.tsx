import { DeleteIcon, LogoIcon, MenuIcon, SaveIcon } from "@/assets/icons";
import { Button, FileName } from "@/components";
import { Toggle } from "@/components/ui/toggle";

const Toolbar = () => {
  return (
    <header>
      <div>
        <Toggle>
          <MenuIcon />
        </Toggle>
        <div>
          <LogoIcon />
        </div>
        <FileName />
      </div>
      <div>
        <div>
          <DeleteIcon />
        </div>
        <Button
          withIcon
          icon={<SaveIcon />}
        >
          Save Changes
        </Button>
      </div>
    </header>
  );
};

export default Toolbar;
