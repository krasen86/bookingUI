import store from "../store";
import BookingGenerator from "@/services/bookingGenerator";
import Publisher from "@/services/publisher";
import Subscriber from "@/services/subscriber";
import {variables} from "@/config/variables";

export default class BookingController {
    constructor() {
    }
    checkResponse(message){
        const buffer = message.toString('utf-8');
        let responseObject = JSON.parse(buffer);
        let subscriber = new Subscriber();
        subscriber.topicUnSubscriber(variables.RESPONSE_TOPIC + '/'+ this.getUserId());
        if (responseObject.time){
            store.dispatch('booking/addBooking', responseObject);
        }else {
            console.log("Booking failed");
        }

    }
    generateRequest(clinic, date, time){
        let bookingGenerator = new BookingGenerator();
        return bookingGenerator.createRequest(clinic, date, time);
    }
    sendRequest(request){
        let publisher = new Publisher()
        let subscriber = new Subscriber()
        publisher.publishBookingRequest(request)
        subscriber.subscribeToTopic(variables.RESPONSE_TOPIC + '/' + request.userid);
    }
    getUserId() {
        return store.getters["booking/getBooking"].request.userid;
    }

}