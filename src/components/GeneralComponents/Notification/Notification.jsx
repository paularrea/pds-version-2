import React from "react";
import { container, icon } from "./notification.module.scss";
// import notification_aknowledged from "../../../events/type_USER_INTERACTION/subtype_NOTIFICATION_ACKNOWLEDGED";
import bell from "../../../images/icons/bell.png";
import alert from "../../../images/icons/alert.png";

const Notification = (props) => {
  // const userId = props.data.user_id ? props.data.user_id : undefined;
  // const notificationId = props.notificationId;

  // const notificationAknowledgedEvent = () => {
  //   console.log(
  //     notification_aknowledged(userId, notificationId),
  //     "notification_aknowledged_event"
  //   );
  // };

  return (
    <div
      // onClick={userId !== undefined && notificationAknowledgedEvent}
      className={container}
      style={{
        backgroundColor: props.bgColor === "red" ? "#FFF2F7" : "#F3F8FF",
        borderLeft: `2px solid ${
          props.bgColor === "red" ? "#FF2E79" : "#2E83F8"
        }`,
      }}
    >
      <p>{props.children}</p>
      {props.response && (
        <button
          style={{ marginTop: ".5rem" }}
          className="link"
          type="button"
          onClick={() => props.onRemove(props.notification.order)}
        >
          {props.response}
        </button>
      )}

      <div className={icon}>
        <img src={props.bgColor === "red" ? bell : alert} alt="" />
      </div>
    </div>
  );
};
export default Notification;
