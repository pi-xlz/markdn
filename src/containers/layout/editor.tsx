import { TitleBar } from "@/components";

const Editor = ({ isPreview }: { isPreview: boolean }) => {
  return (
    <section className="flex grow flex-col">
      <TitleBar isPreview={isPreview} className="hidden" type="MARKDOWN" />
      <article className="w-full grow bg-clr-base-bg p-4 text-clr-mdn-text">
        <textarea
          autoFocus
          className=" text-clr-text-prmry caret-clr-text-prmry bg-clr-editor-bg h-full w-full resize-none border-none font-mono text-sm leading-6 outline-none"
        ></textarea>
      </article>
    </section>
  );
};

export default Editor;
