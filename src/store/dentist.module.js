export const dentist  = {
    actions: {
        addDentists({commit}, payload) {
            commit('dentistsAdded', payload)
        }
    },
    mutations: {
        dentistsAdded(state, payload){
            state.dentists = payload;
        }
    }
}
