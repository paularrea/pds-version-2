import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../../../user_auth_with_FIREBASE/AuthContext";
import {
  TextField,
  InputAdornment,
  FormControl,
  OutlinedInput,
  InputLabel,
  IconButton,
  ThemeProvider,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Button from "../Button/Button";
import styles from "./login.module.scss";
import logo from "../../../images/icons/logo.png";
import ErrorNotification from "../Notification/ErrorNotification";
import subtype_LOGIN from "../../../events/type_USER_INTERACTION/subtype_LOGIN";
import { useGeolocation } from "../../../hooks/useGeolocation";
import { blue_pds } from "../../utils/InputColor";
import { build_collection_name } from "../../../events/build_collection_name";

const Login = () => {
  const history = useHistory();
  const location = useLocation();

  const [creds, setCreds] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const auth = useAuth();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (auth.user) history.replace(location.state ? location.state.from : "/");
  }, [auth.user]);

  const onChange = (e) => {
    setCreds((prevCreds) => ({
      ...prevCreds,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await auth.login(creds.email, creds.password);
      history.replace(location.state ? location.state.from : "/");
    } catch (e) {
      console.error(e);
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_container}>
          <img src={logo} alt="Protectores de salud" />
          <ThemeProvider theme={blue_pds}>
            <TextField
              className={styles.input}
              id="email"
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              onChange={onChange}
              value={creds.email}
            />

            <FormControl className={styles.input} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={values.showPassword ? "text" : "password"}
                onChange={onChange}
                value={creds.password}
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
          <br />
          <br />
          <Button
            loading={loading}
            bgColor="blue"
            type="submit"
            justifyContent="center"
            width="50%"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
