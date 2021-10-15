import React from "react";
import { Field, ErrorMessage } from "formik";
import { Select } from "formik-material-ui";
import { MenuItem, FormControl, InputLabel } from "@material-ui/core";
import styles from "../../../../communityWorker/Form/form.module.scss";

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);

const SelectTimeInput = ({label}) => {
  return (
    <FormControl
      variant="outlined"
      style={{ width: "100%", marginBottom: "1rem" }}
    >
      <InputLabel id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>
      <ErrorMessage
        name="time"
        component="div"
        className={styles.error_message}
      />
      <Field
        name="time"
        type="select"
        variant="outlined"
        label={label}
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
  );
};

export default SelectTimeInput;
