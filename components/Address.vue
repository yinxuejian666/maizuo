<template>
    <div id="box">
        <div id="head">
            <div class="el-icon-close" @click="back"></div>
            <div class="cityhere">当前城市—</div>
        </div>
        
        <div id="search">
        <input @keyup="searchcity" v-model="search" :class='[style]' @click="goShort" type="text" placeholder="输入城市名或拼音" >
        <p :class="[styles]" @click="goSearch">取消</p>
        </div>
       
        <span>111</span>
        
        <mt-index-list v-if="where">

            <div id="city">
            <div>
                <p>GPS定位你所在的城市</p>
                <div @click="getCity">{{LocationCity}}</div>
            </div>
            <div>
                <p>热门城市</p>
                <ul id="hotCity">
                    <li v-for="(item,index) in hotcity" :key="index">{{item.name}}</li>
                </ul>
            </div>           
            </div>

            <mt-index-section v-for="(item,index) in arr" :index='item.index' :key="index">
               <mt-cell v-for="(place,num) in item.list" :title="item.list[num]" :key="num"   @click.native="getCityId(item.list[num])"></mt-cell>
            </mt-index-section>                             
        </mt-index-list>
        
            <ul id="herecity" v-if="here">
                <router-link to="/helloworld" tag="li" v-for="(item,index) in items" :key="index">{{item.name}}</router-link> 
            </ul>
        
           
    </div>
</template>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=6fLExyGR6LujluhIvmzeRtqUfRfzlOWh"></script>
<script>
import {MP} from '../untils/map'

import addresstoll from '@/untils/addressTolls'  
export default {
    data() {
        return {
           style:'short',
           styles:'change',
           arr:[],
           list:[],
           hotcity:[],
           LocationCity:"正在定位",
           where:'false',
           here:'',
           search:''
        }
    },
    computed: {

        //过滤方法

        items: function() {

            var _search = this.search;

            if (_search) {

                //不区分大小写处理

                var reg = new RegExp(_search, 'ig')

                //es6 filter过滤匹配，有则返回当前，无则返回所有

                return this.list.filter((item)=> {

                    //匹配所有字段
                    
                    // return Object.keys(item).some((key)=> {

                    //      return item[key].match(reg);

                    // })

                    //匹配某个字段

                     return item.pinyin.match(reg);

                })

            };

            return this.list;

        }

    },



 

    mounted(){
        this.getAddresslist()
        setTimeout(()=>{
            this.LocationCity = localStorage.getItem("cityname")
        },500)
        // console.log(this.LocationCity)
        this.$nextTick(function(){

            var _this = this;

            MP(_this.ak).then(BMap => {
                this.city()
            })
        })//解决BMap未定义问题
    },
   
    methods: {
        getCityId(num){
            console.log(num);
            this.$router.push({path:'/helloworld'})
            localStorage.removeItem('nowcity')
            localStorage.setItem('nowcity',num)
        },
       getAddresslist(){
           this.Axios({
               url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/city/getList'
           }).then((res)=>{
               this.arr = addresstoll(res.data.cityList)
                console.log(res.data.cityList)
                // console.log(this.arr)
               this.hotcity =  res.data.cityList.filter((item)=>{return item.isHot==1})
               
                this.list = res.data.cityList
                console.log(this.list);
                // console.log(this.findcity);
          })
       },
       goSearch(){
           this.styles = 'changes'
           this.style = 'long'
           this.where='true'
           this.here=''
           this.search20=''
       }, 
       searchcity(){
             if(!this.search==''){
                this.where=''
                this.here='true'
               console.log(this.items)
            }else{
                this.where='true'
                this.here=''
            }
       },
       goShort(){
           this.style = 'short'
           this.styles = 'change'
          
       },
       back(){
           this.$router.push({path:'/helloworld',query:{id:this.LocationCity}})
           localStorage.setItem('nowcity',this.LocationCity)
       },
       city(){    //定义获取城市方法

            const geolocation = new BMap.Geolocation();

            var _this = this

            geolocation.getCurrentPosition(function getinfo(position){

                let city = position.address.city;             //获取城市信息

                let province = position.address.province;    //获取省份信息

                // _this.LocationCity = city

                localStorage.setItem("cityname",city)

                this.LocationCity = localStorage.getItem("cityname")

            }, function(e) {

                _this.LocationCity = "定位失败"

            }, {provider: 'baidu'});		

        },
        getCity(){
            this.city()
        }

    }
}


    


</script>
<style scoped>
    a{
        text-decoration: none;
        color: black;
    }
    #herecity li{
        border-bottom: 1px dashed black;
        padding: 10px;
    }
    #herecity{
        position: absolute;
        top: 90px;
        /* display: flex;
        flex-direction: column; */
        overflow: auto;
        /* z-index: -100; */
        height: 85%;
        width: 100%;
    }
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
        height: 100%;
        
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
        /* z-index: 100; */
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
