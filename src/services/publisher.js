import {variables} from "@/config/variables";
const {MQTT} = require("./mqtt")
const fs = require("fs");


export default class Publisher {
    constructor() {
    }
    publishToBroker(file) {
        fs.readFile(file, (err, data) => {
            MQTT.publish(variables.REQUEST_TOPIC, data.toString(), {retain:true});
        })
    }

    publishBookingRequest(request){
        // console.log(request)
        MQTT.publish(variables.REQUEST_TOPIC + '/', JSON.stringify(request), {/*retain:true*/});
    }
}
