import { createTheme } from "@material-ui/core";

export const blue_pds = createTheme({
    palette: {
      primary: {
        main: "#4284F3",
      },
      error: {
        main: "#FF2E79",
      },
    },
    overrides: {
      MuiStepIcon: {
        root: {
          "&$completed": {
            color: "#0000009a",
          },
          "&$active": {
            color: "#000000bc",
          },
        },
      },
    },
  });