import React from "react";
import { container, box, flex_container } from "../info.module.scss";

const InfoBox = ({data}) => {

  return (
    <div className={container}>
      <div className={flex_container}>
        <div className={box}>
          <p>Número de pacientes</p>
          <h2>{data.num_of_patients}</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
