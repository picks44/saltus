<template>
  <Menu />
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
body {
  padding-top: 3.5rem;
}

hr.underliner {
  border-top: solid 5px #007a57;
  margin: 10px auto 20px;
  width: 10%;
}

a {
  color: #007a57;
}

a:hover {
  color: #003326;
}

.btn-saltus {
  background-color: #007a57;
  border-color: #007a57;
  color: #fff;
  border-radius: 0;
}

.btn-saltus:hover {
  color: #fff;
  background-color: #003326;
  border-color: #003326;
}

.saltus-color {
  color: #007a57;
}

.bg-white {
  background-color: #fff !important;
}

ul {
  list-style: none;
}

ul.first li:before {
  content: '';
  display: inline-block;
  height: 1em;
  width: 1em;
  background-image: url('./assets/img/right-chevron-green.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.5em;
}

ul.second li:before {
  content: '';
  display: inline-block;
  height: 1em;
  width: 1em;
  background-image: url('./assets/img/right-chevron-yellow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 0.5em;
}

.go-down a,
.go-up a {
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
  text-shadow: none;
}

.go-down a {
  background: #fff;
  color: #007a57;
}

.go-up a {
  background: #007a57;
  color: #fff;
}

.go-down a:hover {
  background: #fff;
  color: #003326;
}

.go-up a:hover {
  background: #003326;
  color: #fff;
}
</style>
