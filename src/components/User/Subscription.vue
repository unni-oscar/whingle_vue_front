<template>
    <div>users subscription</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Subscription')
    },
}
</script>
