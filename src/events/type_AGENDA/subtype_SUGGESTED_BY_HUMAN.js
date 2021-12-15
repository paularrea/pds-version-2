import build_event_template from "../template/build_event_template";

const subtype_SUGGESTED_BY_HUMAN = (
  userId,
  patientId,
  geoCoords,
  values
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: 'None',
    event_type: "AGENDA",
    event_subtype: "SUGGESTED_BY_HUMAN",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: userId,
      patient_id: patientId,
      local_date: values.local_date,
    },
  };
  const post_intervention_survey_obj = Object.assign(event_obj, template_obj);

  return post_intervention_survey_obj;
};

export default subtype_SUGGESTED_BY_HUMAN;
