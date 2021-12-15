import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl } from "@material-ui/core";

const appointmentType = [
  {
    value: "VISIT_AT_HOME",
    text: "Visita",
  },
  {
    value: "PHONE_CALL",
    text: "Llamada",
  },
];

const TypeInput = ({ setFieldValue }) => {
  const [type, setType] = useState(null);

  const onChange = (e) => {
    setType(e.target.value);
    setFieldValue("intervention_type", e.target.value);
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
          helperText=""
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
            <MenuItem key={key} value={answer.value}>
              {answer.text}
            </MenuItem>
          ))}
        </Field>
      </FormControl>
    </>
  );
};

export default TypeInput;
