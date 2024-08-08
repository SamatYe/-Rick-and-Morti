
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <footer>
  <div
    class="text-white text-xs sm:text-sm md:text-base lg:text-sm font-medium text-zinc-400"
    style="background-color: rgb(32, 35, 41)"
  >
    <div class="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
      <router-link class="mt-4" to="/characters">CHARACTERS: 826</router-link>
      <router-link class="mt-4" to="/location">LOCATIONS: 126</router-link>
      <router-link class="mt-4" to="/episode">EPISODES: 51</router-link>
    </div>

    <div class="flex items-center justify-center py-4 cursor-pointer">
      <span class="text-center">SERVER STATUS</span>
      <div class="bg-green-500 h-2 w-2 rounded-full ml-2"></div>
    </div>
  </div>
</footer>

 
</template>
