import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";
import { useUserData } from "../context/UserContext";
// import Logout from "../components/GeneralComponents/Logout/Logout";
import CommunityWorkerHomePage from "./communityWorker/CommunityWorkerHomePage";

const HomePageRedirection = () => {
  const context = useUserData();
  const auth = useAuth();
  return (
    <div>
      {/* <Logout /> */}
      {auth.user ? (
        <>
          <div>
            {context.localStorageData &&
              context.localStorageData.user_type === "COMMUNITY_WORKER" && (
                <CommunityWorkerHomePage data={context.localStorageData} />
              )}
          </div>
          <div>
            {context.localStorageData && context.localStorageData.user_type === "SUPERVISOR" && (
              <Redirect to="/supervisor" />
            )}
          </div>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default HomePageRedirection;
