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
  const [workers, setWorkers] = useState([]);

  const communityWorkersList =
    context.data && context.data.linked_community_worker_ids;

  const handleChange = (event) => {
    setValue(event.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    let newArray = [];
    communityWorkersList.forEach((community_worker_id) => {
      get_document_from_FIRESTORE(
        "frontend_USER_CONFIDENTIAL",
        community_worker_id
      ).then((contextUser) => {
        if (contextUser.exists) {
          setError(null);
          error && console.log(error);
          let data = contextUser.data();
          newArray.push(data);
          setWorkers(() => [...newArray]);
        }
      });
    });
  }, [communityWorkersList, error]);

  useEffect(() => {
    if (isSelected) {
      get_document_from_FIRESTORE("frontend_AGENDAS", value)
        .then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            context.setData((prevState) => ({
              ...prevState,
              selected_worker: { ...data, selected_community_worker_id: value },
            }));
          } else {
            setError("selected user not found");
            context.setData((prevState) => ({ ...prevState }));
          }
        })
        .then(() => setLoadedWorker(true))
        .catch(() => setError("selected worker failed"));
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
          data={workers}
          onChange={handleChange}
        />
      </div>
      <BoxShadowContainer>
        <AppointmentsList isSelected={isSelected} loadedWorker={loadedWorker} />
      </BoxShadowContainer>
    </div>
  );
};

export default SeeAgenda;
