import React from "react";
import { Form, Formik } from "formik";
import {flex_form} from "./confirmForm.module.scss"
import { ThemeProvider } from "@material-ui/core";
import { blue_pds } from "../../../../../utils/InputColor";
import TypeInput from "../../../components/Inputs/TypeInput";
import DatePickerInput from "../../../components/Inputs/DatePickerInput";
import SelectTimeInput from "../../../components/Inputs/SelectTimeInput";
import SelectActionsInput from "../../../components/Inputs/SelectActionsInput";
import Button from "../../../../../Button/Button";

const ConfirmInterventionForm = (props) => {
  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    console.log({
      confirm_intervention_form: values,
    });
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik
      initialValues={{
        type: "",
        time: "",
        date: "",
        actions: [],
      }}
      enableReinitialize
      onSubmit={onSubmit}
    >
      {({ isSubmitting, touched, values, errors, setFieldValue }) => (
        <>
          <Form>
          <ThemeProvider theme={blue_pds}>
            <section className={flex_form}>
              <div>
                <TypeInput />
                <DatePickerInput label='Fecha' setFieldValue={setFieldValue} />
                <SelectTimeInput label='Fecha' setFieldValue={setFieldValue} />
              </div>
              <div>
                <SelectActionsInput />
                <br />
                <Button bgColor="green" type="submit">
                  Confirmar y enviar
                </Button>
              </div>
            </section>
            </ThemeProvider>
          </Form>
        </>
      )}
    </Formik>
  );
};
export default ConfirmInterventionForm;
