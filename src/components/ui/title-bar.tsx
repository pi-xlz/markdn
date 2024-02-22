import { ShowPreviewIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

type TitleBarProps = JSX.IntrinsicElements["header"] & {
  type: "MARKDOWN" | "PREVIEW" | "NEUTRAL";
};

const TitleBar = ({ type, className }: TitleBarProps) => {
  return (
    <header
      className={cn(
        "flex justify-between items-center w-full py-3 px-4 bg-clr-titlebar-bg text-clr-titlebar-txt font-medium text-sm tracking-[2px]",
        className
      )}
    >
      <Title type={type} />
    </header>
  );
};

export default TitleBar;

const Title = ({ type }: { type: TitleBarProps["type"] }) => {
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
