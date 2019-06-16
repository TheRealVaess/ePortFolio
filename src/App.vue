<template>
  <div id="app" :class="{ 'projects-background': $router.currentRoute.name === 'Projects',
                          'home-background': $router.currentRoute.name === 'Home',
                           'resume-background': $router.currentRoute.name === 'Resume',
                           'contact-background': $router.currentRoute.name === 'Contact' }">
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

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(230, 230, 230);
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(100, 100, 100);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(70, 70, 70);
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

  .resume-background {
    background: rgb(132,255,29);
    background: -moz-linear-gradient(180deg, rgba(132,255,29,1) 0%, rgba(195,255,59,1) 10%, rgba(255,0,0,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(132,255,29,1) 0%, rgba(195,255,59,1) 10%, rgba(255,0,0,1) 100%);
    background: linear-gradient(180deg, rgba(132,255,29,1) 0%, rgba(195,255,59,1) 10%, rgba(255,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#84ff1d",endColorstr="#ff0000",GradientType=1);
  }

  .contact-background {
    background: rgb(255,225,88);
    background: -moz-linear-gradient(180deg, rgba(255,225,88,1) 0%, rgba(255,122,65,1) 50%, rgba(255,0,0,1) 100%);
    background: -webkit-linear-gradient(180deg, rgba(255,225,88,1) 0%, rgba(255,122,65,1) 50%, rgba(255,0,0,1) 100%);
    background: linear-gradient(180deg, rgba(255,225,88,1) 0%, rgba(255,122,65,1) 50%, rgba(255,0,0,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffe158",endColorstr="#ff0000",GradientType=1);
  }
</style>
