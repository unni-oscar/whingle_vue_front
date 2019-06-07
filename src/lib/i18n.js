import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
export const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: { 
            hello: 'Hello',
            form_error: 'Please fix the errors',
            years18 : 'You should be 18 years of age',
            no_records : 'No records found',
            msg_sent_success: 'Message sent successfully.',
            interest_sent_success: 'Interest sent successfully.',
            msg_sent_error: 'Error',
            error: 'Error!',
            success: 'Success',
            interest_again: 'You have already sent interest. Would you like to send again?',
            favourite_error: 'Could not add to favourites. Please try again'
        },       
    }
})