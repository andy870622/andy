import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import  {fas}  from '@fortawesome/free-solid-svg-icons'
import fab from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import VueWaypoint from 'vue-waypoint'
import 'animate.css'   //wow
import Wow from 'vue-wow'

Vue.config.productionTip = false  //產生提示
Vue.use(BootstrapVue)
Vue.use(VueWaypoint)
Vue.use(Wow)
library.add(fas,fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  router,
  render: a => a(App),
}).$mount('#index')


/* equal

var a =  new Vue({})
a.$mount();

*/ 