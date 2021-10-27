import build_event_template from "../template/build_event_template";

const subtype_CONFIRMED_MODIFIED = (
  userId,
  confirmedEventId,
  list_of_modifications
) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "AGENDA",
    event_subtype: "CONFIRMED_MODIFIED",
    content: {
      confirmed_event_id: confirmedEventId,
      list_of_modifications,
    },
    // content: {
    //   confirmed_event_id: "22316f55-3d3b-4820-b1a3-ba5908551b8b",
    //   list_of_modifications: [
    //     { field_name: "intervention_type", new_value: "CALL" },
    //     {
    //       field_name: "actions",
    //       new_value: ["Verificar datos personales", "Aceptación Programa PDS"],
    //     },
    //   ],
    // },
  };
  const confirmed_modified_obj = Object.assign(event_obj, template_obj);

  return confirmed_modified_obj;
};

export default subtype_CONFIRMED_MODIFIED;
