import React, { useState } from "react";
import NotificationsList from "../../components/GeneralComponents/Notification/NotificationsList";
import PdsNavigation from "../../components/communityWorker/Navigation/PdsNavigation";
import Agenda from "../../components/GeneralComponents/Agenda/Agenda";
import WelcomeMessage from "../../components/GeneralComponents/HomeComponents/WelcomeMessage/WelcomeMessage";
import LegalAdvise from "../../components/communityWorker/LegalAdvise/LegalAdvise";

const CommunityWorkerHomePage = ({ data }) => {
  const [legalAdviseAccepted, setLegalAdviceAccepted] = useState(false);
  return (
    <>
      {data ? (
        <>
          {sessionStorage.getItem("LEGAL_DISCLAIMER_ACCEPTANCE") !==
            "ACCEPTED" && (
            <LegalAdvise
              legalAdviseAccepted={legalAdviseAccepted}
              setLegalAdviceAccepted={setLegalAdviceAccepted}
            />
          )}
          {sessionStorage.getItem("LEGAL_DISCLAIMER_ACCEPTANCE") ===
            "ACCEPTED" && (
            <>
              <PdsNavigation />
              <WelcomeMessage data={data} />
              <NotificationsList data={data} />
              <Agenda
                userId={data.user_id}
                data={data.confirmed_agenda_events}
                userType={data.user_type}
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
