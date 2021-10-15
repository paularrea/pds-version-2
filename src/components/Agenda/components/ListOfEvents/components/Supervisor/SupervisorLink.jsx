import React, { useState } from "react";
import EditWorker from "../../../../../Supervisor/Manage/Agenda/components/EditWorker/EditWorker";
import PatientInfoLink from "./components/PatientInfoLink";

const UserLink = ({ intervention }) => {
  const [showDetails, setShowDetails] = useState(false);
  const onClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <PatientInfoLink
        showDetails={showDetails}
        intervention={intervention}
        onClick={onClick}
      />
      {showDetails ? (
        <EditWorker
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          intervention={intervention}
        />
      ) : null}
    </>
  );
};

export default UserLink;
