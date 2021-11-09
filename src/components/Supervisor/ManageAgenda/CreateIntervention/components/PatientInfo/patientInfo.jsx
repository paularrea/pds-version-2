import React, { useEffect } from "react";
import userIcon from "../../../../../../images/icons/User.png";
import locationIcon from "../../../../../../images/icons/supervisor/locationv2.png";
import styles from "./patientInfo.module.scss";
import CallButton from "../../../../../GeneralComponents/Button/CallButton";

const PatientInfo = ({ patientId, linkPatientsInfo, setCommunityWorkerId }) => {
  const patientInfoValues = linkPatientsInfo[patientId];
  useEffect(() => {
    setCommunityWorkerId(patientInfoValues.linked_community_worker_id);
  }, [setCommunityWorkerId, patientInfoValues.linked_community_worker_id]);
  return (
    <>
      <div className={styles.flex_child}>
        <img className={styles.user_logo} src={userIcon} alt="" />
        <p>
          PDS: {patientInfoValues.linked_community_worker_concatenated_name}
        </p>
      </div>
      <div className={styles.info_section}>
        <div className={styles.flex_child}>
          <img className={styles.info_logo} src={locationIcon} alt="" />
          <p>
            {patientInfoValues.patient_residence_address}{" "}
            {patientInfoValues.patient_residence_city}{" "}
            {patientInfoValues.patient_residence_state}{" "}
            {patientInfoValues.patient_residence_postal_code}{" "}
            {patientInfoValues.patient_residence_country_name}
          </p>
        </div>
        <div className={styles.flex_child}>
          <CallButton
            prefixNumber={patientInfoValues.patient_phone_country_code_num}
            phoneNumber={patientInfoValues.patient_phone_num}
          />
        </div>
      </div>
    </>
  );
};

export default PatientInfo;
