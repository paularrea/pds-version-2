import React, { useState } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import step1 from "../../../../../images/steps/step1-5.png";
import * as Yup from "yup";
import {
  step_container,
  content,
  input_container,
  edit,
} from "../../form.module.scss";

const Step1 = ({ refProp }) => {
  const [editName, setEditName] = useState(true);
  const [editMiddleName, setEditMiddleName] = useState(true);
  const [editLastName, setEditLastName] = useState(true);
  const [editSecondLastName, setEditSecondLastName] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const [editCountry, setEditCountry] = useState(true);
  const [editCity, setEditCity] = useState(true);
  const [editAddress, setEditAddress] = useState(true);
  const [editPostalCode, setEditPostalCode] = useState(true);

  const patientInfoVerification = (
    <>
      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editName}
          label="Primer Nombre"
          name="patientFirstName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditName(!editName)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editMiddleName}
          label="Segundo Nombre"
          name="patientMiddleName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditMiddleName(!editMiddleName)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editLastName}
          label="Primer Apellido"
          name="patientLastName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditLastName(!editLastName)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editSecondLastName}
          label="Segundo Apellido"
          name="patientSecondLastName"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditSecondLastName(!editSecondLastName)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editPhone}
          label="Número de teléfono"
          name="patientPhone"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditPhone(!editPhone)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editCountry}
          label="País"
          name="patientCountry"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditCountry(!editCountry)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editCity}
          label="Ciudad"
          name="patientCity"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditCity(!editCity)}
        >
          Editar
        </button>
      </div>

      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editAddress}
          label="Dirección"
          name="patientAddress"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditAddress(!editAddress)}
        >
          Editar
        </button>
      </div>
      <div className={input_container}>
        <Field
          style={{ width: "100%" }}
          variant="outlined"
          disabled={editPostalCode}
          label="Código Postal"
          name="patientPostalCode"
          component={TextField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button
          className={edit}
          type="button"
          onClick={() => setEditPostalCode(!editPostalCode)}
        >
          Editar
        </button>
      </div>
    </>
  );

  return (
    <div ref={refProp} className={content}>
      <div className={step_container}>
        {patientInfoVerification.props.children}
      </div>
    </div>
  );
};

Step1.label = "Verificar datos personales";

Step1.validationSchema = Yup.object().shape({
  patientFirstName: Yup.string().required("Campo obligatorio"),
  patientLastName: Yup.string().required("Campo obligatorio"),
  patientPhone: Yup.string().required("Campo obligatorio"),
  patientCountry: Yup.string().required("Campo obligatorio"),
  patientCity: Yup.string().required("Campo obligatorio"),
  patientAddress: Yup.string().required("Campo obligatorio"),
  patientPostalCode: Yup.string().required("Campo obligatorio"),
});

Step1.Img = step1;

export default Step1;
