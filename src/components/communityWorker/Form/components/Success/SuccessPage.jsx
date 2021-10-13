import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {success_container, close} from "./success.module.scss";
import successIcon from "../../../../../images/icons/success.png";
import closeIcon from "../../../../../images/icons/close.png";

const SuccessPage = () => {
  const history = useHistory();
  const location = useLocation();

  const handleClose = () => {
    history.push(location.state.patientURL);
  };

  return (
    <div className={success_container}>
      <div className={close}>
        <button onClick={handleClose}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
      <img src={successIcon} alt="success" />
      <h3>Información enviada correctamente.</h3>
      <p>Muchas gracias.</p>
    </div>
  );
};

export default SuccessPage;
