export default {
    // 재사용할 컴포넌트 옵션

    mounted() {
        this.emitter.emit("end:spinner");
    },
    beforeCreate() {
        this.emitter.emit("start:spinner");
    }
    // created() {
    //     // bus.$emit('start:spinner');
    //     this.emitter.emit("start:spinner");

    //     this.$store.dispatch('FETCH_LIST', this.$route.name)
    //         .then(() => {
    //             console.log('fetched');
    //             this.emitter.emit("end:spinner");
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
}