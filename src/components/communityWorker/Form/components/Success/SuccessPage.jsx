import React from "react";
import { useLocation, Link } from "react-router-dom";
import { success_container, close } from "./success.module.scss";
import successIcon from "../../../../../images/icons/success_icon.jpg";
import closeIcon from "../../../../../images/icons/close.png";

const SuccessPage = () => {
  const location = useLocation();

  const isPds = location.state ? (
    <Link
      to={{
        pathname: location.state.patientURL,
        state: {
          intervention: location.state.intervention,
        },
      }}
    >
      <img src={closeIcon} alt="close" />
    </Link>
  ) : (
    <Link to="/gestionar-agenda">
      <img src={closeIcon} alt="close" />
    </Link>
  );
  return (
    <div className={success_container}>
      <div className={close}>{isPds}</div>
      <img src={successIcon} alt="success" />
      <h3>Información enviada correctamente.</h3>
      <p>Muchas gracias.</p>
    </div>
  );
};

export default SuccessPage;
