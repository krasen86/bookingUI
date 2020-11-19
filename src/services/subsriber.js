import {MQTT} from './mqtt';

export default class Subscriber {
    constructor() {
    }
    connectToBroker() {
        MQTT.on('connect', function () {
            console.log('Connected to Broker');
        })
    }

    subscribeToTopic(topic) {
        MQTT.subscribe(topic, function () {
            console.log('Subscribed ' + topic)
        })
    }


}

