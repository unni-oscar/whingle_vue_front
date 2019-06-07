<template>
    <modal name="m-confirm" @before-open="beforeOpen">   
        {{question}} 
        <button @click="doAction(true)">Yes</button>
      <button @click="doAction(false)">
        No 
      </button>
    </modal>
</template>

<script>
export default {
    props:{
      question: String
    },
    methods: {
      doAction(act) {
        this.$modal.hide('m-confirm')
        this.$emit('modalAction', act)
      },
      beforeOpen(event) {
        this.question =event.params.question;
      }
    }
}
</script>

<style>

</style>
