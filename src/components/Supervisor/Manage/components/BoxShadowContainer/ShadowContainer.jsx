import React from "react";
import { container } from "./container.module.scss";

const ShadowContainer = (props) => {
  return <div className={container}>{props.children}</div>;
};

export default ShadowContainer;
