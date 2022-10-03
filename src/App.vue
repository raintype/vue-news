<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component" />
      </transition>
      <spinner :loading="loadingStatus"></spinner>
    </router-view>

  </div>
</template>

<script>
/* eslint-disable */
import ToolBar from './components/Toolbar.vue';
import Spinner from './components/Spinner.vue';
// import bus from './utils/bus.js';

export default {
  name: 'App',
  components: {
    ToolBar, Spinner
  },
  data() {
    return {
      loadingStatus: false,
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    }, 
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    // bus.$on('start:spinner', this.startSpinner);
    this.emitter.on("start:spinner", this.startSpinner);
    this.emitter.on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    this.emitter.off("start:spinner", this.startSpinner);
    this.emitter.off("end:spinner", this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
