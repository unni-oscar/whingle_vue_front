<template>
    <table class="table">
        <thead v-if="columns">
            <tr>
                <th  v-for="column in columns" :key="column.name" 
                :class="sortKey === column.name ? (sortOrder[column.name] > 0 ? 'sorting_asc' : 'sorting_desc') : 'sorting'"
                :style="'width'+column.width+';'+'cursor:pointer;'"
                >
                {{column.label}}
                </th>
            </tr>
        </thead>
        <slot></slot>
    </table>
</template>
<script>
export default {
    props: ['columns', 'sortKey', 'sortOrder']
}
</script>
