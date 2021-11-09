import build_event_template from "../template/build_event_template";

const subtype_PHONE_CALL = (userId, patientId, geoCoords) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "PHONE_CALL",
    device_geolocation_coords: geoCoords,
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: userId,
      patient_id: patientId,
    },
  };
  const phone_call_obj = Object.assign(event_obj, template_obj);

  return phone_call_obj;
};

export default subtype_PHONE_CALL;
