<template>
    <div>users messages</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Messages')
    },
}
</script>
