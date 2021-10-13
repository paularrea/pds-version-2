import React from "react";
import Notification from "./Notification";

const FormLastNotification = () => {
  return (
    <div>
      <Notification bgColor='red'>
        AVISO: Si acepta, la intervención se dará por finalizada y ya no podrá
        modificar la información introducida.
      </Notification>
    </div>
  );
};

export default FormLastNotification;
