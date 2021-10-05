import React from "react";
import { Field, ErrorMessage } from "formik";
import { error_message, question_title } from "../elements.module.scss";
import "./input.module.scss";

const Checkbox = ({
  question_id,
  question_content,
  response_content,
  showSubQuestion,
}) => {
  const isSubQuestion = question_id.substring(0, 3) === "sub";
  return (
    <>
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
      <div
        className="checkbox-group"
        role="group"
        aria-labelledby="checkbox-group"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {response_content.map((answer, key) => (
          <label
            key={key}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: "1rem",
              color: isSubQuestion && !showSubQuestion ? "#C5C5C5" : "black",
            }}
          >
            <Field
              disabled={isSubQuestion && !showSubQuestion}
              style={{
                cursor: "pointer",
                margin: "0 1rem 0 0",
                width: "16px",
                height: "16px",
              }}
              type="checkbox"
              name={question_id}
              value={answer}
            />

            {answer}
            <span></span>
          </label>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
