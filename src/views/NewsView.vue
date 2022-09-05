<template>
    <div>
        <div v-for="user in users">{{ user }}</div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        axios.get('https://api.hnpwa.com/v0/news/1.json')
            .then(function(response) {
                //this.users = response.data);
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);

            })
    },
}
</script>ß

<style>

</style>
