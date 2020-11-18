import {MQTT} from './mqttConnector';

export default class BrokerListener {
    constructor() {
    }

    listenForMessage() {
        MQTT.on('message', function (topic, message) {
            // message is Buffer
            console.log(topic.toString())
            console.log(message.toString())
        })
    }

}

