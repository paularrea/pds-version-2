import React from "react";
import Checkbox from "./Inputs/Checkbox";
import Radio from "./Inputs/Radio";
import TextFieldInput from "./Inputs/TextField";

const SubQuestionElement = ({
  showSubQuestion,
  sub_response_type,
  sub_question_id,
  sub_question_content,
  sub_response_content,
}) => {

  switch (sub_response_type) {
    case "UNIQUE":
      return (
        <Radio
          showSubQuestion={showSubQuestion}
          question_id={sub_question_id}
          question_content={sub_question_content}
          response_content={sub_response_content}
        />
      );
    case "EDITABLE":
      return (
        <TextFieldInput
          showSubQuestion={showSubQuestion}
          question_id={sub_question_id}
          question_content={sub_question_content}
        />
      );
    case "MULTI":
      return (
        <Checkbox
          showSubQuestion={showSubQuestion}
          question_id={sub_question_id}
          question_content={sub_question_content}
          response_content={sub_response_content}
        />
      );
    default:
      return null;
  }
};

export default SubQuestionElement;
