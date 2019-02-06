<template>
    <div>users horoscope</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Horoscope')
    },
}
</script>
