import React from "react";
import Element from "../../components/Elements/Element";
import step1 from "../../../../../images/steps/step1-2.png";
// import * as Yup from "yup";
import {
  step_container,
  content,
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
