<template>
    <el-form :model="form">
      <el-form-item label="电话号码">
        <el-select v-model="form.selectedValue" @change="selectTel">
            <el-option v-for="item in form.telList" :key="item.tel" :value="item.tel"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="身份证">
        <el-input v-model="form.id_card"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
    </el-form>
  </template>
   
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        form: {
            selectedValue: '',
            id_card: '',
            username: '',
            telList:[],
          },
      };
    },
    created() {
    this.fetchData();
  },
    methods: {
      selectTel(){
        console.log(this.telList)
        const item = this.form.telList.find(item=> item.tel === this.form.selectedValue)
        console.log(item)
        this.form.id_card = item.id_card
        this.form.username = item.username
      },
      fetchData() {
      axios.get('http://localhost:5000/get_person')
        .then(response => {
          this.form.telList = response.data;
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }
    }
  };
  </script>