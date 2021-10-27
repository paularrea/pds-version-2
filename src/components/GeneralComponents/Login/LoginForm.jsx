import React, { useState, useContext } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";
import Button from "../Button/Button";
import styles from "./login.module.scss";
import logo from "../../../images/icons/logo.png";
import { Redirect } from "react-router";
import { CommunityWorkerContext } from "../../../CommunityWorkerContext";
import ErrorNotification from "../Notification/ErrorNotification";

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: "#4284F3",
    },
  },
});

const LoginForm = () => {
  const { pdsData } = useContext(CommunityWorkerContext);
  const [details, setDetails] = useState({ username: "", password: "" });
  const [validateUser, setValidateUser] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const username = pdsData && pdsData.display_name;
  const userPassword = pdsData && pdsData.user_password;

  const submitHandler = (e) => {
    e.preventDefault();
    if (details.username === username && details.password === userPassword) {
      setValidateUser(true);
    } else {
      setError(true);
    }
  };
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.form_container}>
          <img src={logo} alt="Protectores de salud" />
          <ThemeProvider theme={blue_pds}>
            <TextField
              className={styles.input}
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              onChange={(e) =>
                setDetails({ ...details, username: e.target.value })
              }
              value={details.username}
            />

            <FormControl className={styles.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={83}
              />
          {error && (
            <ErrorNotification>
              Los datos introducidos no corresponden a ningún usuario.
            </ErrorNotification>
          )}
            </FormControl>
          </ThemeProvider>
          {/* <div className={styles.recuperar}>
          <a className="link" href="/recuperar-contraseña">
            Recuperar contraseña
          </a>
        </div> */}
          <br />
          <br />
          <Button
            bgColor="blue"
            type="submit"
            justifyContent="center"
            width="50%"
          >
            Login
          </Button>
        </div>
      </form>
      {validateUser && <Redirect to="/community-worker" />}
    </>
  );
};

export default LoginForm;
