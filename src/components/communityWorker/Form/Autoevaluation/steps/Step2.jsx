import React from "react";
import { step_container } from "../../form.module.scss";
import step2 from "../../../../../images/steps/step2-2.png";
import FormLastNotification from "../../../../Notification/FormLastNotification";

const Step2 = (props) => {
  return (
    <div ref={props.refProp} className={step_container}>
      <FormLastNotification />
    </div>
  );
};

Step2.label = "Finalizar y Enviar";

Step2.Img = step2;

export default Step2;
