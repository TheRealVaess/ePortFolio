<template>
  <div class="projects">
    <ProjectTile v-for="(project, key) in projectData" :key="key" :text="project.text" :img-url="project.url"/>
  </div>
</template>

<script>
import ProjectTile from './ProjectTile.vue'
export default {
  name: 'Projects',
  components: {
    ProjectTile
  },
  data () {
    return {
      projectData: [
        {text: 'TEST', url: require('@/assets/img/1.png')}
      ]
    }
  }
}
</script>

<style scoped>
  .projects {
    padding: 10px;
  }
</style>
