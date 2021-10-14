import React from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import styles from "../../../../communityWorker/Form/form.module.scss";

const appointmentType = ["Llamada", "Visita"];

const TypeInput = () => {
  return (
    <FormControl
      variant="outlined"
      style={{ width: "100%", marginBottom: "1rem" }}
    >
      <InputLabel id="demo-simple-select-outlined-label">
        Tipo de cita
      </InputLabel>
      <ErrorMessage
        name="type"
        component="div"
        className={styles.error_message}
      />
      <Field
        name="type"
        type="select"
        variant="outlined"
        label="Tipo de cita"
        component={Select}
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
  );
};

export default TypeInput;
