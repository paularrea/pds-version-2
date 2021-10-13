import React from "react";
import Row from "./components/Row"
import { createData } from "./components/createData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";

export default function CollapsibleTable({data}) {

  const sortedDates = data.pending_intervention_events.sort(
    (a, b) =>
      new Date(...a.date.split("/").reverse()) -
      new Date(...b.date.split("/").reverse())
  );
  
  const rows = sortedDates.map((event) => {
    return createData(
      event.date,
      `${event.patient_first_name} ${event.patient_middle_name} ${event.patient_last_name}`,
      `${event.pds_first_name} ${event.pds_middle_name} ${event.pds_last_name}`,
      `${event.patient_residence_address} ${event.patient_residence_city} ${event.patient_residence_state} ${event.patient_residence_state} ${event.patient_residence_country_name}`,
      `(${event.patient_phone_country_code_num}) ${event.patient_phone_num}`
    );
  });

  return (
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
          {rows.map((row, key) => (
            <Row key={key} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
