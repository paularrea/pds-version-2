import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

const SelectUser = ({ setIsSelected, data, label, onChange, value }) => {

  return (
    <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
      <InputLabel id="demo-simple-select-outlined-label">
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={onChange}
        label="Selecciona un PDS"
      >
        {data && data.map((user, key) => (
          <MenuItem key={key} value={user}>
            {user}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectUser;
