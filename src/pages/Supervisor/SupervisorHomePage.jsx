import React from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import { useUserData } from "../../context/UserContext";

const SupervisorHomePage = () => {
  const context = useUserData();
  return (
    <>
      {context.localStorageData ? (
        <>
          <WelcomeMessage data={context.localStorageData} />
          <NotificationsList data={context.localStorageData} />
        </>
      ) : (
        "data not loaded..."
      )}
    </>
  );
};

export default SupervisorHomePage;
