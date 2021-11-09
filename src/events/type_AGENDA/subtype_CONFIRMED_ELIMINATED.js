import build_event_template from "../template/build_event_template";

const subtype_CONFIRMED_ELIMINATED = (
  userId,
  confirmedEventId,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "AGENDA",
    event_subtype: "CONFIRMED_ELIMINATED",
    device_geolocation_coords: geoCoords,
    content: {
      confirmed_event_id: confirmedEventId,
    },
  };
  const confirmed_eliminated_obj = Object.assign(event_obj, template_obj);

  return confirmed_eliminated_obj;
};

export default subtype_CONFIRMED_ELIMINATED;
