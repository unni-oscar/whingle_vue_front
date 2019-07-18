<template>
    <nav class="pagination">
        <span class="page-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>
        <a v-if="pagination.prevpageUrl" @click="$emit('prev')">Prev </a>
        <a v-else :disabled="true">Prev</a>
        <a v-if="pagination.nextpageUrl" @click="$emit('next')">Next </a>
        <a v-else :disabled="true">Next</a>
    </nav>
</template>
<script>
export default {
    props: ['pagination']
}
</script>

<style scoped>
.pagination a{
    cursor: pointer;
}
.pagination a[disabled="disabled"]{
    cursor: none;
    pointer-events: none;
    color: grey;
}
</style>
