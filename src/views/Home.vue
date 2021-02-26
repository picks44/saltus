<template>
  <div class="carousels">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Carousel v-for="image in images" :key="image.id" :image="image" />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  },
  data() {
    return {
      images: [
        {
          id: 1,
          name: 'Logo 1',
          path: '../assets/logo.png'
        },
        {
          id: 2,
          name: 'Logo 2',
          path: '../assets/logo.png'
        },
        {
          id: 3,
          name: 'Logo 3',
          path: '../assets/logo.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
.carousels {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
