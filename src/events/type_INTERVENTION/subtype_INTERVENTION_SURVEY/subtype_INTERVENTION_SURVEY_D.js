import build_event_template from "../../template/build_event_template";
import get_local_date_time from "../../template/functions/get_local_date_time";
import get_utc_date_time from "../../template/functions/get_utc_date_time";

const subtype_INTERVENTION_SURVEY_D = (
  local_utc_date_time,
  userId,
  patientId,
  confirmationSign,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "INTERVENTION",
    event_subtype: "INTERVENTION_SURVEY_D",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: userId,
      patient_id: patientId,
      start: local_utc_date_time,
      patient_validation: {
        legal_text_id: "b36a1df8-a549-4263-83ba-23006f29df8d",
        signature: confirmationSign,
      },
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

export default subtype_INTERVENTION_SURVEY_D;
