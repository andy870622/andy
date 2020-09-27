<template>
  <div class="experience spaceWrapperContainer">
    <div id="experienceandeducation" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div>
      <ul class="ul-list">
        <li class="item ul-list-item wow slideInUp" v-for='item in experiences' :key='item.index'>
          <h5>{{ item.title }} | {{ item.during }}</h5>
          <h6><b>{{ item.company }}</b></h6>
          <ul class="ul-list--inner">
          <li v-for= 'content in item.list' :key='content.index'>
          {{content}}
          </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperiencesList',
  props: ['title', 'subTitle'],
  data () {
    return {
      experiences: [
         {
          company: '康橋雙語學校',
          title: '資訊部程式設計師',
          during: '2020/7/1-2020/9/30',
          list: [
            '程式設計',
            'ASP.NET',
            'C#',
            'SQL Server'
          ]
        },
        {
          company: '康橋雙語學校',
          title: '資訊部工讀',
          during: '大一/大二暑假',
          list: [
            '教導國小學生 Smart Car 基本操作',
            '簡易程式',
            '電腦檢測'
          ]
        },
        {
          company: '北一游泳池救生員',
          title: '泳池救生員',
          during: '2016/7-2016/9',
          list: [
            '泳池人員安全',
            '泳池檢測'
          ]
        }
      ]
    }
  }
}
</script>
