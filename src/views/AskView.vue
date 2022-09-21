<template>
    <!-- <div>
        <div v-for="item in fetchedAsk" :key="item.title">{{ item.title }}</div>
    </div> -->
    <p  v-for="item in fetchedAsk" :key="item.title">        
        <router-link v-bind:to="`/item/${item.id}`">{{ item.title }}</router-link>
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
