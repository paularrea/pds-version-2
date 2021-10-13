import React from "react";
import { edit, input_container } from "./button.module.scss";

const EditInput = (props) => {
  return (
    <div className={input_container}>
      {props.children}
      <button className={edit} type="button" onClick={props.onClick}>
        Editar
      </button>
    </div>
  );
};

export default EditInput;
