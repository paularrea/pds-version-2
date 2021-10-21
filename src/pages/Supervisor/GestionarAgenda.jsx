import React, { useContext } from "react";
import { SupervisorContext } from "../../SupervisorContext";
import { Link } from "react-router-dom";
import agendaImg from "../../images/icons/supervisor/admin-agenda.png";
import suggestImg from "../../images/icons/supervisor/admin-suggestions.png";
import newImg from "../../images/icons/supervisor/admin-new.png";
import styles from "../../components/Supervisor/ManageAgenda/gestionarAgenda.module.scss";
import Button from "../../components/GeneralComponents/Button/Button";

const buttonsData = [
  {
    title: "Ver y modificar agendas",
    text: "Selecciona la agenda de un PDS o un paciente",
    img: agendaImg,
    path: "/gestionar-agenda/agenda",
    button: "Ver agendas",
  },
  {
    title: "Confirmar intervenciones",
    text: "Tienes 5 intervenciones pendientes de confirmar",
    img: suggestImg,
    path: "/gestionar-agenda/intervenciones-pendientes",
    button: "Ver intervenciones pendientes",
  },
  {
    title: "Crear intervención",
    text: "Crea nuevas intervenciones para pacientes o PDSs",
    img: newImg,
    path: "/gestionar-agenda/nueva-intervencion",
    button: "Añadir nueva intervención",
  },
];

const GestionarAgenda = () => {
  const {contextData} = useContext(SupervisorContext);

  return (
    <div className={styles.container}>
      {contextData &&
        buttonsData.map((item) => {
          return (
            <div>
              <div>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link
                  to={{
                    pathname: item.path,
                    state: {
                      data: contextData,
                    },
                  }}
                >
                  <Button bgColor="blue">{item.button}</Button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default GestionarAgenda;
