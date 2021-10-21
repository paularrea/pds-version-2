import React, { useContext } from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import PdsNavigation from "../../components/communityWorker/Navigation/PdsNavigation";
import Agenda from "../../components/GeneralComponents/Agenda/Agenda";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import { CommunityWorkerContext } from "../../CommunityWorkerContext";

const CommunityWorkerHomePage = () => {
  const { pdsData } = useContext(CommunityWorkerContext);
  return (
    <>
      {pdsData ? (
        <>
          <PdsNavigation />
          <WelcomeMessage data={pdsData} />
          <NotificationsList data={pdsData} />
          <Agenda
            userId={pdsData.user_id}
            data={pdsData.agenda.confirmed_agenda_events}
            userType={pdsData.user_type}
          />
        </>
      ) : (
        <p>data not loaded...</p>
      )}
    </>
  );
};

export default CommunityWorkerHomePage;
