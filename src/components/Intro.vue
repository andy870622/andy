<template>
  <div class="Intro">
  <Navbar />
  <KVTyper title="Hi! I'm Andy"></KVTyper>
  <About title="AboutMe" />
  </div>
</template>

<script>

import KVTyper from '@/components/KVTyper.vue'
import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
export default {
  name: 'Intro',
  props: {
    msg: String
  },
  components:{
    Navbar,KVTyper,About
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
