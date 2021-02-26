<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
    <a class="navbar-brand" href="#top" title="SALTUS"
      ><img
        class="d-inline-block align-top"
        alt="SALTUS"
        src="img/saltus-logo-green.svg"
        height="30"
        loading="lazy"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about" title="About us">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gfa" title="Geared Front Attachment"
            >Geared Front Attachment</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#socket" title="Socket & Bits"
            >Socket & Bits</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#care" title="Care and Maintenance"
            >Care and Maintenance</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
