<template>
  <Navbar />
  <div class="grid">
    <div class="content">
      <v-app>
        <v-main>
          <router-view />
        </v-main>
      </v-app>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
</script>

<style>
.grid {
  display: grid;
}

/* Extra small devices (portrait phones, less then 576px) */
@media screen and (max-width: 576px) {
  .grid {
    grid-template-columns: 100%;
  }
}

/* Small devices (landscape phones, 576px and up */
@media screen and (min-width: 576px) {
  .grid {
    grid-template-columns: 20px 1fr 20px;
    grid-template-rows: 1fr;
  }

  /* Since this styling cascades, it's applied to all other media queries also */
  .content {
    grid-column: 2/3;
  }
}

/* Medium devices (tablets, 768px and up) */
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 30px 1fr 30px;
  }
}

/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) {
  .grid {
    grid-template-columns: 30px 1fr 30px;
  }
}

/* Extra large devices (large desktops, 1160px and up) */
@media screen and (min-width: 1160px) {
  .grid {
    grid-template-columns: 50px 1fr 50px;
  }
}
</style>