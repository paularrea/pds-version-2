import React, { useState } from "react";

import less from "../../../../../images/icons/less.png";
import more from "../../../../../images/icons/more.png";
import ListOfEvents from "../ListOfEvents/ListOfEvents";
import {
  container,
  flex_container,
  more_less_icons,
} from "./dropdown.module.scss";

const Dropdown = ({ date, listOfEvents, userType }) => {
  const [open, setOpen] = useState(
    userType === "COMMUNITY_WORKER" ? false : true
  );

  const openClose = () => {
    setOpen(!open);
  };

  return (
    <div className={container}>
      <div onClick={openClose}>
        <div className={flex_container}>
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
