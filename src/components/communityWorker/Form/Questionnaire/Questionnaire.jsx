import React, { useState, useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import { Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme, blue_pds } from "./components/formTheme";
import SwipeableViews from "react-swipeable-views";
import { Stepper } from "@material-ui/core";
import data from "../../../../data/questionnaireData";
import { fixed_header, header, img } from "../form.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import FormButtons from "./components/FormButtons";
import { useGeolocation } from "../../../../hooks/useGeolocation";
import "../mui.css";

const steps = [Step1, Step2, Step3, Step4, Step5];

const Questionnaire = () => {
  const [activeStep, setActiveStep] = useState(0);
  const topRef = useRef(null);
  const location = useLocation();
  const [isSent, sendForm] = useState(false);
  const [pdsSign, setPdsSign] = useState("");
  const [confirmationSign, setConfirmationSign] = useState("");
  const [isPDSSigned, setIsPDSSigned] = useState(false);
  const [isConfirmationSigned, setIsConfirmationSigned] = useState(false);
  const { geolocation } = useGeolocation();
  const patient = location.state.patient;

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
    console.log({
      questionnaire: values,
      pds_program_accepted: pdsSign,
      patient_validation: confirmationSign,
      local_date_time: new Date().toString(),
      utc_date_time: new Date().toUTCString(),
      position_coords_latitude: geolocation && geolocation.latitude,
      position_coords_longitude: geolocation && geolocation.longitude,
    });
    console.log(
      JSON.stringify(
        {
          questionnaire: values,
          pds_program_accepted: pdsSign,
          patient_validation: confirmationSign,
          local_date_time: new Date().toString(),
          utc_date_time: new Date().toUTCString(),
          position_coords_latitude: geolocation && geolocation.latitude,
          position_coords_longitude: geolocation && geolocation.longitude,
        },
        null,
        2
      )
    );
    if (!isLastStep()) {
      handleNext();
      return;
    } else {
      console.log({
        questionnaire: values,
        pds_program_accepted: pdsSign,
        patient_validation: confirmationSign,
        local_date_time: new Date().toString(),
        utc_date_time: new Date().toUTCString(),
        position_coords_latitude: geolocation && geolocation.latitude,
        position_coords_longitude: geolocation && geolocation.longitude,
        sent: {
          local_date_time: new Date().toString(),
          utc_date_time: new Date().toUTCString(),
          position_coords_latitude: geolocation && geolocation.latitude,
          position_coords_longitude: geolocation && geolocation.longitude,
        },
      });
      sendForm(true);
    }
  };

  const initialValues = {
    patientFirstName: patient.patient_info.patient_first_name,
    patientMiddleName: patient.patient_info.patient_middle_name,
    patientLastName: patient.patient_info.patient_last_name,
    patientSecondLastName: patient.patient_info.patient_second_last_name,
    patientPhone: patient.patient_info.patient_phone_num,
    patientCountry: patient.patient_info.residence_country_name,
    patientCity: patient.patient_info.residence_city,
    patientAddress: patient.patient_info.residence_address,
    patientPostalCode: patient.patient_info.residence_postal_code,
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
                        pdsSign={pdsSign}
                        setPdsSign={setPdsSign}
                        confirmationSign={confirmationSign}
                        setConfirmationSign={setConfirmationSign}
                        values={values}
                        // interventionId={interventionId}
                        // user={contextUser}
                        // patientDate={patientDate}
                        // patient={patient}
                        questionaryData={data[0].questionnaire_PDS_PROGRAM}
                        refProp={topRef}
                        setIsPDSSigned={setIsPDSSigned}
                        setFieldValue={setFieldValue}
                        setIsConfirmationSigned={setIsConfirmationSigned}
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
                isPDSSigned={isPDSSigned}
                isConfirmationSigned={isConfirmationSigned}
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
              patientURL: location.state.patientURL,
            },
          }}
        />
      )}
    </>
  );
};
export default Questionnaire;
