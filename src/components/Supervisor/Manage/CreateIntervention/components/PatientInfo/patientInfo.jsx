import React from "react";
import userIcon from "../../../../../../images/icons/User.png";
import locationIcon from "../../../../../../images/icons/supervisor/locationv2.png";
import styles from "./patientInfo.module.scss";
import CallButton from "../../../../../Button/CallButton";

const PatientInfo = ({ data, selected }) => {
  return (
    <>
      <div className={styles.flex_child}>
        <img className={styles.user_logo} src={userIcon} alt="" />
        <p>PDS: Andrea Vega</p>
      </div>
      <div className={styles.info_section}>
        <div className={styles.flex_child}>
          <img className={styles.info_logo} src={locationIcon} alt="" />
          <p>7920 East Depot Court San Lorenzo, Puerto Rico, United States</p>
        </div>
        <div className={styles.flex_child}>
          <CallButton prefixNumber={1} phoneNumber={1234567654}>Llamar al paciente</CallButton>
        </div>
      </div>
    </>
  );
};

export default PatientInfo;
