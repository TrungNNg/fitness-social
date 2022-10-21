<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template> 
    <section class="hero is-medium is-bold">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">
                    The best fitness tracker in the world!
                    </h1>
                    <h2 class="subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quisquam ducimus unde. Quae odit, minima eligendi assumenda porro voluptates et numquam. Vitae debitis voluptatibus deleniti, eum voluptas, quod suscipit doloremque ducimus quibusdam pariatur, accusantium provident. Eos quo et excepturi exercitationem, aspernatur non doloribus quis sit velit animi voluptatum reiciendis porro.
                    </h2>
                </div>
            </div>
        </section>
        
        <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <figure class="image is-4b3">
                            <img src="../assets/gym.jpg" alt="Description">
                        </figure>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <h1 class="title is-2">
                            Be your own Superhero!
                        </h1>
                        <h2 class="subtitle is-4">
                            Start your yourney now.
                        </h2>
                        <br>
                        <p class="has-text-centered">
                            <router-link  to="/login" class="button is-medium is-info is-outlined">
                                Start
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

