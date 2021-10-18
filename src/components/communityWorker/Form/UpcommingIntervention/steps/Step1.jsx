import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import {
  content,
  step_container,
  question_title,
} from "../../form.module.scss";
import step1 from "../../../../../images/steps/step1-2.png";
// import * as Yup from "yup";

const Step1 = ({ refProp, setFieldValue, values }) => {
  const upcomingInterventionForm = (
    <>
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
