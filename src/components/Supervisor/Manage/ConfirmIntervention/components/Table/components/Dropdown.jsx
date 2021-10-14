import React from "react";
import styles from "./dropdown-form.module.scss";
import ConfirmInterventionForm from "../../Form/ConfirmInterventionForm";

const Dropdown = ({ row }) => {
  return (
    <div className={styles.dropdown_container}>
      <div className={styles.child}>
        <section>
          <div className={styles.info_section}>
            <div className={styles.flex_child}>
              <a
                className={styles.blue_button}
                href={`tel:${row.phone}`}
              >
                Llamar al paciente
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.child}>
        <ConfirmInterventionForm/>
      </div>
    </div>
  );
};

export default Dropdown;
