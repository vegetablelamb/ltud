<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

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

  <Header></Header>

  <section>  
    <RouterView />
  </section>

  <Footer></Footer>

</div>

</template>

<style>
</style>
