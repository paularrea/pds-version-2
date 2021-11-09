import React from "react";
import Logout from "../../GeneralComponents/Logout/Logout";
import logoNav from "../../../images/icons/logo2.png";
import styles from "./navigation.module.scss";

const PdsNavigation = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={logoNav} alt="Protectores de salud" />
      </div>
      <div className={styles.logout}>
        <Logout />
      </div>
    </div>
  );
};

export default PdsNavigation;
