import { useState } from "react";
import { TitleBar } from "./components";
import { Editor, Preview, SideBar, Toolbar } from "./containers";

//! todo: refactor to not use prop drilling

function App() {
  const [isPreview, setIsPreview] = useState(false);
  return (
    <article className="grid h-dvh w-full grid-cols-2">
      <aside className="fixed z-0 flex h-full w-[15.625rem] -translate-x-[15.65rem] flex-col bg-clr-accent-100 px-6">
        <SideBar />
      </aside>
      <main className="flex h-dvh w-screen flex-col ">
        <Toolbar />
        <article className="flex grow flex-col">
          <TitleBar
            isPreview={isPreview}
            setIsPreview={setIsPreview}
            type="NEUTRAL"
          />
          <section className="flex grow flex-col">
            {!isPreview ? <Editor isPreview={isPreview} /> : <Preview />}
          </section>
        </article>
      </main>
    </article>
  );
}

export default App;
