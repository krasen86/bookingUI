export default class ResponseController {
    constructor() {
    }

    checkResponse(message){

        const buffer = message.toString('utf-8');
        console.log(message)
        JSON.parse(buffer)
        console.log(buffer)
        if (buffer.time){
            console.log("Booking successful")
        }else {
            console.log("Booking failed")
        }

    }
}