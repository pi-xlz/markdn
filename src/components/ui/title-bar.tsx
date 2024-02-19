import { ShowPreviewIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

type TitleBarProps = JSX.IntrinsicElements["header"] & {
  type: "MARKDOWN" | "PREVIEW" | "NEUTRAL";
};

const TitleBar = ({ type, className }: TitleBarProps) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center w-full py-3 px-4 bg-clr-highlight-light text-clr-scndry-100 font-medium text-sm tracking-[2px]",
        className
      )}
    >
      <Bar type={type} />
    </header>
  );
};

export default TitleBar;

const Bar = ({ type }: { type: TitleBarProps["type"] }) => {
  if (type === "MARKDOWN") return <p>MARKDOWN</p>;

  if (type === "PREVIEW")
    return (
      <>
        <p>PREVIEW</p>
        <button>
          <ShowPreviewIcon />
        </button>
      </>
    );

  return (
    <>
      <p>MARKDOWN</p>
      <button>
        <ShowPreviewIcon />
      </button>
    </>
  );
};
