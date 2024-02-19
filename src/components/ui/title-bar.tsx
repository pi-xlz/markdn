import { ShowPreviewIcon } from "@/assets/icons";

const TitleBar = () => {
  return (
    <header className=" flex justify-between items-center w-full py-3 px-4 bg-clr-highlight-light text-clr-scndry-100 font-medium text-sm tracking-[2px]">
      <p>MARKDOWN</p>
      <button>
        <ShowPreviewIcon />
      </button>
    </header>
  );
};

export default TitleBar;
