import {MQTT} from './mqtt';
import {variables} from "@/config/variables";
import DentistController from "@/services/dentistController";
import AvailabilityController from '@/services/availabilityController';
import Subscriber from "./subscriber";
import ResponseController from "@/services/responseController";

export default class BrokerListener {
    constructor() {
    }
    listenForMessage() {
        let availabilityController = new AvailabilityController();
        let subscriber = new Subscriber();
        let responseController = new ResponseController()
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
                subscriber.topicUnSubscriber(topic.toString())
                responseController.checkResponse(message)
            }
        })
    }

}

