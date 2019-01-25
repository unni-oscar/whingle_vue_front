<template>
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-2">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-default">
                <user-sidebar></user-sidebar>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-vertical is-10">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification  is-default">
               <user-main></user-main>
              </article>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    beforeCreate () {
        this.$store.commit('config/setLayout', 'user')
    },
    components:{
        'user-sidebar' : () => import('@/components/Layouts/UserSidebar'),
        'user-main': () => import('@/components/Layouts/UserMain')
    },

}
</script>
