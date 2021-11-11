import React from "react";
import UserLink from "./components/UserLink";
import SupervisorLink from "./components/Supervisor/SupervisorLink";
import { useUserData } from "../../../../../context/UserContext";

const ListOfEvents = ({ list }) => {
  const context = useUserData();
  const userType = context && context.data.user_type;
  const userId = context && context.data.user_id;
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
