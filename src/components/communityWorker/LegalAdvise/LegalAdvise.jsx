import React from "react";
import Button from "../../GeneralComponents/Button/Button";
import { container } from "./legal.module.scss";
import useGeolocation from "react-hook-geolocation";
import { useUserData } from "../../../context/UserContext";
import subtype_LEGAL_DISCLAIMER from "../../../events/type_LEGAL/subtype_LEGAL_DISCLAIMER";
import { build_collection_name } from "../../../events/build_collection_name";
// import push_new_document_into_FIRESTORE from "../../../FIRESTORE/push_new_document_into_FIRESTORE";

const LegalAdvise = ({ legalAdviceAccepted, setLegalAdviceAccepted }) => {
  const context = useUserData();
  const geolocation = useGeolocation();
  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };
  const handleAccept = () => {
    setLegalAdviceAccepted(true);
    console.log(
      build_collection_name("LEGAL"),
      subtype_LEGAL_DISCLAIMER(context.data.user_id, geoCoords),
    );
    // push_new_document_into_FIRESTORE(
    //   build_collection_name("LEGAL"),
    //   subtype_LEGAL_DISCLAIMER(context.data.user_id, geoCoords)
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
