import React, { useState, useEffect } from "react";
import { useUserData } from "../../../../context/UserContext";
import { container, dropdown_container } from "../agenda.module.scss";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import AppointmentsList from "./components/AppointmentList";
import SelectUser from "./components/SelectUser";
import { get_document_from_FIRESTORE } from "../../../../FIRESTORE/get_document_from_FIRESTORE";

const SeeAgenda = () => {
  const context = useUserData();
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState({});

  const communityWorkersList = context.data && context.data.list_of_linked_community_workers;

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    if (isSelected) {
      const selected = get_document_from_FIRESTORE(
        "NAME OF THE COLLECTION",
        value
      );
      setSelectedWorker(selected);
    }
  }, [isSelected, value]);

  return (
    <div className={container}>
      <div className={dropdown_container}>
        <h2>Ver agenda</h2>
        <p>Selecciona la agenda de un Protector de Salud</p>
        <SelectUser
          value={value}
          label="Selecciona un PDS"
          data={communityWorkersList}
          onChange={handleChange}
        />
      </div>
      <BoxShadowContainer>
        <AppointmentsList isSelected={isSelected} worker={selectedWorker} />
      </BoxShadowContainer>
    </div>
  );
};

export default SeeAgenda;
