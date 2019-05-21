<template>
  <div id="app">
    <MainMenu/>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu.vue'
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgba(255,124,216,1);
  background: -moz-linear-gradient(top, rgba(255,124,216,1) 0%, rgba(253,137,215,1) 28%, rgba(251,166,225,1) 46%, rgba(252,236,252,1) 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,124,216,1)), color-stop(28%, rgba(253,137,215,1)), color-stop(46%, rgba(251,166,225,1)), color-stop(100%, rgba(252,236,252,1)));
  background: -webkit-linear-gradient(top, rgba(255,124,216,1) 0%, rgba(253,137,215,1) 28%, rgba(251,166,225,1) 46%, rgba(252,236,252,1) 100%);
  background: -o-linear-gradient(top, rgba(255,124,216,1) 0%, rgba(253,137,215,1) 28%, rgba(251,166,225,1) 46%, rgba(252,236,252,1) 100%);
  background: -ms-linear-gradient(top, rgba(255,124,216,1) 0%, rgba(253,137,215,1) 28%, rgba(251,166,225,1) 46%, rgba(252,236,252,1) 100%);
  background: linear-gradient(to bottom, rgba(255,124,216,1) 0%, rgba(253,137,215,1) 28%, rgba(251,166,225,1) 46%, rgba(252,236,252,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7cd8', endColorstr='#fcecfc', GradientType=0 );
}
</style>
