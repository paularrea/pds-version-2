import React from "react";
import UserLink from "./components/UserLink";
import SupervisorLink from "./components/Supervisor/SupervisorLink";
import { useUserData } from "../../../../../context/UserContext";

const ListOfEvents = ({ list }) => {
  const userData = useUserData();
  const userType = userData && userData.user_type;
  const userId = userData && userData.user_id;
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
                    communityWorkerId={userId}
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
