<script setup lang="ts">
  import {ref, reactive} from 'vue';
  import data from '../data/data.json';
  import session from '../stores/session.js';
  import router from '../router';

  let users = []

  // let say bob is admin
  session.user = {username:"Bob", index:0}

  if (session.user?.username !== "Bob") {
    router.push({name:"home"})
  } else {
    users = reactive(data)
  }

  function remove(name:String) {
    let index = 0
    for (let i = 0; i < users.length; i++) {
      if (name === users[i]) {
        index = i
        break
      }
    }
    users.splice(index, 1)
  }
</script>

<template> 
    <div>Admin Page, let say Bob is admin</div>
    <br/>
    <div>user list</div>
    <div v-for="u in users" @click="remove(u)">click to remove users {{u.username}}</div>
    <br/>
    <div>user also remove in mock database {{data}}</div>
   
</template>