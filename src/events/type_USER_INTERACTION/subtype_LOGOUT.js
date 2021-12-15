import build_event_template from "../template/build_event_template";

const subtype_LOGOUT = (userId, geoCoords) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "LOGOUT",
    device_geolocation_coords: geoCoords,
    content: "None",
  };
  const login_obj = Object.assign(event_obj, template_obj);

  return login_obj;
};

export default subtype_LOGOUT;
