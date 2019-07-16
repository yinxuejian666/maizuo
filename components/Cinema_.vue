<template>
    <div id="cinema_">
      <div id="head">
            <div>哈尔滨<span class="el-icon-arrow-down"></span></div>
            <div>影院</div>
            <div class="el-icon-search"></div>
        </div>
        <div id="selectfilm">
            <el-dropdown @command="handleCommandaddress"  id="" size="small" split-button type="primary">
                <span class="el-dropdown-link" ref="address">
                全城
                </span>
                <el-dropdown-menu slot="dropdown">
                    <li><el-dropdown-item command="futian">福田区</el-dropdown-item></li>
                    <li><el-dropdown-item command="NS">南山区</el-dropdown-item></li>
                    <li ><el-dropdown-item command="LH">罗湖区</el-dropdown-item></li>
                    <li ><el-dropdown-item command="LG">龙岗区</el-dropdown-item></li>
                    <li><el-dropdown-item command="LHua">龙华区</el-dropdown-item></li>
                    <li><el-dropdown-item command="GM">光明新区</el-dropdown-item></li>
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown  id="box" size="small" split-button type="primary" @command="handleCommand">
                <span class="el-dropdown-link" ref="buystyle">
                APP订票
                </span>
                <el-dropdown-menu slot="dropdown">
                    <li><el-dropdown-item command="a">APP订票</el-dropdown-item></li>
                    <li><el-dropdown-item command="b">前台兑换</el-dropdown-item></li>                   
                </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown  id="" size="small" split-button type="primary">
                <span class="el-dropdown-link">
                排序
                </span>
                <el-dropdown-menu slot="dropdown" @command="handleCommandDistance">
                    <li><el-dropdown-item >最近去过</el-dropdown-item></li>
                    <li><el-dropdown-item command="distance">离我最近</el-dropdown-item></li>
                    
                </el-dropdown-menu>
            </el-dropdown>
        </div>
      <ul id="filmcontent">

        <li v-for="(item,index) in cinemaList1" :key="index">
            <div>
                <p><nobr>{{item.name}}</nobr></p>
                <p><nobr>{{item.address}}</nobr></p>
            </div>
            <div>
                <p>￥{{item.lowPrice/100}}   起</p>
                <p>{{item.Distance.toFixed(2)}}公里</p>
            </div>
        </li>
      </ul>
        
    </div>
</template>
<script>

export default {
    // watch:{
    //     cinemaList(){
    //        this.getCinema() 
    //     }
    // },
    components:{
        
    },
    data() {
        return {
          cinemaList:[],
          cinemaList1:[] 
        }
    },
    mounted() {
        this.getCinema()
    },
    methods: {
        getCinema(){
            this.Axios({
                url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/cinema/getList'
            }).then((res)=>{
                this.cinemaList = res.data.cinemas
                this.cinemaList1 = this.cinemaList
                console.log(res.data.cinemas)
            })
        },
        handleCommand(command) {
        if(command==='a'){
            this.$refs.buystyle.innerHTML = 'APP订票'
            this.cinemaList1 = this.cinemaList.filter((item)=>{return item.isVisited==0})
            
        }else if(command="b"){
            this.$refs.buystyle.innerHTML = '前台取票'
            this.cinemaList1 = this.cinemaList.filter((item)=>{return !item.isVisited==0})
            
        } 
        },
        handleCommandaddress(command){
            if(command==='futian'){
                this.$refs.address.innerHTML = '福田区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='福田区'})
                
            } 
            if(command==='NS'){
                this.$refs.address.innerHTML = '南山区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='南山区'})
                
            }
            if(command==='LH'){
                this.$refs.address.innerHTML = '罗湖区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='罗湖区'})
                
            }
            if(command==='LG'){
                this.$refs.address.innerHTML = '龙岗区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='龙岗区'})
                
            }
            if(command==='LHua'){
                this.$refs.address.innerHTML = '龙华区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='龙华区'})
                
            }
            if(command==='GM'){
                this.$refs.address.innerHTML = '光明新区'
                this.cinemaList1 = this.cinemaList.filter((item)=>{return item.districtName==='光明新区'})
                
            }
           
        },
        handleCommandDistance(command){
            if(command==='distance'){
                this.$refs.address.innerHTML = '离我最近'
                this.cinemaList1 = this.cinemaList.sort((a,b)=>{return a.Distance-b.Distance})
                
            }
        }
    },
}
</script>
<style scoped>
li{
        list-style: none;
    }
    #head{
        display: flex;
        justify-content:space-between ;
        padding: 5%;
    }
    #head div:nth-of-type(1){
        width: 25%;
    }
    #head div:nth-of-type(3){
        width: 25%;
        text-align: right;
    }
    #head div:nth-of-type(2){
        width: 50%;
        text-align: center;
    }
    #selectfilm{
        width: 100%;
       
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #c3c3c3;
    }
    .el-dropdown-link{
        color: #c3c3c3;
        
    }
    #cinema_{
        height: 90%;
        display: flex;
        flex-direction: column;
        font-family: "bcd";
        /* justify-content: space-between; */
        
    }
    #filmcontent{
        /* flex: 1; */
        overflow: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #filmcontent li{
        display: flex;
        width: 90%;
        align-items: center;
        padding: 15px;
        border-bottom: 1px dashed #c3c3c3;
    }
    #filmcontent li div:nth-of-type(1) p:nth-of-type(1){
        font-size: 15px;
        margin-bottom:5px;
    }
    #filmcontent li div:nth-of-type(2) p:nth-of-type(1){
        color: #ff5f16;
    }
    #filmcontent li div:nth-of-type(2) p{
        text-align: right;
        margin-bottom: 5px;
    }
    #filmcontent li div:nth-of-type(2){
        font-size: 12px
    }
    #filmcontent li div:nth-of-type(1){
        width: 70%;
       
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #filmcontent li div:nth-of-type(2){
        width: 30%; 
    }
    #filmcontent li div:nth-of-type(1) p{
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;     
    }
    #filmcontent li div:nth-of-type(1) p:nth-of-type(2){
        font-size: 12px;
        height: 15px;
        overflow: hidden;
        text-overflow: ellipsis;      
    }
</style>    