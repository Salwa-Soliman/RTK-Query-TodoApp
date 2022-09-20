import React from "react";

const Button = ({ children, variant, mt, mb, ml, mr }) => {
  return (
    <button
      className={`btn ${variant}`}
      style={{ margin: `${mt || 0} ${ml || 0} ${mb || 0} ${ml || 0}` }}
    >
      {children}
    </button>
  );
};

export default Button;
