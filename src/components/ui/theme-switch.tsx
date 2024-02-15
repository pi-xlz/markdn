import { DarkModeIcon, LightModeIcon } from "@/assets/icons";
import { Switch } from "./switch";

const ThemeSwitch = () => {
  return (
    <div>
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
