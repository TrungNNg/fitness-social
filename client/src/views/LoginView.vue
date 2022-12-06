<script setup lang="ts">
import {ref} from 'vue';
import router from '@/router';
import session, {loginUser, getAllUser, type User} from '../stores/session';

const username = ref("")
const password = ref("")
const has_error = ref(false)

getAllUser().then(() => {
    console.log(session.all_users)
})

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
