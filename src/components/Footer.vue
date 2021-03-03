<template>
  <footer class="text-center pt-4 pb-2">
    <p class="go-up mb-3">
      <a href="#top" title="Go to top" v-smooth-scroll
        ><fa icon="chevron-up"></fa
      ></a>
    </p>
    <hr />
    <p class="mt-4">
      <img
        src="@/assets/img/saltus-logo-green.svg"
        height="30"
        alt=""
        loading="lazy"
      />
    </p>
    <p>
      Copyright &copy; {{ new Date().getFullYear() }} Saltus. All rights
      reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped></style>
