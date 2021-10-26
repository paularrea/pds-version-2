import React from "react";
import {container} from "./welcome.module.scss"

const WelcomeMessage = ({data}) => {
  return (
    <div className={container}>
      <h1>Hola {data && data.display_name},</h1>
      <p>Bienvenido a tu espacio de trabajo</p>
    </div>
  );
};

export default WelcomeMessage;
