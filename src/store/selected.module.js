import AvailabilityController from '@/services/availabilityController'

export const selected = {
    state:  () => ({
        selected: {}
    }),
    namespaced: true,
    actions: {
        selectClinic({commit}, clinic) {
            commit('dentistSelected', clinic)
            let availabilityController = new AvailabilityController();
            availabilityController.subscribeAvailability();
        },
        addAvailability({commit}, availability) {
            commit('availabilityAdded', availability.availability)
        },
        removeClinic({commit}){
            commit('clinicRemoved')

        }
    },
    mutations: {
        dentistSelected(state, clinic){
            state.selected = clinic;
        },
        availabilityAdded(state, availability) {
            state.selected.availablity = availability;
        },
        clinicRemoved(state) {
            state.selected = {}
        }
    }
}