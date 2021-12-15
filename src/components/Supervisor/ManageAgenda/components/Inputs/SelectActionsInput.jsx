import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { error } from "../../components/Inputs/errorMessage.module.scss";
import { Autocomplete, TextField } from "@mui/material";

const actions = [
  "Verificar datos personales",
  "Aceptación Programa PDS",
  "Revisar aceptación del cliente",
];

const SelectActionsInput = ({ errors, touched, setFieldValue }) => {
  const [actionGroup, setActionGroup] = useState([]);

  const onChange = (_, value) => {
    setFieldValue("actions", value);
    setActionGroup(value);
  };

  return (
    <div>
      <p style={{ marginBottom: ".5rem" }}>Indique las acciones requeridas</p>
      <ErrorMessage name="actions" component="div" className={error} />
      <Field
        name="actions"
        style={{ maxWidth: "350px" }}
        multiple
        helperText=""
        freeSolo
        onChange={onChange}
        component={Autocomplete}
        value={actionGroup}
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
