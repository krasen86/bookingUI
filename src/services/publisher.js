import {variables} from "@/config/variables";
const {MQTT} = require("./mqtt")
const fs = require("fs");


class Publisher {
    constructor() {
    }
    publishToBroker(file) {
        fs.readFile(file, (err, data) => {
            MQTT.publish(variables.REQUEST_TOPIC, data.toString(), {retain:true});
        })
    }
}

module.exports.Publisher = Publisher;
