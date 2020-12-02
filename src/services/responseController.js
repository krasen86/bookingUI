import store from "../store";
export default class ResponseController {
    constructor() {
    }

    checkResponse(message){
        const buffer = message.toString('utf-8');
        let responseObject = JSON.parse(buffer)
        if (responseObject.time){
            console.log("Booking successful")
            // Home.methods.initConfirmationModal()
            store.dispatch('booking/addBooking', responseObject);
        }else {
            console.log("Booking failed")
        }

    }
}