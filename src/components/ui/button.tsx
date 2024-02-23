import { PropsWithChildren } from "react";

type ButtonPropsBase = JSX.IntrinsicElements["button"] & PropsWithChildren;

type ButtonPropsIcon = ButtonPropsBase & {
  withIcon: true;
  icon: React.ReactNode;
  responsive?: boolean;
};

type ButtonPropsNoIcon = ButtonPropsBase & {
  withIcon?: undefined;
};

type ButtonProps = ButtonPropsNoIcon | ButtonPropsIcon;

const Button = ({
  children,
  withIcon,
  // @ts-expect-error WithIcon and Icon props don't exist on ButtonProps
  icon,
  // @ts-expect-error WithIcon and Icon props don't exist on ButtonProps
  responsive,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className="flex w-full items-center justify-center rounded bg-clr-prmry-100 p-3 text-center text-md text-clr-bg-light transition hover:bg-clr-prmry-200 active:scale-[.99] md:gap-2 "
    >
      {withIcon ? <span className="">{icon}</span> : ""}
      <span className={responsive ? "hidden transition md:inline" : ""}>
        {children}
      </span>
    </button>
  );
};

export default Button;
