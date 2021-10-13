import React from "react";
import {delete_button} from "./button.module.scss"

const DeleteButton = (props) => {
  return <button onClick={props.onClick} className={delete_button}>{props.children}</button>;
};

export default DeleteButton;
