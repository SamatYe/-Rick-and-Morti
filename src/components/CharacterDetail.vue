<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Header from '../components/Header.vue'

const route = useRoute()
const character = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${route.params.id}`)
    character.value = data
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <Header />
  <div v-if="character" class="container mx-auto mt-20 p-8 text-white rounded-3xl" style="background-color: rgb(39, 43, 51)">
    <div class="flex flex-col md:flex-row w-4/10 mx-auto bg-gray-700 rounded-xl">
      <div class="flex-shrink-0">
        <img :src="character.image" alt="avatar" class="w-full h-auto rounded-l-lg object-cover md:w-56" />
      </div>
      <div class="p-4 flex flex-col justify-center">
        <section>
          <p class="text-white text-3xl font-bold">{{ character.name }}</p>
          <div class="flex items-center mt-2">
            <span :class="`inline-block w-2 h-2 rounded-full mr-2 ${character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`"></span>
            <p class="text-white text-base font-medium">{{ character.status }} - {{ character.species }}</p>
          </div>
          <div class="mt-4 text-white">
            <p><strong>Тип:</strong> {{ character.type || 'N/A' }}</p>
            <p><strong>Пол:</strong> {{ character.gender }}</p>
            <p><strong>Локация:</strong> {{ character.location.name }}</p>
            <p><strong>Происхождение:</strong> {{ character.origin.name }}</p>
            <p><strong>Создан:</strong> {{ new Date(character.created).toLocaleDateString() }}</p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template> 
