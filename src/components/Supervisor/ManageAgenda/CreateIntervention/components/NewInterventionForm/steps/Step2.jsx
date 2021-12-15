import React, { useState } from "react";
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
  setFieldTouched,
  communityWorkerId,
  data,
}) => {
  const [listOfAvailableHours, setListOfAvailableHours] = useState();
  const [clearTimeInputValue, setClearTimeInputValue] = useState(false);

  const availableTimesList =
    data && data.available_times_per_community_worker;

  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <TypeInput setFieldValue={setFieldValue} />
        <DatePickerInput
          label="Fecha"
          availableTimesList={availableTimesList}
          setFieldValue={setFieldValue}
          setListOfAvailableHours={setListOfAvailableHours}
          communityWorkerId={communityWorkerId}
          onClick={() => setClearTimeInputValue(true)}
        />
        <SelectTimeInput
          listOfAvailableHours={listOfAvailableHours}
          communityWorkerId={communityWorkerId}
          label="Hora"
          clearTimeInputValue={clearTimeInputValue}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
        />
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
  intervention_type: Yup.string().required("Campo obligatorio"),
  local_date: Yup.string().required("Campo obligatorio"),
  local_time: Yup.string().required("Campo obligatorio"),
  actions: Yup.array().required("Campo obligatorio"),
});

NewInterventionStep2.Img = step2;

export default NewInterventionStep2;
