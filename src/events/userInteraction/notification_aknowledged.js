import build_event_template from "../template/build_event_template";

const notification_aknowledged = (communityWorkerId, notificationId) => {
  const template_obj = build_event_template();
  const event_obj = {
    event_created_by_user_id: "",
    event_type: "USER_INTERACTION",
    event_subtype: "NOTIFICATION_ACKNOWLEDGED",
    content: {
      list_of_supervisor_ids: ["", ""],
      community_worker_id: communityWorkerId,
      notification_id: notificationId,
      response_text: "Ok, entendido",
    },
  };
  const notification_aknowledged_obj = Object.assign(event_obj, template_obj);

  return notification_aknowledged_obj;
};

export default notification_aknowledged;
