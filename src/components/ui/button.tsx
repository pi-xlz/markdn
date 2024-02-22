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
      className="w-full rounded text-center text-md text-clr-bg-light flex items-center justify-center md:gap-2 p-3 bg-clr-prmry-100 hover:bg-clr-prmry-200 active:scale-[.99] transition"
    >
      {withIcon ? <span className="">{icon}</span> : ""}
      <span className={responsive ? "hidden md:inline transition" : ""}>
        {children}
      </span>
    </button>
  );
};

export default Button;
