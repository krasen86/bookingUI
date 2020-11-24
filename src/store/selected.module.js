import AvailabilityController from '@/services/availabilityController'

export const selected = {
    state:  () => ({
        selected: {},
    }),
    namespaced: true,
    getters: {
        getAvailability(state) {
            return state.selected.availability
        }
    },
    actions: {
        selectClinic({commit}, clinic) {
            commit('dentistSelected', clinic)
            let availabilityController = new AvailabilityController();
            availabilityController.subscribeAvailability();
        },
        addAvailability({commit}, availability) {
            commit('availabilityAdded', availability.availability)
        },
        removeClinic({commit}, id){
            let availabilityController = new AvailabilityController();
            availabilityController.unSubscribeAvailability(id);
            commit('clinicRemoved')

        }
    },
    mutations: {
        dentistSelected(state, clinic){
            state.selected = clinic;
        },
        availabilityAdded(state, availability) {
            state.selected.availability = availability;
        },
        clinicRemoved(state) {
            state.selected = {}
        }
    }
}