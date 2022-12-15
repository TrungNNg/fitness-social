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