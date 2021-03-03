<template>
  <div class="container-fluid">
    <Header />
    <About />
    <Gfa />
    <Sockets />
    <Care />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import Gfa from '@/components/Gfa.vue'
import Sockets from '@/components/Sockets.vue'
import Care from '@/components/Care.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    About,
    Gfa,
    Sockets,
    Care,
    Footer
  }
}
</script>

<style scoped></style>
