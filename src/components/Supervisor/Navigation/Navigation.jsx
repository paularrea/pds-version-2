import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import styles from "./navigation.module.scss";
import { SidebarData } from "./SidebarData";
import arrow from "../../../images/icons/arrow-up.png";
import logo from "../../../images/icons/logo2.png";
import { useAuth } from "../../../user_auth_with_FIREBASE/AuthContext";

const activeStyle = {
  borderRight: "2px solid #0057FF",
  fontWeight: "700",
  backgroundColor: "rgba(0, 85, 255, 0.2)",
};

const Navigation = ({ children }) => {
  const auth = useAuth();

  const logOutHandleClick = async () => {
    window.localStorage.removeItem("user_data_from_FIRESTORE");
    await auth.logout();
  };

  return (
    <>
      {auth.user ? (
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
                  <button onClick={logOutHandleClick}>
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
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};

export default Navigation;
