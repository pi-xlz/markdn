import { LogoIcon } from "@/assets/icons";
import { Button, Doc, ThemeSwitch } from "../../components";

const SideMenu = () => {
  return (
    <>
      <div>
        <div className="w-full py-[1.6875rem] pr-[5.9375rem]">
          <LogoIcon />
        </div>
        <header className="flex flex-col gap-[1.8125rem]">
          <h2 className="text-clr-scndry-100 uppercase text-sm font-medium tracking-[2px]">
            My Documents
          </h2>
          <Button>+ New Document</Button>
        </header>
        <div className="pt-6 flex flex-col gap-[1.625rem]">
          <Doc
            createdAt=""
            title="untitled-document.md"
          />
          <Doc
            createdAt=""
            title="welcome.md"
          />
        </div>
      </div>
      <div className="mt-auto flex justify-center items-center w-full py-[1.6875rem]">
        <ThemeSwitch />
      </div>
    </>
  );
};

export default SideMenu;
