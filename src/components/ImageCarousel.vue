<template>
  <div v-if="index === 0" class="carousel-item active" data-interval="3000">
    <img
      class="d-block w-100"
      :src="resolve_img_url(image.path)"
      :alt="image.name"
    />
  </div>
  <div v-else class="carousel-item" data-interval="3000">
    <img
      class="d-block w-100"
      src="//placehold.it/1240x874"
      :data-src="resolve_img_url(image.path)"
      :alt="image.name"
    />
  </div>
</template>

<script>
import jQuery from 'jquery'
const $ = jQuery
window.$ = $

export default {
  name: 'ImageCarousel',
  props: {
    index: {
      type: Number,
      required: true
    },
    image: {
      type: Object,
      required: true
    }
  },
  mounted() {
    $('.carousel.lazy').on('slide.bs.carousel', function(e) {
      let lazy
      lazy = $(e.relatedTarget).find('img[data-src]')
      lazy.attr('src', lazy.data('src'))
      lazy.removeAttr('data-src')
    })
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
