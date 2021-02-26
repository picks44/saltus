<template>
  <div class="carousel">
    <img v-bind:src="image.path" v-bind:alt="image.name" />
    <p>{{ image.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    image: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.carousel {
  border: 1px solid red;
}
</style>
