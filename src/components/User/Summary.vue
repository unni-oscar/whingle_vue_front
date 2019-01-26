<template>
    <div>
        My email : {{email}}
    </div>
</template>
<script>
import UserService from '../../services/user.service.js'
export default {
    data() {
        return {
            email: ''
        }
    },
    created() {
        UserService.getUser()
        .then((res) => {
            const resp = res.data
            this.email =resp.data.email
        })
        .catch((e) => {

        })       
    }
}

</script>
