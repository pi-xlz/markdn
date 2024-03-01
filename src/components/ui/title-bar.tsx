import { HidePreviewIcon, ShowPreviewIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";

// todo: cleanup repetitive types

type BaseTitleBarProps = JSX.IntrinsicElements["header"] & {
  isPreview: boolean;
};

type TitleBarPropsMdn = BaseTitleBarProps & {
  type: "MARKDOWN";
};

type TitleBarPropsPrview = BaseTitleBarProps & {
  type: "PREVIEW";
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
};

type TitleBarPropsNeutral = BaseTitleBarProps & {
  type: "NEUTRAL";
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
};

type TitleBarProps =
  | TitleBarPropsMdn
  | TitleBarPropsPrview
  | TitleBarPropsNeutral;

const TitleBar = ({
  type,
  className,
  // @ts-expect-error setIsPreview prop don't exist on ButtonProps
  setIsPreview,
  isPreview,
}: TitleBarProps) => {
  return (
    <header
      className={cn(
        "flex w-full items-center justify-between bg-clr-titlebar-bg px-4 py-3 text-sm font-medium tracking-[2px] text-clr-titlebar-txt",
        className,
      )}
    >
      <Title isPreview={isPreview} setIsPreview={setIsPreview} type={type} />
    </header>
  );
};

export default TitleBar;

const Title = ({
  type,
  isPreview,
  setIsPreview,
}: {
  type: "MARKDOWN" | "PREVIEW" | "NEUTRAL";
  isPreview: boolean;
  setIsPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  if (type === "MARKDOWN") return <p>MARKDOWN</p>;

  if (type === "PREVIEW")
    return (
      <>
        <p>PREVIEW</p>
        <button onClick={() => setIsPreview((p) => !p)}>
          {isPreview ? <HidePreviewIcon /> : <ShowPreviewIcon />}
        </button>
      </>
    );

  return (
    <>
      <p>{isPreview ? "PREVIEW" : "MARKDOWN"}</p>
      <button onClick={() => setIsPreview((p) => !p)}>
        {isPreview ? <HidePreviewIcon /> : <ShowPreviewIcon />}
      </button>
    </>
  );
};
