<script setup lang="ts">
  import {reactive, ref} from 'vue';
  import { RouterLink } from 'vue-router';
  import data from "../data/data.json";
  //import session, {User} from '../stores/session.js';
  import router from '../router'
  import Exercise from '../components/Exercise.vue'

  /*
  const task_name = ref("")
  const current_user = new User()
  const friends_list:string[] = reactive([])
  const workouts_list:{username:string,profile_pic:string,caption:string,like:number}[] = reactive([])
  const recently_list:{username:string,profile_pic:string,caption:string,like:number}[] = reactive([])

  //session.user = {username:"Bob", index:0}
  console.log(workouts_list)
  //console.log(recently_list)

  if (session.user === null) {
    router.push({name:"home"})
  } else {
    current_user.index = session.user.index
    current_user.username = session.user.username
    //console.log(uindex)
    for (let i = 0; i < data[current_user.index].friends.length; i++) {
      friends_list.push( data[current_user.index].friends[i])
    }
    for (let i = 0; i < data[current_user.index].workouts.length; i++) {
      //const l :{username:string,profile_pic:string,caption:string,like:number} = <{username:string,profile_pic:string,caption:string,like:number}> data[current_user.index].workouts[i]
      workouts_list.push(data[current_user.index].workouts[i])
    }
    for (let i = 0; i < data[current_user.index].recently.length; i++) {
      //const l :{username:string,profile_pic:string,caption:string,like:number} = <{username:string,profile_pic:string,caption:string,like:number}> data[current_user.index].workouts[i]
      recently_list.push(data[current_user.index].workouts[i])
    }
  }

  console.log(workouts_list)
  console.log(recently_list)
  console.log(friends_list)
  

  function addTask() {
    workouts_list.push({username:current_user.username,profile_pic:"",caption:task_name.value,like:0})
    task_name.value = ""
  }

  // can not get access to task_name anymore
  // need to get from child component
  function removeW(caption:string) {
    let index = 0
    for (let i = 0; i < workouts_list.length; i++) {
      if (caption === workouts_list[i].caption) {
        index = i
        recently_list.push(workouts_list[i])
        break
      }
    }
    workouts_list.splice(index, 1)
  }

  function removeR(task_name:String) {
    let index = 0
    for (let i = 0; i < recently_list.length; i++) {
      if (task_name === recently_list[i].caption) {
        index = i
        break
      }
    }
    recently_list.splice(index, 1)
  }

  function friendRecently(name:string) {
    console.log("hit")
    let temp = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === name) {
        for (let j = 0; j < data[i].recently.length; j++) {
          temp.push(data[i].recently[j])
        }
        return temp
      }
    }
    return []
  }
  */

</script>

<template> 

    <!---
    <div class="title" v-if="session.user != null">Wellcome {{session.user.username}}</div>
    <router-link to="admin">Click here to go to admin page</router-link> 
    <div class="section">
      <div class="subtitle">Add your caption here</div>
      <div style="color:red">All image is the same because they are from the same API, however
        all post are separate with different data. Try to add a caption for a post.
      </div>
      <input class="input" >
      <div class="block">
        <button class="button is-info" @click="">Submit Post</button>
      </div>
      <div class="subtitle">Here are your current activity</div>
      <div style="color:red">If you delete a post it will go to Recently Done activities list.</div>
      <div v-for="wo in workouts_list" :key="wo.caption">
        <Exercise :post=wo :own="true" @delete="removeW" />
      </div>
    </div>
          

    <div class="section">
      <div class="subtitle">Your Recently Done Activity</div>
      <div style="color:red">If you delete a post it will disapear</div>
      <div v-for="re in recently_list" :key="re.caption">
        <Exercise :post=re :own="true" @delete="removeR(re.caption)" />
      </div>
    </div>

    

    <div class="title">Your friend's recently done exercise.</div>
    <div style="color:red">Again same image because same API, but they are all different post</div>
    <section class="section">
      <div class="columns is-centered">
        <div class="column">
          <nav class="panel is-success"  v-for="f in ">
            <p class="panel-heading">{{f}}'s recently done</p>         
            <div v-for="fre in friendRecently(f)" :key="fre.caption">
              <Exercise :post=fre :own="false" />
            </div>
          </nav>
        </div>
      </div>     
    </section>
    --->
</template>