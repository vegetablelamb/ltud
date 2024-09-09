<script setup>

  const emit = defineEmits(['entered']);
  function enterApp() {
    emit('entered');
  }
</script>

<template>

<article>

  <p>
    Can’t decide which path to take? Let the universe guide you. When faced with multiple choices, tap into the cosmos' infinite wisdom and...<em>Let the Universe Decide</em>!  </p>

  <button @click="enterApp">Enter</button>
</article>

  
</template>


<style scoped>

  article {
    text-align: center;
    button {
      margin-top: 24px;
    }
  }

  button {
    text-align: center;
    margin: auto;
  }

</style>