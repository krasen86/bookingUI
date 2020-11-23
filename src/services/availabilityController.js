import store from "../store"
import Subscriber from "@/services/subsriber";

export default class DentistController {
    constructor() {
    }
    getCurrentClinicID() {
        if (store.state.selected.selected){
            return store.state.selected.selected.id
        }
    }
    addAvailability(message) {
        const buffer = message.toString('utf-8');
        store.dispatch('selected/addAvailability', JSON.parse(buffer));
        console.log(buffer);
    }

    subscribeAvailability() {
        let subscriber = new Subscriber();
        subscriber.subscribeToTopic("availability/" + this.getCurrentClinicID());
    }
}