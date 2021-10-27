// {'event_type': 'POST_INTERVENTION_SURVEY', 'event_subtype': None}
import build_event_template from "../template/build_event_template";
import get_local_date_time from "../template/functions/get_local_date_time";
import get_utc_date_time from "../template/functions/get_utc_date_time";

const subtype_FUTURE_INTERVENTION_SUGGESTION = (
  starting_time,
  userId,
  patientId,
  values
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "INTERVENTION",
    event_subtype: "FUTURE_INTERVENTION_SUGGESTION",
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: userId,
      patient_id: patientId,
      start: starting_time,
      self_assessment_survey: values,
      sent: {
        utc_date_time: get_utc_date_time(),
        local_date_time: get_local_date_time(),
        geolocation_coords: { latitude: 41.390205, longitude: 2.154007 },
      },
    },
  };
  const post_intervention_survey_obj = Object.assign(event_obj, template_obj);

  return post_intervention_survey_obj;
};

export default subtype_FUTURE_INTERVENTION_SUGGESTION;
