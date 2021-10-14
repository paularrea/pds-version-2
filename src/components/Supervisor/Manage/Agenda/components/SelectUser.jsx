import React from "react";
import {blue_pds} from "../../../../utils/InputColor"
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ThemeProvider,
} from "@material-ui/core";

const SelectUser = ({ setIsSelected, data, label, onChange, value }) => {
  return (
    <ThemeProvider theme={blue_pds}>
      <FormControl variant="outlined" style={{ marginBottom: "2rem" }}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
        >
          {data &&
            data.map((user, key) => (
              <MenuItem key={key} value={user}>
                {user}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SelectUser;
