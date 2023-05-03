import { cva, VariantProps } from "class-variance-authority";

import React, { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "px-[30px] py-[10px] font-medium duration-300 text-veryDarkBlue rounded-md shadow-lg border-2 border-transparent ",
  {
    variants: {
      intent: {
        primary:
          "bg-softBlue text-white hover:border-indigo-500 hover:bg-white hover:text-softBlue ",
        secondary:
          "bg-softRed text-white hover:border-softRed hover:bg-white hover:text-softRed",
        terciary:
          "bg-white  text-veryDarkBlue hover:border-red-400 hover:border-veryDarkBlue",
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button = ({ intent, className, ...props }: ButtonProps) => {
  return <button className={buttonStyles({ intent, className })} {...props} />;
};

export default Button;
