import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import styles from "./digitalSignature.module.scss";
import clear from "../../../../../images/icons/clear.png";
import MediaQuery from "react-responsive";

const PDSSignature = ({ setIsPDSSigned, setPdsSign, pdsSign, props }) => {
  const [error, setError] = useState(false);
  const signatureRef = useRef({});

  const saveSignature = (signature) => {
    setPdsSign(signature);
    setIsPDSSigned(true);
  };

  return (
    <section {...props} className={styles.signature_container}>
      <h4>Firma del paciente</h4>
      <div className={styles.signature_canvas}>
        <pre>{error ? <div>La firma es obligatoria</div> : false}</pre>
        <MediaQuery maxWidth={767}>
          <SignatureCanvas
            ref={signatureRef}
            onBegin={() => {
              setError(false);
            }}
            canvasProps={{
              width: 300,
              height: 200,
              style: { border: "2px solid #a7a7a7", borderRadius: "10px" },
            }}
            onEnd={() =>
              saveSignature(
                signatureRef.current
                  .getTrimmedCanvas()
                  .toDataURL("signature/jpg")
              )
            }
          />
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1025}>
          <SignatureCanvas
            ref={signatureRef}
            onBegin={() => {
              setError(false);
            }}
            canvasProps={{
              width: 540,
              height: 250,
              style: { border: "2px solid #a7a7a7", borderRadius: "10px" },
            }}
            onEnd={() =>
              saveSignature(
                signatureRef.current
                  .getTrimmedCanvas()
                  .toDataURL("signature/jpg")
              )
            }
          />
        </MediaQuery>
        <MediaQuery minWidth={1025}>
          <SignatureCanvas
            ref={signatureRef}
            onBegin={() => {
              setError(false);
            }}
            canvasProps={{
              width: 400,
              height: 250,
              style: { border: "2px solid #a7a7a7", borderRadius: "10px" },
            }}
            onEnd={() =>
              saveSignature(
                signatureRef.current
                  .getTrimmedCanvas()
                  .toDataURL("signature/jpg")
              )
            }
          />
        </MediaQuery>
        <button
          className={styles.clear}
          type='button'
          onClick={() => {
            signatureRef.current.clear();
            saveSignature(null);
          }}
        >
          <img src={clear} alt="Borrar firma" />
        </button>
      </div>
    </section>
  );
};

export default PDSSignature;
