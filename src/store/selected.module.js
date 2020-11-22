export const selected = {
    state:  () => ({
        selected: {}
    }),
    namespaced: true,
    actions: {
        selectDentist({commit}, dentist) {
            commit('dentistSelected', dentist)
        }
    },
    mutations: {
        dentistSelected(state, dentist){
            state.selected = dentist;
        }
    }
}