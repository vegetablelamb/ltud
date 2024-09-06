<script setup>
import { onMounted } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import { bootstrap } from 'vue-gtag';


onMounted(() => {
  console.log(`the component is now mounted.`);
  console.log('gtag', gtag);
  // bootstrap();
  // bootstrap().then((gtag) => {
  //   console.log('gtag?', gtag)
  // });
})
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
