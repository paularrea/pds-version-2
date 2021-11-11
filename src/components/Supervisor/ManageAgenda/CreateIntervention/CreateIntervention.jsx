import React from "react";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import NewInterventionForm from "./components/NewInterventionForm/NewInterventionForm";
import { container, dropdown_container } from "../agenda.module.scss";
import { useUserData } from "../../../../context/UserContext";

const CreateIntervention = () => {
  const context = useUserData();
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
        <NewInterventionForm data={context.data} />
      </BoxShadowContainer>
    </div>
  );
};

export default CreateIntervention;
