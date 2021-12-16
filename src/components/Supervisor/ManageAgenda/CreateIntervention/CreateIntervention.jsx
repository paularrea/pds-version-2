import React, { useState, useEffect } from "react";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import NewInterventionForm from "./components/NewInterventionForm/NewInterventionForm";
import { container, dropdown_container } from "../agenda.module.scss";
import { useUserData } from "../../../../context/UserContext";
import { get_document_from_FIRESTORE } from "../../../../FIRESTORE/get_document_from_FIRESTORE";

const CreateIntervention = () => {
  const context = useUserData();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const linkedPatientsIds = context.data && context.data.linked_patient_ids;

  useEffect(() => {
    const getPatientFunction = async () => {
      const linked_patient_info = await Promise.all(
        linkedPatientsIds.map(async (patientId) => {
          let patientInfo = {};
          try {
            patientInfo = await get_document_from_FIRESTORE(
              "frontend_USER_CONFIDENTIAL",
              patientId
            );
          } catch (error) {
            setError(error, "no patient found");
          }
          return patientInfo.data();
        })
      );
      return context.setData((prevState) => ({
        ...prevState,
        linked_patient_info,
      }));
    };
    error && console.log(error);
    getPatientFunction();
    setLoaded(true);
  }, [linkedPatientsIds, error]);

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
        <NewInterventionForm data={loaded && context.data} />
      </BoxShadowContainer>
    </div>
  );
};

export default CreateIntervention;
