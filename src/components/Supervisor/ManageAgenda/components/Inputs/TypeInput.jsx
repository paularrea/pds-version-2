import React from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

const appointmentType = ["Llamada", "Visita"];

const TypeInput = () => {
  return (
    <>
      <ErrorMessage name="intervention_type" component="div" className={error} />
      <FormControl
        variant="outlined"
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          Tipo de cita
        </InputLabel>
        <Field
          name="intervention_type"
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
    </>
  );
};

export default TypeInput;
