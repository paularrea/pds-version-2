import generate_random_uuid from "./functions/generate_random_uuid";
import get_utc_date_time from "./functions/get_utc_date_time";
import get_local_date_time from "./functions/get_local_date_time";
import get_timezone from "./functions/get_timezone";
import get_user_agent from "./functions/get_user_agent";
// import { get_client_ip } from "./functions/get_client_ip";

const build_event_template = () => {
  return {
    event_id: generate_random_uuid(),
    event_created_at_utc_date_time: get_utc_date_time(),
    event_created_at_local_date_time: get_local_date_time(),
    device_timezone: get_timezone(),
    // device_ip: get_client_ip(),
    device_user_agent: get_user_agent(),
    // device_geolocation_coords: get_geolocation_coords(),
    // event_created_by_user_id: null,
    // event_type: null,
    // content: null,
  };
};

export default build_event_template;
