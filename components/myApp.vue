<template>
    <div id="box">
       <div id="head">
         <div><img src="../assets/-tab-mine.png" alt="">
         <p @click="log">{{msg}}</p>
         </div>  
       </div>
       <div id="buylist">
           <div>
               <p><img src="../assets/gonggaotongzhi-.png" alt=""></p>
               <p>电影订单</p>
           </div>
            <div>
               <p><img src="../assets/nianjiguanli-.png" alt=""></p>
               <p>商品订单</p>
           </div>
       </div>
       <ul id="myother">
           <li><img src="../assets/quan-.png" alt=""><p>卖座券</p></li>
           <li><img src="../assets/hongbao.png" alt=""><p>组合红包</p></li>
           <li><img src="../assets/yue.png" alt=""><p>余额</p><p id="money">￥0</p></li>
           <li><img src="../assets/shezhi.png" alt=""><p>设置</p></li>
       </ul>
       <!-- <Foot></Foot> -->
    </div>
</template>

<script>

// import Foot from './Foot'
export default {
    data() {
        return {
            msg:"立即登录"
        }
    },
    components:{
       
    },
    mounted() {
         this.changebtn()
    },
    methods: {
        log(){
            if(localStorage.getItem("sessionToken")){
                localStorage.removeItem("sessionToken")
                this.$router.push('/login')
            }else{
                this.$router.push('/login')
            }
        },
        changebtn(){
            if(localStorage.getItem("sessionToken")){
                this.msg = '退出登录'
            }else{
                this.msg = '立即登录'
            }
        }
    },
}
</script>
<style scoped>
    
    #money{
        width: 60%;
        text-align: right;
    }
    #buylist img{
        width: 30px;
        height: 30px; 
    }
    #head div p{
        margin-left: 60px;
        color: white;
        border: 1px solid white;
        padding: 10px;
    }
    #head div{
        display: flex;
        align-items: center;
        margin-top: 80px;
        margin-left: 15%;
    }
    #head img{
        height: 50px;
        width: 50px;
        
    }
    #myother{
        border-top: 10px solid #c3c3c3;
        width: 100%;
        flex: 1;
    }
    #myother img{
        width: 25px;
        height: 25px;
        margin-top: 10px;
    }
    #myother li{
        height: 45px;
        border-bottom: 1px dashed #c3c3c3;
        line-height: 45px;
        display: flex;
        background: url(../assets/arrow-down.png) no-repeat 95% center;
        background-size: 25px;
        padding-left: 5%;
    }
    #myother p{
        height: 45px;
        line-height: 45px;
        margin-left: 10px;
    }
    #buylist{
        width: 100%;
        height: 80px;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #buylist div{
        text-align: center;
    }
    #box{
        height: 100%;
        display: flex;
        
        flex-direction: column;
        justify-content: space-between;
        font-family: 'bcd';
    }
    #head{
        width: 100%;
        height: 200px;
        background: url(../assets/b4827d65a6fcae6dac52c6cdbb9e481cb81a10300de65e85950351d2f7683abf.jpg) no-repeat;
        background-size: 100% 200px;
    }
</style>
