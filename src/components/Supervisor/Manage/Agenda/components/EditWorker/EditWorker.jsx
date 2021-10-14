import React, { useState } from "react";
import { Form, Formik } from "formik";
import { blue_pds } from "../../../../../utils/InputColor";
import DatePickerInput from "../../../components/Inputs/DatePickerInput";
import SelectTimeInput from "../../../components/Inputs/SelectTimeInput";
import Button from "../../../../../Button/Button";
import {
  container,
  patient_info,
  form,
  close_container,
} from "./edit.module.scss";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import EditInput from "../../../../../Button/EditInput";
import CallButton from "../../../../../Button/CallButton";
import TypeInput from "../../../components/Inputs/TypeInput";
import { ThemeProvider } from "@material-ui/styles";
import CloseButton from "../../../../../Button/CloseButton";

const EditWorker = ({ intervention, setShowDetails }) => {
  const [editType, setEditType] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);

  const patient = intervention && intervention;

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    console.log({
      edit: values,
    });
  };

  const onClick = () => {
    setShowDetails(false);
  };

  return (
    <div className={container}>
      {patient && (
        <>
          <div className={patient_info}>
            <div className={close_container} onClick={onClick}>
              <CloseButton />
            </div>
            <h3>
              {patient.patient_info.patient_first_name}{" "}
              {patient.patient_info.patient_middle_name}{" "}
              {patient.patient_info.patient_last_name}
            </h3>
            <p>
              <span>Dirección:</span> {patient.patient_info.residence_address},{" "}
              {patient.patient_info.residence_postal_code}{" "}
              {patient.patient_info.residence_city_name}{" "}
              {patient.patient_info.residence_country_name}
            </p>
          </div>
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
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                            <span>Fecha de la intervención:</span> 22/09/1003
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
                            label="Nueva fecha"
                            setFieldValue={setFieldValue}
                          />
                        )}
                      </MuiPickersUtilsProvider>
                      <br />
                      <Button type="submit" bgColor="green">
                        Guardar cambios
                      </Button>
                    </ThemeProvider>
                  </Form>
                </>
              )}
            </Formik>
          </div>
          <Button bgColor="red" onClick={onClick}>
            Eliminar intervención
          </Button>
        </>
      )}
    </div>
  );
};

export default EditWorker;
