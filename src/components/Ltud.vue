<script setup>

    import { ref } from 'vue';
    import Decider from './Decider.vue';
    import Intro from './Intro.vue';

    const entered = ref(false);

</script>

<template>

    <Intro v-if="!entered" @entered="entered = true"></Intro>
    <Decider v-if="entered"></Decider>

</template>