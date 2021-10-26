import React, { useState, useContext } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  flex_form,
  button_to_modal_container,
} from "./confirmForm.module.scss";
import { ThemeProvider } from "@material-ui/core";
import { blue_pds } from "../../../../../utils/InputColor";
import TypeInput from "../../../components/Inputs/TypeInput";
import DatePickerInput from "../../../components/Inputs/DatePickerInput";
import SelectTimeInput from "../../../components/Inputs/SelectTimeInput";
import SelectActionsInput from "../../../components/Inputs/SelectActionsInput";
import { SupervisorContext } from "../../../../../../SupervisorContext";
import ButtonToModal from "../../../../../GeneralComponents/Modal/Modal";
import { Redirect } from "react-router";

const ConfirmInterventionForm = ({ row }) => {
  const [isSent, sendForm] = useState(false);
  const { contextData } = useContext(SupervisorContext);
  const [clearTimeInputValue, setClearTimeInputValue] = useState(false);
  const [listOfAvailableHours, setListOfAvailableHours] = useState([]);

  const availableTimesList =
    contextData && contextData.agenda.available_times_per_community_worker;

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    console.log({
      confirm_intervention_form: values,
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    sendForm(true)
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string().required("Campo obligatorio"),
    date: Yup.string().required("Campo obligatorio"),
    time: Yup.string().required("Campo obligatorio"),
    actions: Yup.array().required("Campo obligatorio"),
  });

  return (
    <>
      <Formik
        initialValues={{
          type: "",
          time: "",
          date: row.date,
          actions: "",
        }}
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          isSubmitting,
          touched,
          values,
          errors,
          setFieldValue,
          setFieldTouched,
          handleSubmit,
        }) => (
          <>
            <Form>
              <ThemeProvider theme={blue_pds}>
                <section className={flex_form}>
                  <div>
                    <TypeInput />
                    <DatePickerInput
                      pendingDate={row.date}
                      label="Fecha"
                      setFieldValue={setFieldValue}
                      availableTimesList={availableTimesList}
                      setListOfAvailableHours={setListOfAvailableHours}
                      linkedCommunityWorkerId={row.linkedCommunityWorkerId}
                      onClick={() => setClearTimeInputValue(true)}
                    />
                    <SelectTimeInput
                      label="Hora"
                      setFieldValue={setFieldValue}
                      listOfAvailableHours={listOfAvailableHours}
                      communityWorkerId={row.linkedCommunityWorkerId}
                      clearTimeInputValue={clearTimeInputValue}
                      setFieldTouched={setFieldTouched}
                    />
                    <SelectActionsInput setFieldValue={setFieldValue} />
                  </div>
                </section>
              </ThemeProvider>
            </Form>
            <div className={button_to_modal_container}>
              <ButtonToModal
                handleSubmit={handleSubmit}
                type="button"
                bgColor="green"
                formButtonText="Guardar cambios"
                modalButtonText="Guardar"
                modalText="¿Estás seguro que la información editada es correcta deseas guardar estos cambios?"
              />
            </div>
          </>
        )}
      </Formik>
      {isSent && (
        <Redirect
          to={{
            pathname: "/gestionar-agenda/create-form-success",
          }}
        />
      )}
    </>
  );
};
export default ConfirmInterventionForm;
