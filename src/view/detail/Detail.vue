<template>
  <div id="detail">
    <top-bar bgCol="#fff">
      <div slot="left" @click="backHome">
      <img src="@/assets/css/img/common/back.svg" alt="">
    </div>
      <div slot="center" class="ti-center">
        <div class="ti-item" v-for="(item,index) in topTitle" :key="item" @click="changeIndex(index)" :class="{active:currentIndex == index ? true : false}">{{item}}
        </div>
      </div>
    </top-bar>
    <div class="banner">
      <Swiper>
        <SwiperItem v-for="(item,index) in detailGoods.bannerImg" :key="index">
          <img :src="item" alt="" >
        </SwiperItem>
      </Swiper>
    </div>
    <DetaShoppingInfo :shoppingInfo="detailGoods.shoppingInfo"></DetaShoppingInfo>
    <Columns :columns="detailGoods.columns"></Columns>
    <Services :services="detailGoods.services"></Services>
    <ShopInfo :shopInfo="detailGoods.shopInfo"></ShopInfo>
    <div class="shopIn">
      <button>进店逛逛</button>
    </div>
    <ShopDesc :desc="detailGoods.desc"></ShopDesc>
    <WearingEffect :wearingEffect="detailGoods.detailInfo"></WearingEffect>



  </div>
</template>

<script>

  import {request} from "@/network/axios";
  import TopBar from '@/components/common/topBar/TopBar'
  import {Swiper,SwiperItem} from '@/components/common/swiper'
  import DetaShoppingInfo from'./children/DetaShoppingInfo'
  import Columns from './children/Columns'
  import Services from './children/Services'
  import ShopInfo from './children/ShopInfo'
  import ShopDesc from './children/ShopDesc'
  import WearingEffect from './children/WearingEffect'






  export default {
    name: "Detail",
    data(){
      return{
        detailGoods : {
          bannerImg:[],
          shoppingInfo:{
            title:'',
            price:'',
            oldPrice:'',
            desc:'',
          },
          columns:[],
          services:[],
          shopInfo:{},
          desc:'',
          detailInfo:[],
          itemParams:{},
          rate:[]
        },
        topTitle:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      TopBar,
      Swiper,
      SwiperItem,
      DetaShoppingInfo,
      Columns,
      Services,
      ShopInfo,
      ShopDesc,
      WearingEffect

    },
    methods:{
      getDetailData(iid){
        request({
          url:'/detail',
          params:{
            goodsId:iid
          }
        }).then(value =>{
          var da = value.data.result
          this.detailGoods.bannerImg = da.itemInfo.topImages
          this.detailGoods.shoppingInfo.title = da.itemInfo.title
          this.detailGoods.shoppingInfo.price = da.itemInfo.price
          this.detailGoods.shoppingInfo.oldPrice = da.itemInfo.oldPrice
          this.detailGoods.shoppingInfo.desc = da.itemInfo.discountDesc
          this.detailGoods.columns.push(da.columns[0],da.columns[1],da.shopInfo.services[da.shopInfo.services.length-1].name)
          this.detailGoods.services = da.shopInfo.services
          this.detailGoods.services.pop()
          this.detailGoods.shopInfo = da.shopInfo
          this.detailGoods.desc = da.itemInfo.desc
          this.detailGoods.detailInfo = da.detailInfo.detailImage[0].list
          this.detailGoods.itemParams = da.itemParams
          this.detailGoods.rate = da.rate.list
        })
      },
      backHome(){
        this.$router.push('/home')
      },
      changeIndex(index){
        this.currentIndex = index
      }
    },
    created() {
      this.getDetailData(this.$route.query.id)

    }
  }
</script>

<style scoped>

  .ti-center{
    display: flex;
  }
  img{
    margin-top: 10px;
  }
  .ti-item{
    font-size: 14px;
    text-align: center;
    flex: 1;
    line-height: 44px;
  }
  .active{
    color: #ff69b4;
  }
  .banner{
    height: 300px;
    overflow: hidden;
  }
  #detail{
    margin-bottom: 100px;
  }
  .shopIn button{
    width: 200px;
    height: 50px;
    display: block;
    border-radius: 10px;
    border: none;
    outline: none;
    background: #ccc;
    color: grey;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    margin:20px auto;
  }
</style>