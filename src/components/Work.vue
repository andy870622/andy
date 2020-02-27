<template>
  <div class="work section spaceWrapperContainer">
    <div id="work" class="spaceWrapper"></div>
    <h1 class="title">{{ title }}</h1>
    <h2 class="subTitle">{{ subTitle }}</h2>
    <div class="container work_list">
      <ul class="">
        <div class="row mx-auto">
          <li class="col-md-4 p-4 wow slideInUp" v-for="list in works" :key="list.index"
          data-wow-duration="0.5s" data-wow-delay="0.5s">
              <a class="btn-link" :href="list.link" target="_blank">
                 <img :src="list.image" :alt="list.title">
                <div class="text-left text">
                  <h3 class="title mt-3">{{ list.title }}</h3>
                  <div class="mb-2">                    
                    <span class="mx-1 d-inline-block" v-for="(listItem, index) in list.tags" :key="listItem" v-text="listItem + ((index+1 < list.tags.length) ? ', ' : '')">
                    </span>
                  </div>
                </div>
                <div class="description">
                  <ul class="ul-list">
                    <li class="item ul-list-item" v-for="listItem in list.description" :key="listItem">
                      {{ listItem }}
                    </li>
                  </ul>
                </div>
              </a>
              <a class="u-mobile-only btn-link" :href="list.link">{{ list.link }}</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

import Midi_Image from '../assets/image/music.jpg'
import Auction_Image from '../assets/image/auction.jpg'
import Kkwoo_Image from '../assets/image/kkwoo.jpg'
export default {
  name: 'Works',
  props: ['title', 'subTitle'],
  data () {
    return {
      works: [
        {
          title: 'MIDI 編輯播放器',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: Midi_Image,
          link: 'https://andy870622.github.io/MagentaProjectHtml/web/index.html',
          description: [
            '應市面上許多音樂 MIDI 編輯軟體皆要下載才能做使用，製作依網頁版可不需下載即可編輯和播放 MIDI 檔案。',
            '連接 FIREBASE 可將自己的創作與人分享',


            ]
        },
        {
          title: '海大拍賣系統',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery','python','django'],
          image: Auction_Image,
          link: 'https://github.com/andy870622/ntouo_auction_system',
          description: [
            '一個可用第三方認證之拍賣系統',
            '使用 Django, Firebase 做為後端',
            '可上架、拍賣、競拍商品'
            ]
        },
        {
          title: 'KKWOO',
          tags: ['HTML', 'CSS3', 'Javascript', 'jQuery'],
          image: Kkwoo_Image,
          link: 'https://hackathon.ntouo.tw/',
          description: [
            '',
            ''
            ]
        },
        // {
        //   title: '爬蟲',
        //   tags: ['jQuery','SVG'],
        // //   image: ImgWork_climbStair,
        //   link: 'https://shueny.github.io/climbstairs-game/',
        //   description: [
        //     '一個大家每當無法決定事情的時候必玩的小遊戲',
        //     '在框框中輸入直線個數(即幾個選項)並按下 Enter 鍵後便隨機產生相對應的橫線，點選任一個 momoco 的頭，會自動沿著線走到終點',
        //     '未來可以再修改增加可以自己輸入選項，根據選項的個數產生直線。也可以與資料庫連接，記下曾經使用的記錄'
        //     ]
        // },
        // {
        //   title: 'DCARD',
        //   tags: ['Vue Cli 3', 'Bootstrap', 'AwesomeFont', 'ES6'],
        // //   image: ImgWork_vueTodo,
        //   link: 'https://shueny.github.io/vue-todolist-1/',
        //   description: [
        //     '熟悉 Vue.js 從學習寫 Todo List 開始',
        //     '學習如何使用 Vue.js 建置 Project、Vue.js 的語法、如何使用 Plugins、熟習 ES6 的寫法...等等',
        //     '使用 localStorge 做 List 的存取，可以新增資料、切換狀態、標記、刪除資料、新增該項目的 comment',
        //     '下一版考慮與 MongoDB 串接，把資料存到資料庫裡'
        //     ]
        // }
      ]
    }
  }
}

</script>



<style lang="scss">

$font4 : 4px;
$dark-grey: #333333;
$white: #ffffff;
.work {
  text-align:center;
  h1 {
    // font-size: $font4*8;
    font-weight: bold;
  }
  h2 {
    font-size: $font4*4;
  }
  &_list {
    .row {
      h3{
        font-weight: normal;
        font-size: 1rem;
        color: $dark-grey;
      }
      span{
        display: block;
        font-size: 0.75rem;
        color: lighten($dark-grey, 15%);
      }
      li {
        overflow: hidden;
        text-align: left;

        .description {
          position: absolute;
          background-color: rgba(0,0,0,0.6);
          width: 100%;
          height: 100%;
          top: 100%;
          left: 0;
          -webkit-transition: all .4s ease-in-out;
          -moz-transition: all .4s ease-in-out;
          -o-transition: all .4s ease-in-out;
          transition: all .4s ease-in-out;
          color: $white;
          padding: $font4*6;
          text-align: left;

        
          .ul-list {
            padding: 0;

            li {
              &:hover {
                box-shadow: none;
              }
            }
          }
        }
        &:hover {
          box-shadow: 0px -1px $font4*2 rgba(1,1,1,1);
          .description {
            top: 0;
          }
        }
      }
    }
  }
}
</style>