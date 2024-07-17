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

  }, 1000)

}

const reset = () => {
  isChoosing.value = false
  isThinking.value = false
  hasChosen.value = false
}
</script>

<template>

  <div class="ltud-choices" v-if="!isChoosing">

    <form @submit.prevent="addDecision">

      <label for="choice">Add choice: </label>
      <input id="choice" type="text" placeholder="" v-model="newChoice">
      <button :disabled="!newChoice">+</button>
    </form>

    <ul>
      <li v-for="(decision, index) in choices">
        {{ decision }}
        <button @click="removeChoice(index)">x</button>
      </li>
    </ul>

    <button v-if="choices.length > 1" @click="decide()">Let The Universe Decide!</button>
  </div>



  <h2 v-if="isChoosing">The Universe has chosen...</h2>
  <h2 v-if="hasChosen">{{ chosen }}</h2>

  <button v-if="hasChosen" @click="reset()">Reset</button>

</template>


<style scoped>

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul {
  /* background: pink; */
  max-width: 400px;
  margin: auto;
  margin-top: 42px;
}

li {
  display: flex;
  button {
    margin-left: auto;
  }
}

form {
  text-align: center;

  button {
    margin-left: 4px;
  }
}

.ltud-choices {
  text-align: center;

  ul + button {
    margin-top: 58px;
  }
}
</style>