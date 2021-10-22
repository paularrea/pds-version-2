import build_event_template from "../template/build_event_template";

const subtype_LEGAL_TEXT_ACCEPTED = (userId, patientId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: userId,
    event_type: "USER_INTERACTION",
    event_subtype: "LEGAL_TEXT_ACCEPTED",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: userId,
      patient_id: patientId ? patientId : null,
      legal_text_id: "accff910-795d-4720-a34c-da0950655f32",
      response_code: "ACCEPTED",
    },
  };
  const legal_text_accepted_obj = Object.assign(event_obj, template_obj);

  return legal_text_accepted_obj;
};

export default subtype_LEGAL_TEXT_ACCEPTED;
