<script setup>
import { ref } from 'vue'

const choices = ref([])
const newChoice = ref('')

const isChoosing = ref(false)
const isThinking = ref(false)
const hasChosen = ref(false)
const chosen = ref()

const addDecision = () => {
  choices.value.push(newChoice.value)
  newChoice.value = ''
}


const removeChoice = (i) => {
  console.log(`we have an index`, i)
  choices.value.splice(i, 1)
}

const decide = () => {
  const maxIndex = choices.value.length
  const randomIndex = Math.floor(Math.random() * maxIndex);

  chosen.value = choices.value[randomIndex]

  isThinking.value = true

  choices.value = []
  isChoosing.value = true
  setTimeout(() => {
    hasChosen.value = true

  }, 500)

}

const reset = () => {
  isChoosing.value = false
  isThinking.value = false
  hasChosen.value = false
}
</script>

<template>

  <div v-if="!isChoosing">

    <form @submit.prevent="addDecision">

      <input type="text" placeholder="Enter choice" v-model="newChoice">
      <button :disabled="!newChoice">Add</button>
    </form>

    <ul>
      <li v-for="(decision, index) in choices">
        {{ decision }} {{ index }}
        <button @click="removeChoice(index)">x</button>
      </li>
    </ul>

    <button v-if="choices.length > 1" @click="decide()">Let The Universe Decide!</button>
  </div>



  <h2 v-if="isChoosing">The Universe has chosen...</h2>
  <h2 v-if="hasChosen">{{ chosen }}</h2>

  <button v-if="hasChosen" @click="reset()">Reset</button>

</template>
