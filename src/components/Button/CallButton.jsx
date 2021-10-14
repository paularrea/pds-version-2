import React from "react";
import Button from "./Button";
import phoneIcon from "../../images/icons/phone.png";

const CallButton = (props) => {
  return (
    <a href={`tel:${props.prefixNumber}${props.phoneNumber}`}>
      <Button width={props.width} bgColor="blue" justifyContent="flex-start">
        <img src={phoneIcon} alt="phone" />{" "}
        <div style={{ marginLeft: "1rem" }}>
          {`(${props.prefixNumber}) ${props.phoneNumber}`}
        </div>
      </Button>
    </a>
  );
};

export default CallButton;
