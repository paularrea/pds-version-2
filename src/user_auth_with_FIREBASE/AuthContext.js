import { createContext, useState, useEffect, useContext } from "react";
import { firebase } from "./FIREBASE_credentials";

const authContext = createContext();

const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } 
      else setUser(false);
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
