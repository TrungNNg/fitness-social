<script setup lang="ts">
import {ref} from 'vue';
import router from '@/router';

const username = ref("")
const password = ref("")
const has_error = ref(false)

const user = ref({})


//console.log(session.user)

function submit() {
    if (username.value === "" || password.value === ""){
        has_error.value = true
        return
    }

    fetch(import.meta.env.VITE_API_ROOT + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    .then(res => {
        if (res.status == 200) {
            user.value = res.json()
            router.push('profile')
        } else {
            has_error.value = true
        }
    })
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
        <div v-if="has_error" class="has-text-danger">ERROR (wrong username or password)</div>

        <br/>
        <br/>
        <a href="">forgot password?</a>
    </div>
</template>
