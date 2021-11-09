import React from "react";
import phoneIcon from "../../../images/icons/phone.png";
import Button from "./Button";
// import { useGeolocation } from "../../../hooks/useGeolocation";
// import { CommunityWorkerContext } from "../../../CommunityWorkerContext";
// import subtype_PHONE_CALL from "../../../events/type_USER_INTERACTION/subtype_PHONE_CALL";
// import { build_collection_name } from "../../../events/build_collection_name";
// import { useUserData } from "../../../context/UserContext";

const CallButton = (props) => {
  // const userData = useUserData();
  // const { geolocation } = useGeolocation();
  // const geoCoords = geolocation && {
  //   latitude: geolocation.latitude,
  //   longitude: geolocation.longitude,
  // };

  // const userId = userData && userData.user_id;
  // const patientId = props.patientId;

  const phoneCallEvent = () => {
    // push_new_event_doc_into_FIRESTORE_collection(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_PHONE_CALL(userId, patientId, geoCoords)
    // );
  };

  return (
    <a href={`tel:${props.prefixNumber}${props.phoneNumber}`}>
      <Button
        onClick={phoneCallEvent}
        type="button"
        width={props.width}
        bgColor="blue"
        justifyContent="flex-start"
      >
        <img src={phoneIcon} alt="phone" />{" "}
        <div style={{ marginLeft: "1rem" }}>
          {`(${props.prefixNumber}) ${props.phoneNumber}`}
        </div>
      </Button>
    </a>
  );
};

export default CallButton;
