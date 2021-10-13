import React from "react";
import userIcon from "../../../../../../../images/icons/User.png";
import phoneIcon from "../../../../../../../images/icons/phone.png";
import locationIcon from "../../../../../../../images/icons/loc.png";
import styles from "./dropdown-form.module.scss";
// import Form from "./SuggestionForm/Form";

const Dropdown = ({ row }) => {
  return (
    <div className={styles.dropdown_container}>
      <div className={styles.child}>
        <section>
          <div className={styles.flex_child}>
            <img className={styles.user_logo} src={userIcon} alt="" />
            <p>{row.patient}</p>
          </div>
          <div className={styles.info_section}>
            <div className={styles.flex_child}>
              <img className={styles.info_logo} src={phoneIcon} alt="" />
              <p>{row.phone}</p>
            </div>
            <div className={styles.flex_child}>
              <img className={styles.info_logo} src={locationIcon} alt="" />
              <p>{row.location}</p>
            </div>
            <div className={styles.flex_child}>
              <a
                className={styles.blue_button}
                href={`tel:${row.phone}`}
              >
                Llamar al paciente
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.child}>
        {/* <Form date={row.date}/> */}
      </div>
    </div>
  );
};

export default Dropdown;
