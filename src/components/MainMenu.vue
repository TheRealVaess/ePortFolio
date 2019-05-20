<template>
  <div class="main-menu">
    <ul class="menu-container">
      <li :class="{'test1': test}" @click="test = true">Test1</li>
      <li :class="{'test2': test}">Test2</li>
      <li :class="{'test3': test}">Test3</li>
      <li :class="{'test4': test}">Test4</li>
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
  }

  .menu-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 6%;
      transform: skew(10deg, 0deg);
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin: 0 4%;
      transition: 0.5s;
      background-color: white;
    }

    li.test1, li.test1:hover {
      transform: translateX(-5000px);
      transition: 3s;
      transition-delay: 0s;
    }
    li.test2, li.test2:hover {
      transform: translateX(-5000px);
      transition: 3s;
      transition-delay: 0.2s;
    }
    li.test3, li.test3:hover {
      transform: translateX(-5000px);
      transition: 3s;
      transition-delay: 0.4s;
    }
    li.test4, li.test4:hover {
      transform: translateX(-5000px);
      transition: 3s;
      transition-delay: 0.6s;
    }

    li:hover {
      transform: skew(10deg, 0deg) scale(1.5);
      z-index: 10;
      transition: 0.3s;
    }

    li:nth-child(1) {
      -webkit-animation: neon-red 1.5s ease-in-out infinite alternate;
      -moz-animation: neon-red 1.5s ease-in-out infinite alternate;
      animation: neon-red 1.5s ease-in-out infinite alternate;
    }

    li:nth-child(2) {
      -webkit-animation: neon-blue 1.5s ease-in-out infinite alternate;
      -moz-animation: neon-blue 1.5s ease-in-out infinite alternate;
      animation: neon-blue 1.5s ease-in-out infinite alternate;
    }

    li:nth-child(3) {
      -webkit-animation: neon-green 1.5s ease-in-out infinite alternate;
      -moz-animation: neon-green 1.5s ease-in-out infinite alternate;
      animation: neon-green 1.5s ease-in-out infinite alternate;
    }

    li:nth-child(4) {
      background-color: yellow;
    }
  }

  @-webkit-keyframes neon-red {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px red, 0 0 50px red, 0 0 60px red, 0 0 70px red, 0 0 80px red;
    }
    to {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px red, 0 0 35px red, 0 0 40px red, 0 0 50px red, 0 0 75px red;
    }
  }

  @-webkit-keyframes neon-blue {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px cyan, 0 0 50px cyan, 0 0 60px cyan, 0 0 70px cyan, 0 0 80px cyan;
    }
    to {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px cyan, 0 0 35px cyan, 0 0 40px cyan, 0 0 50px cyan, 0 0 75px cyan;
    }
  }

  @-webkit-keyframes neon-green {
    from {
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px green, 0 0 50px green, 0 0 60px green, 0 0 70px green, 0 0 80px green;
    }
    to {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px green, 0 0 35px green, 0 0 40px green, 0 0 50px green, 0 0 75px green;
    }
  }
</style>
