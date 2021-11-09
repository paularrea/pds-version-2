import React from "react";
import Notification from "./Notification";

const ErrorNotification = (props) => {
  return (
    <div>
      <Notification error={true} priority="HIGH">
        {props.children}
      </Notification>
    </div>
  );
};

export default ErrorNotification;
