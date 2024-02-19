import { TitleBar } from "./components";
import { Editor, Preview, SideBar, Toolbar } from "./containers";

function App() {
  return (
    <article className="h-dvh grid grid-cols-2 w-full">
      <aside className="-translate-x-[15.625rem] w-[15.625rem] fixed bg-clr-accent-100 px-6 h-full z-50 flex flex-col">
        <SideBar />
      </aside>
      <main className="w-screen">
        <Toolbar />
        <article>
          <TitleBar />
          <Editor />
          <Preview />
        </article>
      </main>
    </article>
  );
}

export default App;
