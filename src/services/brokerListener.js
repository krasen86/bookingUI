import {MQTT} from './mqttConnector';
import {mqttVariables} from "@/config/mqttVariables";
import store from "../store"


export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        MQTT.on('message', function (topic, message) {
            // message is Buffer
            // console.log(topic.toString())
            // console.log(message.toString())
            if (topic === mqttVariables.DENTISTTOPIC) {
                const buffer = message.toString('utf-8');
                store.dispatch('addDentists', JSON.parse(buffer));
            }
        })
    }

}

