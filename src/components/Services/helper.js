import moment from 'moment'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')
import profileData from '../../lib/profileData'
export default {
    getValueByKey(key, arrKey) {
        // var i, len = data.length
        // for (i=0; i < len; i++ ) {
        //     if(data[i] && data[i].hasOwnProperty('id')) {
        //         if(data[i]['id'] == key) {
        //             return data[i]['name']
        //         }
        //     }
        // }
        // console.log(arrKey)
        var flippedArr = (this.swap(profileData[arrKey]))
        return flippedArr[key]

    },
    getLastLogin(lastLoginDate) {
        return timeAgo.format(new Date(lastLoginDate));
    },
    getBackDate(yearsSubstract) {
        return moment().subtract(yearsSubstract, 'year').format('YYYY-MM-DD')
    },
    getAge(dob) {
        return moment().diff(dob, 'years') + ' yrs'
    },
    wh_flip() {

    },
    swap(json) {
        var ret = {};
        for (var key in json) {
            ret[json[key]] = key;
        }
        return ret;
    }

}