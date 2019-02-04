<template>
    <div>users preference</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Partner Preference')
    },
}
</script>
