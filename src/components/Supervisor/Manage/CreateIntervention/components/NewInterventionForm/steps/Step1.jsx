import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step1 from "../../../../../../../images/steps/step1-3.png";
import PatientInfo from "../../PatientInfo/patientInfo";
// import * as Yup from "yup";

const patientList = ["Lucas Calvo", "Paloma López", "Andrés Giménez"];

const NewInterventionStep1 = ({ refProp, setFieldValue, values, data }) => {
  const [pdsAssigned, setPdsAssigned] = useState("Andrea Vega");
  const [patientSelected, setPatientSelected] = useState(false);

  useEffect(() => {
    setPdsAssigned(pdsAssigned);
  }, [pdsAssigned]);

  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <FormControl variant="outlined" style={{ width:'100%' }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Selecciona un Paciente
          </InputLabel>
          <ErrorMessage
            name="PacienteName"
            component="div"
            className={styles.error_message}
          />
          <Field
            type="select"
            variant="outlined"
            label="Selecciona un Paciente"
            style={{ width: "100%" }}
            component={Select}
            name="PdsName"
            onChange={() => setPatientSelected(true)}
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {patientList.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
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
            <PatientInfo />
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

// NewInterventionStep1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

NewInterventionStep1.Img = step1;

export default NewInterventionStep1;
