// import React, { useState } from "react";
// import { Field } from "formik";
// import { DatePicker } from "formik-material-ui-pickers";
// import { MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

// const DatePickerInput = ({ setFieldValue, label }) => {
//   const [date, setDate] = useState(null);

//   const onChange = (value) => {
//     setFieldValue("date", value);
//     setDate(value);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Field
//         name="date"
//         component={DatePicker}
//         label={label}
//         style={{ width: "100%", marginBottom: "1rem" }}
//         id="date-picker"
//         inputVariant="outlined"
//         format="MM/dd/yyyy"
//         value={date}
//         onChange={onChange}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };

// export default DatePickerInput;
