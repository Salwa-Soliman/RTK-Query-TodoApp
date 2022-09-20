import React from "react";

const Button = ({
  children,
  variant,
  onClick,
  mt = 0,
  mb = 0,
  ml = 0,
  mr = 0,
}) => {
  return (
    <button
      className={`btn ${variant}`}
      onClick={onClick}
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
