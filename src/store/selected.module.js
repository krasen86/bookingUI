import AvailabilityController from '@/services/availabilityController'

export const selected = {
    state:  () => ({
        selected: {}
    }),
    namespaced: true,
    actions: {
        selectDentist({commit}, dentist) {
            commit('dentistSelected', dentist)
            let availabilityController = new AvailabilityController();
            availabilityController.subscribeAvailability();
        },
        addAvailability({commit}, availability) {
            commit('availabilityAdded', availability)
        }
    },
    mutations: {
        dentistSelected(state, dentist){
            state.selected = dentist;
        },
        availabilityAdded(state, availability) {
            state.selected.availablity = availability.availability;
        }
    }
}