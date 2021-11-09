import React from "react";
import Button from "../../GeneralComponents/Button/Button";
import { container } from "./legal.module.scss";
import subtype_LEGAL_TEXT_ACCEPTED from "../../../events/type_USER_INTERACTION/subtype_LEGAL_TEXT_ACCEPTED";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { CommunityWorkerContext } from "../../../CommunityWorkerContext";
import { build_collection_name } from "../../../events/build_collection_name";

const LegalAdvise = ({ legalAdviceAccepted, setLegalAdviceAccepted }) => {

  // const { geolocation } = useGeolocation();
  // const geoCoords = geolocation && {
  //   latitude: geolocation.latitude,
  //   longitude: geolocation.longitude,
  // };

  const handleAccept = () => {
    setLegalAdviceAccepted(true);
    // push_new_event_doc_into_FIRESTORE_collection(
    //   build_collection_name("USER_INTERACTION"),
    //   subtype_LEGAL_TEXT_ACCEPTED(userId, geoCoords)
    // );
    sessionStorage.setItem("LEGAL_DISCLAIMER_ACCEPTANCE", "ACCEPTED");
  };

  return (
    <>
      {!legalAdviceAccepted && (
        <div className={container}>
          <h5>
            CERTIFICACIÓN DE EMPLEADO DE ITINERARIO Y RESPONSABILIDADES DEL DÍA
          </h5>
          <p>
            Como empleado/contratista de Neighborhood Health Solutions (NHS),
            certifico que he revisado el itinerario y responsabilidades del día
            (Plan) según detallado en la aplicación de Protectores de Salud. Me
            comprometo a cumplir con el Plan conforme a las reglas, reglamentos,
            políticas, procedimientos, manual de empleados, Código de Conducta y
            Programa de Cumplimiento de NHS (Normas). Además, autorizo que NHS
            utilice y monitoree mi localización geográfica al utilizar la
            aplicación de Protectores de Salud conforme a lo establecido en la
            política y notificación expresa sobre los requisitos y los
            procedimientos de la utilización de la aplicación de Protectores de
            Salud de NHS. Entiendo que cualquier incumplimiento con el Plan o
            violación a las Normas de NHS es una razón para una acción
            disciplinaria, que hasta podría incluir la terminación del empleo.
          </p>
          <Button bgColor="green" onClick={handleAccept}>
            Aceptar
          </Button>
        </div>
      )}
    </>
  );
};

export default LegalAdvise;
