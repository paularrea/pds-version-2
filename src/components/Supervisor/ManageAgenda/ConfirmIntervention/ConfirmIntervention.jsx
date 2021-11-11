import React from "react";
import { container, title, total, table } from "./confirm.module.scss";
import ConfirmPatientsTable from "./components/Table/ConfirmPatientsTable"
import { useUserData } from "../../../../context/UserContext";

const ConfirmIntervention = () => {
  const context = useUserData();

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
          <div className={table}><ConfirmPatientsTable data={context.data}/></div>
        </>
      )}
    </div>
  );
};

export default ConfirmIntervention;
