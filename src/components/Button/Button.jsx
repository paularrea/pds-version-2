import React from "react";
import { button } from "./button.module.scss";

const Button = (props) => {
  const changeColor = () => {
    switch (props.bgColor) {
      case "green":
        return "#00CB45";
      case "blue":
        return "#2E83F8";
      case "red":
        return "#FF2E79";
      case "gray":
        return "gray";
      default:
        return null;
    }
  };

  return (
    <button
      disabled={props.disabled}
      className={button}
      style={{
        backgroundColor: changeColor(),
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
