<template>
<div>
    <modal name="m-confirm" @before-open="beforeOpen">   
        {{q}} 
        <button @click="doAction(true)">Yes</button>
      <button @click="doAction(false)">
        No 
      </button>
    </modal>
    {{question}}
    </div>
</template>

<script>
export default {
    data() {
      return {
        q: '',
        pid: '',
        act: ''
      }
    },
    props:{
      question: String,
      id: Number,
      action: Boolean
    },
    methods: {
      doAction(act) {
        this.$modal.hide('m-confirm')
        this.$emit('modalAction', {userAction: act, pid: this.pid, action:this.act})
      },
      beforeOpen(event) {
        this.q =event.params.question;
        this.pid =event.params.id
        this.act = event.params.action
      }
    }
}
</script>

<style>

</style>
