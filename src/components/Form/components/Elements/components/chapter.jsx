import React, { useState } from "react";
import {flex_dropdown, icon_hide, icon_show} from "./chapter.module.scss";
import hide from "../../../../../images/icons/arrow-up.png";
import show from  "../../../../../images/icons/arrow-up.png";

const Chapter = ({ questions }) => {
  const [open, setOpen] = useState(false);

  const openClose = () => {
    setOpen(!open);
  };
  const chapterName = questions && questions[0].props.question.chapter_name;

  return (
    <>
      <div className={flex_dropdown} onClick={openClose}>
        <div>
          <h3>{chapterName}</h3>
        </div>
        {open ? (
          <div className={icon_hide}>
            <img src={hide} alt="ver menos" />
          </div>
        ) : (
          <div className={icon_show}>
            <img src={show} alt="ver más" />
          </div>
        )}
      </div>
      {open && <section>{questions}</section>}
    </>
  );
};

export default Chapter;
