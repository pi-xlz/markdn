import { PropsWithChildren } from "react";

type ButtonPropsBase = JSX.IntrinsicElements["button"] & PropsWithChildren;

type ButtonPropsIcon = ButtonPropsBase & {
  withIcon: true;
  icon: React.ReactNode;
};

// type ButtonPropsNoIcon = ButtonPropsBase & {
//   withIcon?: undefined;
// };

type ButtonProps = ButtonPropsBase | ButtonPropsIcon;

// @ts-expect-error WithIcon and Icon props don't exist on ButtonProps
const Button = ({ children, withIcon, icon }: ButtonProps) => {
  return (
    <button>
      {withIcon ? <span>{icon}</span> : ""}
      <span>{children}</span>
    </button>
  );
};

export default Button;
