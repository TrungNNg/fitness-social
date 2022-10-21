<script setup lang="ts">
  import {ref,computed} from 'vue'
  const props = defineProps(['post','own'])

  console.log(props.own)

  console.log(props.post)
  console.log(props.post.username)
  console.log(props.post.profile_pic)
  console.log(props.post.caption)
  console.log(props.post.like)
  // data needed
  // username
  // name
  // profile picture
  // caption
  // like number
  const username = ref(props.post.username)
  
  const likes = ref(props.post.like)
  const caption = ref(props.post.caption)

  function geturl() {
    return `/${username.value}_pic.jpg`
  }

  function delete_post() {
    console.log("delete clicked")
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
                        <i v-if="props.own" class="icon has-text-danger is-large fa fa-trash" aria-hidden="true" @click="$emit('delete', props.post.caption)"></i>
                    </div>
                </div>
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://source.unsplash.com/random/640x480" alt="Placeholder image">
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