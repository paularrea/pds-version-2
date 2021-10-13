import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import {
  red_dot,
  white_dot,
  red_text,
  normal_text,
} from "../table.module.scss";

const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "1px solid #d8d8d8",
      },
    },
  });

function Row(props) {
    const { row } = props;
    const classes = useRowStyles();
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell component="th">
            {row.general_alarm_is_active === '1' ? (
              <div className={red_dot}></div>
            ) : (
              <div className={white_dot}></div>
            )}
          </TableCell>
          <TableCell align="left">{row.user_name}</TableCell>
          <TableCell align="left">
            {row.num_of_calls.charAt(0) === '1' ? (
              <span className={red_text}>{row.num_of_calls.substring(1)}</span>
            ) : (
              <span className={normal_text}>
                {row.num_of_calls.substring(1)} <span>llamadas</span>
              </span>
            )}
            <br />
            {row.num_of_visits.charAt(0) === '1' ? (
              <span className={red_text}>{row.num_of_visits.substring(1)}</span>
            ) : (
              <span className={normal_text}>
                {row.num_of_visits.substring(1)} <span>visitas</span>
              </span>
            )}
          </TableCell>
  
          <TableCell align="left">
            {row.num_of_days_since_last_intervention.charAt(0) === '1' ? (
              <span className={red_text}>
                {row.num_of_days_since_last_intervention.substring(1)}
              </span>
            ) : (
              <span className={normal_text}>
                {row.num_of_days_since_last_intervention.substring(1)}
              </span>
            )}
          </TableCell>
  
          <TableCell align="left">
            {row.riesgo_clinico.charAt(0) === '1' ? (
              <span className={red_text}>{row.riesgo_clinico.substring(1)}</span>
            ) : (
              <span className={normal_text}>
                {row.riesgo_clinico.substring(1)}
              </span>
            )}
          </TableCell>
  
          <TableCell align="left">
            {row.riesgo_por_entorno.charAt(0) === '1' ? (
              <span className={red_text}>
                {row.riesgo_por_entorno.substring(1)}
              </span>
            ) : (
              <span className={normal_text}>
                {row.riesgo_por_entorno.substring(1)}
              </span>
            )}
          </TableCell>
  
          <TableCell align="left">
            {row.patient_satisfaction_level.charAt(0) === '1' ? (
              <span className={red_text}>
                {row.patient_satisfaction_level.substring(1)}
              </span>
            ) : (
              <span className={normal_text}>
                {row.patient_satisfaction_level.substring(1)}
              </span>
            )}
          </TableCell>
          <TableCell>
            <p style={{ color: "#0057FF" }}>Abrir</p>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

export default Row
