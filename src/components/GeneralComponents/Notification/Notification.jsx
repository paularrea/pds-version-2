import React from "react";
import { container, icon } from "./notification.module.scss";
import bell from "../../../images/icons/bell.png";
import alert from "../../../images/icons/alert.png";
import { useUserData } from "../../../context/UserContext";
import useGeolocation from "react-hook-geolocation";
import subtype_NOTIFICATION_ACKNOWLEDGED from "../../../events/type_USER_INTERACTION/subtype_NOTIFICATION_ACKNOWLEDGED";
import { build_collection_name } from "../../../events/build_collection_name";
// import push_new_document_into_FIRESTORE from "../../../FIRESTORE/push_new_document_into_FIRESTORE";

const Notification = (props) => {
  const context = useUserData();
  const geolocation = useGeolocation();
  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  const notificationId =
    props.notification && props.notification.notification_id;

  console.log(geoCoords);

  const notificationAknowledgedEvent = () => {
    props.onRemove(notificationId);
    console.log(
      build_collection_name("USER_INTERACTION"),
      subtype_NOTIFICATION_ACKNOWLEDGED(
        context.data.user_id,
        notificationId,
        geoCoords
      )
    );
    // push_new_document_into_FIRESTORE(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_NOTIFICATION_ACKNOWLEDGED(
    //     context.data.user_id,
    //     notificationId,
    //     geoCoords
    //   )
    // );
  };

  return (
    <div
      className={container}
      style={{
        backgroundColor: props.priority === "HIGH" ? "#FFF2F7" : "#F3F8FF",
        borderLeft: `2px solid ${
          props.priority === "HIGH" ? "#FF2E79" : "#2E83F8"
        }`,
      }}
    >
      <p>{props.children}</p>
      {props.response && (
        <button
          style={{ marginTop: ".5rem" }}
          className="link"
          type="button"
          onClick={notificationAknowledgedEvent}
        >
          {props.response}
        </button>
      )}

      <div className={icon}>
        <img
          src={!props.error && (props.priority === "HIGH" ? bell : alert)}
          alt=""
        />
      </div>
    </div>
  );
};
export default Notification;
