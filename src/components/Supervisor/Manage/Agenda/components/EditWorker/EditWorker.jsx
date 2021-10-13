import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form, Formik, Field } from "formik";
import { DatePicker, TimePicker } from "formik-material-ui-pickers";
import Button from "../../../../../Button/Button";
import { useLocation } from "react-router-dom";
import { container, patient_info, form } from "./edit.module.scss";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import EditInput from "../../../../../Button/EditInput";
import CallButton from "../../../../../Button/CallButton";
import DeleteButton from "../../../../../Button/DeleteButton";

const EditWorker = () => {
  const history = useHistory();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);

  const location = useLocation();
  const patient = location.state && location.state.intervention;

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    console.log({
      edit: values,
    });
  };
  const initialValues = {
    initialDate: date,
    initialTime: time,
  };
  return (
    <div className={container}>
      {patient && (
        <>
          <div className={patient_info}>
            <h2>
              {patient.patient_info.patient_first_name}{" "}
              {patient.patient_info.patient_middle_name}{" "}
              {patient.patient_info.patient_last_name}
            </h2>
            <CallButton
              prefixNumber={patient.patient_info.patient_phone_country_code_num}
              phoneNumber={patient.patient_info.patient_phone_num}
            />
            <p>
              <span>Tipo de intervención:</span>{" "}
              {patient.intervention_type === "CALL" ? "Llamada" : "Visita"}
            </p>
            <p>
              <span>Dirección:</span> {patient.patient_info.residence_address},{" "}
              {patient.patient_info.residence_postal_code}{" "}
              {patient.patient_info.residence_city_name}{" "}
              {patient.patient_info.residence_country_name}
            </p>
          </div>
          <div className={form}>
            <Formik
              initialValues={initialValues}
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <EditInput onClick={() => setEditDate(!editDate)}>
                        <p>
                          <span>Fecha de la intervención:</span> 22/09/1003
                        </p>
                      </EditInput>
                      {editDate && (
                        <Field
                          component={DatePicker}
                          style={{ width: "100%", marginBottom:'1rem' }}
                          value={date}
                          onChange={(newValue) => {
                            setDate(newValue);
                          }}
                          inputVariant="outlined"
                          format="dd/MM/yyyy"
                          name="initialDate"
                          label="Nueva fecha"
                        />
                      )}
                      <EditInput onClick={() => setEditTime(!editTime)}>
                        <p>
                          <span>Hora de la intervención:</span> {patient.local_time_12h}
                        </p>
                      </EditInput>
                      {editTime && (
                        <Field
                          component={TimePicker}
                          style={{ width: "100%", marginBottom:'1rem' }}
                          value={time}
                          onChange={(newValue) => {
                            setTime(newValue);
                          }}
                          inputVariant="outlined"
                          format="HH:mm"
                          name="initialTime"
                          label="Nueva hora"
                        />
                      )}
                    </MuiPickersUtilsProvider>
                    <Button type="submit" bgColor="#00CB45">
                      Guardar cambios
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </div>
          <DeleteButton onClick={() => history.goBack()}>
            Eliminar intervención
          </DeleteButton>
        </>
      )}
    </div>
  );
};

export default EditWorker;
