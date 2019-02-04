<template>
    <div>users photos</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Photos')
    },
}
</script>
