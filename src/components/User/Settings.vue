<template>
    <div>Settings</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Settings')
    },
}
</script>
