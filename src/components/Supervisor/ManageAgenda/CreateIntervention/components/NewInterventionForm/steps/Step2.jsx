import React from "react";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step2 from "../../../../../../../images/steps/step2-3.png";
import * as Yup from "yup";
import SelectTimeInput from "../../../../components/Inputs/SelectTimeInput";
import TypeInput from "../../../../components/Inputs/TypeInput";
import DatePickerInput from "../../../../components/Inputs/DatePickerInput";
import SelectActionsInput from "../../../../components/Inputs/SelectActionsInput";

const NewInterventionStep2 = ({
  refProp,
  setFieldValue,
  values,
  errors,
  touched,
}) => {
  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <TypeInput />
        <DatePickerInput label="Fecha" setFieldValue={setFieldValue} />
        <SelectTimeInput label="Hora" setFieldValue={setFieldValue} />
        <br />
        <SelectActionsInput setFieldValue={setFieldValue} />
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      <div ref={refProp} className={styles.form_content}>
        <div className={styles.content}>
          {patientInfoVerification.props.children}
        </div>
      </div>
    </div>
  );
};

NewInterventionStep2.label = "Características de la intervención";

NewInterventionStep2.validationSchema = Yup.object().shape({
  type: Yup.string().required("Campo obligatorio"),
  date: Yup.string().required("Campo obligatorio"),
  time: Yup.string().required("Campo obligatorio"),
  actions: Yup.array().required("Campo obligatorio"),
});

NewInterventionStep2.Img = step2;

export default NewInterventionStep2;