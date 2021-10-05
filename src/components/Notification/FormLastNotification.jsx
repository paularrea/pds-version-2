import React from "react";
import Notification from "./Notification";
import bell from "../../images/icons/bell.png"

const FormLastNotification = () => {
  return (
    <div>
      <Notification bgColor='#FFF2F7' borderColor='#FF2E79' img={bell}>
        AVISO: Si acepta, la intervención se dará por finalizada y ya no podrá
        modificar la información introducida.
      </Notification>
    </div>
  );
};

export default FormLastNotification;
