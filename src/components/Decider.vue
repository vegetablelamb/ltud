<script setup>
import { ref } from 'vue'

const choices = ref([])
const newChoice = ref('')

const isChoosing = ref(false)
const isThinking = ref(false)
const hasChosen = ref(false)
const chosen = ref()
const showReset = ref(false)

const addDecision = () => {
  choices.value.push(newChoice.value)
  newChoice.value = ''
}


const removeChoice = (i) => {
  choices.value.splice(i, 1)
}

const getRandomIndex = (len) => {
  const maxIndex = len;
  const randomIndex = Math.floor(Math.random() * maxIndex);
  return randomIndex
}

const decide = () => {
  const randomIndex = getRandomIndex(choices.value.length);
  chosen.value = choices.value[randomIndex]

  isThinking.value = true

  choices.value = []
  isChoosing.value = true

  setTimeout(() => {
    hasChosen.value = true
  }, 1000)

  setTimeout(() => {
    showReset.value = true
  }, 2000)

}

const reset = () => {
  chosen.value = null
  isChoosing.value = false
  isThinking.value = false
  hasChosen.value = false
  showReset.value = false
}

</script>

<template>

  <div class="ltud-choices" v-if="!isChoosing">

    <p>Add at least two choices - using the the form below - then sit back and let the Universe make the decision for you.</p>

    <form @submit.prevent="addDecision" autocomplete="off">
      <label for="choice">Add choice: </label>
      <input id="choice" type="text" placeholder="" v-model="newChoice">
      <button :disabled="!newChoice">+</button>
    </form>

    <ul>
      <li v-for="(decision, index) in choices">
        <span>{{ decision }}</span>
        <span>&nbsp;</span>
        <button @click="removeChoice(index)" class="ltud-btn ltud-btn--small">x</button>
      </li>
    </ul>

    <div class="ltud-action">
      <span v-if="choices.length > 1" class="ltud-message">You can now...</span>
      <button class="ltud-btn ltud-btn--large" v-if="choices.length > 1" @click="decide()">Let The Universe Decide!</button>
    </div>

  </div>

<p>
  <span v-if="isChoosing">The Universe has decided...</span>
  
  <Transition>
    <span class="ltud-chosen" v-if="hasChosen">{{ chosen }}</span>
  </Transition>
</p>


  <button v-if="showReset" @click="reset()">Reset</button>

</template>


<style scoped>

.v-enter-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul {
  max-width: 400px;
  margin: auto;
  margin-top: 42px;
}

li {
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
  span:first-child {
    text-align: left;
    font-family: 'TiltWarp';
    color: var(--secondary-text-color);
    font-size: 26px;
    text-transform: uppercase;
  }
  span + span {
    flex-grow: 2;
    border-bottom: 1px dashed;
    margin: 0 3px 5px 3px;
  }
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
}

.ltud-action {
  margin: 28px 0;
  .ltud-message {
    margin-bottom: 28px;
  }
}

ul + button {
    margin-top: 58px;
  }

.ltud-chosen {
  font-family: 'TiltWarp';
  color: var(--secondary-text-color);
  font-size: min(13vw, 78px);
  text-transform: uppercase;
  line-height: 1em;

  display: block;
  padding-top: 1em;
  padding-bottom: 0.5em;
  text-align: center;
}

  
</style>