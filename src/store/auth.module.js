import { UserService, AuthenticationError } from "../services/user.service";
import { TokenService } from '../services/storage.service'
import { router } from '../router'

const state = {
    authenticating: false,
    accessToken: TokenService.getToken(),
    authenticationErrorCode: 0,
    authenticationError: ''
}

const getters = {
    loggedIn: (state) => {
        return state.accessToken ? true : false
    },

    authenticationErrorCode: (state) => {
        return state.authenticationErrorCode
    },

    authenticationError: (state) => {
        return state.authenticationError
    },

    authenticating: (state) => {
        return state.authenticating
    }
}

const actions = {
    
    async login({commit}, {email,password}) {
        commit('loginRequest');
        try{
            const token = await UserService.login(email, password)
            commit('loginSuccess', token)
            // Redirect the user to the page he first tried to visit, else to dashboard
            router.push(router.history.current.query.redirect || '/dashboard');
            return true;
        } catch(e) {
            if (e instanceof AuthenticationError) {
                commit('loginError', {errorCode: e.errorCode, errorMessage: e.message })
            }
            return false
        }
    },

    logout({commit}) {
        UserService.logout()
        commit('logoutSuccess')
        // this.$router.push('/login')
        // router.push(router.history.current.query.redirect || '/about');
        router.replace('/login')
        // return true;
    }
}

const mutations = {
    loginRequest(state) {
        state.authenticating = true;
        state.authenticationError = ''
        state.authenticationErrorCode = 0
    },

    loginSuccess(state, payload) {
        state.accessToken = payload
        state.authenticating = false
    },

    loginError(state, {errorCode, errorMessage}) {
        state.authenticating = false
        state.authenticationErrorCode = errorCode
        state.authenticationError = errorMessage
    },

    logoutSuccess(state) {
        state.accessToken =''
    }

}

export const auth = {
    namespaced: true, 
    state, 
    getters, 
    actions, 
    mutations
}