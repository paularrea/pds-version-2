import build_event_template from "../template/build_event_template";

const subtype_PHONE_CALL = (
  userId,
  patientId,
  prefixNum,
  phoneNum,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "PHONE_CALL",
    device_geolocation_coords: geoCoords,
    content: {
      frontend_element_info: {
        called_user_id: patientId,
        phone_country_code_num: prefixNum,
        phone_num: phoneNum,
        call_is_answered: 'None',
        duration_of_call_in_secs: 'None',
      },
    },
  };
  const phone_call_obj = Object.assign(event_obj, template_obj);

  return phone_call_obj;
};

export default subtype_PHONE_CALL;
