<template>
    <div>users favourites</div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setHeading', 'Favourites')
    },
}
</script>
