<template>
  <div class="carousel-item" data-interval="3000">
    <img
      class="d-block w-100"
      :src="resolve_img_url(image.path)"
      :alt="image.name"
    />
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context('@/assets/img/', true, /^.*\.png$/)
      return images('./' + path)
    }
  }
}
</script>

<style scoped>
.image-carousel {
  border: 1px solid red;
}
</style>
