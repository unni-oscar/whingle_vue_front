const state = {
    layout: 'default',
    heading: '',
    loading: false,
}

const getters = {
    layout (state) {
        return state.layout
    },
    getHeading (state) {
        return state.heading
    },
}

const actions = {  
    changeLayout({commit}, layout)  {
        commit.setLayout(layout)
    }
}

const mutations = {
    setLayout (state, payload) {
        state.layout = payload
        if(payload == 'user')
            jQuery('body').removeClass('layout-top-nav').addClass('sidebar-mini')
        else
            jQuery('body').removeClass('sidebar-mini').addClass('layout-top-nav')
    },
    setHeading (state, payload) {
        state.heading = payload
    },
}

export const config = {
    namespaced: true, 
    state, 
    getters, 
    actions, 
    mutations
}