import { Button, Doc, ThemeToggle } from "../../components";

const SideMenu = () => {
  return (
    <>
      <header>
        <h2>My Documents</h2>
      </header>
      <div>
        <Button />
        <div>
          <Doc />
          <Doc />
        </div>
      </div>
      <ThemeToggle />
    </>
  );
};

export default SideMenu;
