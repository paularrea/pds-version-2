import React, { useState, useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import { ThemeProvider } from "@material-ui/core";
import { Redirect, useLocation } from "react-router-dom";
import { theme, blue_pds } from "./components/formTheme";
import SwipeableViews from "react-swipeable-views";
import { Stepper } from "@material-ui/core";
import data from "../../../../data/questionnaireData";
import { fixed_header, header, img } from "../form.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import FormButtons from "./components/FormButtons";
import { useGeolocation } from "rooks";
import "../mui.css";
import { useUserData } from "../../../../context/UserContext";
import subtype_POST_INTERVENTION from "../../../../events/type_SURVEY/subtype_POST_INTERVENTION";
import { build_collection_name } from "../../../../events/build_collection_name";
import push_new_document_into_FIRESTORE from "../../../../FIRESTORE/push_new_document_into_FIRESTORE";

const steps = [Step1, Step2];

const Autoevaluation = () => {
  const userData = useUserData();
  const location = useLocation();
  const [isSent, sendForm] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const topRef = useRef(null);
  const patient = location.state.patient;
  const userId = userData && userData.data.user_id;
  const starting_time = location.state.local_utc_date_time;
  const geolocation = useGeolocation();

  const geoCoords = geolocation && {
    latitude: geolocation.lat,
    longitude: geolocation.lng,
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
        subtype_POST_INTERVENTION(
          userId && userId,
          geoCoords,
          patient.patient_info.user_id,
          starting_time,
          values
        )
      );
      push_new_document_into_FIRESTORE(
        build_collection_name("SURVEY"),
        subtype_POST_INTERVENTION(
          userId && userId,
          geoCoords,
          patient.patient_info.user_id,
          starting_time,
          values
        )
      );
      sendForm(true);
    }
  };

  const initialValues = {};
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
                        // interventionId={interventionId}
                        // user={contextUser}
                        // patientDate={patientDate}
                        // patient={patient}
                        evaluationData={data[0].questionnaire_POST_INTERVENTION}
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
export default Autoevaluation;
