import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";
import { useUserData } from "../context/UserContext";
import Logout from "../components/GeneralComponents/Logout/Logout";
import CommunityWorkerHomePage from "./communityWorker/CommunityWorkerHomePage";

const HomePageRedirection = () => {
  const data = useUserData();
  const auth = useAuth();

  return (
    <div>
      <Logout />
      {auth.user ? (
        <>
          {data.userData ? (
            <>
              <div>
                {data.userData &&
                  data.userData.user_type === "COMMUNITY_WORKER" && (
                    <CommunityWorkerHomePage data={data.userData} />
                  )}
              </div>
              <div>
                {data.userData && data.userData.user_type === "SUPERVISOR" && (
                  <Redirect to="/supervisor" />
                )}
              </div>
            </>
          ) : (
            "no userData"
          )}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default HomePageRedirection;
