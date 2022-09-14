<template>
    <div>
        <div v-for="item in fetchedAsk" :key="item.title">{{ item.title }}</div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'fetchedAsk'
        ])
        // ...mapGetters({
        //     askItems: 'fetchedAsk'
        // })
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })
    },
    created() {
       this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>
