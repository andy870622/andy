<template>
  <div id="intro" class="Intro">
  <Navbar />
  <KVTyper title="Hi! I'm Andy"></KVTyper>
  <About title="AboutMe" />
    <div class="waypoint" v-waypoint="{ active: true, callback: logOne }" id="skill">
      <Skill title="Skills." subTitle="技術" />
    </div>
  <Work title="Work" subTitle="作品集" />
  <div class="backgrey">
    <div class="container" >
          <div class="row">
            <div class="col-md-12">
              <Experience title="Experiences" subTitle="經歷" />
            </div>
          </div>
    </div>
  </div>
  </div>
</template>

<script>

import KVTyper from '@/components/KVTyper.vue'
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
// import Photo from '@/components/Photo.vue'
import Skill from '@/components/Skill.vue'
import Work from '@/components/Work.vue'
import Experience from '@/components/Experience.vue'
import 'animate.css';
import { WOW } from 'wowjs'


const wow = new WOW({
  boxClass: 'wow',
  // animateClass: 'slideInUp',
  offset: 0,
  mobile: true
})
wow.init()
wow.sync()

export default {
  name: 'Intro',
  props: {
    msg: String
  },
  components:{
    Navbar,KVTyper,About,Skill,Work,Experience
  },data () {
    return {
      intersectionOptions: {
        root: document.querySelector('#app'),
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      },
      activeBlock: 'about'
    }
  },
   methods: {
    logOne ({ el, going }) {
      let activeEl = el.getAttribute('id')
      if (going === 'in') {
        this.activeBlock = el.getAttribute('id')
        document.getElementById(activeEl).classList.add('active')
      }
      if (going === 'out') {
        document.getElementById(activeEl).classList.remove('active')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: black;
}
</style>
<style lang="scss">
@import '@/assets/scss/_navbar.scss';
</style>
