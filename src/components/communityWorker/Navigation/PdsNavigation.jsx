import React from "react";
import logoNav from "../../../images/icons/logo2.png";
import styles from "./navigation.module.scss";

const PdsNavigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logoNav} alt="Protectores de salud" />
      </div>
      <div className={styles.logout}>
        <p className="link">Logout</p>
      </div>
    </div>
  );
};

export default PdsNavigation;
