import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    green_A100: "bg-green-A100 text-black-900",
    blue_gray_900: "bg-blue_gray-900 text-gray-400",
    gray_900_01: "bg-gray-900_01 text-gray-400",
  },
};
const sizes = {
  xs: "h-[22px] px-2.5 text-xs",
  "2xl": "h-[45px] px-[30px] text-[15px]",
  "3xl": "h-[56px] px-[35px] text-[15px]",
  lg: "h-[40px] px-[29px] text-[15px]",
  md: "h-[30px] px-[21px] text-[10px]",
  xl: "h-[40px] px-[17px]",
  sm: "h-[28px] px-2.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "2xl", "3xl", "lg", "md", "xl", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["green_A100", "blue_gray_900", "gray_900_01"]),
};

export { Button };
