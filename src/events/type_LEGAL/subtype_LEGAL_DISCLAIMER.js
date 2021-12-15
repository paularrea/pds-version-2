import build_event_template from "../template/build_event_template";

const subtype_LEGAL_DISCLAIMER = (userId, geoCoords) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "LEGAL",
    event_subtype: "LEGAL_DISCLAIMER",
    device_geolocation_coords: geoCoords,
    content: {
      legal_document_id: "f9c273d1-0cb4-4a00-92a5-5549b4c99d31",
      main_text: "Question or legal text X?",
      response_text: "Accept",
    },
  };
  const legal_obj = Object.assign(event_obj, template_obj);

  return legal_obj;
};

export default subtype_LEGAL_DISCLAIMER;
