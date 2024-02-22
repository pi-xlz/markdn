import { useEffect } from "react";
import { TitleBar } from "./components";
import { Editor, Preview, SideBar, Toolbar } from "./containers";

function App() {
  useEffect(() => {
    // const theme: "light" | "dark" = "dark";
    document.body.classList.add("light");
  }, []);
  return (
    <article className="h-dvh grid grid-cols-2 w-full">
      <aside className="-translate-x-[15.65rem] w-[15.625rem] fixed bg-clr-accent-100 px-6 h-full z-0 flex flex-col">
        <SideBar />
      </aside>
      <main className="w-screen h-dvh flex flex-col">
        <Toolbar />
        <article className="grow flex flex-col">
          <TitleBar type="NEUTRAL" />
          <section className="grow flex flex-col">
            <Editor />
            {/* <Preview /> */}
          </section>
        </article>
      </main>
    </article>
  );
}

export default App;
