<script setup>
import { useRouter } from 'vue-router';

const router=useRouter();
function denglu(){
    router.push('/Home')
}
</script>

<template>
    <div id="beijingtu">
<form class="form" action="javascript:void(0)">
    <h1 class="title">健身俱乐部管理系统</h1>
    <input class="ipt" type="text" placeholder="请输入用户名">
    <input class="ipt" type="password" placeholder="请输入密码">
    <button class="btn" @click="denglu">登录</button>
</form>
</div>
</template>

<style scoped>
.form{
    background-color:white;
    display:inline-block;
    padding: 40px;
    border-radius:10px;
} 
.ipt{
    width: 100%;
    padding: 0;
    border: 1px solid black;
    display: block;
    box-sizing: border-box;
    margin-bottom: 10px;

}   
html{
    min-height: 100vh;
}
.title{
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 25px; 
    text-align: center;
}

#beijingtu{
  width: 100%;
  min-height: 100vh;
  background: url("D:\gongzuoqu\bishe\src\img\denglutu.jpg") center center no-repeat;
  background-size: 100% 100%;
}
.btn{
    color: aliceblue;
    background-color: chartreuse;
    width: 100%;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    display: block;
}

</style>