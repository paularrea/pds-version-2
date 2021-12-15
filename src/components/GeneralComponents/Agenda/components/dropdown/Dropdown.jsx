import React, { useState, useEffect } from "react";
import { get_document_from_FIRESTORE } from "../../../../../FIRESTORE/get_document_from_FIRESTORE";
import less from "../../../../../images/icons/less.png";
import more from "../../../../../images/icons/more.png";
import ListOfEvents from "../ListOfEvents/ListOfEvents";
import {
  container,
  flex_container,
  more_less_icons,
} from "./dropdown.module.scss";
import subtype_USER_VISITS_FRONTEND_SECTION from "../../../../../events/type_USER_INTERACTION/subtype_USER_VISITS_FRONTEND_SECTION";
import { build_collection_name } from "../../../../../events/build_collection_name";
// import push_new_document_into_FIRESTORE from "../../../../../FIRESTORE/push_new_document_into_FIRESTORE";
import { useUserData } from "../../../../../context/UserContext";
import useGeolocation from "react-hook-geolocation";

const Dropdown = ({ date, listOfEvents, userType, dayIndex }) => {
  const [error, setError] = useState(null);
  const [loadedPatient, setLoadedPatient] = useState(false);
  const [open, setOpen] = useState(false);
  const context = useUserData();

  const geolocation = useGeolocation();
  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  const openClose = () => {
    setOpen(!open);
    console.log(
      !open &&
        context.data.user_type === "COMMUNITY_WORKER" &&
        (build_collection_name("USER_INTERACTION"),
        subtype_USER_VISITS_FRONTEND_SECTION(
          context.data.user_id,
          dayIndex,
          geoCoords
        ))
    );
    // push_new_document_into_FIRESTORE(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_USER_VISITS_FRONTEND_SECTION(
    //     context.data.user_id,
    //     dayIndex,
    //     geoCoords
    //   )
    // );
  };

  useEffect(() => {
    listOfEvents.forEach((item) => {
      get_document_from_FIRESTORE("frontend_USER_CONFIDENTIAL", item.patient_id)
        .then((contextUser) => {
          if (contextUser.exists) {
            setError(null);
            let data = contextUser.data();
            item["patient_info"] = {
              ...data,
            };
          } else {
            setError("selected user not found");
            error && console.log(error);
          }
        })
        .then(() => setLoadedPatient(true))
        .catch(() => setError("selected patient failed"));
    });
  }, [listOfEvents, error]);

  return (
    <>
      {loadedPatient && (
        <div className={container}>
          <div onClick={openClose}>
            <div className={flex_container}>
              <p>{date}</p>
              <div className={more_less_icons}>
                {open ? (
                  <img src={less} alt="ver menos" />
                ) : (
                  <img src={more} alt="ver más" />
                )}
              </div>
            </div>
          </div>
          {open && loadedPatient && <ListOfEvents list={listOfEvents} />}
        </div>
      )}
    </>
  );
};

export default Dropdown;
