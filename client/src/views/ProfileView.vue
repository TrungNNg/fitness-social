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

  //session.user = {username:"Bob", index:0}

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

</script>

<template> 
    <div class="title" v-if="session.user != null">Wellcome {{session.user.username}}</div>
    <section class="section m-auto">
      <div class="columns is-centered">
        <div class="column">
          <nav class="panel is-success">
            <div class="panel-heading">current workout list</div> 
              <div class="panel-block">
                <div class="block m-auto">
                  <div class="field is-grouped">
                  <div class="control">
                    <input class="input is-success" type="text" v-model="task_name"/>
                  </div>
                  <div class="control">
                    <button class="button is-info" @click="addTask()">Add task</button>
                  </div>
                </div>
              </div>
                </div>
            <div v-for="wo in w" :key="wo" class="panel-block">
              <span class="m-auto">{{wo}}</span><button class="button is-success" @click="removeW(wo)">Done</button>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="columns is-centered">
        <div class="column">
          <nav class="panel is-success">
            <p class="panel-heading">recently done list</p>         
            <div v-for="re in r" :key="re" class="panel-block">
              <span class="m-auto">{{re}}</span><button class="button is-danger" @click="removeR(re)">Delete</button>
            </div>
          </nav>
        </div>
      </div>     
    </section>

    <div class="title">Your friend's recently done exercise.</div>
    <section class="section">
      <div class="columns is-centered">
        <div class="column">
          <nav class="panel is-success"  v-for="f in l">
            <p class="panel-heading">{{f}}'s recently done</p>         
            <p v-for="fre in friendRecently(f)" class="panel-block">{{fre}}</p>
          </nav>
        </div>
      </div>     
    </section>
</template>