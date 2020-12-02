import ResponseController from "@/services/responseController";

export const booking = {
    state:  () => ({
        booking: {
            response: {},
            request: {},
            status: {}
        },
    }),
    namespaced: true,
    getters: {
        getBooking(state) {
            return state.booking
        },
        getBookingStatus(state) {
            return state.booking.status
        }
    },
    actions: {
        createBookingRequest({commit}, {clinic, requestDate, requestTime}) {
            let responseController = new ResponseController()
            let request = responseController.generateRequest(clinic, requestDate, requestTime)
            responseController.sendRequest(request)
            commit('bookingRequestAdded', request)
        },
        //response
        addBooking({commit}, booking) {
            commit('bookingAdded', booking)
        },
        changeBookingStatus({commit}, status) {
            commit('statusChanged', status)
        }
    },
    mutations: {
        bookingRequestAdded(state, booking){
            state.booking.request = booking;
            state.booking.status = 'sent'
        },
        //response
        bookingAdded(state, booking){
            state.booking.response = booking;
            state.booking.status = 'received'
        },
        statusChanged(state, newStatus) {
            state.booking.status = newStatus
        }
    }
}