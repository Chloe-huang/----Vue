<template>
    <div>
        {{count}}{{type}}
    </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex';
    export default {

        created() {
        },
        methods: {},
        computed: {
          ...mapState(['count']),
          ...mapGetters(['type'])
        },
        components: {}
    }
</script>

<style scoped>


</style>
