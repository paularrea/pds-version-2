import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl } from "@material-ui/core";

const SelectTimeInput = ({
  label,
  setFieldValue,
  setFieldTouched,
  clearTimeInputValue,
  listOfAvailableHours,
}) => {
  const [time, setTime] = useState(null);
  // const [formatedListOfHours, setFormatedListOfHours] = useState(null);
  const onChange = (e) => {
    setTime(clearTimeInputValue ? "" : e.target.value);
    setFieldValue(
      "local_time",
      clearTimeInputValue ? undefined : e.target.value
    );
    setTimeout(() => setFieldTouched("local_time", e.target.value, true));
  };

  return (
    <>
      <ErrorMessage name="local_time" component="div" className={error} />
      <FormControl
        variant="outlined"
        style={{ width: "100%", marginBottom: "1rem" }}
      >
        <Field
          name="local_time"
          type="select"
          helperText=""
          variant="outlined"
          id="time-select"
          label={label}
          value={time}
          onChange={onChange}
          component={Select}
          MenuProps={{
            PaperProps: {
              style: {
                transform: "translate3d(0, 0, 0)",
              },
            },
          }}
        >
          {listOfAvailableHours ? (
            listOfAvailableHours.split("_").map((answer, key) => (
              <MenuItem key={key} value={answer}>
                {answer}
              </MenuItem>
            ))
          ) : (
            <MenuItem value={null} disabled>
              No hay horas disponibles para este día
            </MenuItem>
          )}
        </Field>
      </FormControl>
    </>
  );
};

export default SelectTimeInput;
