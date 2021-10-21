export function createData(
  general_alarm_is_active,
  user_name,
  num_of_visits,
  num_of_calls,
  duration_of_visit_in_mins,
  duration_of_call_in_mins,
  duration_of_travel_in_mins,
  response_time_in_mins,
  patient_satisfaction_level
) {
  return {
    general_alarm_is_active,
    user_name,
    num_of_visits,
    num_of_calls,
    duration_of_visit_in_mins,
    duration_of_call_in_mins,
    duration_of_travel_in_mins,
    response_time_in_mins,
    patient_satisfaction_level,
  };
}
