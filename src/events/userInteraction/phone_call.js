import build_event_template from "../template/build_event_template";

const phone_call = (communityWorkerId, agendaEventId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: "",
    event_type: "USER_INTERACTION",
    event_subtype: "PHONE_CALL",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: communityWorkerId,
      patient_id: "",
      agenda_event_id: agendaEventId,
    },
  };
  const phone_call_obj = Object.assign(event_obj, template_obj);

  return phone_call_obj;
};

export default phone_call;
