<template>
    <div id="content">
      <ul>
          <li  :class="{'active':ind===index}" v-for="(item,index) in menu" :key="index" @click="getMenu(item.type,index)">{{item.name}}</li>         
      </ul>
      <div>
         <!-- <router-view></router-view>  -->
      </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            ind:0,
            menu:[
                {
                    name:'正在上映',
                    type:'1'
                },
                 {
                    name:'即将上映',
                    type:'2'
                }
            ]
        }
    },
    mounted() {
        
    },
    methods: {       
        getMenu(type,index){
            this.ind=index;
            this.$router.push({path:"/helloworld",query:{type}})
        }
    },
}
</script>
<style scoped>
 #content{
     overflow:auto;
 }
 #content ul{
     display: flex;
     justify-content: space-around;
     align-items: center;
     height: 60px;
     
 }  
 #content ul li{
     list-style: none;
     padding-bottom: 5px;
 }
 #content li.active{
        color: #ff5f16;
        transition: 0.5s;
        border-bottom: 2px solid #ff5f16;
        /* padding:2px 4px; */
        }
</style>