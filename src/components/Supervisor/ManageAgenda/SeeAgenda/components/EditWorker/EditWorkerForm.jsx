import React, { useState } from "react";
import { Form, Formik } from "formik";
import { blue_pds } from "../../../../../utils/InputColor";
import DatePickerInput from "../../../components/Inputs/DatePickerInput";
import SelectTimeInput from "../../../components/Inputs/SelectTimeInput";
import { container, patient_info, form } from "./edit.module.scss";
import EditInput from "../../../../../GeneralComponents/Button/EditInput";
import CallButton from "../../../../../GeneralComponents/Button/CallButton";
import TypeInput from "../../../components/Inputs/TypeInput";
import { ThemeProvider } from "@material-ui/styles";
import ButtonToModal from "../../../../../GeneralComponents/Modal/Modal";

const EditWorker = ({ intervention, setShowDetails, showDetails }) => {
  const [editType, setEditType] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);

  const patient = intervention && intervention;

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    console.log({ patient_modification_values: values });
  };

  return (
    <div
      style={
        showDetails
          ? {
              backgroundColor: "whitesmoke",
            }
          : { backgroundColor: "white" }
      }
      className={container}
    >
      {patient && (
        <>
          <div className={patient_info}></div>
          <CallButton
            prefixNumber={patient.patient_info.patient_phone_country_code_num}
            phoneNumber={patient.patient_info.patient_phone_num}
          />
          <br />
          <div className={form}>
            <Formik
              initialValues={{ type: "", time: "", date: "" }}
              enableReinitialize
              onSubmit={onSubmit}
            >
              {({
                isSubmitting,
                handleSubmit,
                touched,
                values,
                errors,
                setFieldValue,
              }) => (
                <>
                  <Form onSubmit={handleSubmit}>
                    <ThemeProvider theme={blue_pds}>
                      <EditInput onClick={() => setEditType(!editType)}>
                        <p>
                          <span>Tipo de intervención:</span>{" "}
                          {patient.intervention_type === "CALL"
                            ? "Llamada"
                            : "Visita"}
                        </p>
                      </EditInput>
                      {editType && <TypeInput />}
                      <EditInput onClick={() => setEditDate(!editDate)}>
                        <p>
                          <span>Fecha de la intervención:</span>{" "}
                          {patient.local_date}
                        </p>
                      </EditInput>
                      {editDate && (
                        <DatePickerInput
                          label="Nueva fecha"
                          setFieldValue={setFieldValue}
                        />
                      )}
                      <EditInput onClick={() => setEditTime(!editTime)}>
                        <p>
                          <span>Hora de la intervención:</span>{" "}
                          {patient.local_time_12h}
                        </p>
                      </EditInput>
                      {editTime && (
                        <SelectTimeInput
                          label="Nueva hora"
                          setFieldValue={setFieldValue}
                        />
                      )}
                      <br />
                    </ThemeProvider>
                  </Form>
                  <ButtonToModal
                    handleSubmit={handleSubmit}
                    type="button"
                    bgColor="green"
                    formButtonText="Guardar cambios"
                    modalButtonText="Guardar"
                    modalText="¿Estás seguro que la información editada es correcta deseas guardar estos cambios?"
                  />
                </>
              )}
            </Formik>
          </div>
          <ButtonToModal
            bgColor="red"
            formButtonText="Eliminar intervención"
            modalButtonText="Eliminar"
            modalText="¿Estás seguro que deseas eliminar esta intervención?"
          />
        </>
      )}
    </div>
  );
};

export default EditWorker;
