import {MQTT} from './mqtt';
import {variables} from "@/config/variables";
import DentistController from "@/services/dentistController";
import AvailabilityController from '@/services/availabilityController'

export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        let availabilityController = new AvailabilityController();
        console.log(availabilityController.getCurrentClinicID())
        MQTT.on('message', function (topic, message) {
            if (topic === variables.DENTIST_TOPIC) {
                const dentistController = new DentistController();
                dentistController.processMessage(message);
            }
            if (topic === "availability/" + availabilityController.getCurrentClinicID()) {
                availabilityController.addAvailability(message);
            }
        })
    }

}

