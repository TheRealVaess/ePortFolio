import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/projects/Projects.vue'
import Home from '@/components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/'
    },
    {
      name: 'Projects',
      component: Projects,
      path: '/projects'
    }
  ]
})
