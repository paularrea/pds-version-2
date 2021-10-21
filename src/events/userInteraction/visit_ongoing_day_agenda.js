import build_event_template from "../template/build_event_template";

const visit_ongoing_day_agenda = (communityWorkerId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: "",
    event_type: "USER_INTERACTION",
    event_subtype: "COMMUNITY_WORKER_VISITS_ONGOING_DAY_AGENDA",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: communityWorkerId,
    },
  };
  const visit_ongoing_day_agenda_obj = Object.assign(event_obj, template_obj);

  return visit_ongoing_day_agenda_obj;
};

export default visit_ongoing_day_agenda;
