<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Header from './Header.vue'
import { useRouter } from 'vue-router'

const characters = ref([])
const currentPage = ref(1)
const totalPages = ref(0)
const isLoading = ref(false)
const router = useRouter()

const fetchCharacters = async (page) => {
  isLoading.value = true
  try {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
    characters.value = data.results
    totalPages.value = data.info.pages
  } catch (err) {
    console.error("Error fetching characters:", err)
  } finally {
    isLoading.value = false
  }
}

const goToCharacterDetail = (id) => {
  router.push(`/character/${id}`)
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchCharacters(currentPage.value)
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchCharacters(currentPage.value)
  }
}

onMounted(() => {
  fetchCharacters(currentPage.value)
})
</script>

<template>
  <Header />
  <div class="container mx-auto mt-20 p-8 text-white rounded-3xl" style="background-color: rgb(39, 43, 51)">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="character in characters" 
        :key="character.id" 
        @click="goToCharacterDetail(character.id)" 
        class="bg-gray-700 rounded-xl p-4 cursor-pointer hover:bg-gray-600"
      >
        <img :src="character.image" alt="avatar" class="w-full h-auto rounded-lg object-cover" />
        <p class="text-white text-2xl font-bold mt-4">{{ character.name }}</p>
        
      </div>
    </div>
    <div class="flex justify-between mt-8">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1 || isLoading" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Back
      </button>
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages || isLoading" 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>

