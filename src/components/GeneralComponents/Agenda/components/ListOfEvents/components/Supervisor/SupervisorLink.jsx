import React, { useState } from "react";
import EditWorkerForm from "../../../../../../Supervisor/ManageAgenda/SeeAgenda/components/EditWorker/EditWorkerForm";
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
        <EditWorkerForm
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          intervention={intervention}
        />
      ) : null}
    </>
  );
};

export default UserLink;
