import {MQTT} from './mqtt';
import {mqttVariables} from "@/config/mqttVariables";
import DentistController from "@/services/dentistController";
import AvailabilityController from '@/services/availabilityController'

export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        let availabilityController = new AvailabilityController();
        console.log(availabilityController.getCurrentClinicID())
        MQTT.on('message', function (topic, message) {
            if (topic === mqttVariables.DENTIST_TOPIC) {
                const dentistController = new DentistController();
                dentistController.processMessage(message);
            }
            const buffer = message.toString('utf-8');
            console.log(buffer)
            if (topic === "availability/" + availabilityController.getCurrentClinicID()) {
                availabilityController.addAvailability(message);
            }
        })
    }

}

