import React, { useState, useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import { Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme, blue_pds } from "./components/formTheme";
import SwipeableViews from "react-swipeable-views";
import { Stepper } from "@material-ui/core";
import { fixed_header, header, img } from "../form.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import FormButtons from "./components/FormButtons";
import "../mui.css";
import useGeolocation from "react-hook-geolocation";
import subtype_SUGGESTED_BY_HUMAN from "../../../../events/type_AGENDA/subtype_SUGGESTED_BY_HUMAN";
import { useUserData } from "../../../../context/UserContext";
// import push_new_document_into_FIRESTORE from "../../../../FIRESTORE/push_new_document_into_FIRESTORE";
// import { build_collection_name } from "../../../../events/build_collection_name";

const steps = [Step1, Step2];

const UpcommingIntervention = () => {
  const userData = useUserData();
  const location = useLocation();
  const [isSent, sendForm] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const topRef = useRef(null);
  const patient = location.state.patient;
  const userId = userData && userData.data.user_id;
  const geolocation = useGeolocation();

  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = async (values, setValues) => {
    if (window.innerWidth > 1026) {
      topRef.current.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    setActiveStep(Math.min(activeStep + 1, steps.length - 1));
  };

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    if (!isLastStep()) {
      handleNext();
      return;
    } else {
      console.log(
        subtype_SUGGESTED_BY_HUMAN(
          userId && userId,
          patient.patient_info.user_id,
          geoCoords,
          values
        )
      );
      // push_new_document_into_FIRESTORE(
      //   build_collection_name("AGENDA"),
      //   subtype_SUGGESTED_BY_HUMAN(
      //     userId && userId,
      //     patient.patient_info.user_id,
      //     geoCoords,
      //     values
      //   )
      // );
      sendForm(true);
    }
  };

  const initialValues = {
    local_date: "",
    observations: "",
  };
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
        {({
          isSubmitting,
          handleSubmit,
          touched,
          values,
          errors,
          setFieldValue,
        }) => (
          <>
            <Form onSubmit={handleSubmit}>
              <div className={fixed_header}>
                <div className={header}>
                  <div>
                    <ThemeProvider theme={theme}>
                      <Stepper
                        style={{
                          height: "auto",
                          backgroundColor: "#2E83F8",
                        }}
                        activeStep={activeStep}
                      >
                        <img
                          className={img}
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
                        refProp={topRef}
                        setFieldValue={setFieldValue}
                        key={index}
                      />
                    </ThemeProvider>
                  );
                })}
              </SwipeableViews>

              <FormButtons
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                topRef={topRef}
                isSubmitting={isSubmitting}
              />
            </Form>
          </>
        )}
      </Formik>
      {isSent && (
        <Redirect
          to={{
            pathname: "/success",
            state: {
              intervention: patient,
              patientURL: location.state.patientURL,
            },
          }}
        />
      )}
    </>
  );
};
export default UpcommingIntervention;
