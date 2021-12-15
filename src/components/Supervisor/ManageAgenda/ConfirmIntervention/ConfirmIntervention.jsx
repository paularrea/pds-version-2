import React, { useEffect, useState } from "react";
import { container, title, total, table } from "./confirm.module.scss";
import ConfirmPatientsTable from "./components/Table/ConfirmPatientsTable";
import { useUserData } from "../../../../context/UserContext";
import { get_document_from_FIRESTORE } from "../../../../FIRESTORE/get_document_from_FIRESTORE";

const ConfirmIntervention = () => {
  const [error, setError] = useState(null);
  const [loadedPatient, setLoadedPatient] = useState(false);
  const context = useUserData();
  const pendingEvents = context.data.pending_agenda_events;

  useEffect(() => {
    const getInfo = async () => {
      const pending_events_table_info = await Promise.all(
        pendingEvents.map(async (event) => {
          let patientInfo = {};
          let workerInfo = {};
          try {
            patientInfo = await get_document_from_FIRESTORE(
              "frontend_USER_CONFIDENTIAL",
              event.patient_id
            );
            workerInfo = await get_document_from_FIRESTORE(
              "frontend_USER_CONFIDENTIAL",
              event.community_worker_id
            );
          } catch (error) {
            setError(error, "no patient or worker found");
            error && console.log(error);
          }
          return {
            date: event.date,
            patient_info: patientInfo.data(),
            community_worker_info: workerInfo.data(),
            suggested_event_id: event.suggested_event_id,
          };
        })
      );
      return context.setData((prevState) => ({
        ...prevState,
        pending_events_table_info,
      }));
    };
    getInfo();
    setLoadedPatient(true);
  }, [pendingEvents, error]);

  return (
    <div className={container}>
      {context.data && (
        <>
          <div className={title}>
            <h2>
              Intervenciones pendientes <br /> de confirmar
            </h2>
            <div className={total}>
              <p>
                Intervenciones pendientes <br /> (total)
              </p>
              <h1>{context.data.pending_agenda_events.length}</h1>
            </div>
          </div>
          <div className={table}>
            <ConfirmPatientsTable loadedPatient={loadedPatient} />
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmIntervention;
