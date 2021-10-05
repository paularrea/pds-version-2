import React from "react";
import NotificationsList from "../../components/Notification/NotificationsList";
import PdsNavigation from "../../components/Navigation/PdsNavigation";
import {intro_container} from "../../styles/pdsHome.module.scss"
import PdsAgenda from "../../components/PdsAgenda/PdsAgenda";
import data from "../../data/dynamicData";

const PdsHomePage = () => {
  return (
    <>
      <PdsNavigation />
      <div className={intro_container}>
        <h1>Hola {data.user_first_name},</h1>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <NotificationsList />
      <PdsAgenda />
    </>
  );
};

export default PdsHomePage;
