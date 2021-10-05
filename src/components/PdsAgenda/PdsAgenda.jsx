import React from "react";
import data from "../../data/dynamicData";
import {title} from "./pds_agenda.module.scss"
import Dropdown from "./components/dropdown/Dropdown";

const PdsAgenda = () => {
  return (
    <div>
      <h3 className={title}>Próximas intervenciones</h3>
      {data.agenda.map((item, key) => {
        return <Dropdown key={item.day} date={item.date_as_text} listOfEvents={item.list_of_events}/>
      })}
    </div>
  );
};

export default PdsAgenda;
