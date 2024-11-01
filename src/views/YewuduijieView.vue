<template>
  <div>
    <input type="file" @change="previewThumbnail" />
    <img v-if="thumbnail" :src="thumbnail" alt="Thumbnail" />
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      thumbnail: null,
    };
  },
  methods: {
    previewThumbnail(event) {
      const input = event.target;
      if (!input.files || !input.files[0]) {
        return;
      }
 
      const file = input.files[0];
      const reader = new FileReader();
 
      reader.onload = (e) => {
        // 自定义缩略图尺寸
        this.thumbnail = this.resizeImage(e.target.result, 100, 100);
      };
 
      reader.readAsDataURL(file);
    },
    resizeImage(base64, maxWidth, maxHeight) {
      const img = new Image();
      img.src = base64;
 
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
      const width = img.width * ratio;
      const height = img.height * ratio;
 
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
 
      return canvas.toDataURL('image/jpeg', 0.9);
    },
  },
};
</script>