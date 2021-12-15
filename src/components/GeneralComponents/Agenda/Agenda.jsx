import React from "react";
import { title } from "./agenda.module.scss";
import Dropdown from "./components/dropdown/Dropdown";

const Agenda = ({ data, userType, userId }) => {
  return (
    <div>
      <h3 className={title}>Próximas intervenciones</h3>
      {data.confirmed_agenda_events ?
        data.confirmed_agenda_events.map((item, key) => {
          return (
            <Dropdown
              key={key}
              userId={userId}
              userType={userType}
              dayIndex={item.day_index}
              date={item.local_date_as_text}
              listOfEvents={item.list_of_events}
            />
          );
        }) : 'no agenda events loaded'}
    </div>
  );
};

export default Agenda;
