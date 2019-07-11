<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,index) in flimlist" :key="index">
                <div>
                    <div @click="getFilmdetails(item1.id)" v-for="(item1,index1) in item" :key="index1">
                        <img :src="item1.imgUrl" alt="">
                    </div>
                </div>
            </mt-swipe-item>              
        </mt-swipe>
    </div>
</template>
<script>
import "mint-ui/lib/style.css"
import changeArr from '@/untils/twoArr'
export default {
    data(){
        return {
            flimlist:null
        }
    },
    mounted() {
        this.getFilmbanner()
    },
    methods: {
        getFilmbanner(){
            this.Axios({
                url:this.Api
            }).then((res) => {
                this.flimlist = changeArr(res.data.banners,1)
                // console.log(res)
            }).catch((err) => {
                console.log(err)
            });
        },
        getFilmdetails(){
            this.Axios({
                url:'https://www.easy-mock.com/mock/5cd62f927f8f72433eeaa0b9/api/film/getDetail',
                // params:{
                // filmId:id
                // }
            }).then((res)=>{
                console.log(res)
            })
        }
    },
}
</script>
<style scoped>
img{
    height: 200px;
    width: 100%;
}
.mint-swipe{
    height: 200px;
    width: 100%;
   
}
</style>