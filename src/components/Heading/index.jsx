import React from "react";

const sizes = {
  "2xl": "text-3xl font-bold md:text-[28px] sm:text-[26px]",
  xl: "text-xl font-bold",
  s: "text-[10px] font-bold",
  md: "text-xs font-bold",
  xs: "text-[6px] font-bold",
  lg: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-50 font-satoshivariable ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
