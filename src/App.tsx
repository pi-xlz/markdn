import { Editor, Preview, SideBar, Toolbar } from "./containers";

function App() {
  return (
    <article>
      <aside>
        <SideBar />
      </aside>
      <main>
        <Toolbar />
        <article>
          <Editor />
          <Preview />
        </article>
      </main>
    </article>
  );
}

export default App;
