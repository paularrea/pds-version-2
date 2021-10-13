import React, { useContext } from "react";
// import { CommunityWorkerContext } from "../../../../CommunityWorkerContext";
import { SupervisorContext } from "../../../../SupervisorContext";
import UserLink from "./components/UserLink";

const ListOfEvents = ({ list }) => {
  // const { pdsData } = useContext(CommunityWorkerContext);
  // const userType = pdsData && pdsData.user_type;

  const { contextData } = useContext(SupervisorContext);
  const userType = contextData && contextData.user_type;
  return (
    <div>
      {list &&
        list.map((intervention) => {
          return (
            <>
              {userType === "COMMUNITY_WORKER" && (
                <UserLink
                  intervention={intervention}
                  path={`/pds-agenda/${intervention.agenda_event_id}`}
                />
              )}
              {userType === "SUPERVISOR" && (
                <UserLink
                  intervention={intervention}
                  path={`/gestionar-agenda/edit/${intervention.agenda_event_id}`}
                />
              )}
            </>
          );
        })}
    </div>
  );
};

export default ListOfEvents;
