import ListView from './ListView.vue'
import {h } from 'vue'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        name,
        created() {
            // bus.$emit('start:spinner');
            this.emitter.emit("start:spinner");

            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    console.log('fetched');
                    this.emitter.emit("end:spinner");
                })
                .catch((error) => {
                    console.log(error);
                });
            
        },

        render() {
            return h(ListView);
        }
    }
}