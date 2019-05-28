<template>
  <div class="project-tile"
       ref="project-tile"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false"
       :style="'background-image: url(' + imgUrl + ')'">
    <div class="project-tile-text"
         :class="{ 'hovered': hovering }">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    text: String,
    imgUrl: String
  },
  data () {
    return {
      hovering: false
    }
  },
  mounted () {
    this.$refs['project-tile'].style.height = this.$refs['project-tile'].clientWidth + 'px'
  }
}
</script>

<style lang="scss" scoped>
.project-tile {
  position: relative;
  width: 20%;
  margin: 15px;
  border-radius: 3px;
  background-color: white;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;

  .project-tile-text {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    height: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
    transition-duration: 0.5s;
    text-align: center;
    font-family: CaviarDreams, sans-serif;
    font-size: 1.4rem;
  }

  .project-tile-text.hovered {
    height: 100%;
    transition-duration: 0.5s;
  }
}
</style>
