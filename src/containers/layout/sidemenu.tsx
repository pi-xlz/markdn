import { Button, Doc, ThemeSwitch } from "../../components";

const SideMenu = () => {
  return (
    <>
      <header>
        <h2>My Documents</h2>
      </header>
      <div>
        <Button>+ New Document</Button>
        <div>
          <Doc />
          <Doc />
        </div>
      </div>
      <ThemeSwitch />
    </>
  );
};

export default SideMenu;
