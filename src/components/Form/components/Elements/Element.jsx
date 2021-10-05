import React, { useState } from "react";
import Checkbox from "./Inputs/Checkbox";
import Radio from "./Inputs/Radio";
import TextFieldInput from "./Inputs/TextField";
import SubQuestionElement from "./SubQuestionElement";

const Element = ({
  question: {
    chapter_name,
    question_id,
    question_content,
    response_type,
    response_content,
    sub_question_id,
    sub_question_content,
    sub_response_type,
    sub_response_content,
  },
}) => {
  const [showSubQuestion, setShowSubQuestion] = useState(false);

  const subQuestion =
    sub_question_content !== "NULL" ? (
      <SubQuestionElement
        name={sub_question_id}
        showSubQuestion={showSubQuestion}
        sub_question_id={sub_question_id}
        sub_response_type={sub_response_type}
        sub_response_content={sub_response_content}
        sub_question_content={sub_question_content}
      />
    ) : null;

  const handleChangeRadio = (event) => {
    event.target.value === "Si" && setShowSubQuestion(true);
    event.target.value !== "Si" && setShowSubQuestion(false);
  };

  switch (response_type) {
    case "UNIQUE":
      return (
        <>
          <Radio
            question_id={question_id}
            question_content={question_content}
            response_content={response_content}
            onChange={handleChangeRadio}
          />
          {subQuestion}
        </>
      );
    case "EDITABLE":
      return (
        <TextFieldInput
          question_id={question_id}
          question_content={question_content}
          response_content={response_content}
        />
      );
    case "MULTI":
      return (
        <>
          <Checkbox
            question_id={question_id}
            question_content={question_content}
            response_content={response_content}
          />
          {subQuestion}
        </>
      );
    default:
      return null;
  }
};

export default Element;
