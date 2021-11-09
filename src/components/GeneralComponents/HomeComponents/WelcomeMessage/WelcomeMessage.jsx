import React from "react";
import { container } from "./welcome.module.scss";

const WelcomeMessage = ({ data }) => {
  const getGenderTermination = () => {
    switch (data.gender) {
      case "FEMALE":
        return "a";
      case "MALE":
        return "o";
      case "OTHER":
        return "o/a";
      default:
        break;
    }
  };

  return (
    <div className={container}>
      <h1>Hola {data && data.display_name},</h1>
      <p>{`Bienvenid${getGenderTermination()} a tu espacio de trabajo`}</p>
    </div>
  );
};

export default WelcomeMessage;
