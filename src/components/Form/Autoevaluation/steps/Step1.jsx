import React from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import Element from "../../components/Elements/Element";
import step1 from "../../../../images/steps/step1-2.png";
// import * as Yup from "yup";
import {
  step_container,
  content,
  question_title,
} from "../../form.module.scss";

const Step1 = (props) => {
  const evaluation = props.evaluationData
    ? props.evaluationData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  return (
    <>
      <div className={step_container}>
        <div ref={props.refProp} className={content}>
          <section>{evaluation}</section>
          <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <h4 className={question_title}>Observaciones</h4>
            <Field
              type="text"
              variant="outlined"
              style={{ width: "100%" }}
              multiline
              rowsMax={4}
              name="observaciones"
              margin="none"
              component={TextField}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Step1.label = "Evaluación de la intervención";
Step1.initialValues = {
  e1: "",
  e2: "",
  e3: "",
  e4: "",
  e5: "",
  e6: "",
  e7: "",
  e8: "",
};

Step1.Img = step1;

export default Step1;
