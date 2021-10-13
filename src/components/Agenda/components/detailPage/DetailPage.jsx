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
import userIcon from "../../../../images/icons/User.png";
import closeIcon from "../../../../images/icons/close.png";
import phoneIcon from "../../../../images/icons/phone.png";
import locationIcon from "../../../../images/icons/Place.png";
import arrow from "../../../../images/icons/arrow-right.png";

const DetailPage = () => {
  const location = useLocation();
  const patient = location.state && location.state.data;

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
  const isVisit = patient.intervention_type === "VISIT";

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
              <h3>
                {patient.patient_info.patient_first_name}{" "}
                {patient.patient_info.patient_middle_name}{" "}
                {patient.patient_info.patient_last_name}{" "}
                {patient.patient_info.patient_second_last_name}
              </h3>
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
            <a href={`tel:${patient.patient_info.patient_phone_num}`}>
              <Button
                width="100%"
                bgColor="#2E83F8"
                justifyContent="flex-start"
              >
                <img src={phoneIcon} alt="phone" />{" "}
                <div style={{ marginLeft: "1rem" }}>
                  {patient.patient_info.patient_phone_num}
                </div>
              </Button>
            </a>

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
                    patientURL: patientURL,
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="#00CB45"
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
                    patientURL: patientURL,
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="#00CB45"
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
                    patientURL: patientURL,
                  },
                }}
              >
                <Button
                  width="100%"
                  bgColor="#00CB45"
                  justifyContent="space-between"
                >
                  <div>Autoevaluación</div> <img src={arrow} alt="arrow" />
                </Button>
              </Link>
            </div>
          </div>
        </>
      ) : 'no data'}
    </div>
  );
};

export default DetailPage;
