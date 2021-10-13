import React, {useState, useEffect} from "react";
import Navigation from "../Navigation/Navigation";
import { UserContext } from "../../SupervisorContext";
import data from "../../data/dynamicSupervisorData"

const SupervisorIndex = ({Logout}) => {
  const [contextUser, setContextUser] = useState();
  useEffect(() => {
 setContextUser(data)
  }, []);
  return (
    <UserContext.Provider value={{ contextUser, setContextUser }}>
      <Navigation Logout={Logout} />
    </UserContext.Provider>
  );
};

export default SupervisorIndex;
