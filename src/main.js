import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope,faMobileAlt,} from '@fortawesome/free-solid-svg-icons'
import brand_icons from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

Vue.config.productionTip = false  //產生提示
Vue.use(BootstrapVue)
library.add(faEnvelope,faMobileAlt,brand_icons)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  router,
  render: a => a(App),
}).$mount('#index')


/* equal

var a =  new Vue({})
a.$mount();

*/ 