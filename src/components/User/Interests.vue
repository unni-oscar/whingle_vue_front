<template>
    <div>users interests</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Interests')
    },
}
</script>
