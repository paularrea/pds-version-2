import React from "react";
import { Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "formik-material-ui-lab";
import styles from "../../../../communityWorker/Form/form.module.scss";

const actions = [
  "Verificar datos personales",
  "Aceptación Programa PDS",
  "Revisar aceptación del cliente",
];

const SelectActionsInput = () => {
  return (
    <div>
      <ErrorMessage
        name="actions"
        component="div"
        className={styles.error_message}
      />
      <p style={{ marginBottom: "1rem" }}>Indique las acciones requeridas</p>
      <Field
        name="actions"
        style={{ width: "350px"}}
        multiple
        freeSolo
        component={Autocomplete}
        options={actions}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField {...params} label="Acciones" variant="outlined" />
        )}
      />
    </div>
  );
};

export default SelectActionsInput;
