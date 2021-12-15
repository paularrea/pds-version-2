import React, { useState } from "react";
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
import { Redirect } from "react-router";
import subtype_CONFIRMED from "../../../../../../events/type_AGENDA/subtype_CONFIRMED";
import { get_list_of_hours_by_day } from "../../../components/functions/get_list_of_hours_by_day";
import { useGeolocation } from "rooks";
import { useUserData } from "../../../../../../context/UserContext";
// import push_new_document_into_FIRESTORE from "../../../../../../FIRESTORE/push_new_document_into_FIRESTORE";
// import { build_collection_name } from "../../../../../../events/build_collection_name";

const ConfirmInterventionForm = ({ row }) => {
  const userData = useUserData();
  const [isSent, sendForm] = useState(false);
  const [clearTimeInputValue, setClearTimeInputValue] = useState(false);
  const geolocation = useGeolocation();

  const geoCoords = geolocation && {
    latitude: geolocation.lat,
    longitude: geolocation.lng,
  };
  
  const availableTimesList =
    userData && userData.data.available_times_per_community_worker;
  const userId = userData && userData.data.user_id;
  const patientId = row.patientId;
  const communityWorkerId = row.linkedCommunityWorkerId;
  const suggestedEventId = row.suggestedEventId;
  const [listOfAvailableHours, setListOfAvailableHours] = useState(
    get_list_of_hours_by_day(row.date, communityWorkerId, availableTimesList)
  );

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    console.log(
      subtype_CONFIRMED(
        userId,
        patientId,
        communityWorkerId,
        values,
        geoCoords,
        suggestedEventId
      )
    );
    // push_new_document_into_FIRESTORE(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_CONFIRMED(
    //     userId,
    //     patientId,
    //     communityWorkerId,
    //     values,
    //     geoCoords,
    //     suggestedEventId
    //   )
    // );
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
                      label="Fecha"
                      pendingDate={row.date}
                      setFieldValue={setFieldValue}
                      availableTimesList={availableTimesList}
                      setListOfAvailableHours={setListOfAvailableHours}
                      communityWorkerId={communityWorkerId}
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
