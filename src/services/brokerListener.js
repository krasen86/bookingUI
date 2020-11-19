import {MQTT} from './mqtt';
import {mqttVariables} from "@/config/mqttVariables";
import DentistController from "@/services/dentistController";

export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        MQTT.on('message', function (topic, message) {
            if (topic === mqttVariables.DENTIST_TOPIC) {
                const dentistController = new DentistController();
                dentistController.processMessage(message);
            }
        })
    }

}

