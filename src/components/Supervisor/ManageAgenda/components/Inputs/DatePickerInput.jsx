import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment";
import moment from "moment";

const DatePickerInput = ({
  setFieldValue,
  label,
  pendingDate,
  errors,
  touched,
}) => {
  const [date, setDate] = useState(pendingDate ? pendingDate : null);

  const onChange = (value) => {
    const formatedValue = moment(value).format("YYYY-MM-DD").toString();
    setFieldValue("date", formatedValue);
    setDate(formatedValue);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ErrorMessage name="date" component="div" className={error} />
        <Field
          name="date"
          component={DatePicker}
          label={label}
          style={{ width: "100%", marginBottom: "1rem" }}
          id="date-picker"
          inputVariant="outlined"
          format="YYYY-MM-DD"
          value={date}
          onChange={onChange}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePickerInput;
