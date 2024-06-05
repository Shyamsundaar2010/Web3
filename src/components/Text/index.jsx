import React from "react";

const sizes = {
  xs: "text-[6px] font-normal",
  lg: "text-3xl font-medium md:text-[28px] sm:text-[26px]",
  s: "text-[10px] font-medium",
  md: "text-[15px] font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-400 font-satoshivariable ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
