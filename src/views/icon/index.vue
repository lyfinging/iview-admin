<template>
    <div class="icon">
        <div class="icon-h">字体文件主要使用了阿里巴巴矢量图标以下是使用的字体文件</div>
        <div class="icon-content">
            <div v-for="item in iconData" :key="item.id" class="icon-item">
                <div class="icon-class"> <i class="iconfont" :class="item.class"></i></div>
                <div class="icon-name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import data from '@/assets/font/iconfont.json';
export default {
  name: 'icon',
  data() {
      return {
          iconData:[]
      }
  },
  mounted() {
   this.iconData=data.glyphs.map(val=>{
       let obj={
            class: "icon"+val.font_class ,
             ...val
       }
        return obj
   })
  },
}
</script>


<style lang="less" scoped>
.icon-h{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;

    font-size: 16px;
    margin: 20px 0;
    padding: 0 10px;
    
}
    .icon-content{
         display:flex;
            flex-direction: row;
            flex-wrap: wrap;
           
        .icon-item{
            width: 100px;
            height: 100px;
          margin: 16px;
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-content: space-between;
            text-align: center;
            box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
            .icon-class{
                height: 70px;
                line-height: 70px;
                .iconfont{
                     font-size: 30px;
                }
               
            }
            .icon-name{
                height: 30px;
                line-height: 30px;
            }

        }
    }
</style>