<script setup lang="ts">
    import {ref} from 'vue';
    import { RouterLink } from 'vue-router';

    const username = ref("");
    const password = ref("");
    const status   = ref(false);

    // add user's username and password to DB
    function submit() {
        console.log('submit hit')
        fetch(import.meta.env.VITE_API_ROOT + 'auth/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(user => {
            if (user.acknowledged){
                status.value = true;
                username.value = "";
                password.value = "";
            }
            return user
        })
    }
</script>

<template>
    <br/>
    <br/>
    <div class="column is-4 is-offset-4">
        <div class="subtitle">You can sign up for new user, new user will be recorded to database
            . Or you can login with username: "Bob" password: "bob123"
      </div>
        <div class="title">Sign Up</div>

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
        <br/>
        <div v-if="status">Created user with username: {{username}} and password: {{password}}</div>
        <div v-if="status">You can login in <router-link to="/login">Login</router-link></div>
        <br/>
        <br/>
    </div>
</template>
