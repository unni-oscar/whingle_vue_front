<template>
    <section class="hero is-link is-fullheight is-fullheight-with-navbar">
        <div class="hero-body">
        <div class="container">Hello! I am
            <h1 class="title is-1">
            Whingle
            </h1>
            <h2 class="subtitle is-3">
            Redefining your matrimonial search
            </h2>
        </div>
        </div>
    </section>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setLayout', 'default')
    },
}
</script>
