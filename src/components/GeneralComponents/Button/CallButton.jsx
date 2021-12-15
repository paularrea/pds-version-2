import React from "react";
import useGeolocation from "react-hook-geolocation";
import phoneIcon from "../../../images/icons/phone.png";
import Button from "./Button";
import subtype_PHONE_CALL from "../../../events/type_USER_INTERACTION/subtype_PHONE_CALL";
import { build_collection_name } from "../../../events/build_collection_name";
import { useUserData } from "../../../context/UserContext";
// import push_new_document_into_FIRESTORE from "../../../FIRESTORE/push_new_document_into_FIRESTORE";

const CallButton = (props) => {
  const context = useUserData();
  const geolocation = useGeolocation();
  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  const userId = context.data && context.data.user_id;
  const patientId = props.patientId;

  const phoneCallEvent = () => {
    console.log(
      build_collection_name("USER_INTERACTION"),
      subtype_PHONE_CALL(
        userId,
        patientId,
        props.prefixNumber,
        props.phoneNumber,
        geoCoords
      ),
      props
    );
    // push_new_document_into_FIRESTORE(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_PHONE_CALL(
    //     userId,
    //     patientId,
    //     props.prefixNumber,
    //     props.phoneNumber,
    //     geoCoords
    //   )
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
