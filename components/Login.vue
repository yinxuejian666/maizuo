<template>
    <div id="box">
        <div class="logo">
            <img src="../assets/maizuologo.png" alt="">
        </div>
        <div class="log">
            <div>
                <input type="text"  placeholder="手机号" v-model="userInfo.phonenumber">
                <div id="btn" @click="getCode">获取验证码</div>
            </div>
            <div v-if="tog" class="msg">
                {{msg}}
            </div>
            <div>
                <input type="password" placeholder="验证码" v-model="userInfo.code">
            </div> 
        </div>
        <div id="login" @click="goLog">
            登录
        </div>
    </div>
</template>

<script>
import qs from 'qs'
export default {
    data() {
        return {
            userInfo:{
                phonenumber:null,
                code:null
            },
            tog:false,
            msg:''
           
           
        }
    },
    mounted() {
        
    },
    methods: {
        getCode(){
            this.Axios({
                url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/user/getSmsCode'
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        },
        goLog(){
            this.Axios({
    
                method:"post",
                url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/user/loginBySmsCode',
                data:qs.stringify({                   
                        phone:this.userInfo.phonenumber,
                        smsCode:this.userInfo.code                                      
                })
                
            }).then(res=>{
                if(res.data.code===602){
                    this.tog = true
                    this.msg = res.data.msg
                }else{
                    this.tog = true
                    this.msg = res.data.msg
                    console.log(res)
                    localStorage.setItem("sessionToken",res.data.user.sessionToken)
                    this.$router.push({path:'/myapp',query:{id:res.data.user.phone}})
                }
               
            })
        }
    },
}
</script>
<style scoped>
    .msg{
        border: 1px solid #c3c3c3;
        border-radius: 5px;
    }
    #box{
        height: 100%;
        width: 100%;
    }
    .logo{
        width: 100%;
        text-align: center;
        
    }
    .logo img{
        margin-top: 30px;
    }
    .log{
        width: 100%;
        margin-top: 80px;
    }
    .log div{
        width: 90%;
        margin-bottom: 20px;
        border-bottom: 1px solid black;
        margin-left: 5%;
    }
    .log div input:nth-of-type(2){
        width: 100%;
        /* margin-left: 5%; */
        height: 30px;
        border: 0;
        outline: none;
        border-radius: 5px;
        background:white;
        
    }
    .log div input:nth-of-type(1){
        width: 70%;
        /* margin-left: 5%; */
        height: 30px;
        border: 0;
        outline: none;
        border-radius: 5px;
        background:white;
        
    }
    #btn{
        border: 0;
        font-size: 12px;
        color: #c3c3c3;
        width: 60px;
        float: right;
        line-height: 30px;
    }
    #login{
        margin-top: 40px;
        height: 30px;
        width: 80%;
        background-color: #FFd200;
        border-radius: 5px;
        line-height: 30px;
        text-align: center;
        color: aliceblue;
        margin-left: 10%;
    }
    
</style>
