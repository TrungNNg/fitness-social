<script setup lang="ts">
  let arr = [
    {
      name:"task 1",
      time: 3
    },
    {
      name:"task 2",
      time: 2
    }
  ]
</script>

<template> 
    <div>protected view</div>
    <p>DASHBOARD</p>
    <ul v-for="a in arr">
      <li>name: {{a.name}}</li>
      <li>time: {{a.time}}</li>
    </ul>
</template>