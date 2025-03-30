<script setup>
import { useRouter } from 'vue-router';

const router=useRouter();

function denglu() {
router.push('/DengLu')
   
    
}
</script>

<template>
<h1>这是首页</h1>
<button @click="denglu">登录</button>
</template>

<style scoped>

</style>
