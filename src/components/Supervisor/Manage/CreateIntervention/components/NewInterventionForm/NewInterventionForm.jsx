import React, { useState, useRef } from "react";
import { Form, Formik } from "formik";

import styles from "../../../../../communityWorker/Form/form.module.scss";
import { Redirect } from "react-router-dom";
import { Stepper } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import FormButtons from "./components/FormButtons";

const steps = [Step1, Step2, Step3];

const theme = createMuiTheme({
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

const blue_pds = createMuiTheme({
  palette: {
    primary: {
      main: "#4284F3",
    },
    error: {
      main: "#FF2E79",
    },
  },
});

const NewInterventionForm = (props) => {
  const topRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isSent, sendForm] = useState(false);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };
  const handlePrev = () => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.max(activeStep - 1, 0));
  };

  const handleNext = () => {
    topRef.current.scrollIntoView();
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const onSubmit = async (values, formikBag) => {
    const { setSubmitting } = formikBag;
    console.log({
      evaluation_form: values,
    });
    isLastStep() && sendForm(true);
    if (!isLastStep()) {
      handleNext();
      setSubmitting(false);
      return;
    }
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const initialValues = steps.reduce(
    (values, { initialValues }) => ({
      ...values,
      ...initialValues,
    }),
    {}
  );

  const ActiveStep = steps[activeStep];
  const validationSchema = ActiveStep.validationSchema;
  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, touched, values, errors, setFieldValue }) => (
          <>
            <Form>
              <div className={styles.fixed_header}>
                <div className={styles.header}>
                  <div>
                    <ThemeProvider theme={theme}>
                      <Stepper
                        style={{
                          height: "auto",
                          backgroundColor: "#2e82f8",
                        }}
                        activeStep={activeStep}
                      >
                        <img
                          className={styles.img}
                          src={steps[activeStep].Img}
                          alt="form steps"
                        />
                      </Stepper>
                    </ThemeProvider>
                    <p>PASO {activeStep + 1}</p>
                    <h2>{steps[activeStep].label}</h2>
                  </div>
                </div>
              </div>

              <SwipeableViews disabled index={activeStep}>
                {steps.map((step, index) => {
                  const Component = steps[index];
                  return (
                    <ThemeProvider theme={blue_pds}>
                      <Component
                        values={values}
                        setFieldValue={setFieldValue}
                        refProp={topRef}
                        key={index}
                      />
                    </ThemeProvider>
                  );
                })}
              </SwipeableViews>
              <FormButtons
                activeStep={activeStep}
                isSubmitting={isSubmitting}
                handlePrev={handlePrev}
              />
            </Form>
          </>
        )}
      </Formik>
      {isSent && (
        <Redirect
          to={{
            pathname: "/gestionar-agenda/create-form-success",
          }}
        />
      )}
    </>
  );
};
export default NewInterventionForm;
