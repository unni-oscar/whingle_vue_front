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
            no_records : 'No records found'
        },       
    }
})