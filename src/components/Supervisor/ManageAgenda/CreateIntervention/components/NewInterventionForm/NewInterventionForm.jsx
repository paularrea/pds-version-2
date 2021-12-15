import React, { useState, useRef } from "react";
import { Form, Formik } from "formik";

import styles from "../../../../../communityWorker/Form/form.module.scss";
import { Redirect } from "react-router-dom";
import { Stepper } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { ThemeProvider } from "@material-ui/core";
import { blue_pds } from "../../../../../utils/InputColor.js";
import subtype_CONFIRMED from "../../../../../../events/type_AGENDA/subtype_CONFIRMED";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import FormButtons from "./components/FormButtons";
import useGeolocation from "react-hook-geolocation";
// import push_new_document_into_FIRESTORE from "../../../../../../FIRESTORE/push_new_document_into_FIRESTORE";
// import { build_collection_name } from "../../../../../../events/build_collection_name";

const steps = [Step1, Step2, Step3];

const NewInterventionForm = ({ data }) => {
  const topRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isSent, sendForm] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [communityWorkerId, setCommunityWorkerId] = useState("");
  const linkPatientsInfo = data && data.linked_patient_info;
  const geolocation = useGeolocation();

  const geoCoords = geolocation && {
    latitude: geolocation.latitude,
    longitude: geolocation.longitude,
  };

  const userId = data && data.user_id;
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

  const onSubmit = async (values, bag) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    bag.setSubmitting(false);
    if (!isLastStep()) {
      handleNext();
      return;
    } else {
      console.log(
        subtype_CONFIRMED(
          userId,
          patientId,
          communityWorkerId,
          values,
          geoCoords
        )
      );
      // push_new_document_into_FIRESTORE(
      //   build_collection_name("USER_INTERACTION"),
      //   subtype_CONFIRMED(
      //     userId,
      //     patientId,
      //     communityWorkerId,
      //     values,
      //     geoCoords
      //   )
      // );
      sendForm(true);
    }
  };

  const initialValues = {
    patient_name: "",
    intervention_type: "",
    local_time: "",
    local_date: "",
    actions: "",
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
          touched,
          values,
          errors,
          setFieldValue,
          setFieldTouched,
          handleChange,
        }) => (
          <>
            <Form>
              <div className={styles.fixed_header}>
                <div className={styles.header}>
                  <div>
                    <ThemeProvider theme={blue_pds}>
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
                        data={data}
                        errors={errors}
                        touched={touched}
                        values={values}
                        setFieldValue={setFieldValue}
                        setFieldTouched={setFieldTouched}
                        refProp={topRef}
                        key={index}
                        handleChange={handleChange}
                        patientId={patientId}
                        setPatientId={setPatientId}
                        communityWorkerId={communityWorkerId}
                        setCommunityWorkerId={setCommunityWorkerId}
                        linkPatientsInfo={linkPatientsInfo}
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
