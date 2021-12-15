import { createContext, useState, useEffect, useContext } from "react";
import subtype_LOGIN from "../events/type_USER_INTERACTION/subtype_LOGIN";
import subtype_LOGOUT from "../events/type_USER_INTERACTION/subtype_LOGOUT";
import { build_collection_name } from "../events/build_collection_name";
import { firebase } from "./FIREBASE_credentials";
import useGeolocation from "react-hook-geolocation";
// import push_new_document_into_FIRESTORE from "../FIRESTORE/push_new_document_into_FIRESTORE";

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const geolocation = useGeolocation();
  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  console.log(geoCoords)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else setUser(false);
    });
    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        setUser(user);
        console.log(
          build_collection_name("USER_INTERACTION"),
          subtype_LOGIN(user.uid, geoCoords)
        );
        // push_new_document_into_FIRESTORE(
        //   build_collection_name("USER_INTERACTION"),
        //   subtype_LOGIN(user.uid, geoCoords)
        // );
        resolve(user);
      } catch (e) {
        reject(e);
      }
    });
  };
  const logout = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await firebase.auth().signOut();
        setUser(null);
        console.log(
          build_collection_name("USER_INTERACTION"),
          subtype_LOGOUT(user.uid, geoCoords)
        );
        // push_new_document_into_FIRESTORE(
        //   build_collection_name("USER_INTERACTION"),
        //   subtype_LOGOUT(user.uid, geoCoords)
        // );
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  };

  return (
    <authContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, useAuth };
