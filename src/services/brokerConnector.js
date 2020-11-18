import Subscriber from "@/services/subsriber";
import BrokerListener from "@/services/brokerListener";
import {mqttVariables} from "@/config/mqttVariables";

export default class BrokerConnector {
    constructor() {
    }
    establishConnection() {
        const subscriber = new Subscriber();
        const brokerListener = new BrokerListener();
        subscriber.connectToBroker();
        subscriber.subscribeToTopic(mqttVariables.DENTISTTOPIC);
        brokerListener.listenForMessage();
    }

}