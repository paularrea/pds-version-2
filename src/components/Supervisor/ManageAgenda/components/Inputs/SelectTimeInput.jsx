import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);

const SelectTimeInput = ({ label, setFieldValue }) => {
  const [time, setTime] = useState('');

  const onChange = (e) => {
    setFieldValue("time", e.target.value);
    setTime(e.target.value);
  };

  return (
    <>
      <ErrorMessage name="time" component="div" className={error} />
    <FormControl
      variant="outlined"
      style={{ width: "100%", marginBottom: "1rem" }}
    >
      <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
      <Field
        name="time"
        type="select"
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
        {timeSlots.map((answer, key) => (
          <MenuItem key={key} value={answer}>
            {answer}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
    </>
  );
};

export default SelectTimeInput;
