<template>
  <div id="video" class="row d-none d-md-block">
    <video loop muted autoplay controlsList="nodownload">
      <source src="@/assets/video/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div id="welcome" class="text-center">
      <h1>
        <img
          alt="SALTUS"
          src="@/assets/img/saltus-logo-white.svg"
          height="80"
          loading="lazy"
        />
        <span>SALTUS</span>
      </h1>
      <p class="baseline">
        <strong>T</strong>ECHNOLOGY FOR YO<strong>U</strong>
      </p>
      <ul>
        <li>
          <a
            class="btn btn-lg btn-saltus mx-1"
            href="#about"
            title="About us"
            v-smooth-scroll
            >About us</a
          >
        </li>
        <li>
          <a
            class="btn btn-lg btn-saltus mx-1"
            href="#gfa"
            title="Geared Front Attachment"
            v-smooth-scroll
            >Geared Front Attachment</a
          >
        </li>
        <li>
          <a
            class="btn btn-lg btn-saltus mx-1"
            href="#sockets"
            title="Sockets & Bits"
            v-smooth-scroll
            >Sockets & Bits</a
          >
        </li>
        <li>
          <a
            class="btn btn-lg btn-saltus mx-1"
            href="#care"
            title="Care and Maintenance"
            v-smooth-scroll
            >Care and Maintenance</a
          >
        </li>
      </ul>
      <p class="go-down">
        <a href="#about" title="About us" v-smooth-scroll
          ><fa icon="chevron-down"></fa
        ></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#video {
  background-color: #999;
}

#video video {
  opacity: 0.3;
  width: 100%;
}

#welcome {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  color: #fff;
  background-color: transparent !important;
  top: 30%;
}

#welcome h1 span {
  display: none !important;
}

#welcome .baseline {
  font-size: 2rem;
}

#welcome ul {
  list-style: none;
  padding-left: 0;
  margin: 0 0 30px 0;
}

#welcome ul > li {
  display: inline-block;
  padding: 0;
}
</style>
