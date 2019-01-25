<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">About</h1>
        <h2 class="subtitle">Hero subtitle</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  beforeCreate () {
        this.$store.commit('config/setLayout', 'default')
    }
}
</script>
