import React from "react";
import PDSSignature from "../components/Signature/PDSSignature";
import {
  step_container,
  legal_container,
  grey_text,
} from "../../form.module.scss";
import step2 from "../../../../../images/steps/step2-5.png";

const Step2 = ({ setIsPDSSigned, pdsSign, setPdsSign, refProp }) => {
  return (
    <div className={step_container}>
      <div ref={refProp} className={legal_container}>
        <p className={grey_text}>
          Por favor, lea atentamente este texto legal y firme si está conforme.
        </p>
        <div>
          <h4>
            FORMULARIO DE RECONOCIMIENTO Y CONSENTIMIENTO DE PARTICIPACIÓN EN
            PROGRAMA DE PROTECTORES DE SALUD
          </h4>
          <h5>I. INTRODUCCIÓN E INFORMACIÓN CLAVE</h5>
          <p>
            Usted ha sido invitado a participar del Programa de Protectores de
            Salud (Programa). El propósito de este programa es prepararle,
            crearle, diseñarle un Plan Comprensivo de Cuidado Multidisciplinario
            (Plan) que además de atender sus necesidades médicas incorpora en el
            mismo las necesidades sociales del paciente como el acceso a
            transportación, alimentación, vivienda y otros servicios y
            necesidades. El Plan también contempla su entorno y perfil del
            hogar. Este modelo multidisciplinario identifica y permite la
            creación de estrategias para atender los determinantes sociales de
            la salud. El mismo identifica todos los recursos disponibles en su
            comunidad incluyendo, pero sin limitarse a, agencias de gobierno,
            fundaciones, organizaciones sin fines de lucro, organizaciones de
            base comunitaria, proveedores, entre otros.
          </p>
          <h5>II. PROCEDIMIENTOS</h5>
          <p>
            El Protector de Salud en su intervención inicial utilizará como
            herramienta un cuestionario para entender mejor su: perfil social,
            perfil de hogar, acceso a servicios y necesidades, entorno e
            información médico/clínica. En base a esta intervención inicial el
            equipo de Protectores de Salud le creará un Plan. Luego de completar
            esta intervención inicial el Protector de Salud procederá a una
            intervención de seguimiento en donde se discutirá su Plan, cualquier
            duda que usted tenga y le presentará el Plan para su firma y
            aceptación de este.
          </p>
          <h5>III. PRIVACIDAD Y CONFIDENCIALIDAD</h5>
          <p>
            Nuestro Aviso de Prácticas de Privacidad provee información acerca
            de cómo podríamos emplear y divulgar información protegida sobre su
            salud (PHI, por sus siglas en inglés). En el Aviso hay una sección
            de Derechos del Paciente que describe sus derechos bajo la ley.
            Usted tiene derecho a revisar nuestro Aviso el cual está en
            (Insertar enlace del Aviso de Practicas de Privacidad del plan) y
            firmar este Formulario de Reconocimiento y Consentimiento
            (Formulario). Al firmar este Formulario usted entiende que la
            información de salud protegida se puede divulgar o emplear para
            fines de tratamiento, pago o actividades sanitarias. Además, da
            permiso para que se divulgue su información protegida de salud,
            según sea necesaria, para cualquier gestión relacionada
            estrictamente a su Plan, incluyendo, pero sin limitarse a,
            familiares, organizaciones sin fines de lucro, agencias de gobierno,
            fundaciones, y personas o entidades relacionadas para cumplir con el
            Plan. Autoriza además a que el equipo de Protectores de Salud provea
            una copia del expediente de mi tratamiento médico y un resumen del
            expediente de cuidados a mi(s) médico(s) de cabecera, a mi(s)
            médico(s) especialistas y/o a cualquier otro proveedor de cuidados
            de salud o centros de salud para facilitar mi tratamiento y la
            continuidad de cuidado. Entiendo que la información divulgada bajo
            este párrafo podría incluir, entre otras cosas, información
            confidencial relacionada con el VIH e información acerca de
            enfermedades de transmisión sexual o contagiosas, información acerca
            del abuso de drogas o alcohol o de la dependencia de drogas o
            alcohol, información acerca de la salud mental o comportamiento
            (excepto notas de psicoterapia), información de pruebas genéticas,
            y/o información sobre abortos. Si en algún momento usted ofrece una
            dirección de correo electrónico o de mensajes de texto donde se me
            pueda contactar, usted está dando el consentimiento a recibir
            llamadas o mensajes de texto, a menos que notifique lo contrario por
            escrito. En esta sección, las llamadas y mensajes de texto incluyen,
            entre otras cosas, mensajes pregrabados, mensajes de voz artificial,
            dispositivos telefónicos de marcado automático u otra tecnología
            asistida por computadora, o por correo electrónico, mensajería de
            texto. Reconozco que Protectores de Salud se puede poner en contacto
            conmigo por correo electrónico y/o por mensaje de texto para hacerme
            recordatorios o información sobre salud en general.
          </p>
          <h5>IV. PARTICIPACIÓN Y RETIRO VOLUNTARIO</h5>
          <p>
            Cuando se le invita a participar, tiene derecho a ser informado
            sobre el Programa para que pueda decidir si desea dar su
            consentimiento para participar. Antes de aceptar participar en este
            Programa, lea atentamente este Formulario y haga todas las preguntas
            que sean necesarias para asegurarse de que comprende el Programa. Su
            participación en este Programa es voluntaria. Puede decidir no
            participar o puede abandonar el Programa en cualquier momento. Su
            decisión no tendrá como resultado ninguna penalidad o pérdida de
            beneficios a los que tiene derecho. Si es necesario, su
            participación en este programa puede ser detenida en cualquier
            momento por el Protector de Salud sin su consentimiento si surgen
            circunstancias que lo justifiquen.
          </p>
          <h5>V. CONSENTIMIENTO Y FIRMA</h5>
          <p>
            He leído la información provista en este Formulario (o se me ha
            leído, si aplica). Todas mis preguntas sobre el Programa y mi
            participación en el mismo han sido respondidas. Mi firma a
            continuación significa que consiento libremente participar en este
            Programa. Autorizo el uso y la divulgación de mi información de
            salud a las entidades y personas antes mencionadas en este
            consentimiento para los propósitos descritos anteriormente. Al
            firmar este consentimiento informado, no he renunciado a ninguno de
            mis derechos legales.
          </p>
        </div>
        <PDSSignature
          setIsPDSSigned={setIsPDSSigned}
          pdsSign={pdsSign}
          setPdsSign={setPdsSign}
        />
      </div>
    </div>
  );
};

Step2.label = "Aceptación programa PDS";
Step2.Img = step2;

export default Step2;
