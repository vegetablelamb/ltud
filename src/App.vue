<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import Decider from './components/Decider.vue';
import Intro from './components/Intro.vue';

const entered = ref(false);

</script>

<template>

<div class="star-container">
  <div id="space">
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
    <div class="stars"></div>
  </div>
</div>
<div class="container">
  <header>
    <!-- [Links here maybe?] -->
    <h1>Let The Universe Decide</h1>
  </header>


  <section>  

    <RouterView />

    <!-- <Intro v-if="!entered" @entered="entered = true"></Intro>
    <Decider v-if="entered"></Decider> -->
  </section>





  <footer>
    2024
  </footer>
</div>





</template>

<style>
@font-face {
  font-family: 'Komrade';
  src: url('/fonts/Komrade/Komrade-Regular.otf') format('opentype');
}

@font-face {
  font-family: 'Franchise';
  src: url('/fonts/Franchise/FranchiseRegular.ttf') format('truetype');
}
@font-face {
  font-family: 'Carbon';
  src: url('/fonts/Carbon/CarbonBold.ttf') format('truetype');
}

@font-face {
  font-family: 'Globe';
  src: url('/fonts/Globe/TheGlobeBold.ttf') format('truetype');
}
@font-face {
  font-family: 'Orbit';
  src: url('/fonts/Orbit/OrbitBold.ttf') format('truetype');
}

</style>
