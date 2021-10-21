import React, { useContext } from "react";
import { CommunityWorkerContext } from "../../../../../CommunityWorkerContext";
// import { SupervisorContext } from "../../../../../SupervisorContext";
import UserLink from "./components/UserLink";
import SupervisorLink from "./components/Supervisor/SupervisorLink";

const ListOfEvents = ({ list }) => {
  const { pdsData } = useContext(CommunityWorkerContext);
  const userType = pdsData && pdsData.user_type;
  const userId = pdsData && pdsData.user_id;
  // const { contextData } = useContext(SupervisorContext);
  // const userType = contextData && contextData.user_type;
  return (
    <>
      {list &&
        list.map((intervention) => {
          return (
            <>
              {userType === "COMMUNITY_WORKER" && (
                <>
                  <UserLink
                    intervention={intervention}
                    userId={userId}
                    path={`/pds-agenda/${intervention.agenda_event_id}`}
                  />
                  <hr color="whitesmoke" />
                </>
              )}
              {userType === "SUPERVISOR" && (
                <>
                  <SupervisorLink
                    intervention={intervention}
                    path={`/gestionar-agenda/agenda`}
                  />
                  <hr color="whitesmoke" />
                </>
              )}
            </>
          );
        })}
    </>
  );
};

export default ListOfEvents;
