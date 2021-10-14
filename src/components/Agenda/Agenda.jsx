import React from "react";
import { title } from "./agenda.module.scss";
import Dropdown from "./components/dropdown/Dropdown";

const Agenda = ({ data }) => {

  return (
    <div>
      <h3 className={title}>Próximas intervenciones</h3>
      {data &&
        data.map((item) => {
          return (
            <Dropdown
              userType={item.user_type}
              key={item.day}
              date={item.date_as_text}
              listOfEvents={item.list_of_events}
            />
          );
        })}
    </div>
  );
};

export default Agenda;
