const get_timezone = function () {
  var timeZoneFormatted = Intl.DateTimeFormat().resolvedOptions().timeZone
  return timeZoneFormatted;
};

export default get_timezone;
