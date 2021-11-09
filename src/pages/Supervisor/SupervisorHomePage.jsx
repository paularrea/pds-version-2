import React from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import { useUserData } from "../../context/UserContext";

const SupervisorHomePage = () => {
  const userData = useUserData();
  return (
    <>
      {userData ? (
        <>
          <WelcomeMessage data={userData} />
          <NotificationsList data={userData} />
        </>
      ) : (
        "data not loaded..."
      )}
    </>
  );
};

export default SupervisorHomePage;
