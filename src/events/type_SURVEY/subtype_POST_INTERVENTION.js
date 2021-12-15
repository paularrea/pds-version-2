// {'event_type': 'POST_INTERVENTION_SURVEY', 'event_subtype': None}
import build_event_template from "../template/build_event_template";
import get_local_date_time from "../template/functions/get_local_date_time";

const subtype_POST_INTERVENTION = (
  userId,
  geoCoords,
  patientId,
  startTime,
  values
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "SURVEY",
    event_subtype: "POST_INTERVENTION",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: userId,
      patient_id: patientId,
      time_range: {
        start_local_time: startTime.local_date_time,
        end_local_time: get_local_date_time(),
        duration_in_mins: "",
      },
      survey_content: values,
    },
  };
  const POST_INTERVENTION_obj = Object.assign(event_obj, template_obj);

  return POST_INTERVENTION_obj;
};

export default subtype_POST_INTERVENTION;
