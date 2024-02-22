import { TitleBar } from "@/components";

const Editor = () => {
  return (
    <section className="grow flex flex-col">
      <TitleBar
        className="hidden"
        type="MARKDOWN"
      />
      <article className="w-full grow p-4 bg-clr-base-bg text-clr-mdn-text">
        <textarea
          autoFocus
          className="resize-none h-full w-full font-mono text-sm leading-6 text-clr-text-prmry caret-clr-text-prmry outline-none border-none"
        ></textarea>
      </article>
    </section>
  );
};

export default Editor;
