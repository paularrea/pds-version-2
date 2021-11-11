import React from "react";
import { title } from "./agenda.module.scss";
import Dropdown from "./components/dropdown/Dropdown";

const Agenda = ({ data, userType, userId }) => {

  return (
    <div>
      <h3 className={title}>Próximas intervenciones</h3>
      {data &&
        data.map((item) => {
          return (
            <Dropdown
              userId={userId}
              userType={userType}
              dayIndex={item.day_index}
              date={item.local_date_as_text}
              listOfEvents={item.list_of_events}
            />
          );
        })}
    </div>
  );
};

export default Agenda;
