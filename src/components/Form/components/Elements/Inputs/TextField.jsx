import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import { error_message, question_title } from "../elements.module.scss";
import "./input.module.scss";

const TextFieldInput = ({ question_id, question_content, showSubQuestion }) => {
  const isSubQuestion = question_id.substring(0, 3) === "sub";
  return (
    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <ErrorMessage
        name={question_id}
        component="div"
        className={error_message}
      />
      <h4
        style={{
          color: isSubQuestion && !showSubQuestion ? "#C5C5C5" : "black",
        }}
        className={question_title}
      >
        {question_content}
      </h4>
      <Field
        disabled={isSubQuestion && !showSubQuestion}
        type="text"
        variant="outlined"
        style={{ width: "100%" }}
        multiline
        maxRows={4}
        name={question_id}
        margin="none"
        component={TextField}
      />
    </div>
  );
};

export default TextFieldInput;
