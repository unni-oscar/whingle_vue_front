<template>
  <div> 
    <select v-model="selectedOption" :name="name" :class="cl"  @input="event => { $emit('input', event.target.value) }" v-validate="validation">
        <option value="">Select...</option>
        <option v-for="(option) in options" :key="option.id" :value="option.id">{{ option.name }}</option>
    </select>
     <span class="help-block text-red" v-show="errors.has(name)">{{ errors.first(name) }}</span>
  </div>
</template>

<script>

export default {
    data () {
        return {
            selectedOption: null
        }
    },
    inject: ['$validator'], // inject parent validator
    props: {
        options: {},
        value : {},
        validation: {},
        name: {},
        cl : {}
    },
    mounted () {
        this.selectedOption = this.value
    },
    watch: {
        value: function (newValue) {
            this.selectedOption = newValue
        }
    }
}
</script>