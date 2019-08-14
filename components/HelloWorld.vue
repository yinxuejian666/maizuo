<template>
  <div id="box">
    <div>
        <router-link to="/address">
            <div id="address">
               {{city}}
            </div>
        </router-link>
        <Swipe id="swipe"></Swipe>
        <Content id="content"></Content>
    </div>  
    <div id="select">
        <ul>
            <li v-for="(item,index) in flimdetail" :key="index">
              <img :src="item.poster" alt="">  
              <div id="filmdetailmiddle">
                  <div>{{item.name}}       <span id="score">{{item.filmType}}</span></div>
                  <div >观众评分:<span class="watchersay">{{item.grade}}</span></div>
                  <div><nobr>主演:{{item.actorStr}}</nobr></div>
                  <div>{{item.nation}}|{{item.runtime}}分钟</div>
                  
              </div>
              <p id="buy">购票</p>
            </li>
        </ul>       
    </div>
  </div>
</template>

<script>
// import Head from './Head'

import Swipe from './Swipe'
import Content from './Content'



export default {
  components:{
    // Head,
    
    Content,
    Swipe,
    
  },
  
    data() {
        return {
          flimdetail:[],
          city:''
        }
    },
   watch: {
        $route:{
            handler(){
                let type = this.$route.query.type
                this.getFlimdetail(type)//监听切换tab
            },
            deep:true
        }
    },//监听 解决选项卡不切换
    mounted() {
        this.getFlimdetail()
        console.log(this.$route.query.id);
        
        this.city = localStorage.getItem('nowcity')
    },
    methods: {
        getFlimdetail(type='1'){
            this.Axios({
                url:this.Api,
                params:{
                    type:type
                }
            }).then((res)=>{
                this.flimdetail = res.data.films,
                console.log(this.flimdetail)
            })
            
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#address{
    height: 20px;
    width: 80px;
    /* text-align: center; */
    font-size: 18px;
    background: url(../assets/arrow-down.png) no-repeat right center #c3c3c3;
    background-size: 15px;
    border-radius: 16px;
    color: white;
    background-color:rgba(0 , 0, 0 ,0.5);
    position: absolute;
    z-index: 100;
    top: 20px;
    left: 15px;
}
/* #head{
  width: 100%;
  height: 40px;
  background: lemonchiffon;
} */
#swipe{
  width: 100%;
  /* height: 120px; */
  
}

#foot{
  width: 100%;
  height: 50px;
  background: white;
}
#content{
  width: 100%;
  flex: 1;
  height: 60px;
}



.watchersay{
    color: #ff5f16;
}
#score{
    color:white;
    background: #c3c3c3;
    border-radius: 3px;
    font-size: 12px;
}
#buy{
    border: 1px solid #ff5f16;
    border-radius: 3px;
    padding: 2px;
    color: #ff5f16;
}
#filmdetailmiddle{
    width: 60%;
}
#select{
    background: white;
    width: 100%;
    overflow: auto;
}
#box{
  height: 90%;
  overflow: auto;
  display: flex; 
  flex-direction: column;
  justify-content: space-between;
  font-family: 'bcd';
}
ul{
    width: 100%;
}
li img{
    height: 91px;
    width: 66px;
}
ul li{
    display: flex;
    height: 124px;
    width: 90%;
    font-size: 14px;
    align-items: center;
    
    padding: 0 5%;
}
ul li div div:nth-of-type(3){
    height: 17px;
    width: 154px;
    overflow: hidden;
    text-overflow:ellipsis;
}
ul li div{
    margin-left: 10px;
}
ul li div div{
    margin-bottom: 4px;
}
</style>
