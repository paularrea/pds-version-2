import React from "react";
import { step_container } from "../../form.module.scss";
import step5 from "../../../../../images/steps/step5-5.png";
import FormLastNotification from "../../../../Notification/FormLastNotification";

const Step5 = (props) => {
  return (
    <div ref={props.refProp} className={step_container}>
      <FormLastNotification />
    </div>
  );
};

Step5.label = "Finalizar y Enviar";

Step5.Img = step5;

export default Step5;
