import React from "react";
import { useHistory } from "react-router-dom";
import logoNav from "../../../images/icons/logo2.png";
import styles from "./navigation.module.scss";

const PdsNavigation = () => {
  const history = useHistory();

  const logout = () => {
    history.push("/");
  };
  return (
    <div className={styles.container}>
      <div>
        <img src={logoNav} alt="Protectores de salud" />
      </div>
      <div className={styles.logout}>
        <p className="link" onClick={logout}>
          Logout
        </p>
      </div>
    </div>
  );
};

export default PdsNavigation;
