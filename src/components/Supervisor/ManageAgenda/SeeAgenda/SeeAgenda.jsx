import React, { useContext, useState, useEffect } from "react";
import { SupervisorContext } from "../../../../SupervisorContext";
import { container, dropdown_container } from "../agenda.module.scss";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import AppointmentsList from "./components/AppointmentList";
import SelectUser from "./components/SelectUser";

const SeeAgenda = () => {
  const [value, setValue] = useState("");
  const { contextData } = useContext(SupervisorContext);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState({});

  const communityWorkersList =
    contextData && contextData.agenda.list_of_linked_community_workers;

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    const selected =
      contextData && contextData.agenda.agendas_from_linked_community_workers[value];
    setSelectedWorker(selected);
  }, [contextData, value]);

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
