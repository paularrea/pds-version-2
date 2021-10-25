import React from "react";
import { agenda, no_user_selected } from "../../agenda.module.scss";
import Agenda from "../../../../GeneralComponents/Agenda/Agenda";

const AppointmentList = ({ isSelected, worker }) => {

  return (
    <div className={agenda}>
        {isSelected && worker[0] ? (
          <Agenda data={worker[0].agenda} />
        ) : (
          <div className={no_user_selected}>
            <p>Selecciona un PDS para acceder a su agenda.</p>
          </div>
        )}
    </div>
  );
};

export default AppointmentList;
