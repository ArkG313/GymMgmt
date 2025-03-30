<script setup>
import { reactive, ref } from 'vue';
import Navi from '../components/Navi.vue';
function detailFn(id) {
  alert('这是' + id + '详情')
}
function delateFn(id) {
  jiaolianData.value=jiaolianData.value.filter(el=>el.id!=id)
}
const addFormData=reactive({
  visible:false,
  id:null,
  name:null,
  sex:null,
  phone:null,
  date:null
})
function tijiaoFn(){
  console.log(addFormData);
  jiaolianData.value.push(addFormData)
  addFormData.visible=false
}
function addFn(){
addFormData.visible=true
}
const jiaolianData = ref([
  {
    id: 1,
    name: '小明',
    sex: '男',
    phone: '12345678912',
    date: '2025-1-1'
  },
  {
    id: 2,
    name: '小红',
    sex: '女',
    phone: '12345678911',
    date: '2025-1-2'
  },
  {
    id: 3,
    name: '小高',
    sex: '男',
    phone: '12345678913',
    date: '2025-1-3'
  }
])


</script>
<template>
  <Navi></Navi>
  <h1>这是教练管理页面</h1>
  <div>
    <button @click="addFn">添加</button>
    <form v-if="addFormData.visible" action="javascript:void(0)">
      <input v-model="addFormData.id" type="text" placeholder="请输入id">
      <input v-model="addFormData.name" type="text" placeholder="请输入名字">
      <input v-model="addFormData.sex" type="text" placeholder="请输入性别">
      <input v-model="addFormData.phone" type="text" placeholder="请输入联系方式">
      <input v-model="addFormData.date" type="text" placeholder="请输入入职日期">
      <button @click="tijiaoFn">提交</button>
    </form>
  </div>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>名字</th>
      <th>性别</th>
      <th>联系方式</th>
      <th>入职日期</th>
      <th>操作</th>
    </tr>
    <tr v-for="item in jiaolianData">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.sex }}</td>
      <td>{{ item.phone }}</td>
      <td>{{ item.date }}</td>
      <td>
        <button @click="detailFn(item.id)">详情</button>
        <button @click="delateFn(item.id)">删除</button>
      </td>
    </tr>
  </table>


</template>