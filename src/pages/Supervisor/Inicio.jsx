import React, { useContext } from "react";
import { SupervisorContext } from "../../SupervisorContext";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";

const Inicio = () => {
  const { contextData } = useContext(SupervisorContext);
  return (
    <>
      {contextData ? (
        <>
          <WelcomeMessage data={contextData} />
          <NotificationsList data={contextData} />
        </>
      ) : (
        "data not loaded..."
      )}
    </>
  );
};

export default Inicio;
