import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";
import { get_document_from_FIRESTORE } from "../FIRESTORE/get_document_from_FIRESTORE.js";

const UserDataContext = React.createContext();

const useUserData = () => {
  return useContext(UserDataContext);
};

const UserDataProvider = ({ children }) => {
  const auth = useAuth();
  const [userData, setUserData] = useState(null);
  const [userProfilesCollection, setUserProfilesCollection] = useState(null);
  const [notificationsCollection, setNotificationsCollection] = useState(null);
  const [agendasCollection, setAgendasCollection] = useState(null);

  // const savedInLocalStorage = localStorage.getItem("user_data_from_FIRESTORE");
  // const userDataFromLocalStorage = JSON.parse(savedInLocalStorage);
  console.log(auth.user && auth.user.uid, "auth id");
  console.log(userData && userData.user_id, "context id");

  useEffect(() => {
    if (!auth.user) return;
    get_document_from_FIRESTORE(
      setUserProfilesCollection,
      "frontend_USER_PROFILES",
      auth.user.uid
    );
    get_document_from_FIRESTORE(
      setNotificationsCollection,
      "frontend_NOTIFICATIONS",
      auth.user.uid
    );
    get_document_from_FIRESTORE(
      setAgendasCollection,
      "frontend_AGENDAS",
      auth.user.uid
    );
    setUserData({
      ...userProfilesCollection,
      ...notificationsCollection,
      ...agendasCollection,
    });
  }, [auth.user]);

  // useEffect(() => {
  //   userData &&
  //     localStorage.setItem(
  //       "user_data_from_FIRESTORE",
  //       JSON.stringify(userData)
  //     );
  // }, [userData]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, useUserData };
