//import RequestController from '@/services/requestController'
//import Vue from 'vue'

export const booking = {
    state:  () => ({
        booking: {},
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
        addBooking({commit}, booking) {
            commit('bookingAdded', booking)
        },
        changeBookingStatus({commit}, status) {
            commit('statusChanged', status)
        }
    },
    mutations: {
        bookingAdded(state, booking){
            state.booking = booking;
            state.booking.status = 'received'
        },
        statusChanged(state, newStatus) {
            state.booking.status = newStatus
        }
    }
}