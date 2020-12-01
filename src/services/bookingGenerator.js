export default class BookingGenerator {
    constructor() {
    }
    createRequest(selectedClinic, date, time){
        let request = {"userid": this.generateUserId(),
            "requestid": this.generateRequestId(),
            "dentistid": selectedClinic.id,
            "issuance": this.generateIssuance(),
            "time": date + " " + time.split(" ", 1) //split the timeslot string and only keep start time.
        }

        return request
    }
    generateUserId(){
       return (Math.round((Date.now() * Math.random()) /10000000))// 5-6 digits
    }
    generateRequestId(){
        return (Math.round((Date.now() * Math.random()) /10000000000))// 2-3 digits
    }
    generateIssuance(){
        return Date.now()
    }
}