<script setup lang="ts">
  import {ref, reactive} from 'vue'
  let task_name = ref('')
  let task_time = ref(0)

  let arr = reactive([
    {
      name:"task 1",
      time: 3
    },
    {
      name:"task 2",
      time: 2
    }
  ])

  // add task
  function AddTask() {
    let obj = {name:task_name.value, time:task_time.value}
    arr.push(obj)
    task_name.value = ''
    task_time.value = 0
  }

  function Remove(a:any) {
    console.log("remove pressed")
    let index = 0
    for (let i = 0; i < arr.length; i++) {
      if (a.name === arr[i].name) {
        index = i
        break
      }
    }
    arr.splice(index, 1)
    console.log(arr)
  }
</script>

<template> 
    <div>DASHBOARD</div>

    <form>
      <p>Add new task</p>
      <label></label>
      <input type="text" v-model="task_name">
      <input type="text" v-model="task_time">
      <button type="button" @click="AddTask">Submit</button>
    </form>

    <p>TASK LIST</p>
    
      <div v-for="a in arr" :key="a.name">
        <span @click="Remove(a)">{{a}}</span>
      </div>
   
</template>