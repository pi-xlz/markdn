import { PropsWithChildren } from "react";

type ButtonPropsBase = JSX.IntrinsicElements["button"] & PropsWithChildren;

type ButtonPropsIcon = ButtonPropsBase & {
  withIcon: true;
  icon: React.ReactNode;
};

type ButtonPropsNoIcon = ButtonPropsBase & {
  withIcon?: undefined;
};

type ButtonProps = ButtonPropsNoIcon | ButtonPropsIcon;

// @ts-expect-error WithIcon and Icon props don't exist on ButtonProps
const Button = ({ children, withIcon, icon }: ButtonProps) => {
  return (
    <button className="w-full rounded text-center text-md text-clr-bg-light flex items-center justify-center py-3 bg-clr-prmry-100 hover:bg-clr-prmry-200 active:scale-[.99]">
      {withIcon ? <span>{icon}</span> : ""}
      <span>{children}</span>
    </button>
  );
};

export default Button;
