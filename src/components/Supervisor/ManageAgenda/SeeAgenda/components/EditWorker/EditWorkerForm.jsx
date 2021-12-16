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
import subtype_CONFIRMED_MODIFIED from "../../../../../../events/type_AGENDA/subtype_CONFIRMED_MODIFIED";
import subtype_CONFIRMED_ELIMINATED from "../../../../../../events/type_AGENDA/subtype_CONFIRMED_ELIMINATED";
import { get_list_of_hours_by_day } from "../../../components/functions/get_list_of_hours_by_day";
import { useGeolocation } from "rooks";
import { useUserData } from "../../../../../../context/UserContext";
import { useHistory } from "react-router-dom";
import push_new_document_into_FIRESTORE from "../../../../../../FIRESTORE/push_new_document_into_FIRESTORE";
import { build_collection_name } from "../../../../../../events/build_collection_name";

const EditWorker = ({ intervention, showDetails }) => {
  const history = useHistory();
  const context = useUserData();
  const [editType, setEditType] = useState(false);
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);
  const [clearTimeInputValue, setClearTimeInputValue] = useState(false);
  const geolocation = useGeolocation();

  const geoCoords = geolocation && {
    latitude: geolocation.lat,
    longitude: geolocation.lng,
  };
  const patient = intervention && intervention;
  const userId = context && context.data.user_id;
  const confirmedEventId = patient.agenda_event_id;
  const availableTimesList =
    context && context.data.available_times_per_community_worker;
  const dateSavedInJson = patient.local_date;
  const communityWorkerId =
    context && context.data.selected_worker.selected_community_worker_id;

  const [listOfAvailableHours, setListOfAvailableHours] = useState(
    get_list_of_hours_by_day(
      dateSavedInJson,
      communityWorkerId,
      availableTimesList
    )
  );

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    console.log(
      subtype_CONFIRMED_MODIFIED(userId, confirmedEventId, values, geoCoords)
    );
    push_new_document_into_FIRESTORE(
      build_collection_name("USER_INTERACTION"),
      subtype_CONFIRMED_MODIFIED(userId, confirmedEventId, values, geoCoords)
    );
    history.push("/gestionar-agenda");
  };

  const eliminateIntervention = () => {
    console.log(
      subtype_CONFIRMED_ELIMINATED(userId, confirmedEventId, geoCoords)
    );
    push_new_document_into_FIRESTORE(
      build_collection_name("USER_INTERACTION"),
      subtype_CONFIRMED_ELIMINATED(userId, confirmedEventId, geoCoords)
    );
    history.push("/gestionar-agenda");
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
      {patient.patient_info && (
        <>
          <div className={patient_info}></div>
          <CallButton
            patientId={patient.patient_info.user_id}
            prefixNumber={patient.patient_info.phone_country_code_num}
            phoneNumber={patient.patient_info.phone_num}
          />
          <br />
          <div className={form}>
            <Formik
              initialValues={{
                intervention_type: "",
                local_time: "",
                local_date: "",
              }}
              enableReinitialize
              onSubmit={onSubmit}
            >
              {({ handleSubmit, setFieldValue, setFieldTouched }) => (
                <>
                  <Form onSubmit={handleSubmit}>
                    <ThemeProvider theme={blue_pds}>
                      <EditInput onClick={() => setEditType(!editType)}>
                        <p>
                          <span>Tipo de intervención:</span>{" "}
                          {patient.intervention_type === "PHONE_CALL"
                            ? "Llamada"
                            : "Visita"}
                        </p>
                      </EditInput>
                      {editType && <TypeInput setFieldValue={setFieldValue} />}
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
                          availableTimesList={availableTimesList}
                          setListOfAvailableHours={setListOfAvailableHours}
                          communityWorkerId={communityWorkerId}
                          onClick={() => setClearTimeInputValue(true)}
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
                          listOfAvailableHours={listOfAvailableHours}
                          communityWorkerId={communityWorkerId}
                          clearTimeInputValue={clearTimeInputValue}
                          setFieldTouched={setFieldTouched}
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
            eliminateIntervention={eliminateIntervention}
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
