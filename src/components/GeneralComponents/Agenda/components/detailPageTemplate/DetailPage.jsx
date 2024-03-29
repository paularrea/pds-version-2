import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
import {
  flex_actions,
  number,
  container,
  close,
  container_detalle,
  user_flex,
  actions_container,
  form_button_container,
} from "./detail.module.scss";
import CallButton from "../../../Button/CallButton";
import userIcon from "../../../../../images/icons/User.png";
import closeIcon from "../../../../../images/icons/close.png";
import locationIcon from "../../../../../images/icons/Place.png";
import arrow from "../../../../../images/icons/arrow-right.png";
import start_intervention_date_time from "../../../../communityWorker/Form/Questionnaire/components/functions/start_intervention_date_time";

const DetailPage = () => {
  const location = useLocation();
  const userId = location.state.communityWorkerInfo;
  const patient = location.state && location.state.intervention;
  const history = useHistory();
  
  const handleBack = () => {
    history.push("/");
  };

  const actions =
    patient &&
    patient.actions.map((action, key) => (
      <div key={key} className={flex_actions}>
        <div className={number}>{key + 1}</div>
        <p>{action}</p>
      </div>
    ));

  const patientURL = window.location.pathname;
  const isVisit = patient && patient.intervention_type === "VISIT_AT_HOME";
  const agendaEventId = patient && patient.agenda_event_id;
  const patientId = patient && patient.patient_info.user_id;
  
  return (
    <div className={container}>
      {patient ? (
        <>
          <div className={close}>
            <button onClick={handleBack}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <div className={container_detalle}>
            <div className={user_flex}>
              <div>
                <img src={userIcon} alt="user" />
              </div>
              <h3>{patient.patient_info.concatenated_name}</h3>
            </div>
            {isVisit && (
              <>
                <div style={{ alignItems: "flex-start" }} className={user_flex}>
                  <div>
                    <img src={locationIcon} alt="location" />
                  </div>
                  <h3 style={{ fontWeight: "400", lineHeight: "24px" }}>
                    {patient.patient_info.residence_address},{" "}
                    {patient.patient_info.residence_postal_code},{" "}
                    {patient.patient_info.residence_city}{" "}
                    {patient.patient_info.residence_state},{" "}
                    {patient.patient_info.residence_country_name} <br />
                    <a
                      style={{ fontSize: "12px", fontWeight: "700" }}
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://www.google.es/maps/search/${patient.patient_info.residence_address},+${patient.patient_info.residence_postal_code},+${patient.patient_info.residence_city},+${patient.patient_info.residence_state},+${patient.patient_info.residence_country_name}`}
                    >
                      VER MAPA
                    </a>
                  </h3>
                </div>
              </>
            )}
            <CallButton
              agendaEventId={agendaEventId}
              patientId={patientId}
              width="100%"
              prefixNumber={patient.patient_info.phone_country_code_num}
              phoneNumber={patient.patient_info.phone_num}
            />
            <hr style={{ margin: "2rem 0", opacity: 0.2 }} />

            <div className={actions_container}>
              <h3>Acciones requeridas</h3>
              {actions}
            </div>

            <div className={form_button_container}>
              <Link
                to={{
                  pathname: "/questionnaire",
                  state: {
                    patient: patient,
                    userId: userId,
                    patientURL: patientURL,
                    local_utc_date_time: start_intervention_date_time(),
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="green"
                  justifyContent="space-between"
                >
                  <div>Cuestionario</div> <img src={arrow} alt="arrow" />
                </Button>
              </Link>
              <br />
              <Link
                to={{
                  pathname: "/upcomming-intervention",
                  state: {
                    patient: patient,
                    userId: userId,
                    patientURL: patientURL,
                    local_utc_date_time: start_intervention_date_time(),
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="green"
                  justifyContent="space-between"
                >
                  <div>Próximas intervenciones</div>{" "}
                  <img src={arrow} alt="arrow" />
                </Button>
              </Link>
              <br />
              <Link
                to={{
                  pathname: "/autoevaluation",
                  state: {
                    patient: patient,
                    userId: userId,
                    patientURL: patientURL,
                    local_utc_date_time: start_intervention_date_time(),
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="green"
                  justifyContent="space-between"
                >
                  <div>Autoevaluación</div> <img src={arrow} alt="arrow" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        "no data"
      )}
    </div>
  );
};

export default DetailPage;
