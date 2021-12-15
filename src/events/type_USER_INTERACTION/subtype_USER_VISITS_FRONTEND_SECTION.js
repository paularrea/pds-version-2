import build_event_template from "../template/build_event_template";

const subtype_USER_VISITS_FRONTEND_SECTION = (
  userId,
  sectionPosition,
  geoCoords
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "USER_VISITS_FRONTEND_SECTION",
    device_geolocation_coords: geoCoords,
    content: {
      frontend_element_info: {
        section_id: 'None',
        section_name: `AGENDA_DAY_${sectionPosition}`,
      },
    },
  };
  const visit_ongoing_day_agenda_obj = Object.assign(event_obj, template_obj);

  return visit_ongoing_day_agenda_obj;
};

export default subtype_USER_VISITS_FRONTEND_SECTION;
