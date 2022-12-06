<script setup lang="ts">
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    import session,{getUser, loginUser} from '../stores/session';
    import post_list, {getPosts} from '../stores/post'
    const route = useRoute();

    loginUser('Bob','bob123').then(x => {
        if (x._id === ''){
            console.log('no user')
        } else {
            //console.log('correct username and password')
            console.log('success', x)
            session.user = x
            console.log('session inside then',session.user)
        }
    })

    function foo(){
        console.log(session.user?._id)
        getPosts(session.user!._id).then(() => {
            post_list.forEach(element => {
                console.log(element)
            });
        })
    }

</script>

<template>
    <button @click="foo">CLICK HERE</button>
</template>