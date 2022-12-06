<script setup lang="ts">
  import {reactive, ref} from 'vue';
  import session from '../stores/session';
  import router from '../router'
  import Exercise from '../components/Exercise.vue'
  import post_list, {getPosts, addPost, addUserPost} from '../stores/post'

  // TODO ref username and user pic from session
  // pass those 2 as prop to exercise components
  // work on add post and remove post
  // deploy

  const task_name = ref("")

  function get_username(userId:string) {
    let res = ""
    session.all_users.forEach(user => {
      if (user._id === userId) {
        //console.log('MATCH in get user id', user._id, user.username)
        res = user.username
      }
    });
    return res
  }

  function reloadPost() {
    if (session.user?._id != ''){
      console.log('sesson.user in reload post', session.user)
      getPosts(session.user!._id)
        .then(() => {
          session.user?.friends.forEach(friend => addPost(friend))
        })
    }
  }

  reloadPost()


  // add post to DB, reload with page with new data
  function submit() {
    if (task_name.value === "") {
      return
    }
    addUserPost(session.user!._id, "image url", task_name.value)
      .then(() => {
        task_name.value = ""
        reloadPost()
      })
  }

  // use the id to fetch all post from current user

  // user the id in user's friends list to fetch all post

  // add to current state post

  // display all post


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

    <div class="title" v-if="(session.user != null)">Wellcome {{session.user.username}} !!!</div>
    <div class="section">
      <div class="subtitle">Add caption for your post and hit submit, it will save to DB
        and reload page. The user can only delete his/her own post, deletion will also remove
        post from database
      </div>
      <div style="color:red">All image is the same because they are from the same API, however
        all post are separate with different data. Try to add a caption for a post, it will be 
        saved to DB for current user.
      </div>
      <input class="input" type="text" v-model="task_name">
      <div class="block">
        <button class="button is-info" @click="submit">Submit Post</button>
      </div>
      <div class="subtitle">Here are your and your friend's activity</div>
      <!---
      <div style="color:red">If you delete a post it will go to Recently Done activities list.</div>
      --->  
      <div v-for="post in post_list" :key="post._id">
        <Exercise :post="post" :username="get_username(post.userId)" />
      </div>
    </div>
          

    <!---
    <div class="section">
      <div class="subtitle">Your Recently Done Activity</div>
      <div style="color:red">If you delete a post it will disapear</div>
      <div v-for="re in recently_list" :key="re.caption">
        <Exercise :post=re :own="true" @delete="removeR(re.caption)" />
      </div>
    </div>
    --->
    

    <!---
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