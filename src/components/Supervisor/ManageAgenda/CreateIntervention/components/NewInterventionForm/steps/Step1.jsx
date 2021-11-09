import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl } from "@material-ui/core";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step1 from "../../../../../../../images/steps/step1-3.png";
import PatientInfo from "../../PatientInfo/patientInfo";
import * as Yup from "yup";

const NewInterventionStep1 = ({
  data,
  refProp,
  setFieldValue,
  setCommunityWorkerId,
  values,
  errors,
  touched,
  patientId,
  setPatientId,
  linkPatientsInfo,
}) => {
  const [patientSelected, setPatientSelected] = useState(false);
  const patientList = data && data.list_of_linked_patients;

  const onChange = (e) => {
    setFieldValue(e.target.name, e.target.value);
    setPatientSelected(true);
  };

  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <ErrorMessage name="patient_name" component="div" className={error} />
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <Field
            name="patient_name"
            type="select"
            variant="outlined"
            label={"Selecciona un Paciente"}
            style={{ width: "100%" }}
            component={Select}
            onChange={onChange}
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {patientList &&
              patientList.map((patient, key) => (
                <MenuItem
                  onClick={() => setPatientId(patient.patient_id)}
                  key={patient.patient_id}
                  value={patient.patient_name_and_email}
                >
                  {patient.patient_name_and_email}
                </MenuItem>
              ))}
          </Field>
        </FormControl>
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
  patient_name: Yup.string().required("Campo Obligatorio"),
});

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;
