import {v4 as uuidv4} from "uuid";

const generate_random_uuid = function() {
    //return Math.random().toString().replace("0.", "")

    // https://www.uuidgenerator.net/dev-corner/javascript
    // npm install uuid
    return uuidv4()
}

export default generate_random_uuid

