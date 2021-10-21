import React from "react";
import Button from "./Button";
import phone_call from "../../../events/userInteraction/phone_call";
import phoneIcon from "../../../images/icons/phone.png";

const CallButton = (props) => {
  const phoneCallEvent = () => {
    console.log(
      phone_call(props.userId, props.agendaEventId),
      "phone_call_event"
    );
  };
  return (
    <a href={`tel:${props.prefixNumber}${props.phoneNumber}`}>
      <Button
        onClick={phoneCallEvent}
        width={props.width}
        bgColor="blue"
        justifyContent="flex-start"
      >
        <img src={phoneIcon} alt="phone" />{" "}
        <div style={{ marginLeft: "1rem" }}>
          {`(${props.prefixNumber}) ${props.phoneNumber}`}
        </div>
      </Button>
    </a>
  );
};

export default CallButton;
