import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import NewInterventionForm from "./components/NewInterventionForm/NewInterventionForm";
import { container, dropdown_container } from "../agenda.module.scss";

const CreateIntervention = () => {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    setData(location.state.data);
  }, [location, data]);
  return (
    <div className={container}>
      <div className={dropdown_container}>
        <h2>Crear nueva intervención</h2>
        <p>
          Inicia el proceso de creación de una nueva intervención para un
          paciente o PDS
        </p>
      </div>
      <BoxShadowContainer>
          <NewInterventionForm data={data} />
      </BoxShadowContainer>
    </div>
  );
};

export default CreateIntervention;
