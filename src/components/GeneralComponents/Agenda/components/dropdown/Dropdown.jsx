import React, { useState } from "react";
import visit_future_day_agenda from "../../../../../events/userInteraction/visit_future_day_agenda.js";
import visit_ongoing_day_agenda from "../../../../../events/userInteraction/visit_ongoing_day_agenda.js";

import less from "../../../../../images/icons/less.png";
import more from "../../../../../images/icons/more.png";
import ListOfEvents from "../ListOfEvents/ListOfEvents";
import {
  container,
  flex_container,
  more_less_icons,
} from "./dropdown.module.scss";

const Dropdown = ({ date, listOfEvents, userType, userId, dayIndex }) => {
  const [open, setOpen] = useState(
    userType === "COMMUNITY_WORKER" ? false : true
  );
  
  const visit_agenda_event = () => {
    if (dayIndex !== 0 && open === false) {
      console.log(visit_future_day_agenda(userId), "visit_future_day_agenda");
    } else {
      console.log(visit_ongoing_day_agenda(userId), "visit_ongoing_day_agenda");
    }
  };

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <div className={container}>
      <div onClick={openClose}>
        <div onClick={visit_agenda_event} className={flex_container}>
          <p>{date}</p>
          <div className={more_less_icons}>
            {open ? (
              <img src={less} alt="ver menos" />
            ) : (
              <img src={more} alt="ver más" />
            )}
          </div>
        </div>
      </div>
      {open && <ListOfEvents list={listOfEvents} />}
    </div>
  );
};

export default Dropdown;
