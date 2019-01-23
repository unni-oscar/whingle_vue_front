const state = {
    layout: 'default',
    loading: false,
}

const getters = {
    layout (state) {
        return state.layout
    },
}

const actions = {    
}

const mutations = {
    setLayout (state, payload) {
        state.layout = payload
    },
}

export const config = {
    namespaced: true, 
    state, 
    getters, 
    actions, 
    mutations
}