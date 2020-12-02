import BookingController from "@/services/bookingController";

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
            let bookingController = new BookingController()
            let request = bookingController.generateRequest(clinic, requestDate, requestTime)
            bookingController.sendRequest(request)
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