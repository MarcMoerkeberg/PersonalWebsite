<template>
  <header class="navbar">
    <router-link class="nav-headline" to="/">Frontpage</router-link>
    <router-link class="nav-headline" to="/About">About</router-link>
  </header>
</template>

<script setup lang="ts"/>

<style scoped>
@media screen and (max-width: 450px) {
    .nav-headline {
    font-size: 1.3em !important;
    margin-right: 0px !important;
  }
}
.navbar {
  display: flex;
  height: 60px;
  background-color: lightblue;
  align-items: center;
}
.nav-headline {
  color:black;
  font-size: 1.8em;
  margin: 25px;
  font-weight: 700;
}

/* router-link creates an <a>, this line is to remove text underline */
a {
  text-decoration: none;
}
</style>