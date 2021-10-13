import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import styles from "../../../../../../communityWorker/Form/form.module.scss";
import step2 from "../../../../../../../images/steps/step2-3.png";
// import * as Yup from "yup";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const appointmentType = ["Llamada", "Visita"];
const actions = [
  "Verificar datos personales",
  "Aceptación Programa PDS",
  "Revisar aceptación del cliente",
];

const NewInterventionStep2 = ({ refProp, setFieldValue, values }) => {
  const [pdsAssigned, setPdsAssigned] = useState("Andrea Vega");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setPdsAssigned(pdsAssigned);
  }, [pdsAssigned]);

  const patientInfoVerification = (
    <>
      <div className={styles.swipable_component}>
        <FormControl variant="outlined" style={{ width: "100%", marginBottom:'1rem' }}>
          <InputLabel id="demo-simple-select-outlined-label">
            Tipo de cita
          </InputLabel>
          <ErrorMessage
            name="PdsName"
            component="div"
            className={styles.error_message}
          />
          <Field
            type="select"
            variant="outlined"
            label="Tipo de cita"
            component={Select}
            name="PdsName"
            MenuProps={{
              PaperProps: {
                style: {
                  transform: "translate3d(0, 0, 0)",
                },
              },
            }}
          >
            {appointmentType.map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))}
          </Field>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <KeyboardDatePicker
              style={{ width: "100%", marginBottom:'1rem' }}
              id="date-picker-dialog"
              label="Fecha de la intervención"
              inputVariant="outlined"
              format="MM/dd/yyyy"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
          <div>
            <KeyboardTimePicker
              style={{ width: "100%", marginBottom:'1rem' }}
              id="hour-picker-dialog"
              label="Hora de la intervención"
              inputVariant="outlined"
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div style={{ margin: "1rem 0 2rem 0" }}>
          <ErrorMessage
            name="actions"
            component="div"
            className={styles.error_message}
          />
          <p style={{ marginBottom: "1rem" }}>Indique las acciones requeridas</p>
          <div
            className="checkbox-group"
            role="group"
            aria-labelledby="checkbox-group"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {actions.map((answer, key) => (
              <label
                key={key}
                style={{
                  cursor: "pointer",
                  marginBottom: "1rem",
                }}
              >
                <Field
                  style={{
                    cursor: "pointer",
                    margin: "0 1rem 0 0",
                    width: "16px",
                    height: "16px",
                  }}
                  type="checkbox"
                  className={styles.checkbox_form}
                  name="action"
                  value={answer}
                />
                {answer}
                <span></span>
              </label>
            ))}
          </div>{" "}
        </div>
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

NewInterventionStep2.label = "Crear una nueva intervención";

// NewInterventionStep2.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

NewInterventionStep2.Img = step2;

export default NewInterventionStep2;
