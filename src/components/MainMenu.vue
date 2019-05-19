<template>
  <div class="main-menu">
    <ul class="menu-container">
      <li>Test1</li>
      <li>Test2</li>
      <li>Test3</li>
      <li>Test4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
      width: 8%;
      transform: skew(10deg, 0deg);
      writing-mode: vertical-rl;
      text-orientation: upright;
      margin: 0 2%;
    }

    li:hover {
      transform: skew(10deg, 0deg) scale(1.5);
      z-index: 10;
    }

    li:nth-child(1) {
      background-color: red;
    }

    li:nth-child(2) {
      background-color: cyan;
    }

    li:nth-child(3) {
      background-color: green;
    }

    li:nth-child(4) {
      background-color: yellow;
    }
  }
</style>
