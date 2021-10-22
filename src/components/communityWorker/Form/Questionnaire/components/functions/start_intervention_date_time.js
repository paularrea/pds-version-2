import get_local_date_time from "../../../../../../events/template/functions/get_local_date_time";
import get_utc_date_time from "../../../../../../events/template/functions/get_utc_date_time";

const start_intervention_date_time = () => {
  return {
    utc_date_time: get_utc_date_time(),
    local_date_time: get_local_date_time(),
    geolocation_coords: { latitude: 0, longitude: 0 },
  };
};

export default start_intervention_date_time;
