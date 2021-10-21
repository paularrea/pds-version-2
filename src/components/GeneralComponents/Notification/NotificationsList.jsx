import React, { useState } from "react";
import Notification from "./Notification";
import {
  no_notifications,
  notification_list,
} from "./notification.module.scss";

const NotificationsList = ({ data }) => {
  const [list, setList] = useState(data.notifications);

  function handleRemove(id) {
    const newList = list.filter((notification) => notification.order !== id);
    setList(newList);
  }

  const List = ({ list, onRemove }) => (
    <section className={notification_list}>
      {list &&
        list.map((notification, index) => {
          return (
            <Notification
              data={data}
              key={notification.order}
              onRemove={onRemove}
              notification={notification}
              notificationId={notification.notification_id}
              bgColor={notification.background_color}
              response={notification.response_text}
            >
              {notification.main_text}
            </Notification>
          );
        })}
    </section>
  );

  return (
    <>
      <List list={list} onRemove={handleRemove} />
      {list && list.length === 0 && (
        <p className={no_notifications}>No tienes nuevas notificaciones.</p>
      )}
    </>
  );
};

export default NotificationsList;
