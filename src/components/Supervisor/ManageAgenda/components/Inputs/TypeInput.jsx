import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

const appointmentType = ["Llamada", "Visita"];

const TypeInput = ({ setFieldValue }) => {
  const [type, setType] = useState(null);
  const onChange = (e) => {
    setType(e.target.value);
    const formatedValue = e.target.value === "Visita" ? "VISIT" : "CALL";
    setFieldValue("intervention_type", formatedValue);
  };
  return (
    <>
      <ErrorMessage
        name="intervention_type"
        component="div"
        className={error}
      />
      <FormControl
        variant="outlined"
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        <Field
          name="intervention_type"
          type="select"
          variant="outlined"
          label="Tipo de cita"
          component={Select}
          value={type}
          onChange={onChange}
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
