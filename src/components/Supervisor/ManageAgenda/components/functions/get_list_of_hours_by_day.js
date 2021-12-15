export const get_list_of_hours_by_day = (
  date,
  communityWorkerId,
  availableTimesList
) => {
  console.log(date, 'date');
  console.log(communityWorkerId, 'user');
  console.log(availableTimesList, 'list');
  const arr = availableTimesList
    ? availableTimesList[communityWorkerId][date]
    : null;
  return arr;
};
