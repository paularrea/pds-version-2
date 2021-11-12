import React, { useState, useEffect } from "react";
import { useUserData } from "../../../../context/UserContext";
import { container, dropdown_container } from "../agenda.module.scss";
import BoxShadowContainer from "../components/BoxShadowContainer/ShadowContainer";
import AppointmentsList from "./components/AppointmentList";
import SelectUser from "./components/SelectUser";
import { get_document_from_FIRESTORE } from "../../../../FIRESTORE/get_document_from_FIRESTORE";

const SeeAgenda = () => {
  const context = useUserData();
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [loadedWorker, setLoadedWorker] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState({});

  const communityWorkersList =
    context.data && context.data.list_of_linked_community_workers;

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    if (isSelected) {
      get_document_from_FIRESTORE("frontend_AGENDAS", value)
        .then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            context.setData((prevState) => ({
              ...prevState,
              selectedWorker: { ...data, selected_community_worker_id: value },
            }));
            // setSelectedWorker((prevState) => ({ ...prevState, ...data }));
          } else {
            setError("selected user not found");
            context.setData((prevState) => ({ ...prevState }));
          }
        })
        .then(() => setLoadedWorker(true))
        .catch(() => setError("selected worker failed"));
    }
  }, [isSelected, value]);

  console.log(context.data, "selected user in context");

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
        <AppointmentsList
          isSelected={isSelected}
          loadedWorker={loadedWorker}
        />
      </BoxShadowContainer>
    </div>
  );
};

export default SeeAgenda;
