import store from "../store"
import Subscriber from "@/services/subscriber";

export default class AvailabilityController {
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
    }
    subscribeAvailability() {
        let subscriber = new Subscriber();
        subscriber.subscribeToTopic("availability/" + this.getCurrentClinicID());
    }
    unSubscribeAvailability(id) {
        let subscriber = new Subscriber();
        subscriber.topicUnSubscriber("availability/" + id);
    }

    //AVAILABILITY DATE

    getCurrentDate(){
        if (store.state.availability){
            return store.state.availability.availabilityDate
        }
    }

    subscribeAvailabilityDate(date){
        let subscriber = new Subscriber();
        subscriber.subscribeToTopic("availabilityDate/" + date)
    }
    addAvailabilityDate(message){
        const buffer = message.toString('utf-8');
        console.log(message)
        console.log(buffer)
        console.log(JSON.parse(buffer))
        store.dispatch('availability/addAvailability', JSON.parse(buffer));
    }
    unSubscribeAvailabilityDate(date) {
        let subscriber = new Subscriber();
        subscriber.topicUnSubscriber("availabilityDate/" + date);
    }
}