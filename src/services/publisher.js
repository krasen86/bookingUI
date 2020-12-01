import {variables} from "@/config/variables";
const {MQTT} = require("./mqtt")

export default class Publisher {
    constructor() {
    }

    publishBookingRequest(request){
        // console.log(request)
        MQTT.publish(variables.REQUEST_TOPIC + '/', JSON.stringify(request), {/*retain:true*/});
    }
}
