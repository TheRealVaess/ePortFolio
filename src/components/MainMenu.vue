<template>
  <div class="main-menu" :class="{'menu-anim': tabSelected}">
    <ul class="menu-container">
      <li :class="{'menu-tab1': tabSelected}" @click="tabSelected = true">
        <router-link to="/projects">
          <h2 v-if="!tabSelected">Projets</h2>
          <font-awesome-icon class="menu-tab-icon" :class="{'disabled': !tabSelected}" icon="laptop-code"/>
        </router-link>
      </li>
      <li :class="{'menu-tab2': tabSelected}" @click="tabSelected = true">
        <router-link to="resume">
          <h2 v-if="!tabSelected">CV</h2>
          <font-awesome-icon class="menu-tab-icon" :class="{'disabled': !tabSelected}" icon="address-card"/>
        </router-link>
      </li>
      <li :class="{'menu-tab3': tabSelected}" @click="tabSelected = true">
        <router-link to="contact">
          <h2 v-if="!tabSelected">Contact</h2>
          <font-awesome-icon class="menu-tab-icon" :class="{'disabled': !tabSelected}" icon="pencil-alt"/>
          <!--

          REMPLACER PAR LE FONT AWESOME DE BASE

          -->
        </router-link>
      </li>
    </ul>
    <h1 class="main-title" :class="{'main-title-anim': tabSelected}">
      Benjamin {<img :src="require('@/assets/icons/title-anim.svg')"/>} Veisseyre
    </h1>
    <h1 class="main-title-alt" :class="{'disabled': !tabSelected}">
      BV
    </h1>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      tabSelected: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-menu {
    height: 100vh;
    width: 100%;
    transition: 1s;
    background: rgb(30, 30, 30);
  }

  .main-menu.menu-anim {
    width: 5%;
    transition: 1s;
    transition-delay: 0.8s;
  }

  .menu-container {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

    li {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: black;
      height: 15%;
      width: 100%;
      margin: 0 4%;

      h2 {
        color: white;
        z-index: 5;
        font-family: LemonMilk, sans-serif;
        font-size: 2rem;
      }

      a {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    li.menu-tab1, li.menu-tab1:hover {
      animation-name: anim_menu_tile;
      animation-duration: 4s;
      animation-delay: 0s;
      transform: none;
    }
    li.menu-tab2, li.menu-tab2:hover {
      animation-name: anim_menu_tile;
      animation-duration: 4s;
      animation-delay: 0.2s;
      transform: none;
    }
    li.menu-tab3, li.menu-tab3:hover {
      animation-name: anim_menu_tile;
      animation-duration: 4s;
      animation-delay: 0.4s;
      transform: none;
    }

    @keyframes anim_menu_tile {
      0%   {transform: translateX(0px);}
      40%  {transform: translateX(-5000px);}
      50% {transform: translateX(0px);}
      100% {transform: translateX(0px);}
    }

    a::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: red;
      transform: scaleX(0);
      transition: 0.5s;
    }

    a:hover::after {
      transform: scaleX(1);
      transition: 0.5s;
    }
  }

  h1.main-title {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    font-family: Iceland, sans-serif;

    img {
      width: 10%;
      transition-duration: 0.5s;
      transition-delay: 0.5s;
    }
  }
  h1.main-title.main-title-anim {
    height: 0;
    font-size: 0;
    transition-duration: 0.5s;
    transition-delay: 0.5s;

    img {
      width: 0;
      transition-duration: 0.5s;
      transition-delay: 0.5s;
    }
  }

  h1.main-title-alt {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: LemonMilk, sans-serif;
    transition-duration: 0.5s;
    transition-delay: 1.5s;
    overflow: hidden;
  }

  h1.main-title-alt.disabled {
    height: 0;
    transition-duration: 0.5s;
    transition-delay: 0.5s;
  }

  .menu-tab-icon.disabled {
    height: 0;
    width: 0;
    font-size: 0;
    transition: 0.5s;
    transition-delay: 1s;
  }
  .menu-tab-icon {
    overflow: hidden;
    color: white;
    z-index: 5;
    font-size: 2rem;
    transition: 0.5s;
    transition-delay: 1s;
  }
</style>
