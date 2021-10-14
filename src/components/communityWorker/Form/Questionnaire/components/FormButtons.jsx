import Button from "../../../../Button/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import arrow from "../../../../../images/icons/arrow_back.png";
import { fixed, fixed_container, go_back } from "../../form.module.scss";

const FormButtons = ({
  activeStep,
  setActiveStep,
  topRef,
  isSubmitting,
  isPDSSigned,
  isConfirmationSigned,
}) => {
  const history = useHistory();

  const handlePrev = (values) => {
    window.scrollTo(0, 0);
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
        {activeStep === 1 && (
          <Button
            type="submit"
            disabled={!isPDSSigned}
            bgColor={isPDSSigned ? "green" : "gray"}
          >
            Firmar y seguir
          </Button>
        )}
        {activeStep === 3 && (
          <Button
            type="submit"
            disabled={!isConfirmationSigned}
            bgColor={isConfirmationSigned ? "green" : "gray"}
          >
            Firmar y seguir
          </Button>
        )}
        {(activeStep === 0 || activeStep === 2) && (
          <Button type="submit" bgColor="green">
            Confirmar y seguir
          </Button>
        )}
        {activeStep === 4 && (
          <Button type="submit" bgColor="green">
            Aceptar y enviar
          </Button>
        )}
      </div>
    </div>
  );
};

export default FormButtons;
