import React, { useState } from "react";
import { ErrorMessage } from "formik";
import { error } from "../../../../components/Inputs/errorMessage.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step1 from "../../../../../../../images/steps/step1-3.png";
import PatientInfo from "../../PatientInfo/patientInfo";
import * as Yup from "yup";

const NewInterventionStep1 = ({
  refProp,
  setFieldValue,
  setCommunityWorkerId,
  patientId,
  setPatientId,
  linkPatientsInfo,
}) => {
  const [patientSelected, setPatientSelected] = useState(false);

  const onChange = (e, value) => {
    setFieldValue("patient_name", value !== null ? value : e.target.user_id);
    setPatientId(value && value.user_id);
    setPatientSelected(value ? true : false);
  };

  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <ErrorMessage name="patient_name" component="div" className={error} />
        <Autocomplete
          disabled={!linkPatientsInfo}
          id="patient_name_id"
          options={linkPatientsInfo}
          getOptionLabel={(patient) => patient.concatenated_name}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              label="Selecciona un paciente"
              fullWidth
              name="patient_name"
            />
          )}
        />

        {patientSelected ? (
          <div
            style={{
              marginTop: "2rem",
              color: "gray",
              marginLeft: "1rem",
            }}
          >
            <PatientInfo
              patientId={patientId}
              linkPatientsInfo={linkPatientsInfo}
              setCommunityWorkerId={setCommunityWorkerId}
            />
          </div>
        ) : null}
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

NewInterventionStep1.label = "Elige un/a paciente";

NewInterventionStep1.validationSchema = Yup.object().shape({
  patient_name: Yup.object().required("Campo obligatorio"),
});

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;
