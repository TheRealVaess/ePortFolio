import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/projects/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Projects',
      component: Projects,
      path: '/projects'
    }
  ]
})
