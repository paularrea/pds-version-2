import React from "react";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table
} from "@material-ui/core";
import Row from "./Row"
import { createData } from "./createData";
import { container } from "../table.module.scss";

const PatientTableList = ({ data }) => {
  const rows = data.map((pds) => {
    return createData(
      `${pds.general_alarm_is_active}`,
      `${pds.user_name}`,
      `${pds.num_of_visits.alarm_is_active}${pds.num_of_visits.value}`,
      `${pds.num_of_calls.alarm_is_active}${pds.num_of_calls.value}`,
      `${pds.num_of_days_since_last_intervention.alarm_is_active}${pds.num_of_days_since_last_intervention.value} días`,
      `${pds.riesgo_clinico.alarm_is_active}${pds.riesgo_clinico.value}`,
      `${pds.riesgo_por_entorno.alarm_is_active}${pds.riesgo_por_entorno.value}`,
      `${pds.patient_satisfaction_level.alarm_is_active}${pds.patient_satisfaction_level.value}`
    );
  });
  return (
    <div className={container}>
      <h2>Listado de Pacientes</h2>
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
              <TableCell>Nombre del paciente</TableCell>
              <TableCell align="left">Número de intervenciones</TableCell>
              <TableCell align="left">
                Número de días desde <br /> la última intervención
              </TableCell>
              <TableCell align="left">
                Riesgo clínico <br /> (1-5)
              </TableCell>
              <TableCell align="left">
                Riesgo por entorno <br /> (1-5)
              </TableCell>
              <TableCell align="left">
                Satisfacción del <br /> paciente (1-10)
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

export default PatientTableList;
