import React from "react";
import Button from "../../../../GeneralComponents/Button/Button";
import { useHistory } from "react-router-dom";
import arrow from "../../../../../images/icons/arrow_back.png";
import { fixed, fixed_container, go_back } from "../../form.module.scss";

const FormButtons = ({ activeStep, setActiveStep, topRef, isSubmitting }) => {
  const history = useHistory();
  const handlePrev = (values) => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  return (
    <div className={fixed_container}>
      <div className={fixed}>
        {activeStep !== 0 ? (
          <button
            className={go_back}
            disabled={activeStep === 0 || isSubmitting}
            type="button"
            onClick={handlePrev}
          >
            <img src={arrow} alt="go back" />
          </button>
        ) : (
          <button className={go_back} onClick={() => history.goBack()}>
            <img src={arrow} alt="go back" />
          </button>
        )}
        {activeStep === 1 ? (
          <Button type="submit" bgColor="green">
            Aceptar y enviar
          </Button>
        ) : (
          <Button type="submit" bgColor="green">
            Confirmar y seguir
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormButtons;
