import React, { useState } from "react";
import { Modal } from "@mui/material";
import { modal_container, modal_text, flex_buttons } from "./modal.module.scss";
import Button from "../../GeneralComponents/Button/Button";

export default function TextModal({
  modalText,
  bgColor,
  formButtonText,
  modalButtonText,
  handleSubmit,
  eliminateIntervention,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button type="button" bgColor={bgColor} onClick={handleOpen}>
        {formButtonText}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={modal_container}>
          <div className={modal_text}>
            <p>{modalText}</p>
            <br />
            <div className={flex_buttons}>
              <Button
                type="submit"
                bgColor={bgColor}
                onClick={
                  bgColor === "red" ? eliminateIntervention : handleSubmit
                }
              >
                {modalButtonText}
              </Button>
              <Button type="button" onClick={handleClose} bgColor="blue">
                Volver
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
