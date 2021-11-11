import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/moment";
import moment from "moment";
import { get_list_of_hours_by_day } from "../functions/get_list_of_hours_by_day";
import { useUserData } from "../../../../../context/UserContext";

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
  const context = useUserData();
  
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

  const get_first_available_date =
    context.data && context.data.future_available_dates.first_available_date;
  const get_last_available_date =
    context.data && context.data.future_available_dates.last_available_date;

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
          minDate={get_first_available_date}
          maxDate={get_last_available_date}
          onChange={onChange}
          // shouldDisableDate={disableWeekends}
          onClick={onClick}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default DatePickerInput;
