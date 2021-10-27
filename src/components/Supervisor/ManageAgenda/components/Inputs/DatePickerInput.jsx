import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment";
import moment from "moment";
import { get_list_of_hours_by_day } from "../functions/get_list_of_hours_by_day";

const DatePickerInput = ({
  setFieldValue,
  label,
  pendingDate,
  errors,
  touched,
  linkedCommunityWorkerId,
  availableTimesList,
  setListOfAvailableHours,
  onClick,
}) => {

  // function disableWeekends(date) {
  //   return date.getDay() === 0 || date.getDay() === 6;
  // }

  const [date, setDate] = useState(pendingDate ? pendingDate : null);
  const onChange = (value) => {
    const formatedValue = moment(value).format("YYYY-MM-DD").toString();
    setFieldValue("local_date", formatedValue);
    setDate(formatedValue);
    availableTimesList &&
      setListOfAvailableHours(
        get_list_of_hours_by_day(
          formatedValue,
          linkedCommunityWorkerId,
          availableTimesList
        )
      );
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ErrorMessage name="local_date" component="div" className={error} />
        <Field
          name="local_date"
          component={DatePicker}
          label={label}
          style={{ width: "100%", marginBottom: "1rem" }}
          id="date-picker"
          inputVariant="outlined"
          format="YYYY-MM-DD"
          value={date}
          minDate='2021-10-28'
          maxDate='2021-11-28'
          onChange={onChange}
          // shouldDisableDate={disableWeekends}
          onClick={onClick}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePickerInput;
