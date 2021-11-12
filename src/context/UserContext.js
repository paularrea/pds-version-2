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

  useEffect(() => {
    if (auth.user) {
      get_document_from_FIRESTORE("frontend_USER_PROFILES", auth.user.uid)
        .then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            setData((prevState) => ({ ...prevState, ...data }));
          } else {
            setError("context not found");
            setData();
          }
        })
        .then(
          get_document_from_FIRESTORE(
            "frontend_NOTIFICATIONS",
            auth.user.uid
          ).then((contextUser) => {
            if (contextUser.exists) {
              setError(null);
              let data = contextUser.data();
              setData((prevState) => ({ ...prevState, ...data }));
            } else {
              setError("context not found");
              setData();
            }
          })
        )
        .then(
          get_document_from_FIRESTORE("frontend_AGENDAS", auth.user.uid).then(
            (contextUser) => {
              if (contextUser.exists) {
                setError(null);
                let data = contextUser.data();
                setData((prevState) => ({ ...prevState, ...data }));
              } else {
                setError("context not found");
                setData();
              }
            }
          )
        )
        .then(() => setLoaded(true))
        .catch(() => setError("context get fail"));
    }
    auth.logout && setData(null);
  }, [auth]);

  useEffect(() => {
    data &&
      localStorage.setItem(
        "user_data_from_FIRESTORE",
        JSON.stringify(data)
      );
    }, [data]);

    const savedInLocalStorage = localStorage.getItem("user_data_from_FIRESTORE");
    const localStorageData = JSON.parse(savedInLocalStorage);

  return (
    <UserDataContext.Provider value={loaded && { data, setData, localStorageData }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, useUserData };
