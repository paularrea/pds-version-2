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
import subtype_CONFIRMED from "../../../../../../events/type_AGENDA/subtype_CONFIRMED";
import { get_list_of_hours_by_day } from "../../../components/functions/get_list_of_hours_by_day";

const ConfirmInterventionForm = ({ row }) => {
  const [isSent, sendForm] = useState(false);
  const { contextData } = useContext(SupervisorContext);
  const [clearTimeInputValue, setClearTimeInputValue] = useState(false);
  
  const availableTimesList =
  contextData && contextData.agenda.available_times_per_community_worker;
  const userId = contextData && contextData.user_id;
  const patientId = row.patientId;
  const communityWorkerId = row.linkedCommunityWorkerId;
  const suggestedEventId = row.suggestedEventId;
  console.log(row)
  const [listOfAvailableHours, setListOfAvailableHours] = useState(
    get_list_of_hours_by_day(
      row.date,
      communityWorkerId,
      availableTimesList
    )
  );

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    console.log("hey");
    console.log(
      subtype_CONFIRMED(userId, patientId, communityWorkerId, suggestedEventId, values)
    );
    sendForm(true);
  };

  const validationSchema = Yup.object().shape({
    intervention_type: Yup.string().required("Campo obligatorio"),
    local_date: Yup.date().required("Campo obligatorio"),
    local_time: Yup.string().required("Campo obligatorio"),
    actions: Yup.array().required("Campo obligatorio"),
  });

  return (
    <>
      <Formik
        initialValues={{
          intervention_type: "",
          local_time: "",
          local_date: row.date,
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
                    <TypeInput setFieldValue={setFieldValue} />
                    <DatePickerInput
                      pendingDate={row.date}
                      label="Fecha"
                      setFieldValue={setFieldValue}
                      availableTimesList={availableTimesList}
                      setListOfAvailableHours={setListOfAvailableHours}
                      linkedCommunityWorkerId={communityWorkerId}
                      onClick={() => setClearTimeInputValue(true)}
                    />
                    <SelectTimeInput
                      label="Hora"
                      pendingDate={row.date}
                      setFieldValue={setFieldValue}
                      listOfAvailableHours={listOfAvailableHours}
                      communityWorkerId={communityWorkerId}
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
