<template>
    <div id="box">
        <div id="head">
            <div class="el-icon-close" @click="back"></div>
            <div class="cityhere">当前城市—</div>
        </div>
        
        <div id="search">
        <input :class='[style]' @click="goShort" type="text" placeholder="输入城市名或拼音" >
        <p :class="[styles]" @click="goSearch">取消</p>
        </div>
       
        
        
        <mt-index-list>

            <div id="city">
            <div>
                <p>GPS定位你所在的城市</p>
                <div>定位失败</div>
            </div>
            <div>
                <p>热门城市</p>
                <ul id="hotCity">
                    <li v-for="(item,index) in hotcity" :key="index">{{item.name}}</li>
                </ul>
            </div>           
            </div>

            <mt-index-section v-for="(item,index) in arr" :index='item.index' :key="index">
                <mt-cell v-for="(place,num) in item.list" :title="item.list[num]" :key="num"></mt-cell>
            </mt-index-section>                             
        </mt-index-list> 
            
    </div>
</template>
<script>
import addresstoll from '@/untils/addressTolls'  
export default {
    data() {
        return {
           style:'short',
           styles:'change',
           arr:[],
           hotcity:[]
        }
    },
    mounted(){
        this.getAddresslist()
       
    },
      
    methods: {
       getAddresslist(){
           this.Axios({
               url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/city/getList'
           }).then((res)=>{
               this.arr = addresstoll(res.data.cityList)
                console.log(res.data.cityList)
               this.hotcity =  res.data.cityList.filter((item)=>{return item.isHot==1})
                console.log(this.hotcity)
           })
       },
       goSearch(){
           this.styles = 'changes'
           this.style = 'long'
       },
       goShort(){
           this.style = 'short'
           this.styles = 'change'
       },
       back(){
           this.$router.push('/helloworld')
       }
    },

}
</script>
<style scoped>
    li{
        list-style: none;
    }
    #hotCity li{
        background: #c3c3c3;
        padding: 3px 15px;
        line-height: 30px;
       
        border-radius: 10px;
    }
    #hotCity{
        display: flex;
        justify-content: space-around;
        flex-wrap: inherit;
    }
    #city div:nth-of-type(1) div{
        background: #c3c3c3;
        height: 30px;
        line-height: 30px;
        width: 65px;
        border-radius: 10px;
        margin-left: 40px;
    }
    #city p{
        font-size: 13px;
        padding-left: 5%;
        height: 40px;
        line-height: 40px;
    }
    #city div:nth-of-type(1){
        height: 80px;

    }
    #city div:nth-of-type(2){
        height: 120px;
        
    }
    #city{
        height: 200px;
        width: 100%;
        /* position: absolute;
        top:90px;  */
    }
    .long{
       height: 25px;
        width: 83%;
        border-radius: 5px;
        border: 0;
        margin-left: 2%;
        background:white url(../assets/fangdajing.png) no-repeat 5px center;
        background-size: 22px;
        padding-left: 27px;
        z-index: 50; 
    }
    .short{
        height: 25px;
        width: 80%;
        border-radius: 5px;
        border: 0;
        margin-left: 2%;
        background:white url(../assets/fangdajing.png) no-repeat 5px center;
        background-size: 22px;
        padding-left: 27px;
        z-index: 50;
    }
    .change{
        width: 20%;
        text-align: center;
        color: white;
        /* margin-left: 5%; */
    }
    .changes{
        width: 0;
        text-align: center;
        color:rgba(0,0,0,0);

    }
    #box{
        font-family: 'bcd';
    }
    #search{
        height: 40px;
        width: 100%;
        background: #c3c3c3;
        position: fixed;
        top: 50px;
        display: flex;
        align-items: center;
        
    }
    /* #search input{
        height: 25px;
        flex:1;
        border-radius: 5px;
        border: 0;
        margin-left: 2%;
        background:white url(../assets/fangdajing.png) no-repeat 5px center;
        background-size: 22px;
        padding-left: 27px;
        z-index: 50;
    } */
    
    #head{
        height: 50px;
        width: 100%;
        display: flex;
        position:fixed;
        z-index: 100;
    }
    .el-icon-close{
        height: 50px;
        width: 30%;
        font-size: 25px;
        text-align: center;
        margin-top: 13px;
    }
    .cityhere{
        width: 40%;
        text-align: center;
        font-size: 15px;
        height: 50px;
        line-height: 50px;
    }
    .mint-indexlist{
        top: 90px;
    }
    
    
</style>
