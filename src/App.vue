<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
    <router-link to="/" class="navbar-brand" title="SALTUS"
      ><img
        class="d-inline-block align-top"
        alt="SALTUS"
        src="./assets/img/saltus-logo-green.svg"
        height="30"
        loading="lazy"
    /></router-link>
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
          <a class="nav-link" href="#about" title="About us" v-smooth-scroll
            >About us</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#gfa"
            title="Geared Front Attachment"
            v-smooth-scroll
            >Geared Front Attachment</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#socket"
            title="Socket & Bits"
            v-smooth-scroll
            >Socket & Bits</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#care"
            title="Care and Maintenance"
            v-smooth-scroll
            >Care and Maintenance</a
          >
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<style></style>
