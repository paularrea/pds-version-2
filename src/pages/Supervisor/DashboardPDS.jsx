import React, { useContext } from "react";
import { SupervisorContext } from "../../SupervisorContext";
import styles from "../../components/Supervisor/styles/dashboardPDS.module.scss";
import Chart from "../../components/Supervisor/DashboardPDS/Charts/Chart";
import Infobox from "../../components/Supervisor/DashboardPDS/infoBox/PDS/Infobox";
import PdsTableList from "../../components/Supervisor/DashboardPDS/Tables/PDS/PdsTableList";

const DashboardPDS = () => {
  const {contextData} = useContext(SupervisorContext);
  const data = contextData && contextData.dashboard_all_community_workers
  return (
    <div className={styles.container}>
      {data && (
        <>
          <div className={styles.flex}>
            <div>
              <p>Dashboard</p>
              <h1>Protectores de Salud</h1>
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
                legend={graph.legend}
              />
            );
          })}
          <PdsTableList data={data.blackboard} />
        </>
      )}
    </div>
  );
};

export default DashboardPDS;
