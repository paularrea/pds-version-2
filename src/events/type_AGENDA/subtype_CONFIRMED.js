import build_event_template from "../template/build_event_template";

const subtype_CONFIRMED = (
  userId,
  patientId,
  communityWorkerId,
  values,
  geoCoords,
  suggestedEventId,
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "AGENDA",
    event_subtype: "CONFIRMED",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["f6aadf78-c5cf-4ae1-a527-f97ba206071a"],
      community_worker_id: communityWorkerId,
      patient_id: patientId,
      suggested_event_id: suggestedEventId ? suggestedEventId : 'None',
      values,
    },
  };
  const confirmed_obj = Object.assign(event_obj, template_obj);

  return confirmed_obj;
};

export default subtype_CONFIRMED;
