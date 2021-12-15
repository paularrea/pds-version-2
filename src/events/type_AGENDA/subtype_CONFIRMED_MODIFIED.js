import build_event_template from "../template/build_event_template";

const subtype_CONFIRMED_MODIFIED = (
  userId,
  confirmedEventId,
  list_of_modifications,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "AGENDA",
    event_subtype: "CONFIRMED_MODIFIED",
    device_geolocation_coords: geoCoords,
    content: {
      confirmed_event_id: confirmedEventId,
      list_of_modifications,
    },
  };
  const confirmed_modified_obj = Object.assign(event_obj, template_obj);

  return confirmed_modified_obj;
};

export default subtype_CONFIRMED_MODIFIED;
