<template>
    <div>users blacklisted</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Blacklisted Profiles')
    },
}
</script>
