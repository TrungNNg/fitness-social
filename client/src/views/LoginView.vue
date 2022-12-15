<script setup lang="ts">
import {ref, reactive} from 'vue';
import router from '@/router';
import session, {loginUser, getAllUser, searchUser, type User} from '../stores/session';
import Footer from '@/components/Footer.vue';

import Exercise from '../components/Exercise.vue';
import {type Post} from '../stores/post';
import myFetch from '../fetch/fetch'

const username = ref("")
const password = ref("")
const has_error = ref(false)

getAllUser().then(() => {
    console.log(session.all_users)
})

const found = reactive({
    users: [] as User[],
    posts: [] as Post[],
})

const q = ref("")
function foo() {
    //console.log(q.value)
    found.posts.slice(0, found.posts.length)
    searchUser(q.value).then(users => {
        session.searched_users.forEach(element => {
            found.users.splice(0, found.users.length, element as User)
            myFetch('post/' + element._id).then(data => {
                //console.log('data inside get post', data)
                found.posts.push(...data as Post[])
            }) 
        });
    })
}

function submit() {
    if (username.value === "" || password.value === ""){
        has_error.value = true
        return
    }
    
    // if correct username and password, set session.user and redirect to profile page
    loginUser(username.value, password.value)
        .then(x => {
            if (x._id === ''){
                has_error.value = true
            } else {
                //console.log('correct username and password')
                session.user = x
            }
        })
        .then(() => router.push('profile'))
}

</script>

<template> 

    <div style="color:red">All image is the same because they are from the same API, however
        all post are separate with different data. Try to add a caption for a post, it will be 
        saved to DB for current user.
    </div>
    <input class="input" type="text" v-model="q" v-on:input="foo">

    <div v-for="user in found.users"> {{user.username}} </div>

        <div v-for="post in found.posts" :key="post._id">
            <Exercise :post="post" :username="post.userId" />
        </div>

   <br/>
    <br/>
    <div class="column is-4 is-offset-4">
        <div class="subtitle">You can register new user or use username:"Bob" password:"bob123"</div>
        <div class="title">Login</div>
        <div class="field">
            <label class="label">username</label>
            <div class="control">
                <input class="input" type="text" placeholder="username" v-model="username">
            </div>
        </div>

        <div class="field">
            <label class="label">password</label>
            <div class="control">
                <input class="input" type="password" placeholder="password" v-model="password">
            </div>
        </div>
        <div>
            <button class="button is-link" @click="submit">submit</button>
        </div>
        <div v-if="has_error" class="has-text-danger">ERROR (wrong username or password)</div>

        <br/>
        <br/>
        <a href="">forgot password?</a>
    </div>
</template>
