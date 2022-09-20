<template>
    <!-- <div>
        <div v-for="user in this.$store.state.news" :key="user.title">{{ user.title }}</div>
    </div> -->
    <p  v-for="item in this.$store.state.news" :key="item.title">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.time_ago }} by 
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>    
        </small>
    </p>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>ß

<style>

</style>
