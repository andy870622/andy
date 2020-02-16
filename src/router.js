import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Intro from './components/Intro.vue'
// import About from './components/About.vue'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    }
  ]
})
