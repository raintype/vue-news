<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import ToolBar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
