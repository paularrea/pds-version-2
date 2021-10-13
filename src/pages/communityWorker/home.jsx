import React from "react";
import NotificationsList from "../../components/Notification/NotificationsList";
import PdsNavigation from "../../components/communityWorker/Navigation/PdsNavigation";
import { intro_container } from "../../styles/pdsHome.module.scss";
import Agenda from "../../components/Agenda/Agenda";
import data from "../../data/dynamicPDSData";

const PdsHomePage = () => {
  return (
    <>
      <PdsNavigation />
      <div className={intro_container}>
        <h1>Hola {data.user_first_name},</h1>
        <p>bienvenido a tu espacio de trabajo.</p>
      </div>
      <NotificationsList data={data} />
      <Agenda data={data.agenda} />
    </>
  );
};

export default PdsHomePage;
