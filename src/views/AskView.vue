<template>
    <!-- <div>
        <div v-for="item in fetchedAsk" :key="item.title">{{ item.title }}</div>
    </div> -->
    <p  v-for="item in fetchedAsk" :key="item.title">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
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
