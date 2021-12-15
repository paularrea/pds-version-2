import React, { useEffect, useState } from "react";
import Row from "./components/Row";
import { createData } from "./components/createData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useUserData } from "../../../../../../context/UserContext";

export default function ConfirmPatientsTable({ loadedPatient }) {
  const context = useUserData();
  const [rows, setRows] = useState();
  const [interventionEvents, setInterventionEvents] = useState([]);

  useEffect(() => {
    loadedPatient &&
      setInterventionEvents(context.data.pending_events_table_info);
  }, [
    loadedPatient,
    interventionEvents,
    context.data.pending_events_table_info,
  ]);

  const sortedDates = interventionEvents && interventionEvents.sort(
    (a, b) =>
      new Date(...a.date.split("/").reverse()) -
      new Date(...b.date.split("/").reverse())
  );

  useEffect(() => {
    setRows(
      sortedDates && sortedDates.map((event) => {
        return createData(
          event.date,
          event.patient_info && event.patient_info.concatenated_name,
          event.community_worker_info &&
            event.community_worker_info.concatenated_name,
          event.patient_info &&
            `${event.patient_info.residence_address} ${event.patient_info.residence_city} ${event.patient_info.residence_state} ${event.patient_info.residence_country_name}`,
          event.patient_info &&
            `${event.patient_info.phone_country_code_num}${event.patient_info.phone_num}`,
          event.patient_info && event.patient_info.user_id,
          event.community_worker_info && event.community_worker_info.user_id,
          event.suggested_event_id
        );
      })
    );
  }, [loadedPatient, sortedDates]);

  return (
    <>
      {interventionEvents ? (
        <TableContainer
          style={{
            height: "auto",
            overflowY: "scroll",
            WebkitBoxShadow: "0px 4px 40px #E1E5EC",
            boxShadow: "0px 4px 40px #E1E5EC",
          }}
        >
          <Table stickyHeader aria-label="collapsible table">
            <TableHead style={{ backgroundColor: "#ECECF3 !important" }}>
              <TableRow>
                <TableCell />
                <TableCell>Fecha</TableCell>
                <TableCell align="left">Paciente</TableCell>
                <TableCell align="left">PDS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row, key) => {
                  return <Row key={key} row={row} />;
                })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Cargando datos..."
      )}
    </>
  );
}
