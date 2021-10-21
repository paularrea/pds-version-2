const get_utc_date_time = function () {
  return new Date()
    .toISOString()
    .replace(/T/, " ") // replace T with a space
    .replace(/\..+/, ""); // delete the dot and everything after
};

export default get_utc_date_time;
