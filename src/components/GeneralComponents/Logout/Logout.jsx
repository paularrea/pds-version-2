import React from "react";
import { useUserData } from "../../../context/UserContext";
import { useAuth } from "../../../user_auth_with_FIREBASE/AuthContext";

const Logout = () => {
  const auth = useAuth();
  const context = useUserData()
  // const { geolocation } = useGeolocation();
  // const geoCoords = geolocation && {
  //   latitude: geolocation.latitude,
  //   longitude: geolocation.longitude,
  // };
  const logOutHandleClick = async () => {
    // await push_new_event_doc_into_FIRESTORE_collection(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_LOGOUT(userId, geoCoords)
    // );
    window.localStorage.removeItem('user_data_from_FIRESTORE');
    await context.setData(null)
    await auth.logout();
  };

  return (
    <p className="link" onClick={logOutHandleClick}>
      Logout
    </p>
  );
};

export default Logout;
