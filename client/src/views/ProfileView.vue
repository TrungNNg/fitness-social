<script setup lang="ts">
   import {reactive, ref} from 'vue'
  let user = reactive({
    name: "user 1",
    age: 24,
  })

  let name_input = ref('')
  let age_input = ref(0)

  function setAge() {
    user.age = age_input.value
  }
  function setName() {
    user.name = name_input.value
  }
</script>

<template> 
    <div>THIS is a protected view</div>
    <p>USER PROFILE</p>
    <p>name {{user.name}}</p>
    <p>age {{user.age}}</p>

    <input type="text" v-model="name_input">
    <button @click="setName">Set Name</button>

    <input type="text" v-model="age_input">
    <button @click="setAge">Set Age</button>
</template>