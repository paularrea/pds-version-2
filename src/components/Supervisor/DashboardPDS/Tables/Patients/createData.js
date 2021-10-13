export function createData(
    general_alarm_is_active,
    user_name,
    num_of_visits,
    num_of_calls,
    num_of_days_since_last_intervention,
    riesgo_clinico,
    riesgo_por_entorno,
    patient_satisfaction_level
  ) {
    return {
      general_alarm_is_active,
      user_name,
      num_of_visits,
      num_of_calls,
      num_of_days_since_last_intervention,
      riesgo_clinico,
      riesgo_por_entorno,
      patient_satisfaction_level,
    };
  }