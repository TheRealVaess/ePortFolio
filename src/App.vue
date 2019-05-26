<template>
  <div id="app" :class="{ 'projects-background': $router.currentRoute.name === 'Projects',
                          'home-background': $router.currentRoute.name === 'Home' }">
    <MainMenu/>
    <router-view class="main-margin"/>
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
  min-height: 100vh;
}

.main-margin {
  margin-left: 5%;
}

.home-background {
  background-color: black;
}

.projects-background {
  background: rgb(255,155,248);
  background: -moz-linear-gradient(180deg, rgba(255,155,248,1) 0%, rgba(133,62,255,1) 50%, rgba(1,207,255,1) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255,155,248,1) 0%, rgba(133,62,255,1) 50%, rgba(1,207,255,1) 100%);
  background: linear-gradient(180deg, rgba(255,155,248,1) 0%, rgba(133,62,255,1) 50%, rgba(1,207,255,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ff9bf8",endColorstr="#01cfff",GradientType=1);
}
</style>
