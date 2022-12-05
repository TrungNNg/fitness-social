<script setup lang="ts">
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    import {getUser, loginUser} from '../stores/session';
    const route = useRoute();
    
    getUser('638cbcfd7155f42bea703fb2').then(x => console.log(x))

    loginUser('Bob', 'bob123').then(x => console.log(x))

</script>

<template>
    <div>TEST VIEW</div>
</template>