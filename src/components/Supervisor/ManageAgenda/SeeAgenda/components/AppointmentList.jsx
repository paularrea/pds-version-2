import React from "react";
import { agenda, no_user_selected } from "../../agenda.module.scss";
import Agenda from "../../../../GeneralComponents/Agenda/Agenda";
import { useUserData } from "../../../../../context/UserContext";

const AppointmentList = ({ isSelected, loadedWorker }) => {
  const context = useUserData();
  return (
    <div className={agenda}>
      {isSelected ? (
        <Agenda data={loadedWorker && context.data.selectedWorker} userType='SUPERVISOR' />
      ) : (
        <div className={no_user_selected}>
          <p>Selecciona un PDS para acceder a su agenda.</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
