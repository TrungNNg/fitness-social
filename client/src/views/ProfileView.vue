<script setup lang="ts">
  import {reactive, ref} from 'vue';
  import data from '../data/data.json';
  import session from '../stores/session.js';
  import router from '../router'

  let task_name = ref("")
  let u = {}
  let uindex :number
  let l = []
  let w = []
  let r = []

  if (session.user === null) {
    router.push({name:"home"})
  } else {
    u = session.user
    uindex = u?.index
    //console.log(uindex)
    l = data[uindex].friends
    w = reactive(data[uindex].workouts)
    r = reactive(data[uindex].recently)
  }

  function addTask() {
    w.push(task_name.value)
    task_name.value = ""
  }

  function removeW(task_name:String) {
    let index = 0
    for (let i = 0; i < w.length; i++) {
      if (task_name === w[i]) {
        index = i
        break
      }
    }
    w.splice(index, 1)
    r.push(task_name)
  }

  function removeR(task_name:String) {
    let index = 0
    for (let i = 0; i < r.length; i++) {
      if (task_name === r[i]) {
        index = i
        break
      }
    }
    r.splice(index, 1)
  }

</script>

<template> 
    <div>name</div>
    <div>{{u?.username}}</div>
    <div>friends list</div>
    <li v-for="f in l">{{f}}</li>

    <span>------</span>

    <div>workouts list, click when done</div>
    <div v-for="wo in w" :key="wo">
        <span @click="removeW(wo)">{{wo}}</span>
    </div>
    <div>add workout</div>
    <input type="text" v-model="task_name">
    <button @click="addTask()">Add Task</button>

    <span>------</span>

    <div>recently workout list</div>
    <div>click to remove task</div>
    <div v-for="re in r" :key="re">
        <span @click="removeR(re)">{{re}}</span>
    </div>
</template>