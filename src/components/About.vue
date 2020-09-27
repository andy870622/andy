<template>

<div id="about" class="container about">
    <div class="col-xs-12 col-md-6">
        <div class="text-left">
            <h1 class='mb-2'> {{ title }} </h1>
            <h2> 我是呂學承 / Andy Lu</h2>
            <p> 畢業於國立台灣海洋大學資工系</p>
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
</script>



<style lang="scss">
@import '@/assets/scss/_about.scss';

.about{
    margin-top:5%;
    margin-bottom:5%;
}
</style>