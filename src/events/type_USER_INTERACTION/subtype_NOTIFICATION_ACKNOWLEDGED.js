import build_event_template from "../template/build_event_template";

const subtype_NOTIFICATION_ACKNOWLEDGED = (
  userId,
  notificationId,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "NOTIFICATION_ACKNOWLEDGED",
    device_geolocation_coords: geoCoords,
    content: {
      notification_id: notificationId,
      notification_response: { text: "Ok, entendido", link: "None" },
    },
  };
  const notification_aknowledged_obj = Object.assign(event_obj, template_obj);

  return notification_aknowledged_obj;
};

export default subtype_NOTIFICATION_ACKNOWLEDGED;
