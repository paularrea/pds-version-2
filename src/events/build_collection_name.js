export const build_collection_name = (event_type) => {
  var currentDate = new Date();
  const local_year = currentDate.getFullYear();
  const local_month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  return `events_${event_type}_${local_year}_${local_month}`;
};
