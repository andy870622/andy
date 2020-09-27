<template>
  <div class="skill section section-bg spaceWrapperContainer">
    <div id="skill" class="spaceWrapper"></div>
    <div class="container">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
      <div class="row my-4">
        <div class="col-md-6 mb-4 wow rubberBand animated" v-for="(item) in skills" :key='item.index'>
          <div class="skill-item">
            <span class="icon d-inline-block mb-3">
              <font-awesome-icon :icon="item.icon"/>
            </span>
            <h4 class="skill-item-title font-weight-bold">{{ item.title }}</h4>
            <p class="line-s my-2 mx-auto"></p>
            <h6 class="my-3">
              <span class="mx-1 d-inline-block" v-for="(skillItem,index) in item.skillList" :key="skillItem" v-text="(skillItem + ((index+1 < item.skillList.length) ? ', ' : '' ))" /> 
            </h6>
            <div class="skill-item-text">
              <ul class="ul-list ul-list--none">
                <li class="item ul-list-item" v-for="listItem in item.info" :key="listItem">
                  {{ listItem }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="workSkill skill mb-5 row">
      <div class="wrapper">
        <div class="skill-item" v-for="(item, index) in webSkill" :key='item.index'>
          <p class="text-left">{{ item.item }}</p>
          <div class="skill-item-bar wow slideInLeft animated" :class="['skill-item-' + item.data]">
              <span :class="['skill-item'+ index ]">{{ item.data }}%</span>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <h2>Coding</h2>
        <div class="text-left">
          <div class="d-inline-block skill-web p-2 flex-fill bd-highlight" v-for="item in webSkill" :key='item.index'>
            <b-progress class="" :variant="item.item"
            :key="item" :striped="striped" :animated="animate">
              <b-progress-bar variant="primary" class="px-3"
              :value="item.data" show-progress>{{ item.item }}</b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="skill-others">
          <h2>Others</h2>
          <ul>
            <li class="d-inline-block tags p-2" v-for='item in otherSkill' :key='item.index'>
              <span class="p-2 boder">{{ item }}</span></li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="skill-language">
          <h2>Design</h2>
          <ul>
            <li class="d-inline-block tags p-2" v-for='item in design' :key='item.index'>
              <span>{{ item }}</span></li>
          </ul>
        </div>
      </div>
      <!- Progress bar style -->
      <!-- <div class="row">
        <div class="col-md-4" v-for="(group, i) in webSkillGroups" :key='group.i'>
          <div class="skill-web mb-2 fade_in visible"
          v-for="item in webSkill.slice(i * (webSkill.length / 3), (i + 1) * (webSkill.length / 3))"
          :key='item.index'>
            <h5>{{ item.item }}</h5>
            <b-progress class="mt-2" :variant="item.item"
            :key="item" :striped="striped" :animated="animate">
              <b-progress-bar variant="primary"
              :value="item.data" show-progress>{{ item.data }}</b-progress-bar>
            </b-progress>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="skill-language">
        <h2>語言能力</h2>
        <ul>
          <li v-for='item in language' :key='item.index'>{{ item }}</li>
        </ul>
      </div>
    </div>
    -->
    <!-- <div class="row">
      <div class="col-md-6">
        <div class="skill-others">
          <h2>其他技能</h2>
          <ul>
            <li v-for='item in otherSkill' :key='item.index'>{{ item }}</li>
          </ul>
        </div>
      </div>-->
  </div>
</template>


<script>
export default {
  name: 'Skills',
  props: {
    title: String,
    subTitle: String
  },
  data () {
    return {
      striped: true,
      animate: true,
      skills: [
        {
          icon: 'desktop',
          title: 'Frontend Development',
          skillList: ['HTML5', 'CSS3', 'JavaScript', 'jQuery','Vue.js', 'React'],
          info: [
            '使用 HTML5、CSS3、SCSS 獨立切版或套用 Bootstrap',
            '搭配 JavaScript , jQuery , CSS 製作動畫效果',
            '以 Ajax 串接 API 資料',
            '目標學習建置各小型專案來熟悉 Vue.js'
          ]
        },
        {
          icon: 'server',
          title: 'Backend Development',
          skillList: ['Django','Firebase', 'PYTHON FLASK','Asp.net','SQL','MongoDB','C#'],
          info: [
            '使用 PHP & MySQL',
            '目前學習並使用 Node.js, Express.js, Firebase 來建置小型專案',
            '用 Python flask 和 Django 建置小專案',
            '建置 ASP.NET 網頁',
            '建置 IIS'
          ]
        },
        {
          icon: 'terminal',
          title: 'Others',
          skillList: ['Git', 'Linux'],
          info: [
            'Git 指令',
            'linux 指令'
          ]
        }
      ],
      webSkill: [
        {
          item: 'HTML5, CSS3',
          data: 95
        },
        {
          item: 'SCSS',
          data: 80
        },
        {
          item: 'Bootstrap',
          data: 85
        },
        {
          item: 'Javascript',
          data: 75
        },
        {
          item: 'jQuery',
          data: 90
        },
        {
          item: 'Vue.js',
          data: 40
        },
        {
          item: 'Node.js',
          data: 5
        },
        {
          item: 'Webpack',
          data: 25
        }
      ],
      otherSkill: [
        'RWD', 'Git', 'SEO', 'GA', 'GTM'
      ],
      design: ['Zeplin', 'XD', 'Photoshop', 'Illustrator'],
      language: [
        '中文 / 台語 精通', '英文 (TOEIC 綠色證照)'
      ]
    }
  },
  computed: {
    webSkillGroups () {
      return Array(this.webSkill.length / 3).fill().map((_, i) => [this.webSkill[i * 2], this.webSkill[i * 2 + 1]])
    }
  },
  methods: {
  }
}

</script>


<style lang="scss">


</style>