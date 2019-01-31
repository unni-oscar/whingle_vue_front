/**
 * This user service covers all the action related to user including api calls
 * 
 */
import ApiService from './api.service'
import { TokenService } from './storage.service'


class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService. 
     * 
     * @returns access_token
     * @throws AuthenticationError 
    **/
    login: async function(email, password) {

        const requestData = {
            email: email,
            password: password        
        }

        try {
            // After successfully logged in, it saves the token and set the header
            const response = await ApiService.post('/login', requestData )             
            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.access_token)
            ApiService.setHeader()
            return response.data.access_token
        } catch (error) {
            //return Promise.reject(error.response);
            throw new AuthenticationError(error.response.status, error.response.data.message)
        }
    },

    /**
     * 
     * @param {object} userData 
     * @return json
     */
    async register(userData) {
        return await ApiService.post('/register', userData ) 
    },


    /**
     * @return object
     */
    async getRegisterData() {
        return await ApiService.get('/register') 
    },


    /**
     * 
     * @param {object} userData 
     */
    async verify(userData) {
        return await ApiService.post('/verify', userData) 
    },

    
    /**
     * 
     * @param {String} email 
     */
    async resetPassword(email) {
        return await ApiService.post('/reset-password', email) 
    },
    
    /**
     * 
     * @param {Objec} old Password, New Password 
     */
    async changePassword(userData) {
        return await ApiService.post('/change-password', userData) 
    },
    

    /**
     * Refresh the access token.
    **/
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "/o/token/",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            },
            auth: {
                username: process.env.VUE_APP_CLIENT_ID,
                password: process.env.VUE_APP_CLIENT_SECRET
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)

            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.refresh_token)
            // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage. 
     * 
     * Will also remove `Authorization Bearer <token>` header from future requests.
    **/
    async logout() {
        try{
            //const response = await ApiService.post('/logout')  
            // Remove the token and remove Authorization header from Api Service as well 
            TokenService.removeToken()
            TokenService.removeRefreshToken()
            ApiService.removeHeader()
        } catch(error) {
            console.log(error)
            //throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },
    async getUser() {
        const response = await ApiService.post('/me')
        return response
    }
}

export default UserService

export { UserService, AuthenticationError }