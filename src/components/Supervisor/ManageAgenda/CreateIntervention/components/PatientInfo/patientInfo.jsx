import React, { useEffect } from "react";
import userIcon from "../../../../../../images/icons/User.png";
import locationIcon from "../../../../../../images/icons/supervisor/locationv2.png";
import styles from "./patientInfo.module.scss";
import CallButton from "../../../../../GeneralComponents/Button/CallButton";

const PatientInfo = ({ patientId, linkPatientsInfo, setCommunityWorkerId }) => {
  const patientInfoValues =
    linkPatientsInfo &&
    linkPatientsInfo.filter((item) => item.user_id === patientId)[0];

  useEffect(() => {
    setCommunityWorkerId(patientInfoValues.linked_community_workers[0].user_id);
  }, [patientInfoValues, setCommunityWorkerId]);

  return (
    <>
      <div className={styles.flex_child}>
        <img className={styles.user_logo} src={userIcon} alt="" />
        <p>
          PDS:{" "}
          {patientInfoValues.linked_community_workers[0]
            ? patientInfoValues.linked_community_workers[0].concatenated_name
            : "pds_name_not_found"}
        </p>
      </div>
      <div className={styles.info_section}>
        <div className={styles.flex_child}>
          <img className={styles.info_logo} src={locationIcon} alt="" />
          <p>
            {patientInfoValues.residence_address}{" "}
            {patientInfoValues.residence_city}{" "}
            {patientInfoValues.residence_state}{" "}
            {patientInfoValues.residence_postal_code}{" "}
            {patientInfoValues.residence_country_name}
          </p>
        </div>
        <div className={styles.flex_child}>
          <CallButton
            prefixNumber={patientInfoValues.phone_country_code_num}
            phoneNumber={patientInfoValues.phone_num}
            patientId={patientId}
          />
        </div>
      </div>
    </>
  );
};

export default PatientInfo;
