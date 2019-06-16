import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/projects/Projects.vue'
import Home from '@/components/Home.vue'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

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
    },
    {
      name: 'Resume',
      component: Resume,
      path: '/resume'
    },
    {
      name: 'Contact',
      component: Contact,
      path: '/contact'
    }
  ]
})
