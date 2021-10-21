import build_event_template from "../template/build_event_template";

const logout_event = (communityWorkerId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: "",
    event_type: "USER_INTERACTION",
    event_subtype: "LOGOUT",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: communityWorkerId,
      patient_id: "",
    },
  };
  const logout_event_obj = Object.assign(event_obj, template_obj);

  return logout_event_obj;
};

export default logout_event;
