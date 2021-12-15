import React from "react";
import { blue_pds } from "../../../../utils/InputColor";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ThemeProvider,
} from "@material-ui/core";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

const SelectUser = ({ data, label, onChange, value }) => {

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
              <MenuItem key={key} value={user.user_id}>
                {user.concatenated_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      {/* <Autocomplete
        value={value}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="autocomplete-select-pds"
        options={data}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={label} />}
      /> */}
    </ThemeProvider>
  );
};

export default SelectUser;
