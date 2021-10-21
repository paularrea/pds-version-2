import React from "react";
import Button from "../../../../../../GeneralComponents/Button/Button";
import arrow from "../../../../../../../images/icons/arrow_back.png";
import { Link } from "react-router-dom";
import styles from "../../../../../../communityWorker/Form/form.module.scss";

const FormButtons = ({ activeStep, isSubmitting, handlePrev }) => {
  return (
    <div className={styles.fixed_container}>
      <div className={styles.fixed}>
        {activeStep !== 0 ? (
          <button
            className={styles.go_back}
            disabled={activeStep === 0 || isSubmitting}
            type="button"
            onClick={handlePrev}
          >
            <img src={arrow} alt="go back" />
          </button>
        ) : (
          <Link
            to={{
              pathname: "/gestionar-agenda",
            }}
          >
            <button className={styles.go_back}>
              <img src={arrow} alt="go back" />
            </button>
          </Link>
        )}

        <Button bgColor="green" type="submit">
          {activeStep === 2 ? "Aceptar y enviar" : "Confirmar y seguir"}
        </Button>
      </div>
    </div>
  );
};

export default FormButtons;
