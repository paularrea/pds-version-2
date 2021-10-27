import React, { useContext, useState } from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import PdsNavigation from "../../components/communityWorker/Navigation/PdsNavigation";
import Agenda from "../../components/GeneralComponents/Agenda/Agenda";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import { CommunityWorkerContext } from "../../CommunityWorkerContext";
import LegalAdvise from "../../components/communityWorker/LegalAdvise/LegalAdvise";

const CommunityWorkerHomePage = () => {
  const { pdsData } = useContext(CommunityWorkerContext);
  const [legalAdviseAccepted, setLegalAdviceAccepted] = useState(false);
  return (
    <>
      {pdsData ? (
        <>
          {sessionStorage.getItem("LEGAL_DISCLAIMER_ACCEPTANCE") !==
            "ACCEPTED" && (
            <LegalAdvise legalAdviseAccepted={legalAdviseAccepted} setLegalAdviceAccepted={setLegalAdviceAccepted} />
          )}
          {sessionStorage.getItem("LEGAL_DISCLAIMER_ACCEPTANCE") ===
            "ACCEPTED" && (
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
          )}
        </>
      ) : (
        <p>data not loaded...</p>
      )}
    </>
  );
};

export default CommunityWorkerHomePage;
