<template>
    <div style="font-family:'bcd';">
        <ul>
            <router-link to="/">
                <li>
                    <img src="../assets/movie.png" alt="">
                    <p>电影</p>
                </li>
            </router-link>
            
            <router-link to="/cinema_">
                <li>
                    <img src="../assets/-dianyingyuan.png" alt="">
                    <p>电影院</p>
                </li>
            </router-link>
           
                <li>
                    <img src="../assets/tehui.png" alt="">
                    <p>特惠</p>
                </li>

            <router-link to="/myapp">
                <li>
                    <img src="../assets/-tab-mine.png" alt="">
                    <p>我的</p>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.router-link-active{
    color: #ff5f16;
}
a{
    text-decoration: none;
    color: black;
}
li{
    list-style: none;
}
ul img{
    height: 29px;
    width: 21px;

}
ul p{
    font-size: 10px;

}
ul{
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>