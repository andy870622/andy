<template>

<div id="about" class="container about">
    <div class="col-xs-12 col-md-6">
        <div class="text-left">
            <h1 class='mb-2'> {{ title }} </h1>
            <h2> 我是呂學承 / Andy Lu</h2>
            <p> 目前就讀國立台灣海洋大學資工系四年級</p>
            <p> 致力於前端製作 HTML , CSS , JAVASCRIPT , JQUERY</p>
        </div>
        <Contact />
    </div>
</div>
</template>

<script>

import Contact from "./Contact.vue"

export default{
    name: 'About',
    props:  {
        title: String,
    },
    components:{
        Contact
    }
}
// export default {
//   name: 'Intro',
//   props: {
//     msg: String
//   },
//   components:{
//     Navbar,KVTyper,About
//   }
// }

</script>



<style lang="scss">
@import '@/assets/scss/_about.scss';

.about{
    margin-top:5%;
    margin-bottom:5%;
}
</style>