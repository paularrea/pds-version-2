import build_event_template from "../template/build_event_template";

const subtype_EDIT_EXISTING_PROFILE = (userId, geoCoords, values) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_PROFILE",
    event_subtype: "EDIT_EXISTING_PROFILE",
    device_geolocation_coords: geoCoords,
    content: { new_profile_values: values },
  };
  const post_intervention_survey_obj = Object.assign(event_obj, template_obj);

  return post_intervention_survey_obj;
};

export default subtype_EDIT_EXISTING_PROFILE;
