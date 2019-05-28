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
        {text: 'MilkyWay', url: require('@/assets/img/1.png')},
        {text: 'Site pour les licences professionnelles de l\'IUT de Montpellier', url: require('@/assets/img/2.png')},
        {text: 'StartGame', url: require('@/assets/img/3.png')},
        {text: 'Coffre Corp.', url: require('@/assets/img/4.png')},
        {text: '"Répertoire des Métiers de l\'Informatique"', url: require('@/assets/img/5.png')},
        {text: 'Machine à sous', url: require('@/assets/img/6.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')},
        {text: 'akSCioM - Site vitrine', url: require('@/assets/img/7.png')}
      ]
    }
  }
}
</script>

<style scoped>
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
</style>
