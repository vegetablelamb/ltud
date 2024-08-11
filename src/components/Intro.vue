<script setup>

  const emit = defineEmits(['entered']);
  function enterApp() {
    emit('entered');
  }
</script>

<template>

<article>

  <p>
    If you are having trouble making a difficult decision - or can't make up your mind when choosing between a number of options - why don't you tap into the infinite wisdom of the cosmos and...Let The Universe Decide!
  </p>

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