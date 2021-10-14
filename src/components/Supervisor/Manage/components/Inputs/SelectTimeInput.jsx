import * as React from "react";
import TextField from "@mui/material/TextField";
import { Field, ErrorMessage } from "formik";
import styles from "../../../../communityWorker/Form/form.module.scss";
import { Autocomplete } from "formik-material-ui-lab";

export default function SelectTimeInput({ setFieldValue, label }) {

  return (
    <div>
      <ErrorMessage
        name="time"
        component="div"
        className={styles.error_message}
      />
      <Field
        name="time"
        id="select-time-input"
        component={Autocomplete}
        style={{ width: "100%" }}
        options={timeSlots}
        getOptionDisabled={(option) =>
          option === timeSlots[0] || option === timeSlots[2]
        }
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);
