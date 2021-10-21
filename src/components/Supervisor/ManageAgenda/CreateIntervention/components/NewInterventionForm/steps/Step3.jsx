import React from "react";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step3 from "../../../../../../../images/steps/step3-3.png";
import FormLastNotification from "../../../../../../GeneralComponents/Notification/FormLastNotification";

const Step3 = (props) => {
  return (
    <div className={styles.swipable_component}>
      <div ref={props.refProp} className={styles.step_container}>
        <FormLastNotification />
      </div>
    </div>
  );
};

Step3.label = "Finalizar y Enviar";

Step3.Img = step3;

export default Step3;
