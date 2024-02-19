import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { Switch } from "./switch";

const ThemeSwitch = () => {
  return (
    <div className="w-full max-w-[10rem] flex justify-center items-center gap-3">
      <span>
        <DarkModeIcon />
      </span>
      <Switch />
      <span>
        <LightModeIcon />
      </span>
    </div>
  );
};

export default ThemeSwitch;
