import React from "react";
import Notification from "./Notification";

const FormLastNotification = () => {
  return (
    <div>
      <Notification bgColor='red'>
        AVISO: Si aceptas, los datos se enviarán y ya no podrás
        modificarlos.
      </Notification>
    </div>
  );
};

export default FormLastNotification;
