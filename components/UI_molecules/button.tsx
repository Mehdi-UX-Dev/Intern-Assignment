import React from "react";
import { cva, cx, VariantProps } from "class-variance-authority";

const buttonCVA = cva(["rounded", "font-bold", "capitalize"], {
  variants: {
    intent: {
      primary: ["bg-primary", "text-white", "hover:bg-secondary"],
    },
    size: {
      small: "text-sm px-2 py-[6px]",
      medium: "text-base px-[10px] py-2",
      large: "text-[18px] px-4 py-[12px] ",
    },

    width: {
      full: "w-full",
      half: "w-20",
      sm: "w-16",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
  compoundVariants: [],
});

interface ButtonProps extends VariantProps<typeof buttonCVA> {
  /**
   * Button contents
   */
  label?: string;

  /**
   * button type
   */

  type?: "submit" | "reset" | "button";

  /**
   * to manage button
   * */
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;

  /** Loading state  */
  loading?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  loading,
  type,
  intent,
  size,
  label,
  width,
  handleClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cx(buttonCVA({ intent, size, width }), {
        "bg-gray-400": loading,
      })}
      {...props}
      onClick={handleClick}
    >
      {/* add loading io animation in here */}
      {label}
    </button>
  );
};
