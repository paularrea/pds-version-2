import React from "react";
import {close_button} from "./button.module.scss"
import close from "../../../images/icons/close.png";

const CloseButton = () => {
  return <img className={close_button} src={close} alt="closeButton" />;
};

export default CloseButton;
