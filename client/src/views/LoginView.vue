<script setup lang="ts">
import router from '@/router';
import {ref} from 'vue';
import session,{login} from '../stores/session.js';

let username = ref("")
let password = ref("")
let has_error = ref(false)

//console.log(session.user)

function submit() {
    has_error.value = false
    if (username.value === "" || password.value === "") {
        has_error.value = true
        return
    }
    login(username.value, password.value)
    //console.log(session.user)

    //if (session.user != null) {
    router.push({name:"profile"})
        //console.log("router passed")
    //}
}

function hasError() {
    return has_error.value
}

</script>

<template> 
   <br/>
    <br/>
    <div class="column is-4 is-offset-4">
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
        <div v-if="hasError()">ERROR WILL DISPLAY HERE (no account with username, wrong username or password)</div>

        <br/>
        <br/>
        <a href="">forgot password?</a>
    </div>
</template>
