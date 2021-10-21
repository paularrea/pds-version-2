import React, { useContext } from "react";
import { SupervisorContext } from "../../SupervisorContext";
import styles from "../../components/Supervisor/Dashboards/dashboardPDS.module.scss";
import Chart from "../../components/Supervisor/Dashboards/Charts/Chart";
import PatientTableList from "../../components/Supervisor/Dashboards/Tables/Patients/PatientTableList";
import Infobox from "../../components/Supervisor/Dashboards/infoBox/Patients/infoBox";

const DashboardPacientes = () => {
  const {contextData} = useContext(SupervisorContext);
  const data = contextData && contextData.dashboard_all_patients
  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.flex}>
            <div>
              <p>Dashboard</p>
              <h1>Pacientes</h1>
              <p className={styles.date}>
                Último día completado: {data.last_date}
              </p>
            </div>
            <Infobox data={data} />
          </div>

          {data.plots.map((graph) => {
            return (
              <Chart
                values={graph.values}
                title={graph.title}
                line={graph.line}
                XLabel={graph.X_label}
                YLabel={graph.Y_label}
              />
            );
          })}
          <PatientTableList data={data.blackboard} />
        </>
      )}
    </div>
  );
};

export default DashboardPacientes;
