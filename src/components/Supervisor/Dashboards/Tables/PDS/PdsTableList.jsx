import React from "react";
import Table from "@material-ui/core/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import Row from "./Row";
import { createData } from "./createData";
import { container } from "../table.module.scss";

const PdsTableList = ({ data }) => {
  const rows = data.map((pds) => {
    return createData(
      `${pds.general_alarm_is_active}`,
      `${pds.user_name}`,
      `${pds.num_of_visits.alarm_is_active}${pds.num_of_visits.value}`,
      `${pds.num_of_calls.alarm_is_active}${pds.num_of_calls.value}`,
      `${pds.duration_of_visit_in_mins.alarm_is_active}${pds.duration_of_visit_in_mins.value} min`,
      `${pds.duration_of_call_in_mins.alarm_is_active}${pds.duration_of_call_in_mins.value} min`,
      `${pds.duration_of_travel_in_mins.alarm_is_active}${pds.duration_of_travel_in_mins.value} min`,
      `${pds.response_time_in_mins.alarm_is_active}${pds.response_time_in_mins.value} min`,
      `${pds.patient_satisfaction_level.alarm_is_active}${pds.patient_satisfaction_level.value}`,
      "ir al perfil"
    );
  });

  return (
    <div className={container}>
      <h2>Listado de PDS</h2>
      <TableContainer
        style={{
          height: "800px",
          overflowY: "scroll",
          borderRadius: "10px",
          WebkitBoxShadow: "0px 4px 40px #E1E5EC",
          boxShadow: "0px 4px 40px #E1E5EC",
        }}
      >
        <Table stickyHeader aria-label="collapsible table">
          <TableHead style={{ backgroundColor: "#ECECF3 !important" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Nombre del PDS</TableCell>
              <TableCell align="left">Número de intervenciones</TableCell>
              <TableCell align="left">Duración de la intervención</TableCell>
              <TableCell align="left">
                Tiempo de respuesta a notificaciones
              </TableCell>
              <TableCell align="left">Tiempo de desplazamiento</TableCell>
              <TableCell align="left">
                Satisfacción del paciente (1-10)
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, key) => (
              <Row key={key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PdsTableList;
