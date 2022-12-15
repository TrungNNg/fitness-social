<script setup lang="ts">
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    import session,{getUser, loginUser} from '../stores/session';
    import post_list, {getPosts} from '../stores/post'
    import Exercise from '../components/Exercise.vue'

    import myFetch from "@/fetch/fetch";
    
    const route = useRoute();
    const task_name = ref('')

    /*
    loginUser('Bob','bob123').then(x => {
        if (x._id === ''){
            console.log('no user')
        } else {
            //console.log('correct username and password')
            console.log('success', x)
            session.user = x
            console.log('session inside then',session.user)
        }
    })*/

    function foo(){
        console.log(task_name.value)
    }

</script>

<template>

      <!-- Final Start Block -->
      <div style="color:red">Search User name, it will display all post of match user </div>
      <input class="input" type="text" v-model="task_name" v-on:input="foo">

      <div style="color:red"> All post from search users </div>
      <div> TODO : create a block to display all exercise </div> 
      <!-- Final End Block -->

    <button @click="foo">CLICK HERE</button>
</template>