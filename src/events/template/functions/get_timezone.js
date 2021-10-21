const get_timezone = function () {
  var split = new Date().toString().split(" ");
  var timeZoneFormatted =
    split[split.length - 2] + " " + split[split.length - 1];
  return timeZoneFormatted;
};

export default get_timezone;
