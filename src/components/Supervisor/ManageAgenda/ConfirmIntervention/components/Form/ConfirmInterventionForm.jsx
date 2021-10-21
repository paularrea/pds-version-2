import React from "react";
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
import ButtonToModal from "../../../../../GeneralComponents/Modal/Modal";

const ConfirmInterventionForm = ({ pendingDate }) => {
  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    console.log({
      confirm_intervention_form: values,
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const validationSchema = Yup.object().shape({
    type: Yup.string().required("Campo obligatorio"),
    date: Yup.string().required("Campo obligatorio"),
    time: Yup.string().required("Campo obligatorio"),
    actions: Yup.array().required("Campo obligatorio"),
  });

  return (
    <Formik
      initialValues={{
        type: "",
        time: "",
        date: pendingDate,
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
        handleSubmit,
      }) => (
        <>
          <Form>
            <ThemeProvider theme={blue_pds}>
              <section className={flex_form}>
                <div>
                  <TypeInput />
                  <DatePickerInput
                    pendingDate={pendingDate}
                    label="Fecha"
                    setFieldValue={setFieldValue}
                  />
                  <SelectTimeInput label="Hora" setFieldValue={setFieldValue} />
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
  );
};
export default ConfirmInterventionForm;
