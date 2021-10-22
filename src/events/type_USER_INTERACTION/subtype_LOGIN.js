import build_event_template from "../template/build_event_template";

const subtype_LOGIN = (userId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: "",
    event_type: "USER_INTERACTION",
    event_subtype: "LOGIN",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: userId,
      patient_id: "",
    },
  };
  const login_event_obj = Object.assign(event_obj, template_obj);

  return login_event_obj;
};

export default subtype_LOGIN;
