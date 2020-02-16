<template>
    <div class="contactMe">
    <ul>
      <li class="text-left" v-for="(item,index) in contact" :key="index">
        <span>
        <font-awesome-icon :icon="item.icon" class="mr-2" />
        {{ item.data }}
        </span>
      </li>
      <li class="social-icon-item d-inline-flex text-left" v-for="(item) in social" :key="item.index">
        <span>
            <a :href="item.data" target="_blank" class="btn">
                <font-awesome-icon :icon="['fab',item.icon]" />
            </a>
        </span>
      </li>
    </ul>
  </div>
</template>


<script>
export default{
    name: "Contact",
    data () {
        return {
            contact:[
                {
                    icon:'mobile-alt',
                    data:'092886590'
                },
                {
                    icon:'envelope',
                    data:'andy870622@gamil.com'
                },
            ],
            social:[
                {
                    icon:'github',
                    data:'https://github.com/andy870622'
                },
                {
                    icon:'facebook',
                    data:'https://www.facebook.com/andy870622'
                },
                {
                    icon:'medium',
                    data:'https://medium.com/@andy870622'
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

$font4 : 4px;
$dark-grey: #333333;

.social-icon {
  &-item {
    a {
      display: inline-block;
      font-size: $font4*4;
      width: $font4*10;
      height: $font4*10;
      text-align: center;
      line-height: $font4*8;
      color: $dark-grey;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      border: 1px solid $dark-grey;
      margin-right:5px;
      margin-top:10px;
      svg {
          vertical-align: initial;
      }
      &:hover {
        background-color: $dark-grey;
        color: white;
      }
    }
  }
}
</style>


