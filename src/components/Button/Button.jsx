import React from "react";
import { button } from "./button.module.scss";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={button}
      style={{
        backgroundColor: props.bgColor,
        width: props.width,
        justifyContent: props.justifyContent,
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
