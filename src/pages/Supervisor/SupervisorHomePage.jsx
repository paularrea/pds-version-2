import React from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import { useUserData } from "../../context/UserContext";

const SupervisorHomePage = () => {
  const context = useUserData();
  return (
    <>
      {context.data ? (
        <>
          <WelcomeMessage data={context.data} />
          <NotificationsList data={context.data} />
        </>
      ) : (
        "data not loaded..."
      )}
    </>
  );
};

export default SupervisorHomePage;
