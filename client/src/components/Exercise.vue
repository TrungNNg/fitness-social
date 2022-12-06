<script setup lang="ts">
  import {ref,computed} from 'vue'
  import session from '../stores/session';
  import post_list,{deletePost} from '../stores/post'
  const props = defineProps(['post', 'username'])

  //console.log('in exercise component post',props.post)
  //console.log('in exercise component username and picture', props.username)
  // data needed
  // username
  // name
  // profile picture
  // caption
  // like number
  const post_id = ref(props.post._id)
  const username = ref(props.username)
  const image = ref(props.post.image)
  const likes = ref(props.post.like)
  const caption = ref(props.post.caption)


  function test() {
    if (props.post.userId === session.user?._id) {
        return true
    }
    return false
  }
  
  function geturl() {
    if (username.value == ''){
        return 'Bob_pic.jpg'
    }
    return `/${username.value}_pic.jpg`
  }

  function delete_post() {
    deletePost(post_id.value)
    console.log("delete clicked")
    let index = 0
    for (let i = 0; i < post_list.length; i++) {
      if (props.post._id === post_list[i]._id) {
        index = i
        break
      }
    }
    post_list.splice(index, 1)
  }

</script>

<template> 
  <div class="section columns">
    <div class="column is-5 is-offset-3">
        <div class="card">
                <div class="header">
                    <div class="media">
                        <div class="media-left">
                           
                            <figure class="image is-48x48">
                                <img class="is-rounded" :src="geturl()" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">{{username}}</p>
                        </div>
                        
                        
                        <i v-if="test()" class="icon has-text-danger is-large fa fa-trash" aria-hidden="true" @click="delete_post()"></i>
                        
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/user/c_v_r" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="content">
                        <p>
                            <strong>{{likes}} Likes</strong>
                        </p>
                        {{caption}}
                    </div>
                </div>
                <div class="card-footer">
                    <div class="level">
                        <div class="level-left">
                        <a class="level-item">
                            <span class="icon is-medium"><i class="fa fa-reply"></i></span>
                        </a>
                        <a class="level-item">
                            <span class="icon is-medium"><i class="fa fa-retweet"></i></span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>