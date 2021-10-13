import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import { SidebarData } from "./SidebarData";
import arrow from "../../../images/icons/arrow-up.png";
import logo from "../../../images/icons/logo2.png";
import data from "../../../data/dynamicSupervisorData";

const activeStyle = {
  borderRight: "2px solid #0057FF",
  fontWeight: "700",
  backgroundColor: "rgba(0, 85, 255, 0.2)",
};

const Navigation = ({ children, Logout }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.nav_menu}>
        <nav>
          <ul className={styles.nav_menu_items}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.nav_text}>
                  <NavLink
                    activeStyle={activeStyle}
                    to={{
                      pathname: item.path,
                      state: {
                        data: data,
                      },
                    }}
                  >
                    <div>
                      <p>{item.title}</p>
                      <img src={arrow} alt="flecha" />
                    </div>
                  </NavLink>
                </li>
              );
            })}
            <li className={styles.nav_text}>
              <button onClick={Logout}>
                <div className={styles.logout}>
                  <p>Logout</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.page}>{children}</div>
    </div>
  );
};

export default Navigation;
