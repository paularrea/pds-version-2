import React, { useState } from "react";
import locationIcon from "../../../../../images/icons/loc.png";
import arrow from "../../../../../images/icons/arrow.png";
import phoneIcon from "../../../../../images/icons/phoneIcon.png";
import {
  intervention_section,
  time,
  direction,
  flex_container_direction,
  name,
  arrow_container,
} from "../list.module.scss";
import EditWorker from "../../../../Supervisor/Manage/Agenda/components/EditWorker/EditWorker";

const UserLink = ({ intervention }) => {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      {showDetails ? (
        <EditWorker
          setShowDetails={setShowDetails}
          intervention={intervention}
        />
      ) : (
        <section onClick={onClick} className={intervention_section}>
          <div className={time}>{intervention.local_time_12h}</div>
          <div className={direction}>
            <div className={flex_container_direction}>
              <div className={name}>
                {intervention.intervention_type === "VISIT" ? (
                  <img src={locationIcon} alt="location" />
                ) : (
                  <img src={phoneIcon} alt="phone" />
                )}
                <h5>
                  {intervention.patient_info.patient_first_name}{" "}
                  {intervention.patient_info.patient_middle_name}{" "}
                  {intervention.patient_info.patient_last_name}{" "}
                  {intervention.patient_info.patient_second_last_name}
                </h5>
              </div>
              <div className={arrow_container}>
                <img src={arrow} alt="see intervention details" />
              </div>
            </div>
            {intervention.intervention_type === "VISIT" && (
              <p>
                {intervention.patient_info.residence_address},{" "}
                {intervention.patient_info.residence_postal_code}{" "}
                {intervention.patient_info.residence_city}{" "}
                {intervention.patient_info.residence_state},{" "}
                {intervention.patient_info.residence_country_name}
              </p>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default UserLink;
