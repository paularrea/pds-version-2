import React from "react";
import {step_container, content} from "../../form.module.scss";
import * as Yup from "yup";
import Element from "../../components/Elements/Element";
import Chapter from "../../components/Elements/components/chapter";
import step3 from "../../../../../images/steps/step3-5.png";

const Step3 = ({ refProp, ...props }) => {
  const cuestionario = props.questionaryData
    ? props.questionaryData.map((question, i) => (
        <Element key={i} question={question} />
      ))
    : null;

  let chapterOne =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Seguro médico") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
  let chapterTwo =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Información general") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
  let chapterThree =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Hogar") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
  let chapterFour =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Acceso a servicios") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
  let chapterFive =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Entorno") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);
  let chapterSix =
    cuestionario &&
    cuestionario.reduce(function (filteredGroup, question) {
      if (question.props.question.chapter_name === "Historial Médico") {
        filteredGroup.push(question);
      }
      return filteredGroup;
    }, []);

  const questionnaireInChapters = (
    <div name="questionnairePDS">
      <Chapter questions={chapterOne} />
      <Chapter questions={chapterTwo} />
      <Chapter questions={chapterThree} />
      <Chapter questions={chapterFour} />
      <Chapter questions={chapterFive} />
      <Chapter questions={chapterSix} />
    </div>
  );

  return (
    <div className={step_container}>
      <div ref={refProp} className={content}>
        {questionnaireInChapters.props.children}
      </div>
    </div>
  );
};

Step3.label = "Cuestionario";

Step3.validationSchema = Yup.object().shape({
  // q1: Yup.string().required("Campo Obligatorio"),
  // q2: Yup.string().required("Campo Obligatorio"),
  // q3: Yup.string().required("Campo Obligatorio"),
  // q4: Yup.string().required("Campo Obligatorio"),
  // q5: Yup.string().required("Campo Obligatorio"),
  // q6: Yup.string().required("Campo Obligatorio"),
  // q7: Yup.array().required("Campo Obligatorio"),
  // q8: Yup.array().required("Campo Obligatorio"),
  // q9: Yup.string().required("Campo Obligatorio"),
  // q10: Yup.string().required("Campo Obligatorio"),
  // q11: Yup.string().required("Campo Obligatorio"),
  // q12: Yup.string().required("Campo Obligatorio"),
  // q13: Yup.string().required("Campo Obligatorio"),
  // q14: Yup.string().required("Campo Obligatorio"),
  // q15: Yup.string().required("Campo Obligatorio"),
  // q16: Yup.string().required("Campo Obligatorio"),
  // q17: Yup.string().required("Campo Obligatorio"),
  // q18: Yup.string().required("Campo Obligatorio"),
  // q19: Yup.string().required("Campo Obligatorio"),
  // q20: Yup.string().required("Campo Obligatorio"),
  // q21: Yup.string().required("Campo Obligatorio"),
  // q22: Yup.string().required("Campo Obligatorio"),
  // q23: Yup.array().required("Campo Obligatorio"),
  // q24: Yup.string().required("Campo Obligatorio"),
  // q25: Yup.array().required("Campo Obligatorio"),
  // q26: Yup.string().required("Campo Obligatorio"),
  // q27: Yup.array().required("Campo Obligatorio"),
  // q28: Yup.string().required("Campo Obligatorio"),
  // q29: Yup.string().required("Campo Obligatorio"),
  // q30: Yup.string().required("Campo Obligatorio"),
  // q31: Yup.array().required("Campo Obligatorio"),
  // q32: Yup.array().required("Campo Obligatorio"),
  // q33: Yup.string().required("Campo Obligatorio"),
  // q34: Yup.string().required("Campo Obligatorio"),
  // q35: Yup.string().required("Campo Obligatorio"),
  // q36: Yup.string().required("Campo Obligatorio"),
  // q37: Yup.string().required("Campo Obligatorio"),
  // q38: Yup.string().required("Campo Obligatorio"),
  // q39: Yup.string().required("Campo Obligatorio"),
});

Step3.Img = step3;

export default Step3;
