import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { container, title, total, table } from "./confirm.module.scss";
import ConfirmPatientsTable from "./components/Table/ConfirmPatientsTable"

const ConfirmIntervention = () => {
  const location = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    setData(location.state.data);
  }, [location, data]);

  return (
    <div className={container}>
      {data && (
        <>
          <div className={title}>
            <h2>
              Intervenciones pendientes <br /> de confirmar
            </h2>
            <div className={total}>
              <p>
                Intervenciones pendientes <br /> (total)
              </p>
              <h1>{data.pending_agenda_events.length}</h1>
            </div>
          </div>
          <div className={table}><ConfirmPatientsTable data={data}/></div>
        </>
      )}
    </div>
  );
};

export default ConfirmIntervention;
