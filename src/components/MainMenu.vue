<template>
  <div class="main-menu" :class="{'test4': test}">
    <ul class="menu-container">
      <li :class="{'test1': test}" @click="test = true">Test1</li>
      <li :class="{'test2': test}">Test2</li>
      <li :class="{'test3': test}">Test3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      test: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .main-menu {
    height: 100vh;
    width: 100%;
    transition: 1s;
    background: black;
  }

  .main-menu.test4 {
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15%;
      width: 100%;
      margin: 0 4%;
      transition: 0.5s;
    }

    li.test1, li.test1:hover {
      animation-name: anim_menu_tile;
      animation-duration: 4s;
      animation-delay: 0s;
      transform: none;
    }
    li.test2, li.test2:hover {
      animation-name: anim_menu_tile;
      animation-duration: 4s;
      animation-delay: 0.2s;
      transform: none;
    }
    li.test3, li.test3:hover {
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

    li:hover {
      transform: scale(1.2);
      transition: 0.2s;
    }

    li:nth-child(1) {
      background: rgba(122,129,255,1);
      background: -moz-linear-gradient(top, rgba(122,129,255,1) 0%, rgba(133,135,255,1) 28%, rgba(163,168,255,1) 46%, rgba(235,242,255,1) 100%);
      background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(122,129,255,1)), color-stop(28%, rgba(133,135,255,1)), color-stop(46%, rgba(163,168,255,1)), color-stop(100%, rgba(235,242,255,1)));
      background: -webkit-linear-gradient(top, rgba(122,129,255,1) 0%, rgba(133,135,255,1) 28%, rgba(163,168,255,1) 46%, rgba(235,242,255,1) 100%);
      background: -o-linear-gradient(top, rgba(122,129,255,1) 0%, rgba(133,135,255,1) 28%, rgba(163,168,255,1) 46%, rgba(235,242,255,1) 100%);
      background: -ms-linear-gradient(top, rgba(122,129,255,1) 0%, rgba(133,135,255,1) 28%, rgba(163,168,255,1) 46%, rgba(235,242,255,1) 100%);
      background: linear-gradient(to bottom, rgba(122,129,255,1) 0%, rgba(133,135,255,1) 28%, rgba(163,168,255,1) 46%, rgba(235,242,255,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7a81ff', endColorstr='#ebf2ff', GradientType=0 );
    }

    li:nth-child(2) {
      background: rgba(255,122,125,1);
      background: -moz-linear-gradient(top, rgba(255,122,125,1) 0%, rgba(255,135,133,1) 28%, rgba(255,163,165,1) 46%, rgba(255,235,241,1) 100%);
      background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,122,125,1)), color-stop(28%, rgba(255,135,133,1)), color-stop(46%, rgba(255,163,165,1)), color-stop(100%, rgba(255,235,241,1)));
      background: -webkit-linear-gradient(top, rgba(255,122,125,1) 0%, rgba(255,135,133,1) 28%, rgba(255,163,165,1) 46%, rgba(255,235,241,1) 100%);
      background: -o-linear-gradient(top, rgba(255,122,125,1) 0%, rgba(255,135,133,1) 28%, rgba(255,163,165,1) 46%, rgba(255,235,241,1) 100%);
      background: -ms-linear-gradient(top, rgba(255,122,125,1) 0%, rgba(255,135,133,1) 28%, rgba(255,163,165,1) 46%, rgba(255,235,241,1) 100%);
      background: linear-gradient(to bottom, rgba(255,122,125,1) 0%, rgba(255,135,133,1) 28%, rgba(255,163,165,1) 46%, rgba(255,235,241,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff7a7d', endColorstr='#ffebf1', GradientType=0 );
    }

    li:nth-child(3) {
      background: rgba(255,169,122,1);
      background: -moz-linear-gradient(top, rgba(255,169,122,1) 0%, rgba(255,180,133,1) 28%, rgba(255,195,163,1) 46%, rgba(255,236,235,1) 100%);
      background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,169,122,1)), color-stop(28%, rgba(255,180,133,1)), color-stop(46%, rgba(255,195,163,1)), color-stop(100%, rgba(255,236,235,1)));
      background: -webkit-linear-gradient(top, rgba(255,169,122,1) 0%, rgba(255,180,133,1) 28%, rgba(255,195,163,1) 46%, rgba(255,236,235,1) 100%);
      background: -o-linear-gradient(top, rgba(255,169,122,1) 0%, rgba(255,180,133,1) 28%, rgba(255,195,163,1) 46%, rgba(255,236,235,1) 100%);
      background: -ms-linear-gradient(top, rgba(255,169,122,1) 0%, rgba(255,180,133,1) 28%, rgba(255,195,163,1) 46%, rgba(255,236,235,1) 100%);
      background: linear-gradient(to bottom, rgba(255,169,122,1) 0%, rgba(255,180,133,1) 28%, rgba(255,195,163,1) 46%, rgba(255,236,235,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa97a', endColorstr='#ffeceb', GradientType=0 );
    }

    li:nth-child(4) {
      background: rgba(255,204,122,1);
      background: -moz-linear-gradient(top, rgba(255,204,122,1) 0%, rgba(255,212,133,1) 28%, rgba(255,220,163,1) 46%, rgba(255,241,235,1) 100%);
      background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,204,122,1)), color-stop(28%, rgba(255,212,133,1)), color-stop(46%, rgba(255,220,163,1)), color-stop(100%, rgba(255,241,235,1)));
      background: -webkit-linear-gradient(top, rgba(255,204,122,1) 0%, rgba(255,212,133,1) 28%, rgba(255,220,163,1) 46%, rgba(255,241,235,1) 100%);
      background: -o-linear-gradient(top, rgba(255,204,122,1) 0%, rgba(255,212,133,1) 28%, rgba(255,220,163,1) 46%, rgba(255,241,235,1) 100%);
      background: -ms-linear-gradient(top, rgba(255,204,122,1) 0%, rgba(255,212,133,1) 28%, rgba(255,220,163,1) 46%, rgba(255,241,235,1) 100%);
      background: linear-gradient(to bottom, rgba(255,204,122,1) 0%, rgba(255,212,133,1) 28%, rgba(255,220,163,1) 46%, rgba(255,241,235,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffcc7a', endColorstr='#fff1eb', GradientType=0 );
    }
  }
</style>
