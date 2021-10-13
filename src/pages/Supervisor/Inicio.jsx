import React, { useContext } from "react";
import { SupervisorContext } from "../../SupervisorContext";

import NotificationsList from "../../components/Notification/NotificationsList";
import styles from "../../components/Supervisor/styles/inicio.module.scss";

const Inicio = () => {
  const {contextData} = useContext(SupervisorContext);
  return (
    <>
      {contextData ? (
        <div className={styles.container}>
          <div className={styles.flex}>
            <h1>Hola {contextData.user_first_name},</h1>
            <p className={styles.welcome_p}>
              Bienvenido a tu espacio de trabajo
            </p>
          </div>
          <NotificationsList data={contextData} />
        </div>
      ) : (
        <p>data not loaded...</p>
      )}
    </>
  );
};

export default Inicio;
