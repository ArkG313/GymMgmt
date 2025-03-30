<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

</script>







<template>
    <div class="headNavi">
        <div class="navi">
            <button @click="router.push('/Home')">首页</button>
            <button @click="router.push('/HYGuanli')">会员管理</button>
            <button @click="router.push('/KCGuanli')">课程管理</button>
            <button @click="router.push('/SPGuanli')">商品管理</button>
            <button @click="router.push('/JLGuanli')">教练管理</button>
        </div>
        <div class="user">
            <button>Tommy</button>
            <button title="登出" @click="router.push('/')">退出</button>
        </div>
    </div>
</template>


<style scoped>
.headNavi{
    display: flex;
justify-content: space-between;
}

</style>