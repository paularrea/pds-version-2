import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";
import { get_document_from_FIRESTORE } from "../FIRESTORE/get_document_from_FIRESTORE.js";

const UserDataContext = React.createContext();

const useUserData = () => {
  return useContext(UserDataContext);
};

const UserDataProvider = ({ children }) => {
  const auth = useAuth();
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    if (auth.user) {
      const getCollections = async () => {
        await get_document_from_FIRESTORE(
          "frontend_USER_CONFIDENTIAL",
          auth.user.uid
        ).then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            setData((prevState) => ({ ...prevState, ...data }));
          } else {
            setError("couldn't find frontend_USER_CONFIDENTIAL in user context");
            console.log(error)
            setData();
          }
        });
        await get_document_from_FIRESTORE(
          "frontend_NOTIFICATIONS",
          auth.user.uid
        ).then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            setData((prevState) => ({ ...prevState, ...data }));
          } else {
            setError("couldn't find frontend_NOTIFICATIONS in user context");
            console.log(error)
            setData();
          }
        });
        await get_document_from_FIRESTORE(
          "frontend_AGENDAS",
          auth.user.uid
        ).then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            setData((prevState) => ({ ...prevState, ...data }));
          } else {
            setError("couldn't find frontend_AGENDAS in user context");
            console.log(error)
            setData();
          }
        });
      };
      getCollections();
      setLoaded(true);
    }
    auth.logout && setData(null);
  }, [auth, error]);

  useEffect(() => {
    data &&
      localStorage.setItem("user_data_from_FIRESTORE", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    data &&
    setLocalStorageData(JSON.parse(localStorage.getItem("user_data_from_FIRESTORE")));
  }, [data]);

  return (
    <UserDataContext.Provider
      value={loaded && { data, setData, localStorageData, loaded }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, useUserData };
