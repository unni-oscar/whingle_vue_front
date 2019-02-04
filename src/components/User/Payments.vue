<template>
    <div>users payments</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Payments')
    },
}
</script>
