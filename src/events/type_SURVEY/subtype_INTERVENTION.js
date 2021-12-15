import build_event_template from "../template/build_event_template";
import get_local_date_time from "../template/functions/get_local_date_time";

const subtype_INTERVENTION = (
  userId,
  geoCoords,
  patientId,
  surveyType,
  local_utc_date_time,
  interventionValues,
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "SURVEY",
    event_subtype: "INTERVENTION",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: userId,
      patient_id: patientId,
      survey_type: surveyType,
      time_range:{
        start_local_time: local_utc_date_time.local_date_time,
        end_local_time: get_local_date_time(),
        duration_in_mins: "",
      },
      survey_content: interventionValues,
    },
  };
  const post_intervention_survey_obj = Object.assign(event_obj, template_obj);

  return post_intervention_survey_obj;
};

export default subtype_INTERVENTION;
