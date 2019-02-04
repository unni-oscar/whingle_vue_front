<template>

</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Requests')
    },
}
</script>
