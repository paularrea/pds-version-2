import React from "react";
import styles from "../../components/Supervisor/Dashboards/dashboardPDS.module.scss";
import Chart from "../../components/Supervisor/Dashboards/Charts/Chart";
import Infobox from "../../components/Supervisor/Dashboards/infoBox/PDS/Infobox";
import PdsTableList from "../../components/Supervisor/Dashboards/Tables/PDS/PdsTableList";
import { useUserData } from "../../context/UserContext";

const DashboardPDS = () => {
  const userData = useUserData()
  const data = userData && userData.dashboard_all_community_workers
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
