export const get_list_of_hours_by_day = (
  date,
  communityWorkerId,
  availableTimesList
) => {
  const arr = availableTimesList
    ? availableTimesList[communityWorkerId][date]
    : null;
  return arr;
};
