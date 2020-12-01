import {MQTT} from './mqtt';
import {variables} from "@/config/variables";
import DentistController from "@/services/dentistController";
import AvailabilityController from '@/services/availabilityController';
import Subscriber from "./subscriber";

export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        let availabilityController = new AvailabilityController();
        let subcriber = new Subscriber();
        console.log(availabilityController.getCurrentClinicID())
        MQTT.on('message', function (topic, message) {
            if (topic === variables.DENTIST_TOPIC) {
                const dentistController = new DentistController();
                dentistController.processMessage(message);
            }
            if (topic === variables.AVAILABILITY_TOPIC + "/" + availabilityController.getCurrentClinicID()) {
                availabilityController.addAvailability(message);
            }
            if (topic.substr(0,9) === 'response/') {
                console.log(message)
                subcriber.topicUnSubscriber(topic.toString())
            }
        })
    }

}

