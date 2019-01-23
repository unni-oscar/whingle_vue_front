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

const AuthService = {


    /**
     * Login the user and store the access token to TokenService
     * @returns access_token
     * @throws AuthenticationError
     * 
     */
    login: async function (email, password) {
        const requestData = {
            method: 'post',
            url: '/login',
            data: {
                email: email,
                password: password
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
   logout() {
        // Remove the token and remove Authorization header from Api Service as well 
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader()

        // // NOTE: Again, we'll cover the 401 Interceptor a bit later. 
        // ApiService.unmount401Interceptor()
    }
}
export default AuthService

export { AuthService, AuthenticationError }