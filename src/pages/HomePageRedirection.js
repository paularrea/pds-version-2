import React from "react";
import { Redirect } from "react-router";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";
import { useUserData } from "../context/UserContext";
import CommunityWorkerHomePage from "./communityWorker/CommunityWorkerHomePage";

const HomePageRedirection = () => {
  const context = useUserData();
  const auth = useAuth();

  const navigateToUserDashboard = (param) => {
    switch (param) {
      case "COMMUNITY_WORKER":
        return <CommunityWorkerHomePage data={context.localStorageData} />;
      case "SUPERVISOR":
        return <Redirect to="/supervisor" />;
      default:
        return;
    }
  };

  return (
    <div>
      {auth.user && context.data ? (
        navigateToUserDashboard(context.data.user_type)
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default HomePageRedirection;
