<template>
  <div>
    <div class="img-show" v-if="imgUrl">
      <img :src="imgUrl" class="avatar" />
      <span class="actions">
        <!-- 放大 -->
        <span class="item">
          <i class="el-icon-zoom-in" @click="enlarge()"></i>
        </span>
        <!-- 删除 -->
        <span class="item">
          <i class="el-icon-delete" @click="del()"></i>
        </span>
      </span>
    </div>
    <!-- 图片上传 -->
    <el-upload
      v-else
      action="#"
      class="uploader-avatar"
      list-type="picture"
      :auto-upload="false"
      :show-file-list="false"
      :on-change="imgPreview"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <!-- 图片显示对话框 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogUrl" alt="" />
    </el-dialog>
    <button @click="uploadFile">上传</button>
  </div>
</template>
   
   <script>
import axios from "axios";
import { Message } from 'element-ui'; // 从 Element UI 导入 Message 组件
export default {
  data() {
    return {
      imgUrl: "",
      dialogVisible: false,
      dialogUrl: "",
      file:null,
    };
  },
  methods: {
    //图片缩略图
    imgPreview(file){
        this.imgUrl = URL.createObjectURL(file.raw);
        this.file=file.raw
      },

    enlarge(){
        this.dialogVisible = true;
        this.dialogUrl = this.imgUrl;
    },

    del(){
        this.imgUrl = "";
        this.dialogUrl = "";
    },

    uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file);
   
        // 发送文件到后端
        axios.post('http://localhost:5000/upload1', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
            .then(response => {
              console.log(response.data);
              // 在这里你可以处理上传成功的逻辑
              if ('error' in response.data) {
                Message.success(response.data.error);
                return
              }
              // 显示成功消息
              Message.success(response.data);
            })
            .catch(error => {
              console.error(error);
              // 在这里你可以处理上传失败的逻辑
   
              // 显示错误消息
              Message.error('文件上传失败');
            });
      },

  },
};
</script>
   
   <style scoped>

.uploader-avatar >>> .el-upload {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  line-height: 146px;
  vertical-align: top;
  overflow: hidden;
}
.img-show {
  position: relative;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  box-sizing: border-box;
  width: 148px;
  height: 148px;
  cursor: pointer;
  overflow: hidden;
}
.uploader-avatar >>> .el-upload:hover {
  border-color: #409eff;
}
.uploader-avatar >>> i {
  font-size: 28px;
  color: #8c939d;
}
.avatar {
  width: 148px;
  height: 148px;
  display: block;
}

.actions {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 148px;
  left: 0;
  top: 0;
  cursor: default;
  text-align: center;
  color: #fff;
  opacity: 0;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}
.actions:hover {
  opacity: 1;
}
.actions:hover span {
  display: inline-block;
}
.actions span {
  display: none;
  margin: 0 16px;
  cursor: pointer;
}
</style>
