import React, {useState} from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import {
  content,
  step_container,
  question_title,
} from "../../form.module.scss";
import step1 from "../../../../../images/steps/step1-2.png";
// import * as Yup from "yup";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DatePickerInput from "../../../../Supervisor/Manage/components/Inputs/DatePickerInput"

const Step1 = ({ refProp, setFieldValue, values }) => {
  const upcomingInterventionForm = (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
          <DatePickerInput label='Fecha' setFieldValue={setFieldValue}/>
        </div>
        <div>
          <h4 className={question_title}>Observaciones</h4>
          <Field
            style={{ width: "100%" }}
            type="text"
            variant="outlined"
            multiline
            maxRows={4}
            name="observations"
            margin="none"
            component={TextField}
          />
        </div>
      </MuiPickersUtilsProvider>
    </>
  );

  return (
    <div ref={refProp} className={content}>
      <div className={step_container}>
        {upcomingInterventionForm.props.children}
      </div>
    </div>
  );
};

Step1.label = "Sugerir fecha y motivos";

// Step1.validationSchema = Yup.object().shape({
//   interventionSuggestion: Yup.string().required("Campo Obligatorio"),
// });

Step1.Img = step1;

export default Step1;
